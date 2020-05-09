// 食品详情页面store
const foodDetail = {
  state: {
    imgsrc: '',
    name: '',
    prices: 0
  },
  mutations: {
    setUrl: (state, url) => {
      state.imgsrc = url
    },
    setName: (state, name) => {
      state.name = name
    },
    setPrices: (state, prices) => {
      state.prices = prices
    }
  }
}
export default foodDetail
