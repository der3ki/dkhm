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
      let finalState = {
        from: allNews.from,
        limit: allNews.limit,
        news: allNews.news,
      }
      state.allNews = finalState
    },
    setMoreNews(state,allNews){
      allNews.map(news=>{
        state.allNews.news.push(news)
      })
    }
  },
  getters:{
    allNews: (state) => state.allNews,
    latestNews: (state) => state.latestNews,
    getNewsById: (state) => (id) => {
      return state.allNews.news ? state.allNews.news.find(newDetail => newDetail._id === id) : ''
    }
  },
  actions: {
    async getLatestNews({ commit }) {
      axios
          .get("https://dkhm-api.herokuapp.com/api/news/getLatestNews")
          .then((response) => {
              commit("setLatestNews", response.data.news);
          });
    },
    async getAllNews({commit},params){
      axios
        .get('https://dkhm-api.herokuapp.com/api/news/getAllNews?limit='+params.limit+'&from='+params.from)
        .then((response)=>{
          commit("setNews",response.data)
        })
    },
    async getMoreNews({commit},params){
      axios
        .get('https://dkhm-api.herokuapp.com/api/news/getAllNews?limit='+params.limit+'&from='+params.from)
        .then((response)=>{
          console.log(response.data.news)
          commit("setMoreNews",response.data.news)
        })
    },
  },
  modules: {
  }
})
