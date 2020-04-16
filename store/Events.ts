import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { EventService, Event } from '@/services/EventService'

// https://github.com/championswimmer/vuex-module-decorators#using-the-decorators-with-serversiderender
@Module({
  name: 'Events', // For Nuxt usage you should match the filename and namespace of your module
  namespaced: true,
  stateFactory: true
})
export default class EventsModule extends VuexModule {
  events: Event[] = []
  event: Event = {} as Event

  @Mutation
  SET_EVENTS(events: Event[]) {
    this.events = events
  }

  @Mutation
  SET_EVENT(event: Event) {
    this.event = event
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

  @Action
  async fetchEvent(id: string | number) {
    console.log('fetchEvent')
    try {
      const event = await EventService.getEvent(id)
      this.SET_EVENT(event)
    } catch (e) {
      console.log('fetchEvent error :' + e)
    }
  }
}
