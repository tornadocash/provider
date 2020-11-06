<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        address: {{ getAddress }}
        <br>
        network: {{ getNetwork }}
      </h1>
      <button @click="handleConnectProvider">Connect</button>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('provider', ['getAddress', 'getNetwork']),
  },
  methods: {
    ...mapActions('provider', ['initProvider']),
    handleConnectProvider() {
      this.initProvider({ name: 'metamask', network: 'mainnet' })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 32px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
