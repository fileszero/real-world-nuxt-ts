import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { EventService, Event } from '@/services/EventService'

// https://github.com/championswimmer/vuex-module-decorators#using-the-decorators-with-serversiderender
@Module({
  name: 'EventsModule',
  namespaced: true,
  stateFactory: true
})
export default class EventsModule extends VuexModule {
  events: Event[] = []

  @Mutation
  SET_EVENTS(events: Event[]) {
    this.events = events
  }

  @Action
  async fetchEvents() {
    const events = await EventService.getEvents()
    this.SET_EVENTS(events)
  }
}
