<template>
  <div class="Login">
    <form class="form-signin" @submit.prevent="login">
      <h1 class="h3 mb-3 font-weight-normal">Sign in</h1>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="login_password" @keyup.enter="login">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">Copyright &copy; 2020 by 5ockdart</p>
    </form>

    <!-- popview -->
    <lyPopView ref="lyPopView"></lyPopView>
  </div>
</template>

<script>
import { sha256, sha224 } from 'js-sha256';
import lyPopView from '../components/ly_popview';

export default {
  components: {
    lyPopView,
  },
  name: 'Login',
  data () {
    return {
      login_password: '',
    }
  },
  mounted() {
    sessionStorage.clear();
  },
  methods: {
    login() {
      const me = this;
      const data = {password: sha256(me.login_password)};

      this.$refs.lyPopView.wait();

      me.axios.post('/user/login', data).then((result)=> {
        if(result.data.response == 'ok') {
          me.$refs.lyPopView.hide();
          sessionStorage.role = 'admin';
          me.$router.push('/lottery');
        } else {
          alert('error');
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.form-signin {
  
  max-width: 300px;
  width: 100%;
  margin: 50px auto 0;

  .h3, .mt-5 {
    text-align: center;
  }

  .btn {
    margin-top: 20px;
  }
}
</style>
