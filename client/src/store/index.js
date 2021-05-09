import { createStore } from "vuex";
import apiService from "@/services/apiService";

export default createStore({
  state: {
    categories: [],
  },
  mutations: {
    UPDATE_CAT(state, categories) {
      console.log("Mutating cats");
      state.categories = categories;
    },
  },
  actions: {
    fetchCategories({ commit }) {
      return apiService
        .fetchCategories()
        .then((response) => {
          commit("UPDATE_CAT", response.data["categories"]);
        })
        .catch((error) => {
          throw error;
        });
    },
  },
  getters: {
    cats(state) {
      return state.categories;
    },
  },
  modules: {},
});
