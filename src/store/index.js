import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    latestNews:[],
    allNews:[],
    factions:{},
    background:{
      broken_realms:[],
      background:[],
      dkhm_coffe:[]
    },
    team:{},
    armies:[]
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
    },
    setFactions(state,factions){
      state.factions = factions
    },
    setBackground(state,allBackground){
      state.background.background = allBackground
    },
    setBrokenRealms(state,allBrokenRealms){
      state.background.broken_realms = allBrokenRealms
    },
    setDkhmCoffe(state,allDkhmCoffe){
      state.background.dkhm_coffe = allDkhmCoffe
    },
    setTeam(state,team){
      state.team = team
    },
    setArmies(state,armies){
      state.armies = armies.armies
    }
  },
  getters:{
    allNews: (state) => state.allNews,
    allFactions: (state) => state.factions,
    latestNews: (state) => state.latestNews,
    getNewsById: (state) => (id) => {
      return state.allNews.news ? state.allNews.news.find(newDetail => newDetail._id === id) : ''
    },
    getFactionByAlliance: (state) => (name) => {
      return  state.factions.factions ? state.factions.factions.filter(faction =>faction.grandAlliance.toLowerCase() === name): ''
    },
    getFactionByName: (state) => (url)=>{
      return state.factions.factions ? state.factions.factions.find(faction => faction.url === url): ''
    },
    getBackground : (state) => state.background.background,
    getBrokenRealms : (state) => state.background.broken_realms,
    getDkhmCoffe: (state) => state.background.dkhm_coffe,
    getTeam: (state) => state.team,
    getArmies: (state) => state.armies 
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
          commit("setMoreNews",response.data.news)
        })
    },
    async getAllFactions({commit}){
      axios
        .get('https://dkhm-api.herokuapp.com/api/factions')
        .then((response)=>{
          commit("setFactions",response.data)
        })
    },
    async getAllBackground({commit}){
      axios
        .get('https://dkhm-api.herokuapp.com/api/background/?gender=Trasfondo')
        .then((response)=>{
          commit("setBackground",response.data.background)
        })
    },
    async getAllBrokenRealms({commit}){
      axios
        .get('https://dkhm-api.herokuapp.com/api/background/?gender=Broken_Realms')
        .then((response)=>{
          commit("setBrokenRealms",response.data.background)
        })
    },
    async getAllDkhmCoffe({commit}){
      axios
        .get('https://dkhm-api.herokuapp.com/api/background/?gender=Podcast')
        .then((response)=>{
          commit("setDkhmCoffe",response.data.background)
        })
    },
    async getTeam({ commit }) {
      axios
          .get("https://dkhm-api.herokuapp.com/api/team/")
          .then((response) => {
              commit("setTeam", response.data.team[0]);
          });
    },
    async getArmies({ commit }) {
      axios
          .get("https://dkhm-api.herokuapp.com/api/armies/getArmies")
          .then((response) => {
              commit("setArmies", response.data);
          });
    }
  },
  modules: {
  }
})
