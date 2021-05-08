import {createStore} from 'vuex'
import * as user from "@/store/modules/user.js"
import * as service from "@/store/modules/service.js"
// import apiService from "@/services/apiService";



export default createStore({
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
