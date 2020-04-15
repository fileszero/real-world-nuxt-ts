<template>
  <div>
    <h1>Create an Event</h1>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component({
  head() {
    return {
      title: 'Create an Event - Real World Events',
      meta: [
        {
          hid: 'description',
          name: 'description', // <-- for our meta description tag
          content: 'You can create the event in your neighborhood'
        }
      ]
    }
  }
})
export default class Index extends Vue {}
</script>
