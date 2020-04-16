<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-console */
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
import { EventService } from '@/services/EventService'

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
  async asyncData(context: Context) {
    console.log('index.vue asyncData')
    // https://axios.nuxtjs.org/setup.html#typescript
    try {
      const response = await EventService.getEvent(context.params.id)
      console.log('index.vue then')
      return {
        event: response.data
      }
    } catch (e) {
      context.error({
        statusCode: 503,
        message: 'unable to fetch this event#' + context.params.id
      })
    }
  }
})
export default class Index extends Vue {
  event: any
  get id() {
    return this.$route.params.id
  }
}
</script>
