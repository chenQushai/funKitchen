<template>
    <view class="content">

        <div class="scan-box">
            <div class="input-box">
                <!--<icon :type="'search'" style="padding-left: 15upx;display: inline-block;float: left;margin-top: 20upx"-->
                      <!--size="14"/>-->
                <input class="uni-input input" confirm-type="search" value="搜索"/>
            </div>
            <button type="primary" class="search-btn" style="background-color: rgb(255,119,47)" size="mini" @click="goSearchPage">搜索</button>
        </div>

        <view class="search-list">
            <view class="item-list" :key="index" v-for="(s,index) in searchList">
                <img class="food-face-img" :src="require('../../static/img/1.jpg')" alt="">
                <view class="food-user-msg">
                    <p class="food-name">柔软的小胖子</p>
                    <p class="user-name">小小星</p>
                    <p class="collect">45645人收藏</p>
                </view>
            </view>
        </view>
        <uLi-load-more status="loading" v-if="loadMore" ></uLi-load-more>
    </view>
</template>

<script>
    import uLiLoadMore from '../../components/uLi-load-more'
    export default {
        name: "index",
        data() {
            return {
                loadMore: false,
                searchList: [
                    {},
                    {},
                    {}
                ]
            }
        },
        methods: {
            onReachBottom() {
                console.log("上拉了")
                this.loadMore = true;

            },
        },
        components: {
            uLiLoadMore
        }
    }
</script>

<style lang="scss" scoped>
    .search-list {
        width: 100%;
        .item-list {
            width: 100%;
            height: 220upx;
            .food-face-img {
                display: block;
                height: 190upx;
                float: left;
                width: 270upx;
            }
            .food-user-msg {
                float: left;
                margin-left: 15upx;
                width: 58%;
                height: 190upx;
                .food-name {
                    width: 100%;
                    font-size: 30upx;
                    font-family: 微软雅黑;
                    margin-top: 15upx;
                    font-weight: 500;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .user-name{
                    margin-top: 30upx;
                    color: rgb(167,167,167);
                    font-family: 微软雅黑;
                    font-size: 25upx;
                }
                .collect {
                    margin-top: 15upx;
                    color: rgb(167,167,167);
                    font-family: 微软雅黑;
                    font-size: 25upx;
                }
            }
        }
    }
</style>