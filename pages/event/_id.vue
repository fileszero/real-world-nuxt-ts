<template>
  <div>
    <h1>Event # {{ id }}</h1>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component<Index>({
  head() {
    return {
      title: 'Event #' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description', // <-- for our meta description tag
          content: 'What you need to know about event #' + this.id
        }
      ]
    }
  }
})
export default class Index extends Vue {
  get id() {
    return this.$route.params.id
  }
}
</script>
