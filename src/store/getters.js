const getters = {
  userLogin: state => state.loginIn.userToken,
  managerLogin: state => state.loginIn.managerToken,
  list: state => state.a.list,
  food: state => state.a.food,
  prices: state => state.a.prices,
  chooseNum: state => state.a.chooseNum,
  foodUrl: state => state.detail.imgsrc,
  foodPrices: state => state.detail.prices,
  foodName: state => state.detail.name
}

export default getters
