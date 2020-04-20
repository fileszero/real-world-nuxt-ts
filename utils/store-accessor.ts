/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import EvendsModule from '@/store/Events'
import WeatherModule from '@/store/Weathers'

let eventsStore: EvendsModule
let weatherStore: WeatherModule

// ストアを初期化する関数。rootのstoreを受け取って、モジュールを初期化する

function initialiseStores(store: Store<any>): void {
  // userStoreはここで初期化。
  eventsStore = getModule(EvendsModule, store)
  weatherStore = getModule(WeatherModule, store)
}

export { initialiseStores, eventsStore, weatherStore }
