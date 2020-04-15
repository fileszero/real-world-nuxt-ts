import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

class EventService {
  public getEvents() {
    return apiClient.get('/events')
  }

  public getEvent(id: number | string) {
    return apiClient.get('/events/' + id)
  }
}

export default new EventService()
