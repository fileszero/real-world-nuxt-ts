<template>
  <div>
    <h1>Events</h1>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  head() {
    return {
      title: 'Event Listing - Real World Events',
      meta: [
        {
          hid: 'description',
          name: 'description', // <-- for our meta description tag
          content:
            'Where you can find all the events taking place in your neighborhood'
        }
      ]
    }
  }
})
export default class Index extends Vue {}
</script>
