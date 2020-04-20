import { Plugin } from '@nuxt/types'

import MSALService from '@/services/MSALService'

declare module 'vue/types/vue' {
  interface Vue {
    $msal: MSALService
  }
}

declare module '@nuxt/types' {
  interface Context {
    $msal: MSALService
  }
}
declare module 'vuex/types/index' {
  interface Store<S> {
    $msal: MSALService
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MSALPlugin: Plugin = (context, inject) => {
  inject(
    'msal',
    new MSALService(process.env.CLIENT_ID || '', process.env.TENANT_ID || '')
  )
}

export default MSALPlugin
