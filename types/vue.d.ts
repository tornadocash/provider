import { ProviderInstance } from '.'

declare module 'vuex/types/index' {
  interface Store<S> {
    $provider: ProviderInstance,
  }
}