import {createStore} from 'vuex'
import * as user from "@/store/modules/user.js"
import * as service from "@/store/modules/service.js"
import apiService from "@/services/apiService";
// import apiService from "@/services/apiService";



export default createStore({
  state: {
    categories: [],
    message: '',
    response: {},
    services: {}
  },
  mutations: {
    FETCH_CATS(state, categories, res) {
      state.categories = categories;
      state.response = res;
    },
    FETCH_SERVS(state, services, res) {
      state.services = services;
      state.response = res;
    },
    ADD_CAT(state, cat) {
      state.categories.push(cat)
      
    },
    ADD_SERVICE(state, service){
      state.services.push(service)
    }
    ,
    REMOVE_CAT(state, cat) {
      let cats = []
      state.categories.forEach(el => {
        if (el._id !== cat[0]._id){
          cats.push(el)
        }
      })
      state.categories = cats
    }
  },
  actions: {
    fetchCategories({commit}) {
      return apiService
        .fetchCategories()
        .then(response => {
          commit('FETCH_CATS', response.data["categories"], response.data);
        })
        .catch(err => {
          this.message = err.message;
        })
    },
    fetchBaseServices({commit}) {
      return apiService
        .fetchBaseServices()
        .then(response => {
          commit('FETCH_SERVS', response.data["services"], response.data);
        })
        .catch(err => {
          this.message = err.message;
        })
    },
    addCategory({commit}, cat) {
      apiService.postCat(cat).then(() => {
        commit('ADD_CAT', cat)
      }).catch(err => {
        this.message = err.message;
      })

    },
    addService({commit}, service) {
      apiService.postBaseService(service).then(() => {
        commit('ADD_SERVICE', service)
      }).catch(err => {
        this.message = err.message
      })
    },
    deleteCategory({commit}, id) {
      apiService.removeCat(id)
      .then(res => {
        commit('REMOVE_CAT', res.data.cat)

      })
      .catch(err => console.log(err));
    }

  },
  getters: {
    categoriesCount: state => {
      return state.categories.length;
    }
  },
  modules: {
    user,
    service
  },
});
