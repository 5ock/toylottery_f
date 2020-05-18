<template>
  <div class="LoginCreate">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
      <label for="validatecode" class="sr-only">Validate Code</label>
      <input type="text" id="validatecode" class="form-control" placeholder="validate code" v-model="create_user">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="create_password">
      <button class="btn btn-lg btn-primary btn-block" @click="createUser">Done</button>
      <p class="mt-5 mb-3 text-muted">Copyright &copy; 2020 by 5ockdart</p>
      <p class="txt-muted" style="color:red">{{ result_text }}</p>
    </form>
  </div>
</template>

<script>
import {sha256, sha244} from 'js-sha256';

export default {
  name: 'LoginCreate',
  data () {
    return {
      create_user: '',
      create_password: '',
      result_text: '',
    }
  },
  methods: {
    createUser() {
      let me = this;
      let data = {
        user: this.create_user,
        password: sha256(this.create_password)
      }
      console.log(data);
      me.axios.post('/createUser', data).then((result)=>{
        if(result.data.response == 'ok') {
          me.result_text = 'succeed';
        } else {
          me.result_text = 'error';
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
