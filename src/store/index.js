import { compileTemplate } from '@vue/compiler-sfc';
import { createStore, Store, storeKey } from 'vuex'
const axios = require('axios');
const link = 'https://api.jsonstorage.net/v1/json/a540d408-ffbf-4070-8833-eb9f699b86e5/b7f0635e-80a2-4e0a-b278-221002b5c39f'

export default createStore({
  state: {
    views: 0,
  },
  mutations: {
    updateData(state , viewss){
      state.views = viewss;
    }
  },
  actions: {
    async getdata(state) {
      const res = await axios.get(link)
      state.commit('updateData', res.data.data)
    },
  },
  modules: {

  }
})
