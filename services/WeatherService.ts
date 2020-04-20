/* eslint-disable no-console */
import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://localhost:44372`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export interface WeatherForecast {
  Date: Date | string
  TemperatureC: number
  TemperatureF: number
  Summary: string
  Commect: string
}

class WeatherServiceImpl {
  public set ApiToken(token: string) {
    // eslint-disable-next-line no-console
    const auth = `Bearer ${token}`
    if (apiClient.defaults.headers.common.Authorization !== auth) {
      console.log('set ApiToken ' + token)
      apiClient.defaults.headers.common.Authorization = auth
    }
  }

  public async getWeathers() {
    console.log('getWeathers.....')
    try {
      const res = await apiClient.get('/weatherforecast')
      const items = res.data as WeatherForecast[]
      console.log(JSON.stringify(items))
      return items
    } catch (ex) {
      return []
    }
  }
}

export const WeatherService = new WeatherServiceImpl()
