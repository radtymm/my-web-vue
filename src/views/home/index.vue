<template>
    <div id="home">
        <strong>welcome</strong>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { Action } from 'vuex-class'

    @Component
    export default class home extends Vue{

        @Action('test') test!: Function

    }
</script>

<style scoped lang="scss">

</style>
