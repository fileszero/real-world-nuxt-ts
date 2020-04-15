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
@Component<Index>({
  components: {
    EventCard
  },
  head() {
    return {
      title: 'Event Listing'
    }
  },
  async asyncData(context: Context) {
    console.log('index.vue asyncData')
    // https://axios.nuxtjs.org/setup.html#typescript
    try {
      const response = await context.$axios.get('http://localhost:3000/events')
      console.log('index.vue then')
      return {
        events: response.data
      }
    } catch (e) {
      context.error({
        statusCode: 503,
        message: 'unable to fetch this events at this time.please try again.'
      })
    }
  }
})
export default class Index extends Vue {
  events: any
}
</script>
