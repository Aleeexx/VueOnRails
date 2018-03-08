import axios from 'axios'

const state = {
  products: []
}

const mutations = {
  updateCampaigns: (state, campaigns) => {
    state.products = campaigns
  },
  update: (state, persistedCampaign) => {
    var indexCampaign = state.products.findIndex(campaign => campaign.id === persistedCampaign.id)
    state.products.splice(indexCampaign, 1, persistedCampaign)
  },
  create: (state, persistedCampaign) => {
    state.products.push(persistedCampaign)
  },
  delete: (state, deleteCampaign) => {
    var indexCampaign = state.products.findIndex(campaign => campaign.id === deleteCampaign.id)
    state.products.splice(indexCampaign, 1)
  }
}

const actions = {
  updateCampaigns: (context, campaigns) => {
    axios.get('/products.json')
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  update: (context, transientCampaign) => {
    axios.get('/products.json')
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  create: (context, transientCampaign) => {
    axios.get('/products.json')
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error)
      })
    },
  delete: (context, campaign) => {
    axios.get('/products.json')
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}

const getters = {
  getCampaign: (state) => (id) => {
    return state.products.find(campaign => campaign.id === id)
  },
  getCampaigns: (state) => {
    return state.products
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
