<template>
  <div class="ly_popview"
    v-show="popview_show"
  >
    <div class="dl_popview_border">
      <div class="dl_popview_window">
        <div v-show="loading_show" class="ly_loading"></div>
        <img class="infoimg" />
        <p class="dl_popview_count"
          v-show="count_show"
        >{{ count_text }}</p>
        <p class="dl_popview_text"
          v-show="text_show"
        >{{ text_text }}</p>
        <div class="dl_popview_btns">
          <button type="button" class="dl_popview_ok"
            v-show="btn_ok_show"
            @click="click_ok"
          >OK</button>
          <button type="button" class="dl_popview_cancel"
            v-show="btn_cancel_show"
            @click="click_cancel"
          >Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DlPopview',
  components: {
  },
  data() {
    return {
      // popview
      popview_show: false,
      // loading
      loading_show: false,
      // count
      count_show: false,
      count_text: ' ',
      // text
      text_show: false,
      text_text: '',
      // btn
      btn_ok_show: false,
      btn_cancel_show: false,
      // promise
      resolve: '',
      reject: '',
      promise: '',
      // timer
      timer: null,
    }
  },
  methods: {
    wait(text) {
      const me = this;

      me.loading_show = true;
      me.count_show = false;
      if(text == null) {
        me.text_text = 'Wait' + '...';
      } else {
        me.text_text = text;
      }
      me.text_show = true;
      me.btn_ok_show = false;
      me.btn_cancel_show = false;
      me.popview_show = true;      
    },
    count(text, num) {
      const me = this;
      let count = parseInt(num);

      me.promise = new Promise((resolve, reject) => {
        me.resolve = resolve;
        me.reject = reject;

        me.loading_show = true;
        me.count_text = count + ' ' + 'Sec';
        me.count_show = true;
        if(text == null) {
          me.text_text = 'Please wait' + '...';
        } else {
          me.text_text = text;
        }
        me.text_show = true;
        me.btn_ok_show = false;
        me.btn_cancel_show = false;
        me.popview_show = true;

        me.timer = setInterval(function() {
          count--;
          me.count_text = count + ' ' + 'Sec';

          if(count <= 0) {
            clearInterval(me.timer);
            me.timer = null;
            me.resolve();
          }
        }, 1000);
      });

      return me.promise;
    },
    percent(text, num) {
      const me = this;
      let totalTime = parseInt(num);
      let count = 0;
      let percent = 0;

      me.promise = new Promise((resolve, reject) => {
        me.resolve = resolve;
        me.reject = reject;

        me.loading_show = true;
        me.count_text = percent + ' %';
        me.count_show = true;
        if(text == null) {
          me.text_text = 'Please wait' + '...';
        } else {
          me.text_text = text;
        }
        me.text_show = true;
        me.btn_ok_show = false;
        me.btn_cancel_show = false;
        me.popview_show = true;

        me.timer = setInterval(function() {
          percent = Math.ceil((++count / totalTime) * 100);
          me.count_text = percent + ' %';

          if(percent >= 100) {
            clearInterval(me.timer);
            me.timer = null;
            me.resolve();
          }
        }, 1000);
      });

      return me.promise;
    },
    confirm(text) {
      const me = this;

      me.promise = new Promise((resolve, reject) => {
        me.resolve = resolve;
        me.reject = reject;

        me.popview_show = true;
        me.count_show = false;
        me.text_text = text;
        me.text_show = true;
        me.btn_ok_show = true;
        me.btn_cancel_show = false;
        me.loading_show = false;
      });

      return me.promise;
    },
    check(text) {
      const me = this;

      me.promise = new Promise((resolve, reject) => {
        me.resolve = resolve;
        me.reject = reject;

        me.loading_show = false;
        me.count_show = false;
        me.text_text = text;
        me.text_show = true;
        me.btn_ok_show = true;
        me.btn_cancel_show = true;
        me.popview_show = true;
      });

      return me.promise;
    },
    hide() {
      const me = this;
      
      me.resolve = '';
      me.reject = '';
      me.promise = '';
      if(me.timer != null) {
        clearInterval(me.timer);
        me.timer = null;
      }
      me.popview_show = false;
    },
    click_ok() {
      this.resolve();
    },
    click_cancel() {
      this.reject();
    },
  },
  beforeDestroy() {
    const me = this;
    
    if(me.timer != null) {
      clearInterval(me.timer);
      me.timer = null;
    }
  },
}
</script>

<style scoped lang="scss">
.ly_popview {
	position: fixed;
	top: 0%;
	left: 0%;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.65);
	z-index:1001;
  overflow: auto;

  .dl_popview_border {
	  position: relative;
	  top:15%;
	  margin: 0 auto;
    margin-bottom: 30px;
	  width: 298px;
	  min-height: 298px;
	  padding: 8px;
  	background-color: white;
	  z-index:1003;
	  // overflow: auto;
  	border: 1px solid rgba(196, 196, 196, 1);
	  -webkit-border-radius: 10px;
	     -moz-border-radius: 10px;
	          border-radius: 10px;
    -webkit-box-shadow: 0 0 26px rgba(0, 0, 0, 0.875);
	    -moz-box-shadow: 0 0 26px rgba(0, 0, 0, 0.875);
	        box-shadow: 0 0 26px rgba(0, 0, 0, 0.875);
    text-align: center;

    .dl_popview_window {
      position:relative;
      width:100%;
      min-height: 280px;
      padding: 90px 10px 50px 10px;

      .dl_popview_btns {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        position: absolute;
        left: 0px;
        bottom: 10px;
        text-align: center;
        padding: 0 7.5px;

        .dl_popview_ok, 
        .dl_popview_cancel {
          flex: 1;
          margin: 0 2.5px;
          border-radius: 6px;
          color: #333;
          background-color: #fff;
          border: 1px solid #ccc;
          padding: 4px 12px;
          font-size: 1.142rem;

          &:hover {
            background-color: #e6e6e6;
            border-color: #adadad;
          }
        }
      }

    }
  }

  .dl_popview_count {
    font-size: 1.142rem;
  }
  .dl_popview_icon{
    margin-bottom: 30px;
  }
  .dl_popview_text {
    font-size: 1rem;
  }
}

.ly_loading {
  position: absolute;
  left: 127px;
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  border-top: 3px solid #3498db;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>