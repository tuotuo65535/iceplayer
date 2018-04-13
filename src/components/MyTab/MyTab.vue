<!-- Created by chenzy on 2018/4/12. -->
<template>
    <div class="my-tab">
        <span class="tab-link">推荐</span>
        <span class="tab-link">歌手</span>
        <span class="tab-link">排行</span>
        <span class="tab-link">搜索</span>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
@import '~@/common/scss/const.scss';
.my-tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-medium;
    .tab-item {
        flex: 1px;
        text-align: center;
        .tab-link {
            padding-bottom: 5px;
            color: $color-text-l;
        }
    }
}
</style>