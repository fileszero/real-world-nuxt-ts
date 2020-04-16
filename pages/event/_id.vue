<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-console */
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import { eventsStore } from '~/store'

@Component<Index>({
  head() {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description', // <-- for our meta description tag
          content: 'What you need to know about ' + this.event.title
        }
      ]
    }
  },
  async fetch(context: Context) {
    console.log('index.vue asyncData')
    // https://axios.nuxtjs.org/setup.html#typescript
    try {
      await eventsStore.fetchEvent(context.params.id)
      console.log('index.vue then')
    } catch (e) {
      context.error({
        statusCode: 503,
        message: 'unable to fetch this event#' + context.params.id
      })
    }
  }
})
export default class Index extends Vue {
  get event() {
    return eventsStore.event
  }

  get id() {
    return this.$route.params.id
  }
}
</script>
