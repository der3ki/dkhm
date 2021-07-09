import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latestNews:[],
    allNews:[]
  },
  mutations: {
    setLatestNews(state,lastNews){
      state.latestNews = lastNews
    },
    setNews(state,allNews){
      state.allNews = allNews
    }
  },
  getters:{
    allNews: (state) => state.allNews,
    latestNews: (state) => state.latestNews,
    getNewsById: (state) => (id) => {
      return state.latestNews.find(newDetail => newDetail._id === id)
    }
  },
  actions: {
    getLatestNews({ commit }) {
      axios
          .get("https://dkhm-api.herokuapp.com/api/news/getLatestNews")
          .then((response) => {
              commit("setLatestNews", response.data.news);
          });
    },
    getAllNews({commit},params){
      axios
        .get('https://dkhm-api.herokuapp.com/api/news/getAllNews?limit='+params.limit+'&from='+params.from)
        .then((response)=>{
          commit("setNews",response.data)
        })
    }
  },
  modules: {
  }
})
