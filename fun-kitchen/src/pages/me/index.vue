<template>
    <div class="content">
       <div class="user-content">
           <img class="user-img" :src="userInfo.avatarUrl" alt="">
           <p class="user-name">{{userInfo.nickName}}</p>
       </div>
        <uni-list>
            <uni-list-item  title="收藏"  :thumb="require('../../static/img/collect.png')" :show-arrow="true"></uni-list-item>
            <uni-list-item  title="浏览历史"  :thumb="require('../../static/img/history.png')" :show-arrow="false"></uni-list-item>
        </uni-list>

        <div class="look-history">
            <div class="history-items">
                <img src="../../static/img/ycm.jpg" alt="">
                <p class="item-name">阳春面</p>
            </div>
            <div class="history-items">
                <img src="../../static/img/ycm.jpg" alt="">
                <p class="item-name">阳春面</p>
            </div>
            <div class="history-items">
                <img src="../../static/img/ycm.jpg" alt="">
                <p class="item-name">阳春面</p>
            </div>
        </div>
    </div>
</template>

<script>
    import uniList from '@dcloudio/uni-ui/lib/uni-list/uni-list'
    import uniListItem from '@dcloudio/uni-ui/lib/uni-list-item/uni-list-item'
    export default {
        name: "index",
        data() {
            return {
                userInfo: {}
            }
        },
        created() {
            this.login()
        },
        mounted() {

        },
        methods: {
            login() {
                uni.login({
                    provider: 'weixin',
                    success:  (loginRes) => {
                        console.log(loginRes);
                        uni.getUserInfo({
                            provider: 'weixin',
                            success: (infoRes)  => {
                                this.userInfo = infoRes.userInfo;
                            }
                        });
                    }
                });
            }
        },
        components: {
            uniList,
            uniListItem
        }
    }
</script>

<style  lang="scss" scoped>
    .user-content {
        margin-top: 30upx;
        height: 300upx;
        border-bottom: 1px solid rgb(237,237,237);
        .user-name {
            float: left;
            line-height: 110upx;
            font-family: 微软雅黑;
            font-size: 40upx;
            font-weight: bold;
            margin-left: 50upx;
            width: 500upx;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        .user-img {
            display: block;
            float: left;
            width: 120upx;
            height: 120upx;
            border-radius: 60upx;
            margin-left: 20upx;
        }
    }

    .look-history {
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: left;
        width: 100%;
        margin-top: 30upx;
        .history-items {
            width: 29%;
            height: 350upx;
            margin-right: 25upx;
            margin-bottom: 22upx;
            img {
                width: 100%;
                height: 300upx;
                border-radius: 15upx;
            }
            .item-name {
                font-weight: bold;
                font-size: 28upx;
                text-align: left;
                font-family: 微软雅黑;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>