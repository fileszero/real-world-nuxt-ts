/* eslint-disable no-console */
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { WeatherService, WeatherForecast } from '@/services/WeatherService'

// https://github.com/championswimmer/vuex-module-decorators#using-the-decorators-with-serversiderender
@Module({
  name: 'Weathers', // For Nuxt usage you should match the filename and namespace of your module
  namespaced: true,
  stateFactory: true
})
export default class WeatherModule extends VuexModule {
  forecasts: WeatherForecast[] = []

  @Mutation
  SET_FORECASTS(forecasts: WeatherForecast[]) {
    this.forecasts = forecasts
  }

  @Action
  async fetchForecasts() {
    console.log('fetchForecasts')
    try {
      const vals = await WeatherService.getWeathers()
      this.SET_FORECASTS(vals)
    } catch (e) {
      console.log('fetchForecasts error :' + e)
    }
  }
}
