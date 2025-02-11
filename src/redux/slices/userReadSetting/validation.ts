import { initialState } from "./constants";
import { OptionType, UserReadSetting } from "./types";

const isValidOptionType = (option: any): option is OptionType => {
    return (
      option &&
      typeof option.label === 'string' &&
      typeof option.value === 'string' &&
      (typeof option.iconName === 'undefined' || typeof option.iconName === 'string')
    );
  };
  
  export const validateUserReadSetting = (data: any): UserReadSetting => {
    if (typeof data !== 'object' || data === null) {
      return initialState;
    }
  
    return {
      currentPage: typeof data.currentPage === 'number' ? data.currentPage : initialState.currentPage,
      totalPages: typeof data.totalPages === 'number' ? data.totalPages : initialState.totalPages,
      currentChapter: typeof data.currentChapter === 'number' ? data.currentChapter : initialState.currentChapter,
      totalChapters: Array.isArray(data.totalChapters) ? data.totalChapters : initialState.totalChapters,
      showPanel: typeof data.showPanel === 'boolean' ? data.showPanel : initialState.showPanel,
      modalBox: typeof data.modalBox === 'boolean' ? data.modalBox : initialState.modalBox,
      readingStyle: isValidOptionType(data.readingStyle) ? data.readingStyle : initialState.readingStyle,
      headerVisible: isValidOptionType(data.headerVisible) ? data.headerVisible : initialState.headerVisible,
      readingDirection: isValidOptionType(data.readingDirection) ? data.readingDirection : initialState.readingDirection,
      imageFit: isValidOptionType(data.imageFit) ? data.imageFit : initialState.imageFit,
      progressBar: isValidOptionType(data.progressBar) ? data.progressBar : initialState.progressBar,
      backgroundColor: isValidOptionType(data.backgroundColor) ? data.backgroundColor : initialState.backgroundColor,
    };
  };