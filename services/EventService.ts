import axios from 'axios'

export interface EventUser {
  id: string
  name: string
}
export interface Event {
  id: number
  user: EventUser
  category: string
  organizer: string
  title: string
  description: string
  location: string
  date: string
  time: string
  attendees: any[]
}

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/Code-Pop/real-world-nuxt`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

class EventServiceImpl {
  // private static _instance = new EventServiceImpl()
  // // eslint-disable-next-line no-useless-constructor
  // private constructor() {}

  // static get instance() {
  //   return this._instance
  // }

  public async getEvents() {
    const response = await apiClient.get('/events')
    return response.data as Event[]
  }

  public async getEvent(id: number | string) {
    const response = await apiClient.get('/events/' + id)
    const event = response.data as Event
    return event
  }
}

// export const EventService = EventServiceImpl.instance
export const EventService = new EventServiceImpl()
