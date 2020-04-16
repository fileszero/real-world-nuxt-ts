import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { EventService, Event } from '@/services/EventService'

// Stateの型を定義する
export interface EventsState {
  events: Event[]
}

// https://github.com/championswimmer/vuex-module-decorators#using-the-decorators-with-serversiderender
@Module({
  name: 'Events', // For Nuxt usage you should match the filename and namespace of your module
  namespaced: true,
  stateFactory: true
})
export default class EventsModule extends VuexModule implements EventsState {
  public events: Event[] = []

  @Mutation
  SET_EVENTS(events: Event[]) {
    this.events = events
  }

  @Action
  async fetchEvents() {
    console.log('fetchEvents')
    try {
      const events = await EventService.getEvents()
      this.SET_EVENTS(events)
    } catch (e) {
      console.log('fetchEvents error :' + e)
    }
  }
}
