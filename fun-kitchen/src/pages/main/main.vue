<template>
    <view class="content">
        <div class="scan-box">
            <div class="input-box">
                <!--<icon :type="'search'" style="float: left;padding-top: 15upx" size="13"/>-->
                <icon :type="'search'" style="padding-left: 15upx;display: inline-block;float: left;margin-top: 20upx"
                      size="14"/>
                <input class="uni-input input" confirm-type="search" value="搜索"/>
            </div>
            <button type="primary" class="search-btn" size="mini" @click="goSearchPage">搜索</button>
        </div>

        <div class="navTab">
            <div class="tab" :class="tabActive?'tab-active':''" @click="changeTab(0)">今日推荐</div>
            <div class="tab" :class="!tabActive? 'tab-active':''" @click="changeTab(1)">排行榜</div>
        </div>

        <div class="content-box" v-show="tabActive">
                <div class="menu-recommend">
                    <swiper style="width: 100%;height: 100%" class="swiper" :indicator-active-color="'#FFCE6B'" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="500">
                            <swiper-item :key="index" v-for="(r,index) in recomList">
                                <img :src="r.url" style="object-fit: cover;width: 100%;height: 100%" alt="菜单推荐" @click="goDetail">
                            </swiper-item>
                    </swiper>
                </div>
            <p style="line-height: 40upx;
            font-size: 38upx;font-family: 微软雅黑;
            text-align: center;margin-top: 40upx;
            font-weight: bold">-  今日精选推荐  -</p>

            <div class="food-list" :key="index" v-for="(t,index) in todayRecommendList" @click="goDetail">
                <p class="food-name">韭菜炒肉</p>
                <div class="food-user-msg">
                    <span class="user-name">大海微澜</span>
                    <span class="food-looked-number">165</span>
                    <span class="food-looked iconfont icon-zan" style="font-size: 12px"></span>
                    <span class="food-looked-number">1152</span>
                    <span class="food-looked iconfont icon-check-line"></span>
                </div>

                <img class="food-img" src="../../static/img/1.jpg" alt="">
            </div>
            <uLi-load-more status="loading" v-if="loadMore" ></uLi-load-more>
        </div>


        <div class="content-box" v-show="!tabActive">
            <div class="rank-list" :key="index" v-for="(r,index) in rankList">
                <p class="rank-name">{{r.rankName}}</p>
                <scroll-view class="rank-item-box" scroll-x="true" >
                    <view class="food-item" :key="index" v-for="(it,index)  in r.items" @click="goDetail">
                        <img src="../../static/img/ycm.jpg" alt="">
                        <p class="food-item-name">阳春面</p>
                    </view>
                </scroll-view>
            </div>
        </div>
    </view>
</template>

<script>
    import uLiLoadMore from '../../components/uLi-load-more'
    import { Swiper, SwiperSlide, directive } from 'swiper'
    import 'swiper/css/swiper.css'
    export default {
        data() {
            return {
                tabActive:true,
                loadMore: false,//加载更多
                recomList: [
                    {
                        url: require('../../static/img/1.jpg')
                    },
                    {
                        url: require('../../static/img/2.jpg')
                    },
                    {
                        url: require('../../static/img/3.jpg')
                    }
                ],
                //今日推荐列表
                todayRecommendList: [
                    {},
                    {},
                    {},
                    {}
                ],
                rankList: [
                    {
                        rankName: '热搜榜',
                        content:'A',
                        items: [
                            {},{},{}
                        ]
                    },
                    {
                        rankName: '飙升榜',
                        content:'B'
                    },
                    {
                        rankName: '人气榜',
                        content:'C'
                    },
                    {
                        rankName: '新手榜',
                        content:'C'
                    },
                ]
            }
        },
        methods: {
            changeTab(index) {
                if (index === 0) {
                    this.tabActive = true
                }
                else {
                    this.tabActive = false;
                }
            },
            goDetail() {
                uni.navigateTo({
                    url:'../foodDetail/index'
                })
            },
            goSearchPage() {
                uni.navigateTo({
                    url:'../searchPage/index'
                })
            }
        },

        onReachBottom() {
            console.log("上拉了")
            this.loadMore = true;

        },
        onLoad() {


        },
        mounted() {
        },
        components: {
            uLiLoadMore
        }
    }
</script>

<style scoped lang="scss">
    .navTab {
        width: 100%;
        height: 75upx;
        margin-top: 10upx;
        display: flex;
        flex-direction: row;
        .tab {
            width: 50%;
            height: 100%;
            line-height: 75upx;
            font-size: 20upx;
            border-radius: 15upx;
            color: black;
            text-align: center;
            font-size: 35upx;
            font-family: "微软雅黑";
        }
        .tab-active {
            background-color: black;
            color: rgb(255,255,255);
        }
    }

    .content-box{
        margin-top: 20upx;
        width: 100%;
        .menu-recommend {
            width: 100%;
            height: 210upx;
        }
        //今日推荐
        .food-list {
            margin-top: 50upx;
            width: 100%;
            .food-name {
                width: 100%;
                font-size: 45upx;
                font-family: "微软雅黑";
                font-weight: bold;
            }
            .food-user-msg {
                line-height: 40upx;
                width: 100%;
                margin-top: 30upx;
                height: 35upx;
                overflow: auto;
                .user-name {
                    float: left;
                    color: rgb(159,159,159);
                    font-size: 32upx;
                    font-size: "微软雅黑";
                    font-weight: 500;
                }
                .food-looked {
                    float: right;
                    color: rgb(159,159,159);
                    margin-left: 5upx;
                }
                .food-looked-number{
                    float: right;
                    color: rgb(159,159,159);
                    vertical-align: middle;
                    font-size: 25upx;
                    font-family: "微软雅黑";
                    margin-left: 5upx;
                }
            }

            .food-img {
                display: block;
                width: 100%;
                height: 400upx;
                border-radius: 10upx;
                margin-top: 15upx;
            }
        }

        /*排行榜*/
        .rank-list {
            width: 100%;
            margin-top: 20upx;
            .rank-name {
                line-height: 40upx;
                font-size: 40upx;
                font-family: "微软雅黑";
                font-weight: bold;
            }
            .rank-item-box {
                margin-top: 30upx;
                width: 100%;
                height: 400upx;
                white-space: nowrap;
                .food-item {
                    display: inline-block;
                    width: 39%;
                    height: 100%;
                    margin-right: 25upx;
                    img {
                        width: 100%;
                        height: 350upx;
                        border-radius: 15upx;
                    }
                    .food-item-name {
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
            .rank-item-box ::-webkit-scrollbar{
                width: 0;
                height: 0;
                background-color: transparent;
            }

        }
    }

</style>
