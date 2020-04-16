import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import EventsModule from '@/store/Events'

// eslint-disable-next-line import/no-mutable-exports
let eventsStore: EventsModule
// let someStore: Something

function initializeStores(store: Store<any>): void {
  eventsStore = getModule(EventsModule, store)
  // someStore = getModule(Something, store)
}

export { initializeStores, eventsStore /*, someStore */ }
