<template>
  <div>
    <h1>Events</h1>
  </div>
</template>
<script lang="ts">
/* eslint-disable no-console */
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
@Component<Index>({
  head() {
    return {
      title: 'Event Listing'
    }
  },
  asyncData(context: Context) {
    console.log('index.vue asyncData')
    // https://axios.nuxtjs.org/setup.html#typescript
    return context.$axios
      .get('http://localhost:3000/events')
      .then((response) => {
        console.log('index.vue then')
        return {
          events: response.data
        }
      })
  }
})
export default class Index extends Vue {
  events: any
}
</script>
