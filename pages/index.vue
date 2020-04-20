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
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'

import EventCard from '@/components/EventCard.vue'

import { eventsStore, weatherStore } from '~/store'

@Component<Index>({
  components: {
    EventCard
  },
  head() {
    return {
      title: 'Event Listing'
    }
  },

  async fetch(context: Context) {
    try {
      await eventsStore.fetchEvents()
      await weatherStore.fetchForecasts()
    } catch (e) {
      console.log(e)
      context.error({
        statusCode: 503,
        message: 'unable to fetch this events at this time.please try again.'
      })
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

  mounted() {
    console.log(process.env.CLIENT_ID)
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
