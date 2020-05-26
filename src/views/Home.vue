<template>
  <div class="toysLottery">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <!-- title -->
      <a class="navbar-brand ml-2">Toys Lotterys System</a>
      <!-- sign in -->
      <ul class="navbar-nav px-2">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click="enterLogin">Sign in</a>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <main role="main" class="main">          
        <!-- lottery info card -->
        <lotteryCard
          :lotteryCardData="lotteryCardList" />
      </main>
    </div>

  </div>
</template>

<script>
import lotteryCard from '../components/Lottery_Info_Card';
export default {
  components: {
    lotteryCard
  },
  name: 'home',
  data () {
    return {
      isShow_m_navbar: false,
      lotteryCardList: [],
    }
  },
  mounted() {
    this.getLotteryList();
  },
  methods: {
    enterLogin() {
      this.$router.push('/login');
    },
    getLotteryList() {
      let newPromsie = new Promise((resolve, reject) => {
        const me = this;
        me.axios.get('/lotteryData').then((result) => {
          // card 順序依到期日期, 可編輯刪除
          // item, data, time, price, url, islottery, notification, remark
          result.data.sort(function(a, b) {
            let a_dateTime = a.date.year + a.date.month + a.date.day + a.time.hour + a.time.min;
            let b_dateTime = b.date.year + b.date.month + b.date.day + b.time.hour + b.time.min;

            if(a_dateTime > b_dateTime) {
              return -1;
            } else {
              return 1;
            }
          });
          me.lotteryCardList = result.data;
          resolve();
        });
      });
      return newPromsie;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sidebar {
  height: calc(100vh);
}
.sidebar, .main {
  padding-top: 48px;
}
</style>
