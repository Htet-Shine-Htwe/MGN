import { ReadingStyleType, HeaderVisibleType, ReadingDirectionType, ImageFitType, UserReadSetting, ProgressBarType, BackgroundColorType } from "./types";

export const ReadingDirectionData: Record<string, ReadingDirectionType> = {
    LTR: {
        label: "Left to Right",
        value: "ltr",
        iconName: "PanelLeftOpen",
    },
    RTL: {
        label: "Right to Left",
        value: "rtl",
        iconName: "PanelRightOpen",
    },
};

export const ProgressBarData : Record<string, ProgressBarType> = {
    Hidden : {
        label: "No Progress",
        value: "hidden",
        iconName: "EyeOff",
    },
    Bar : {
        label: "Progress Bar",
        value: "sticky",
        iconName: "Minus",
    },
    LighterEffect:{
        label: "Light Effect",
        value: "lighter-effect",
        iconName: "Rainbow",
    }
}

export const ReadingStyleData: Record<string, ReadingStyleType> = {
    DoublePage: {
        label: "Double Page",
        value: "double-page",
        iconName: "BookOpen",
    },
    SinglePage: {
        label: "Single Page",
        value: "single-page",
        iconName: "Scroll",
    },
    LongStrip: {
        label: "Long Strip",
        value: "long-strip",
        iconName: "Scroll",
    },
};

export const HeaderVisibleData: Record<string, HeaderVisibleType> = {
    Sticky: {
        label: "Header Sticky",
        value: "top-0",
        iconName: "Layers2",
    },
    Hidden: {
        label: "No Header   ",
        value: "-top-40 hidden",
        iconName: "SendToBack",
    },
};


export const ImageFitData : Record<string, ImageFitType> = {
    Contain: {
        label: "Image-Fit: Contain",
        value: "object-contain h-screen md:max-h-screen md:w-auto",
        iconName: "ImageMinus", 
    },
    Cover: {
        label: "Image-Fit: Cover",
        value: "object-cover w-full",
        iconName: "RotateCwSquare",
    },
    Fill: {
        label: "Image-Fit: Fill",
        value: "object-fill",
        iconName:"GalleryThumbnails"
    }
}

export const BackgroundColorData : Record<string, BackgroundColorType> = {
    Theme: {
        label: "Theme",
        value: "bg-slate-700",
        iconName: "Palette",
    },
    White: {
        label: "White",
        value: "bg-white",
        iconName: "Palette",
    },
    Black: {
        label: "Black",
        value: "bg-black",
        iconName: "Palette",
    },
};


// Initial state
export const initialState  :UserReadSetting = {
    currentId : "",
    currentPage: 1,
    totalPages : 1,
    currentChapter: 1,
    totalChapters : [],
    showPanel: false,
    modalBox:false,
    readingStyle: ReadingStyleData["SinglePage"],
    headerVisible: HeaderVisibleData["Sticky"],
    readingDirection: ReadingDirectionData["LTR"],
    imageFit: ImageFitData["Contain"],
    progressBar: ProgressBarData["Bar"],
    backgroundColor: BackgroundColorData["Theme"],
    serverResponse : null,
    nextUrl : "",
    prevUrl : "",
    disablePrev : false,
    disableNext : false,
    redirectNow : null,
};

export const toggleActionCollection = {
    readingStyle: ReadingStyleData,
    readingDirection: ReadingDirectionData,
    headerVisible: HeaderVisibleData,
    imageFit: ImageFitData,
    progressBar : ProgressBarData,
    backgroundColor : BackgroundColorData,
}

export type ToggleActionCollectionType = typeof toggleActionCollection;

export type SettingActionKey = keyof typeof toggleActionCollection;

export const toggleActionCollectionKeys = Object.keys(toggleActionCollection).reduce((acc, key) => {
    acc[key as SettingActionKey] = key;
    return acc;
}, {} as Record<SettingActionKey, string>);
