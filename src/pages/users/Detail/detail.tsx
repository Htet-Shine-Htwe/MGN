import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useUserAppDispatch, useUserAppSelector } from "@/redux/hooks";
import { selectUserReadSetting } from "@/redux/slices/userReadSetting/selectors";
import { setCurrentPage, setField, toggleValue } from "@/redux/slices/userReadSetting/user-read-setting-slice";
import readingStyleClasses from "@/utilities/read-helper";
import { PageProgressBar } from "./page-progress";
import ImageContainer from "./image-container";
import SettingModal from "@/pages/users/Detail/setting-modals/setting-modal";
import shortcutMapFactory, { shortcutActions } from "@/redux/slices/userReadSetting/short-cuts";
import useKeyboardShortcuts from "@/hooks/useKeyboardShortcuts";
import { handleHorizontalClick, handleVerticalClick } from "@/utilities/read-action";
import { useTemporaryAlert } from "@/hooks/useTemporaryAlert";
import { AlertComponent } from "@/components/ui/alert-component";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import { getRandomInterval } from "@/utilities/util";
import FloatingToggle from "@/components/ui/floating-ball";
import useQuery from "@/hooks/useQuery";
import { useParams } from "react-router-dom";
import { userReadedThisChapter } from "@/redux/slices/userReadSetting/user-read-slice";
import route from "@/utilities/router";
import { userRouteCollection } from "@/routes/data/user_route";

// Utility: prefetch images by creating Image objects
const prefetchImages = (imagePaths: string[]) => {
  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
  });
};

const Detail = () => {
  // Always call hooks unconditionally
  const readSetting = useUserAppSelector(selectUserReadSetting);
  const {mogou,chapter} = useParams();
  const dispatch = useUserAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImages, setCurrentImages] = useState<any[]>([]);
  const { currentPage, totalPages, readingStyle, readingDirection } = readSetting;
  const readStyle = readingStyleClasses(readingStyle.value);

  // Call your query hook (always)
  const { data, isLoading } = useQuery(`/users/mogous/${mogou}/chapters/${chapter}`);

  // Process API data with useMemo
  const formattedImages = useMemo(() => {
    if (!data) return [];
    const id = data?.current_chapter?.mogou_id + "-" + data?.current_chapter.slug;

    if(readSetting.currentId != id){
      dispatch(setField({key:"currentId",value:data?.current_chapter?.mogou_id + "-" + data?.current_chapter.slug}));
      dispatch(setField({key:"currentPage",value:1}));
      dispatch(setField({key:"totalPages",value:1}));
    }

    const nextChapterUrl = data?.next_chapter ? `/read/mogou/${data?.mogou?.slug}/chapters/${data?.next_chapter?.slug}` : route(userRouteCollection.show,{slug:data?.mogou?.slug});
    const prevChapterUrl = data?.prev_chapter ? `/read/mogou/${data?.mogou?.slug}/chapters/${data?.prev_chapter?.slug}` : route(userRouteCollection.show,{slug:data?.mogou?.slug});

    dispatch(setField({key:"prevUrl",value:prevChapterUrl}));
    dispatch(setField({key:"nextUrl",value:nextChapterUrl}));

    return data?.current_chapter?.images;
  }, [data, dispatch, readSetting.currentId]);

  // Determine pagination values
  const max = readStyle.max ?? totalPages;
  const startIndex = max === 100 ? 0 : currentPage - 1;
  const endIndex = Math.min(formattedImages.length, startIndex + max);

  // More hooks that must always be called:
  const shortcutMap = useMemo(() => shortcutMapFactory(dispatch, readSetting), [
    dispatch,
    readSetting,
  ]);
  const shortCutActions = shortcutActions(shortcutMap);
  useKeyboardShortcuts(shortCutActions);
  const { isMobile } = useScreenDetector();
  const { isVisible, message, showAlert } = useTemporaryAlert();

  // Effects: update images and prefetch adjacent images
  useEffect(() => {
    if (formattedImages.length > 0) {
      // Update total pages in the store
      dispatch(setField({ key: "totalPages", value: formattedImages.length }));
      dispatch(setField({ key: "serverResponse", value: data }));
      setCurrentImages(formattedImages.slice(startIndex, endIndex));

      // Prefetch adjacent images
      const nextIndex = endIndex; // immediately after current set
      const prevIndex = Math.max(0, startIndex - max);
      const nextImages = formattedImages
        .slice(nextIndex, nextIndex + max)
        .map((img: any) => img.path);
      const prevImages = formattedImages
        .slice(prevIndex, prevIndex + max)
        .map((img: any) => img.path);

      prefetchImages([...nextImages, ...prevImages]);
    }
  }, [dispatch, formattedImages, startIndex, endIndex, max, data]);
 
  useEffect(()=>{
    data?.current_chapter && setTimeout(()=>{
     dispatch(userReadedThisChapter({mogou_id:data?.current_chapter?.mogou_id,sub_mogou_id:data?.current_chapter?.id})as any);
    }
    ,1000)
  },[data?.current_chapter,dispatch])


  // Effect: mobile-specific alert
  useEffect(() => {
    if (isMobile) {
      const showAlertAtRandomInterval = () => {
        showAlert("Double click at center to toggle panel");
        const interval = getRandomInterval(5, 10);
        setTimeout(showAlertAtRandomInterval, interval);
      };
      showAlert("Double click at center to toggle panel");
      showAlertAtRandomInterval();
    }
  }, [isMobile, showAlert]);

  // Handlers (using useCallback)
  const handleScreenClick = useCallback(
    ({ clientX, clientY, currentTarget }: React.MouseEvent<HTMLDivElement>) => {
      if (readingStyle.value === "long-strip") {
        handleVerticalClick(containerRef, clientY, dispatch, currentPage);
        return;
      }
      handleHorizontalClick(currentTarget, clientX, readingDirection, dispatch);
    },
    [readingStyle.value, readingDirection, dispatch, currentPage]
  );

  const handlePageClick = useCallback(
    (index: number) => {
      dispatch(setCurrentPage({ action: "prefer", index }));
    },
    [dispatch]
  );

  const handleTogglePanel = useCallback(() => {
    dispatch(toggleValue("showPanel"));
  }, [dispatch]);

  // Instead of returning early, conditionally render in the returned JSX.
  return (
    <>
      {(isLoading || !data) ? (
        <div>Loading...</div>
      ) : (
        <>
          <div
            className={`${readSetting.backgroundColor.value} cursor-pointer relative min-h-screen`}
            onClick={handleScreenClick}
          >
            <ImageContainer
              containerRef={containerRef}
              currentImages={currentImages}
            />
            <PageProgressBar
              className={`sticky bottom-[6px] left-0 ${readSetting.progressBar.value}`}
              totalPages={totalPages}
              onClick={handlePageClick}
              type={readSetting.progressBar.value}
            />
          </div>
          <SettingModal isOpen={readSetting.modalBox} shortCuts={shortcutMap} />
          {isVisible && <AlertComponent message={message} />}
          <FloatingToggle
            isActive={readSetting.showPanel}
            onChange={handleTogglePanel}
          />
        </>
      )}
    </>
  );
};

export default Detail;
