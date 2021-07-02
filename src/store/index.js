import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latestNews:[]
  },
  mutations: {
    setLatestNews(state,lastNews){
      state.latestNews = lastNews
    }
  },
  getters:{
    latestNews: (state) => state.latestNews,
  },
  actions: {
    getLatestNews({ commit }) {
      axios
          .get("https://dkhm-api.herokuapp.com/api/news/getLatestNews")
          .then((response) => {
              commit("setLatestNews", response.data.news);
          });
    },
  },
  modules: {
  }
})
