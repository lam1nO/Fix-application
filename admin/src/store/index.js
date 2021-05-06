import Vue from 'vue'
import Vuex from 'vuex'
import * as user from "@/store/modules/user.js"
import * as service from "@/store/modules/service.js"
// import apiService from "@/services/apiService";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    
  },
  mutations: {
    
  },
  getters: {
    
  },
  modules: {
    user,
    service
  },
});
