<template>
    <div>
    </div>
</template>

<script>
    import uLiLoadMore from "../../components/uLi-load-more.vue"
    export default {
        name: "index",
        components: {
            uLiLoadMore
        }
    }
</script>

<style lang="scss" scoped>
    .tab-scroll {
        white-space: nowrap;
        .item {
            display: inline-block;
            width: 200px;
        }
    }
</style>