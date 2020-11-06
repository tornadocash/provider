import {
  CLEAR_STATE,
  SET_NETWORK,
  SET_ADDRESS,
  SET_NETWORK_NAME,
  SET_PROVIDER_NAME,
} from './constant'

export default {
  async initProvider({ commit, getters, dispatch }, { name, network }) {
    try {
      commit(SET_PROVIDER_NAME, name)
      commit(SET_NETWORK_NAME, network)

      const address = await this.$provider.initProvider(getters.getProvider)
      commit(SET_ADDRESS, address)

      await dispatch('checkNetworkVersion')
      await dispatch('getBalance', address)
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async checkNetworkVersion({ commit }) {
    try {
      const id = await this.$provider.checkNetworkVersion()
      commit(SET_NETWORK, id)

    } catch (err) {
      throw new Error(err.message)
    }
  },
  async sendRequest(_, params) {
    try {
      const result = await this.$provider.sendRequest(params)
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async batchRequest(_, { txs }) {
    try {
      const result = await this.$provider.batchRequest({ txs })
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async contractRequest(_, params) {
    try {
      const request = await this.$provider.contractRequest(params)
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async getBalance(_, account) {
    try {
      const balance = await this.$provider.getBalance({ address: account })
    } catch (err) {
      throw new Error(err.message)
    }
  },
  clearState({ commit }) {
    try {
      commit(CLEAR_STATE)
    } catch (err) {
      throw new Error(err.message)
    }
  },
  async waitForTxReceipt(_, { txHash }) {
    try {
      const tx = await this.$provider.waitForTxReceipt({ txHash })
    } catch (err) {
      throw new Error(err.message)
    }
  }
}
