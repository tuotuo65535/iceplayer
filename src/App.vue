<!-- Created by chenzy on 2018/4/11. -->
<template>
    <div id="app">
        <my-header></my-header>
        <my-tab></my-tab>
    </div>
</template>

<script>
    import MyHeader from '@/components/MyHeader/MyHeader';
    import MyTab from '@/components/MyTab/MyTab';
    export default {
        components: {
            MyHeader,
            MyTab
        }
    }
</script>

<style lang="scss" scoped>

</style>