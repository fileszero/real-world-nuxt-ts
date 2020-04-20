<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
    <h1>Forecasts</h1>
    <div v-for="(forecast, idx) in forecasts" :key="`f${idx}`">
      {{ forecast.Date }}
      {{ forecast.TemperatureC }}
      {{ forecast.TemperatureF }}
      {{ forecast.Summary }}
      {{ forecast.Commect }}
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-console */
import { Vue, Component } from 'nuxt-property-decorator'

import EventCard from '@/components/EventCard.vue'

import { eventsStore, weatherStore } from '~/store'
import { WeatherService } from '@/services/WeatherService'

@Component<Index>({
  components: {
    EventCard
  },
  head() {
    return {
      title: 'Event Listing'
    }
  }
})
export default class Index extends Vue {
  get events() {
    // const eventsStore = getModule(EventsModule, this.$store)
    return eventsStore.events
  }

  get forecasts() {
    return weatherStore.forecasts
  }

  async mounted() {
    console.log('index.vue mounted')
    try {
      const res = await this.$msal.getApiToken([process.env.API_SCOPE || ''])
      WeatherService.ApiToken = res.accessToken
      await eventsStore.fetchEvents()
      await weatherStore.fetchForecasts()
    } catch (e) {
      console.log(e)
    }
  }
  // async fetch() {
  //   try {
  //     // const eventsStore = getModule(EventsModule, this.$store)
  //     await eventsStore.fetchEvents()
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
}
</script>
