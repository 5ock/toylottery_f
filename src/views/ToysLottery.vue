<template>
  <div class="toysLottery">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <!-- m_toggler -->
      <button class="navbar-toggler carzy_toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"
        @click.prevent="isShow_m_navbar = !isShow_m_navbar">
      <span class="navbar-toggler-icon"></span>
      </button>
      <!-- title -->
      <a class="navbar-brand">Toys Lotterys System</a>
      <!-- sign out -->
      <ul class="navbar-nav px-2">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click="logout">Sign out</a>
        </li>
      </ul>
      <!-- m_navbar -->
      <div class="navbar-collapse carzy_navbar" v-show="isShow_m_navbar">
        <ul class="navbar-nav mt-2">
          <li class="nav-item" style="padding-left:20px;">
              <router-link class="nav-link active" to="/lottery/add" @click.native='isShow_m_navbar = !isShow_m_navbar;'>Add Lotterys</router-link>
          </li>
          <li class="nav-item" style="padding-left:20px;">
              <router-link class="nav-link active" to="/lottery" @click.native='isShow_m_navbar = !isShow_m_navbar;'>Information</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <!-- <a class="nav-link active" href="#" @click="changePage('/lottery/add')">Add Lotterys</a> -->
                <router-link class="nav-link active" to="/lottery/add">Add Lotterys</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/lottery">Information</router-link>
                <!-- <a class="nav-link" href="#" @click="changePage('/lottery')">Information</a> -->
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 col-lg-9 main">
          <router-view class="my-4 w-100"></router-view>
        </main>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'toysLottery',
  data () {
    return {
      isShow_m_navbar: false,
    }
  },
  methods: {
    logout() {
      const me = this;
      
      me.axios.post('/logout').then((result) => {
        me.$router.push('/login');
      })
    }
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
