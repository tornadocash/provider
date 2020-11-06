export default {
  getProvider: () => {
    return window.ethereum
  },
  getNetwork: state => {
    return state.network
  },
  getAddress: state => {
    return state.address
  }
}
