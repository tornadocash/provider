import {
  SET_ADDRESS,
  SET_NETWORK,
  SET_NETWORK_NAME,
  SET_PROVIDER_NAME,
} from './constant'

export default {
  [SET_PROVIDER_NAME](state, name) {
    this._vm.$set(state.provider, 'name', name)
  },
  [SET_ADDRESS](state, address) {
    this._vm.$set(state, 'address', address)
  },
  [SET_NETWORK](state, network) {
    this._vm.$set(state, 'network', network)
  },
  [SET_NETWORK_NAME](state, name) {
    this._vm.$set(state.network, 'name', name)
  }
}
