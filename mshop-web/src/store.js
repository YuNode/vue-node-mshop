import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const car = JSON.parse(localStorage.getItem('shopcar') || '[]')

const state = {
  token:'',
  user:{},
  shopcar:car
}

const getters = {
  
}

const mutations = {
  setToken(state,token){
    state.token = token
  },
  setUser(state,user){
    state.user = user
  },
  addShopCar(state,shopcar){
    var flag = false
    state.shopcar.some(item=>{
      if(item.selectedSkuComb.id == shopcar.selectedSkuComb.id){
        item.selectedNum += shopcar.selectedNum
        flag = true
        return true
      }
    })
    if(!flag){
      state.shopcar.push(shopcar)
    }
    //存储到本地
    localStorage.setItem('shopcar',JSON.stringify(state.shopcar))
  }
}

const actions = {
  setToken({commit},token){
    commit('setToken',token)
  },
  setUser({commit},user){
    commit('setUser',user)
  },
  setShopCar({commit},shopcar){
    commit('addShopCar',shopcar)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
