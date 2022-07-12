import UserApi from '../../api/user'
import {
  setItem,
  getItem
} from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem('token', token)
    }
  },
  actions: {
    async login ({ commit }, loginform) {
      const token = await UserApi.login(loginform)
      commit('setToken', token)
      return token
    }
  }
}
