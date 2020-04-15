import { NuxtAxiosInstance } from '@nuxtjs/axios'

// https://typescript.nuxtjs.org/ja/guide/setup.html#%E8%A8%AD%E5%AE%9A

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

export interface Context {
  // ...
  $axios: NuxtAxiosInstance
}
