<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script lang="ts">
/* eslint-disable no-console */
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'

import EventCard from '@/components/EventCard.vue'

import { eventsStore } from '@/store'

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
    return eventsStore.events
  }
}
</script>
