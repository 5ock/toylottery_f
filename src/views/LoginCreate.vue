<template>
  <div class="LoginCreate">
    <form class="form-signin">
      <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
      <label for="validatecode" class="sr-only">Validate Code</label>
      <input type="text" id="validatecode" class="form-control" placeholder="validate code" required="">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Done</button>
      <p class="mt-5 mb-3 text-muted">Copyright &copy; 2020 by 5ockdart</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginCreate',
  data () {
    return {
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
