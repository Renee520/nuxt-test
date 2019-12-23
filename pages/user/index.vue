<template>
  <div :class="prefixCls">
    <!-- header -->
    <div :class="`${prefixCls}-header float`" @click="go2Login()">
      <div :class="`${prefixCls}-header__img float--left`">
        <img src="../../assets/imgs/user/logo.png" alt="">
      </div>
      <div :class="`${prefixCls}-header__title float--left`">
        <h3 v-if="!user">登录/注册</h3>
        <h3 class="text-overflow" v-else>{{user.name}}</h3>
        <p>
          <van-icon name="bookmark-o" />
          <span v-if="!user">登陆后享受更多特权</span>
          <span v-else>{{user.mobile}}</span>
        </p>
      </div>
      <div :class="`${prefixCls}-header__arrow`">
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 红包 -->
    <div :class="`${prefixCls}-money flex box`">
      <div class="flex-item text--center">
        <p><img src="../../assets/imgs/user/icon1.jpg" alt=""></p>
        <p class="font-sm">红包</p>
      </div>
      <div class="flex-item text--center">
        <p><img src="../../assets/imgs/user/icon2.jpg" alt=""></p>
        <p class="font-sm">金币</p>
      </div>
    </div>

    <div :class="`${prefixCls}-list`">
      <van-cell-group>
        <van-cell title="我的地址" is-link>
          <div slot="icon">
            <img src="../../assets/imgs/user/icon3.jpg" alt="">
          </div>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell title="金币商城" is-link>
          <div slot="icon">
            <img src="../../assets/imgs/user/icon4.jpg" alt="">
          </div>
        </van-cell>
        <van-cell title="分享拿20元现金" is-link>
          <div slot="icon">
            <img src="../../assets/imgs/user/icon5.jpg" alt="">
          </div>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell title="金币商城" is-link>
          <div slot="icon">
            <img src="../../assets/imgs/user/icon6.jpg" alt="">
          </div>
        </van-cell>
        <van-cell title="下载饿了么APP" is-link>
          <div slot="icon">
            <img src="../../assets/imgs/user/icon7.jpg" alt="">
          </div>
        </van-cell>
        <van-cell title="规则中心" is-link>
          <div slot="icon">
            <img src="../../assets/imgs/user/icon8.jpg" alt="">
          </div>
        </van-cell>
      </van-cell-group>
    </div>

    <div class="profile text--center">
      <p>隐私政策</p>
    </div>
  </div>
</template>
<script>
const prefixCls = 'user';
export default {
  data() {
    return {
      prefixCls,
      user: null,
    };
  },
  computed: {},
  watch: {},
  methods: {
    go2Login() {
      // 如果state里有user信息，不做处理
      if (this.user) {
        this.$router.push({
          name: 'userInfo',
          path: '/userinfo'
        });
      } else {
        this.$router.push({
          name: 'login',
          params: {
            data: 1
          },
          query: {
            data: 1,
          }
        });
      }
    }
  },
  created() {
    this.user = this.$store.state.user.user;
  },
}
</script>
