// 登录状态store
const loginIn = {
  state: {
    userToken: null,
    managerToken: null
  },
  actions: {
    userLogined: (state, data) => {
      state.userToken = data
      sessionStorage.setItem('userToken', data)
      let mtoken = sessionStorage.getItem('managerToken')
      if (mtoken) {
        sessionStorage.removeItem('managerToken')
      }
    },
    managerLogined: (state, data) => {
      state.managerToken = data
      sessionStorage.setItem('managerToken', data)
      let utoken = sessionStorage.getItem('userToken')
      if (utoken) {
        sessionStorage.removeItem('userToken')
      }
    }
  }
}
export default loginIn
