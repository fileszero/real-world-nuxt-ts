/* eslint-disable no-console */
// https://typescript.nuxtjs.org/cookbook/middlewares.html

import { Middleware } from '@nuxt/types'
import { WeatherService } from '@/services/WeatherService'

const MSALLogin: Middleware = async (context) => {
  // Use context
  console.log('MSALLogin Middleware....')
  if (!context.$msal.isAuthenticated()) {
    context.$msal.login()
  }
  const res = await context.$msal.getApiToken([process.env.API_SCOPE || ''])
  console.log('Set axios Authorization: ' + res.accessToken)
  WeatherService.ApiToken = res.accessToken
}

export default MSALLogin
