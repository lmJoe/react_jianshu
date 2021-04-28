import * as constants from './constants';
//将操作常量从contstants中引入过来
export const searchFocus = () => ({
  type:constants.SEARCH_FOCUS,
})
export const searchBlur = () => ({
  type:constants.SEARCH_BLUR,
})