import Vue from 'vue'
import MSALService from '@/services/MSALService'

export type Options = {
  clientId: string
  tenantId: string
}

declare module 'vue/types/vue' {
  // 3. 拡張した Vue を定義します
  interface Vue {
    $msal: MSALService
  }
}

export default class AuthPlugin {
  static install(Vue: any, options: Options): void {
    Vue.prototype.$msal = new MSALService(options.clientId, options.tenantId)
  }
}
