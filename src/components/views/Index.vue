<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component({
  name: "view-index"
})

export default class Index extends Vue {
  msg: string = 'vue.ts'
}
</script>

<style lang="scss">

</style>
