<template>
  <div :class="prefixCls" ref="homeIndex">
    <!-- 首页 -->
    <div :class="{'unscrollable':showAddrFlag, 'showSelectStorePopup':showSelectStore||showSelectPopup}">
      <!-- header -->
      <div :class="`${prefixCls}-header`">
        <div @click="showAddress" :class="`${prefixCls}-header__title`">
          <van-icon name="location-o" />
          <h3 class="text-overflow">{{address}}</h3>
          <span class="triangle"></span>
        </div>
        <!-- search -->
        <van-sticky>
          <div :class="`${prefixCls}-header__search`">
            <div @click="goToSearch">
              <van-icon name="search" />
              <span>搜索饿了么商家、商品名称</span>
            </div>
          </div>
        </van-sticky>
      </div>
      <!-- 没有地址时显示 -->
      <div v-if="!addrFlag" class="noaddress box">
        <img src="../static/imgs/home/noAddress.gif" alt />
        <p>输入地址后才能订餐哦！</p>
        <button @click="showAddress" class="v-button v-button--success v-button--normal">手动选择地址</button>
      </div>

      <!-- 获取到地址 -->
      <div v-else>
        <!-- swipe -->
        <div :class="`${prefixCls}-swipe`">
          <van-swipe indicator-color="yellow" :autoplay="6000">
            <van-swipe-item  v-for="swipeItem in 2" :key="swipeItem">
              <div :class="`${prefixCls}-swipe-list active`">
                <van-grid :column-num="5" v-for="gridItem in 10" :key="gridItem">
                  <van-grid-item :class="`${prefixCls}-swipe-list__item`" use-slot>
                    <img src="../static/imgs/home/1.webp" />
                    <p>外卖</p>
                  </van-grid-item>
                </van-grid>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- handle -->
        <div :class="`${prefixCls}-handle`">
          <div :class="`${prefixCls}-handle-content`">
            <div :class="`${prefixCls}-handle-content__desc`">
              <p>品质套餐</p>
              <p class="font-small">搭配齐全吃得好</p>
              <p>
                立即抢购
                <van-icon name="arrow" />
              </p>
            </div>
            <div :class="`${prefixCls}-handle-content__img`">
              <img src="../static/imgs/home/2.webp" alt />
            </div>
          </div>
          <div v-if="user" :class="`${prefixCls}-handle-wrap`">
            <van-icon name="vip-card" />
            <p class="bold">超级会员</p>
            <span>·</span>
            <p class="font-sm">每月领20元红包</p>
            <span class="font-sm span-right" @click="goToSvip">
              立即开通
              <van-icon class="font-sm arrow-right" name="arrow" />
            </span>
          </div>
        </div>
        <!-- shop-list -->
        <div :class="`${prefixCls}-shop`">
          <div :class="`${prefixCls}-shop-recommend text--center`">
            <p>推荐商家</p>
          </div>
          <!-- 筛选tabbar -->
          <div :class="`${prefixCls}-shop-nav text--center`">
            <van-tabbar :fixed="false" active-color="#333" v-model="navbarActive">
              <van-tabbar-item>
                <van-dropdown-menu>
                  <van-dropdown-item @open="showSelectPopup=true" @close="showSelectPopup=false" v-model="recommendShopSelect" :options="recommShopNavOption" />
                </van-dropdown-menu>
              </van-tabbar-item>
              <van-tabbar-item>距离最近</van-tabbar-item>
              <van-tabbar-item>品质联盟</van-tabbar-item>
              <div class="selectStore">
                <van-dropdown-menu class="selectStore-dropDown-menu">
                  <van-dropdown-item title="筛选" ref="item" @open="showSelectStore=true" @close="showSelectStore=false">
                    <div class="selectStore-extend" v-if="showSelectStore">
                      <div class="selectStore-extend__content">
                        <p class="title">商家服务（可多选）</p>
                        <div class="content">
                          <van-row>
                            <van-col span="8" v-for="(item, index) in servicesList" :key="index">
                              <div :class="item.checked ? 'perSpend-item__active' : null">
                                <label :for="item.name">
                                  <img :src="item.src" />{{item.text}}
                                  <input :id="item.name" type="checkbox" v-model="item.checked">
                                </label>
                              </div>
                            </van-col>
                          </van-row>
                        </div>
                        <p class="title">优惠活动（单选）</p>
                        <div class="content">
                          <van-row>
                            <van-col span="8" v-for="(item, index) in preferentialAtvList" :key="index">
                              <div @click="preferentialActive=index" :class="preferentialActive===index ? 'perSpend-item__active' : null">
                                <label :for="item">{{item}}
                                  <input type="radio" name="preferential" :id="item">
                                </label>
                              </div>
                            </van-col>
                          </van-row>
                        </div>
                        <p class="title">人均消费</p>
                        <div class="content">
                          <van-row>
                            <van-col span="8" v-for="(item, index) in perSpendList" :key="index">
                              <div @click="perSpendActive=index" :class="perSpendActive===index ? 'perSpend-item__active' : null">
                                <label :for="item.text">{{item.text}}
                                  <input type="radio" v-model="perSpendListChecked" :value="item.checked" name="preSpend" :id="item.text" />
                                </label>
                              </div>
                            </van-col>
                          </van-row>
                        </div>
                      </div>
                      <div class="btnBox">
                        <button @click="clearSelect" class="clear box">清空</button>
                        <van-button block type="info" @click="getSelectResult=true">确认</van-button>
                      </div>
                    </div>
                  </van-dropdown-item>
                </van-dropdown-menu>
              </div>
            </van-tabbar>
          </div>
          <!-- 未登录 -->
          <div v-if="!user" :class="`${prefixCls}-noshoplist`">
            <img src="../static/imgs/home/toLogin.png" alt />
            <p class="noresult">没有结果</p>
            <p class="info">登录后查看更多商家</p>
            <button @click="login" class="v-button v-button--success v-button--normal">登录</button>
          </div>
          <!-- 登录了且请求到商家数据 -->
          <div v-else-if="user&&stores.length" :class="`${prefixCls}-shop-list`" ref="stores">
            <section @click.stop="getFood(item._id)" v-for="(item, index) in stores" :key="index" :class="`${prefixCls}-shop-list__item`">
              <div class="img">
                <van-tag round type="danger" :class="foods[index].count===0 ? 'display-none' : ''">{{ foods[index].count }}</van-tag>
                <img src="../static/imgs/home/shop1.webp" alt />
              </div>
              <div class="content">
                <div class="shop-title">
                  <p class="text-overflow">
                    <span class="isBrand" v-if="item.isBrand">品牌</span>
                    {{ item.name }}
                  </p>
                  <van-cell @click.stop="showPopup">□···</van-cell>
                  <van-popup
                    @click.stop="showPopup"
                    @click-overlay="getFoodFlag=false"
                    @closed="getFoodFlag=true"
                    v-model="showDislike"
                    :lock-scroll="false"
                    :close-on-popstate="true"
                  >不喜欢
                  </van-popup>
                </div>
                <div class="rate">
                  <van-rate :size="10" v-model="rate" readonly />
                  <span class="rate">{{rate}}</span>
                  <span class="order">月售{{order}}单</span>
                  <span
                    v-if="item.isFNSpecialDelivery"
                    class="float--right isFNSpecialDelivery"
                  >蜂鸟专送</span>
                </div>
                <p v-if="item.isSend" class="send">
                  <span class="sendBasePrice">￥{{ item.sendBasePrice }}起送</span>
                  <span v-if="item.sendPrice">配送费￥{{ item.sendPrice }}</span>
                  <span v-else>免配送费</span>
                  <span class="float--right">{{ distance }}km | {{ time }}分钟</span>
                </p>
                <div class="description">
                  <div v-if="item.keyWord" class="keyword">
                    <span
                      v-for="(keyWordItem, idx) in item.keyWord"
                      :key="idx"
                      class="keyword"
                    >{{keyWordItem}}</span>
                  </div>
                  <!-- <span v-else>其他快餐</span> -->
                  <!-- <span v-if="item.selfTake">支持自取</span> -->
                  <span v-if="item.isPerfect" class="isPerfect">
                    <img src="../static/imgs/home/isPerfect.webp" alt />
                    口碑人气好店
                  </span>
                </div>
                <div class="activities" v-if="item.activities">
                  <!-- <section> -->
                    <!-- n个活动（大于2个时显示） -->
                    <div
                      v-if="showActivitiesNumber(item)"
                      class="activities__tips float--right"
                      @click.stop="toggleShowAllActivities(item)"
                    >
                      <span class="atvnumber">{{ item.activities.length }}个活动</span>
                      <span :class="{'triangle': true, 'toUp': item.showAllActivities}"></span>
                    </div>
                    <!-- 活动内容 -->
                    <div class="activities__content">
                      <!-- item.activities -->
                      <p
                        v-for="(atvItem, idx) in item.activities"
                        :key="idx"
                        :class="{'text-overflow': true, 'display-none': hiddenMoreActivities(item, idx)}"
                      >
                        <span v-if="!atvItem.iconName">保</span>
                        <span
                          v-else
                          :style="{'background-color': '#' + atvItem.iconSingleBg}"
                        >{{ atvItem.iconSingleName }}</span>
                        {{ atvItem.name }}
                      </p>
                    </div>
                  <!-- </section> -->
                </div>
              </div>
            </section>
          </div>
          <!-- 登录了未能请求到商家数据 -->
          <div v-else :class="`${prefixCls}-noStores text--center`">
            <img src="../static/imgs/home/noStores.gif" alt="">
            <p class="info-nostores">附近没有外卖商家</p>
            <p class="info">饿了么正在以光速来到你身边</p>
          </div>
          <!-- 已经加载了所有商家 -->
          <div v-if="noMoreStores && stores.length" :class="`${prefixCls}-noMoreStore box`">
            <p class="text--center">更多商家接入中，敬请期待~</p>
          </div>
        </div>
        <!-- goTop -->
        <transition name="goTop-fade">
          <div v-if="goTopFlag" id="goTop" :class="`${prefixCls}-goTop`" @click="goTop">
            <img src="../static/imgs/home/goTop.svg"/>
          </div>
        </transition>
      </div>
    </div>

    <!-- 选择收货地址 -->
    <!-- 传递showAddrFlag到子组件中，控制组件动画 -->
    <Address :paramsFromhomeToAddr="showAddrFlag" @getAddrObjFromShowAddr="getAddrObjFromShowAddr"></Address>
  </div>
</template>
<script>
const prefixCls = "home-index";

import { mapGetters } from "vuex";
import moment from "moment";
import { getStores } from "../apis";
import Address from "@/components/SelectAddress.vue";
export default {
  data() {
    return {
      prefixCls,
      navbarActive: null, // “推荐商家”nav选中项，默认没有选中
      showSelectPopup: false, // "综合评价"
      preferentialActive: -1, // 选中的“优惠活动”项，用来控制选中项改变样式
      perSpendActive: -1, // 选中的“人均消费”项，用来控制选中项改变样式
      recommendShopSelect: 0, // “综合评价”下拉菜单选中项，默认：综合评价
      showSelectStore: false, // 是否显示“筛选”下拉内容
      showDislike: false, // 是否弹出“不喜欢”
      getFoodFlag: true, // 能否进入“food”页，默认可以，只有点击关闭“不喜欢”弹出层的一瞬不能触发getFood点击事件
      servicesList: [ // “商家服务”列表
        {src: require('../static/imgs/home/fengniao.webp'), name: 'fengniao', text: '蜂鸟专送', checked: false},
        {src: require('../static/imgs/home/isBrand.webp'), name: 'isBrand', text: '品牌商家', checked: false},
        {src: require('../static/imgs/home/newStore.webp'), name: 'newStore', text: '新店', checked: false},
        {src: require('../static/imgs/home/isFoodEnsure.webp'), name: 'isFoodEnsure', text: '食安保', checked: false},
        {src: require('../static/imgs/home/invoice.webp'), name: 'invoice', text: '开发票', checked: false},
      ],
      preferentialAtvList: ['首单立减', '门店新客立减', '满减优惠', '下单返红包', '进店领红包', '配送费优惠', '赠品优惠', '特价商品', '品质联盟红包'], // 优惠活动
      perSpendListChecked: -1,  // 选中的“人均消费”项
      perSpendList: [ // “人均消费”区间集合
        {text: '￥20以下', checked: {20: 0}},
        {text: '￥20-￥40', checked: {40: 20}},
        {text: '￥40-￥60', checked: {60: 40}},
        {text: '￥60-￥80', checked: {80: 60}},
        {text: '￥80-￥100', checked: {100: 80}},
        {text: '￥100以上', checked: {'': 100}},
      ],
      recommShopNavOption: [ // 推荐商家导航选项
        { text: "综合评价", value: 0 },
        { text: "好评优先", value: 1 },
        { text: "销量最高", value: 2 },
        { text: "起送价最低", value: 3 },
        { text: "配送最快", value: 4 },
        { text: "配送费最低", value: 5 },
        { text: "人均从低到高", value: 6 },
        { text: "人均从高到低", value: 7 },
        { text: "通用排序", value: 8 },
      ],
      stores: [], // 所有商家
      rate: 4.8, // 默认评分
      order: 342, // 默认订单数
      distance: 33, // 默认配送距离
      time: 18, // 默认配送时间
      address: "", // 当前地址
      addrFlag: false, // 标识符，是否获取到address
      goTopFlag: false, // 标识符，是否置顶
      showAddrFlag: false, // 标识符，是否显示“选择收货地址”页面
      pageSize: null, // 请求商家数据分页规格，默认为10
      pageIndex: 1, // 请求数据分页页码，默认为1
      services: [], // 商家服务（筛选）
      costFrom: null, // 人均消费，最低价
      costTo: null, // 人均消费，最高价
      ableToGetMoreData: true, // 开关，是否可以请求更多数据
      noMoreStores: false, // 已经请求并加载了所有的商家
      getSelectResult: false, // “筛选”点击确认
      foods: [],
    };
  },
  layout(context) {
    return 'index';
  },
  components: {
    Address
  },
  computed: {
    ...mapGetters([
      "user" // this.$store.getters.user -> this.user
    ])
  },
  watch: {
    getSelectResult(newVal) {
      if (newVal) {
        this.getSelectStoreData();
      }
    },
    stores(newVal) {
      if (newVal && newVal.length) {
        newVal.forEach((item, index) => {
          this.foods.push({id: index, count: 0});
        })
        let storeOrder = this.$store.state.order;
        if (storeOrder.foods && storeOrder.foods.length) {
          storeOrder.foods.forEach((item, index) => {
            let count = 0;
            item.foods.forEach(innerItem => {
              innerItem.forEach(food => {
                count += food.count;
              })
              this.foods[index].count = count;
            })
          });
        }
      }
    },
  },
  methods: {
    // openShopNavDropdown() {
    //   this.showSelectPopup=true;
    //   this.showSelectStore=false
    // },
    showAddress() {  // 显示地址组件
      // 本页面不可滚动（一屏高），以免在地址组件中显示本页面内容，并跳转到地址页
      this.showAddrFlag = true;
    },
    goToSearch() { // 进入search页面
      this.$router.push({
        name: 'search',
        path: '/search',
      });
    },
    goToSvip() { // 进入超级会员页
      this.$router.push({
        name: 'supervip',
        path: '/supervip'
      });
    },
    showPopup() { // 弹出“不喜欢”
      this.showDislike = !this.showDislike;
    },
    scrollGoTop() { // 滚动是否显示“goTop”元素
      if (!this.$refs.stores) return;
      if (this.$refs.homeIndex.scrollTop > this.$refs.stores.offsetTop) {
        this.goTopFlag = true;
      } else {
        this.goTopFlag = false;
      }
    },
    goTop() {
      this.$refs.homeIndex.scrollTop = 0;
    },
    showActivitiesNumber(item) { // 活动数量超过2个，显示“n个活动”，否则不显示
      if (item.activities.length > 2) {
        return true;
      } else {
        return false;
      }
    },
    toggleShowAllActivities(item) { // 切换是否显示所有活动
      item.showAllActivities = !item.showAllActivities;
    },
    hiddenMoreActivities(item, index) { // 隐藏多余2个的商家活动
      if (index > 1 && !item.showAllActivities) {
        return true;
      } else {
        return false;
      }
    },
    login() {  // 跳转到登录页
      this.$router.push("/login");
    },
    getAddrObjFromShowAddr(addr, addrFlag) { // 从“选择收货地址”组件获取到地址数据
      this.showAddrFlag = false; // 不显示“收货地址”组件
      this.addrFlag = addrFlag;
      if (addrFlag) {
        // 如果获取到的地址不为空
        this.address = addr;
      } else {
        this.address = "未能获取地址";
        this.addrFlag = false;
      }
    },
    getStores() { // 发起请求获取商家数据
      const _this = this;
      getStores({
        params: {
          pageSize: _this.pageSize,
          pageIndex: _this.pageIndex,
          services: _this.services.join(','),
          costFrom: _this.costFrom,
          costTo: _this.costTo,
        }
      }).then(
        res => {
          if (res.data.length === 0) { // 如果请求回来的商家数据为空
            if (_this.stores.length !== 0) { // 如果之前能请求回来商家数据（所有商家数据都请求完了）
              _this.noMoreStores = true; // 显示页面底部的提示信息
              return; // 不用再执行接下来的代码了
            } else { // 请求不到数据（当地没有商家 || 没有符合筛选条件的商家）
              return;
            }
          }
          res.data.map(item => {
            // 为每个商家添加一个“显示所有活动”的属性，默认不显示多余的活动
            item.showAllActivities = false;
            if (item.isFoodEnsure) {
              // 把“食安保”加入activities
              item.activities.push({
                name: "该商户食品安全已由国泰产险承担，食品安全有保障"
              });
            }
            return item;
          });
          res.data.forEach(item => { // 将请求回来的数据遍历存入this.stores中
            _this.stores.push(item);
          });
          _this.ableToGetMoreData = true; // 请求完成后打开开关
        },
        err => {
          console.log(err);
          _this.ableToGetMoreData = true;
        }
      )
    },
    loadStores() { // 下拉到底部加载更多
      // 如果下拉到底部&开关打开
      if (window.scrollY + window.outerHeight >= document.body.clientHeight && this.ableToGetMoreData) {
        this.ableToGetMoreData = false; // 关闭开关
        this.pageIndex ++ ; // 页码增加
        this.getStores();
      }
    },
    getSelectStoreData() { // “筛选”确认后请求符合条件的数据
      this.services = [];
      this.pageIndex = 1;
      let count = 0;
      let servicesNotEmpty = this.servicesList.some(item => { // 判断商家服务是否选了
        if (item.checked) {
          return true;
        }
      })
      if (servicesNotEmpty) { // 如果选了商家服务
        this.servicesList.forEach(item => { // 确认选了哪些商家服务
          count ++;
          let servicesItem = item.checked ? count : '0';
          this.services.push(servicesItem);
        });
      }
      this.costTo = Object.keys(this.perSpendListChecked)[0];
      this.costFrom = this.perSpendListChecked[this.costTo];
      this.stores = [];
      this.getStores();
      this.showSelectStore = false; // 收起下拉菜单
      this.getSelectResult = false;
    },
    clearSelect() { // “清除”按钮（筛选）
      this.servicesList.map(item => { // 清除“商家服务”选中状态
        item.checked = false;
        return item;
      })
      this.perSpendListChecked = this.preferentialActive = this.perSpendActive = -1;
    },
    getFood(id) {
      if (this.getFoodFlag) {
        this.$router.push({
          name: 'food',
          params: {
            id,
          },
        });
      }
    },
    closeDislikPopup() { // 如果页面滚动，或点击页面中任意位置，如果“不喜欢”弹出层显示，则关闭
      if (this.showDislike) {
        this.showDislike = false;
      }
    },
  },
  created() {
    let storeUser = this.$store.state.user;
    if (storeUser.address) {  // store中的address不为空
      this.addrFlag = true;
      this.address = storeUser.address;
      this.showAddrFlag = false; // 不显示地址组件
    } else {  // 如果没有地址数据，则跳转到“选择收货地址”
      this.addrFlag = false;
      this.showAddrFlag = true;
      this.address = "未能获取地址";
    }
    // 有用户信息（登陆后）
    if (this.user) {
      // 请求商家数据
      this.getStores();
    }
  },
  mounted() {
    this.$refs.homeIndex.addEventListener("scroll", this.scrollGoTop);
    if (this.user) {
      this.$refs.homeIndex.addEventListener('scroll', this.loadStores);
    }
    ['scroll', 'click'].forEach(item => {
      this.$refs.homeIndex.addEventListener(item, this.closeDislikPopup)
    })
  }
};
</script>
