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
export default class Index extends Vue {}
</script>
