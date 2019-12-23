<template>
  <div :class="prefixCls">
      <transition name="slide-fade">
        <div v-if="showAddrFlag" :class="`${prefixCls}-address`">
          <div :class="{'display-none': showCityFlag}">
            <!-- header -->
            <van-nav-bar
              title="选择收货地址"
              right-text="新增地址"
              left-arrow
              @click-left="backToHome"
              @click-right="addAddress"
            />
            <!-- search -->
            <div :class="`${prefixCls}-address-search box flex`">
              <div class="city" @click="showCity" slot="action">
                <p class="text-overflow cityName float--left text--center">{{city}}</p>
                <span class="triangle float--right"></span>
              </div>
              <van-search placeholder="请输入地址" v-model="inputaddress"  @keydown.13="inputAddress" />
            </div>
            <!-- 当前地址 -->
            <div v-if="user" :class="`${prefixCls}-address-currAddr`">
              <p class="title">当前地址</p>
              <div :class="`${prefixCls}-address-currAddr__content flex box`">
                <p @click="backToHome" class="box text-overflow">{{address}}</p>
                <a @click="relocation" href="javascript:;"><van-icon name="aim" />重新定位</a>
              </div>
            </div>
            <!-- 收货地址 -->
            <div v-if="user" :class="`${prefixCls}-address-shAddr`">
              <p class="title">收货地址</p>
              <div class="list box">
                <div class="list-item" v-for="(item, index) in shAddr" :key="item.id" @click="chooseShAddr(index)" ref="shAddr">
                  <p>
                    <span class="name">{{ item.name }}</span>
                    <span class="gender">{{ item.gender }}</span>
                    <span class="phone">{{ item.mobile }}</span>
                  </p>
                  <p class="addr">{{ item.address }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- 城市组件 -->
      <div v-if="showCityFlag">
        <City @getCityFromShowCity="getCityFromShowCity"></City>
      </div>
  </div>
</template>
<script>
const prefixCls = 'selectAddress-index';
import City from '@/components/SelectCity.vue';
export default {
  data() {
    return {
      prefixCls,
      user: '',
      // showAddrFlag: this.paramsFromhomeToAddr,
      inputaddress: '', // 当前地址输入值
      address: '', // 当前地址
      addressflag: false, // 标识符，当前地址是否存在
      shAddr: [ // 用户收货地址（有用户信息时显示）
        {id: 1, name: '小明', gender: '男', mobile: 12345678901, address: '和平路莲花小区2栋3单元'},
        {id: 2, name: '小强', gender: '男', mobile: 12345678901, address: '和平路和谐小区2栋3单元'},
        {id: 3, name: '小红', gender: '女', mobile: 12345678901, address: '和平路平安小区2栋3单元'},
      ],
      showCityFlag: false, // 标识符，是否显示“选择城市”组件
      city: '选择城市', // 城市名，未选择时默认显示“选择城市”
      cityflag: false, // 标识符，是否选择了城市
    };
  },
  props: [
    'paramsFromhomeToAddr',
  ],
  components: {
    City,
  },
  computed: {
    showAddrFlag: {
      get() {return this.paramsFromhomeToAddr;},
      set() {},
    }
  },
  watch: {},
  methods: {
    relocation() {
      this.$toast('重新定位');
    },
    backToHome() { // 地址组件 -> home
      this.showAddrFlag = false;
      this.$emit('getAddrObjFromShowAddr', this.address, this.addressflag);
      // 将address存入store
      if (this.addressflag) {
        this.$store.dispatch('saveAddress', this.address).then(
          () => {
            localStorage.setItem('address', JSON.stringify(this.address)); // 存入本地
          },
          err => {
            console.log(err || '地址存入失败');
          }
        );
      }
    },
    addAddress() {
      this.$toast('新增地址');
    },
    inputAddress() { // 在输入框中按下回车
      if (this.inputaddress) { // 如果输入的地址不为空
        this.address = this.inputaddress;
        this.addressflag = true;
        if (this.cityflag ) {
          this.backToHome();
          this.inputaddress = ''; // 清空输入框
        } else {
          this.$toast('请选择城市');
        }
      }
    },
    showCity() { // 显示“选择城市”组件
      this.showCityFlag = true;
    },
    getCityFromShowCity(city, cityflag) { // 从城市组件中获取city数据
      console.log('address component, city&cityflag', city, cityflag);
      this.city = city;
      this.cityflag = cityflag;
      this.showCityFlag = false; // 不显示城市组件
    },
    chooseShAddr(index) { // 选择索引为index的收货地址
      this.address = this.$refs.shAddr[index].lastChild.innerText;
      this.addressflag = true;
      this.backToHome();
    }
  },
  created() {
    let store = this.$store.state.user;
    // 从store中取出用户信息
    if (store.user) {
      this.user = store.user;
    }
    console.log(store);
    if (store.city) {
      this.city = store.city;
      this.cityflag = true; 
    } else { // 城市不存在，则address也不存在
      this.city = '选择城市';
      this.cityflag = false;
    }
    if (store.address) {
      this.address = store.address;
      this.addressflag = true;
    } else {
      this.address = false;
      this.address = "未能获取地址";
    }
  },
}
</script>
