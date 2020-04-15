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
      title: 'Event Listing'
    }
  }
})
export default class Index extends Vue {}
</script>
