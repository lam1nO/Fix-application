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
    services: {},
    currentCategory: {},
    currentService: {}
  },
  mutations: {
    FETCH_CATS(state, categories, res) {
      state.categories = categories;
      state.response = res;
    },
    GET_BASE_SERVICE(state, service) {
      state.currentService = service;
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
    },
    REMOVE_CAT(state, cat) {
      let cats = []
      state.categories.forEach(el => {
        if (el._id !== cat[0]._id){
          cats.push(el)
        }
      })
      state.categories = cats
    },
    GET_CATEGORY(state, cat) {
      console.log(cat);
      state.currentCategory = cat;
    },
    UPDATE_CATEGORY(state, cat) {
      console.log(cat);
    },
    UPDATE_BASE_SERVICE(state, service) {
      console.log(service);
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
    getBaseService({commit}, service_id) {
      return apiService.getBaseService(service_id)
      .then(res => {
        commit('GET_BASE_SERVICE', res.data.service);
      })
      .catch(err => {
        console.log(err);
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
    },
    getCategory({commit}, id) {
      apiService.getCategory(id)
      .then(res => {
        commit('GET_CATEGORY', res.data.category)
      })
      .catch(err => console.log(err))
    },
    updateCategory({commit}, document) {
      apiService.updateCategory(document)
      .then(res => {
        commit('UPDATE_CATEGORY', res.data.category)
      })
      .catch(err => {
        console.log(err)
      })
    },
    updateBaseService({commit}, document)  {
      apiService.updateBaseService(document)
      .then(res => {
        commit('UPDATE_BASE_SERVICE', res.data.service)
      })
      .catch(err => {
        console.log(err)
      })
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
