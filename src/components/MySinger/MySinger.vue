<!-- Created by chenzy on 2018/4/27. -->
<!-- 歌手页组件 -->
<template>
    <div class="my-singer" ref="singerRef">
        <my-phone-list ref="listRef" style="" :data="singers"></my-phone-list>
        <router-view></router-view>
    </div>
</template>

<script>
    import MyPhoneList from '@/components/base/MyPhoneList/MyPhoneList'
    import {playlistMixin} from '@/common/js/mixin.js'
    export default {
        mixins: [playlistMixin],
        components: {
            MyPhoneList
        },
        data () {
            return {
                singers: []
            }
        },
        props: {},
        watch: {},
        methods: {
            // 当有迷你播放器时，调整滚动底部距离
            handlePlaylist(playlist) {
                let bottom = playlist.length > 0 ? '60px' : ''
                this.$refs.singerRef.style.bottom = bottom
                this.$refs.listRef.refresh()
            }
        },
        created() {

        },
        mounted() {},
        destroyed() {}
    }
</script>

<style lang="scss" scoped>

</style>