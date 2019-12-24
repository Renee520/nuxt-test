<template>
  <div :class="prefixCls">
    <div :class="`${prefixCls}-logo`">
      <img src="../static/imgs/logo.png" alt="">
    </div>
    <div :class="`${prefixCls}-form`">
      <div :class="`input-inner`">
        <div class="float">
          <input class="float--left" type="text" maxlength="11" v-model="mobile" placeholder="手机号" />
          <span v-if="sendCode" :class="{'float--right': true, 'disabledToClick': codeDisabled, 'text--info': !codeDisabled}" @click="getCode">获取验证码</span>
          <span v-else-if="alreadySend" class="float--right disabledToClick">已发送({{seconds}}s)</span>
          <span v-else-if="regainCode" :class="{'float--right': true, 'disabledToClick': codeDisabled, 'regain': !codeDisabled}" @click="getCodeAgain">重新获取</span>
        </div>
      </div>
      <div class="input-inner">
        <input placeholder="验证码" v-model="code" />
      </div>
    </div>
    <div :class="`${prefixCls}-info`">
      新用户登录即自动注册，并表示已同意<span class="text--primary">《用户服务协议》</span>和<span class="text--primary">《隐私权政策》</span>
    </div>
    <div :class="prefixCls + '-button'">
      <van-button :block="true" type="primary" @click="login">登录</van-button>
    </div>
    <div :class="`${prefixCls}-about text--info text--center`">关于我们</div>
  </div>
</template>
<script>
const prefixCls = 'login';

import moment from 'moment';
import { isMobile } from '@/utils/util';
import { sendCode, login } from '../apis';
export default {
  // components: {
  //   // vButton,
  // },
  data() {
    return {
      prefixCls,
      mobile: '',
      code: '', // 验证码
      sendCode: true, // 获取验证码
      alreadySend: false, // 已发送
      regainCode: false, // 重新获取
      seconds: 30, // 倒计时
      timer: null,
    };
  },
  computed: {
    codeDisabled() {
      // 如果输入了，并且时手机号码格式
      if(!isMobile(this.mobile)) {
        // 不通过
        return true;
      }
      return false; // 默认不可点击
    }
  },
  watch: {
    seconds() {
      if (this.seconds < 0) {
        clearInterval(this.timer); // 倒计时为0，停止
        // 切换为“重新获取”
        this.alreadySend = false;
        this.regainCode = true;
      } else {
        this.regainCode = false;
      }
    }
  },
  methods: {
    handle(value, v2) {
      console.log(value, v2);
    },
    handleClick() {
      this.$refs.child.$emit('test', 5, 6);
    },
    ableToGetCode() { // 手机号小于11位，验证码color浅色
      if (this.mobile.length < 11) {
        this.codeDisabled = true;
      } else {
        this.codeDisabled = false;
      }
    },
    getCode() {
      if (this.codeDisabled) { // 禁用
        if (this.mobile.length < 11) {
          this.$toast('手机号码为11位!');
        }
        return;
      }
      // 点击后切换为“已发送”
      this.sendCode = false;
      this.alreadySend = true;
      // let targetTime = moment().add(30, 's'); // 当前时间+30s
      this.timer = setInterval(()=>{ // 倒计时
        // this.seconds = parseInt((targetTime - moment())/1000);
        this.seconds -= 1;
      }, 1000);
      // 发送axios请求
      const that = this;
      // vue文件里最好不要写后台
      sendCode({
        mobile: that.mobile,
      }).then(
        res => {
          console.log(res);
          if (!res.status) {
            console.log(res || '失败！');
            return;
          }
        }
      )
    },
    getCodeAgain() { // “重新获取”
      this.seconds = 30; // 重置倒计时
      this.getCode();
    },
    login() {
      const that = this;
      // 发送“login”请求
      login({
        mobile: that.mobile,
        code: that.code,
      }).then(
        res => {
          if (!res.status) {
            console.log(res || '失败！');
            return;
          }
          // 如果请求成功
          // 为user数据添加创建时间
          console.log(res)
          if (res.user.date === 'undefined') {
            res.user.date = '';
          }
          res.user.date = moment().format('YYYY-MM-DD HH:mm:ss'); 
          console.log(res.user.date);
          // 将user数据存入store中
          this.$store.dispatch('user/saveUser', res.user).then(
            () => {
              console.log('data have been stored in store', res.user);
              localStorage.setItem('user', JSON.stringify(res.user)); // 将数据存入本地
              console.log('data have been stored in LS', localStorage);
              // 跳转页面
              this.$router.push({
                name: 'user',
                path: '/user',
              })
            },
            err => {
              console.log(err);
            }
          )
        },
        err => {
          console.log(err);
        }
      )
    }
  },
  created() {
    sendCode({
        mobile: 'that.mobile',
      })
    // this.$axios.get('/restapi/bgs/poi/search_poi_nearby_alipay?keyword=上海&offset=0&limit=20').then(
    //   r => {
    //     console.log(r);
    //   },
    //   err => console.error(err)
    // )
  },
  mounted() {
    console.log(this.$store);
  }
}
</script>
