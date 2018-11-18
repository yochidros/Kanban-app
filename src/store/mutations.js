
import * as types from './mutation-types'

export default {
  [types.AUTH_LOGIN] (state, payload) {
    throw new Error('AUTH_LOGIN mutation should be implementation')
  },

  [types.FETCH_ALL_TASKLIST] (state, payload) {
    throw new Error('FETCH_ALL_TASKLIST mutation should be implementation')
  },

  [types.ADD_TASK] (state, payload) {
    throw new Error('ADD_TASK mutation should be implementation')
  },

  [types.UPDATE_TASK] (state, payload) {
    throw new Error('UPDATE_TASK mutation should be implementation')
  },

  [types.REMOVE_TASK] (state, payload) {
    throw new Error('REMOVE_TASK mutation should be implementation')
  },

  [types.AUTH_LOGOUT] (state) {
    throw new Error('AUTH_LOGOUT mutation should be implementation')
  }

}
