<template>
  <div class="toysLottery_add">
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <!-- m_toggler -->
      <button class="navbar-toggler carzy_toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"
        @click="isShow_m_navbar = !isShow_m_navbar">
      <span class="navbar-toggler-icon"></span>
      </button>
      <!-- title -->
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Toys Lotterys System</a>
      <!-- sign out -->
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#">Sign out</a>
        </li>
      </ul>
      <!-- m_navbar -->
      <div class="navbar-collapse" v-show="isShow_m_navbar">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item" style="padding-left:20px;">
            <a class="nav-link" href="#" @click="isShow_m_navbar = !isShow_m_navbar">Create Lotterys</a>
          </li>
          <li class="nav-item" style="padding-left:20px;">
            <a class="nav-link" href="#" @click="isShow_m_navbar = !isShow_m_navbar">Information</a>
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
                <a class="nav-link active" href="#">Create Lotterys</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Information</a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4 main"><div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="h2">Create Lotterys</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toysLottery_add',
  data () {
    return {
      isShow_m_navbar: false,
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
