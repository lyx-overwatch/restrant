const a = {
  state: {
    list: [],
    food: [],
    prices: 0,
    chooseNum: 0
  },
  mutations: {
    listinit: (state, list) => {
      state.list = list
    },
    add_food: (state, food) => {
      state.chooseNum += 1
      state.food.push(food)
    },
    add_price: (state, price) => {
      state.prices += price
    },
    del_food: (state, food) => {
      let arr = state.food
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].split(',')[0] === food) {
          state.chooseNum -= 1
          if (state.chooseNum <= 0) {
            state.chooseNum = 0
          }
          state.food.splice(i, 1)
          break
        }
      }
    },
    del_price: (state, price) => {
      if (state.prices > 0) {
        state.prices -= price
      } else {
        state.prices = 0
      }
    },
    setNum: (state, num) => {
      state.chooseNum = num
    }
  }
}
export default a
