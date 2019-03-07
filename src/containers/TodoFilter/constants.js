/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SHOW_ALL = 'nextblog/TodoList/SHOW_ALL'
export const SHOW_COMPLETED = 'nextblog/TodoList/SHOW_COMPLETED'
export const SHOW_ACTIVE = 'nextblog/TodoList/SHOW_ACTIVE'
export const TOGGLE_TODO = 'nextblog/TodoList/TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'nextblog/TodoList/SET_VISIBILITY_FILTER'
export const ADD_TODO = 'nextblog/TodoList/ADD_TODO'