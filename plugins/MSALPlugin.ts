// https://typescript.nuxtjs.org/cookbook/plugins.html
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
  if (!process.server) {
    // eslint-disable-next-line no-console
    console.log('inject msal plugin')
    const service = new MSALService(
      process.env.CLIENT_ID || '',
      process.env.TENANT_ID || ''
    )
    context.$msal = service
    inject('msal', service)
    if (!service.isAuthenticated()) {
      // eslint-disable-next-line no-console
      console.log('login with plugin')
      service.login()
    }
  }
}

export default MSALPlugin
