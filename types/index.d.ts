import Web3 from 'web3'

type Address = string

type Params = {
  to: string
  gas: string
  from: string
  data: string
  value: string
  gasPrice: string
}

type RequestParams = {
  method: string
  params?: Params[] | object;
}

type ContractRequestParams = {
  to: string
  gas: string
  from: string
  methodName: string
  data?: string
  value?: number
}

export type TransactionStatus =
  | 'success'
  | 'fail'
  | 'pending'

export interface TransactionReceipt {
  transactionResult: unknown
  status: TransactionStatus
  transactionError?: string
}

type GetBalanceParams = {
  address: string
}

type WaitForTxReceiptParams = {
  txHash: string
}

type BatchRequestParams = {
  txs: Params[]
  callback?: (params: Promise<string>[]) => void
}

type OnListenerParams = {
  method: string
  callback: CallableFunction
}

interface ProviderOptions {
  id?: string,
  rpcUrl?: string,
  rpcCallRetryAttempt?: number,
  blockGasLimit?: number,
}

type ProviderVersions = 'new' | 'old'

type Config = {
  version?: ProviderVersions
}

interface ProviderInstance {
  readonly web3: typeof Web3
  readonly config: ProviderOptions

  initProvider(provider: unknown, config?: Config): Promise<Address>
  sendRequest(params: RequestParams): Promise<TransactionReceipt>
  contractRequest(params: ContractRequestParams): Promise<TransactionReceipt>
  getBalance(params: GetBalanceParams): Promise<number>
  waitForTxReceipt(params: WaitForTxReceiptParams): Promise<TransactionReceipt>
  batchRequest(params: BatchRequestParams): Promise<string[]>
  checkNetworkVersion(): Promise<string>
  getWeb3(rpcUrl: string): Web3
  initWeb3(rpcUrl: string): Web3

  on(params: OnListenerParams): void
}

declare module '@nuxt/vue-app' {
  interface Context {
    $axios: ProviderInstance
  }
  interface NuxtAppOptions {
    $axios: ProviderInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $provider: ProviderInstance
  }
}
