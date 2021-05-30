import { createStore } from "vuex";
import apiService from "@/services/apiService";

export default createStore({
  state: {
    categories: [],
    doctors:[
      {
        name: "Депутатова Наталья Валентиновна",
        img: '@/assets/doctors/dep.jpg',
        desc: "Врач УЗИ, терапевт",
        nick: 'dep',
        experience: "13",
      },
      
      {
        name: "Мухаметзянов Ильшат Раисович",
        img: '@/assets/doctors/muh.jpg',
        desc: "Врач УЗИ, кардиолог",
        experience: "8",
        nick: 'muh'
      },
      
      {
        name: "Зарипова Алина Илсуровна",
        desc: "Невролог",
        img: '@/assets/doctors/zar.jpg',
        nick: 'zar',
        experience: "8",
      },
      
      {
        name: "Троицкий Константин Леонидович",
        desc: "Эндокринолог",
        img: '@/assets/doctors/troic.jpg',
        nick: 'troic',
        experience: "7",
      },
      
    ]
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
    getCats(state) {
      return state.categories;
    },
  },
  modules: {
  },
});
