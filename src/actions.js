import { CHANGE_SEARCH_FIELD } from './constant.js'

//the text parameter is what the user types in, setSearchField is just an object that has the action
export const setSearchField = (text) => ({
type: CHANGE_SEARCH_FIELD,
payload: text
 })