<template>
  <div>
    <h1>Events</h1>
  </div>
</template>
<script lang="ts">
import { Context } from '@nuxt/types'
import { Vue, Component } from 'nuxt-property-decorator'
@Component({
  head() {
    return {
      title: 'Event Listing'
    }
  }
})
export default class Index extends Vue {
  asyncData(context: Context) {
    // https://axios.nuxtjs.org/setup.html#typescript
    context.$axios.get('http://localhost/3000/events').then((response) => {
      return {
        events: response.data
      }
    })
  }
}
</script>
