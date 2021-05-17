import {createStore} from 'vuex'
import * as user from "@/store/modules/user.js"
import * as service from "@/store/modules/service.js"
import apiService from "@/services/apiService";
// import apiService from "@/services/apiService";



export default createStore({
  state: {
    categories: [],
    message: '',
    response: {}
  },
  mutations: {
    FETCH_CATS(state, categories, res) {
      state.categories = categories;
      state.response = res;
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
