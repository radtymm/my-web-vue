<template>
    <el-container>
        <app-main/>
    </el-container>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import { AppMain } from './components'
  import { Action } from 'vuex-class'

  @Component({
    components: {
      AppMain
    }
  })
  export default class Layout extends Vue {

  }
</script>

<style scoped lang="scss">

</style>
