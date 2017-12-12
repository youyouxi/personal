<template>
	<div id="app">
		<Left></Left>
		<div class='right-main'>
			<Right></Right>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
// import $ from 'jquery'
import qs from 'qs'
import Left from './components/leftMenu/leftMenu.vue'
import Right from './components/rightTop/rightTop.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  mounted () {
    this.$http.get('api/user/captcha', qs.stringify({
    })).then(res => {
      console.log(res)
    })
    this.$http.post('api/user/login', qs.stringify({
      loginCode: '18868946840',
      loginPassword: '123456',
      validateCode: 'atk3'
    })).then(res => {
      console.log(res)
    })
  },
  // methods: {
  //   click () {
	// 		// 获取验证码、 
	// 	 // alert(1)
  //     this.$http.get('api/user/captcha', qs.stringify({
  //     })).then(res => {
  //     console.log(res)
  //     })
  //   },
  //   click1 () {
  //     console.log(1) 
  //     this.$http.post('api/user/login', qs.stringify({
  //       loginCode: '18868946840',
  //       loginPassword: '123456',
  //       validateCode: 'phcj'
  //     })).then(res => {
  //       console.log(res)
  //     })
  //   }
  // },
  components: {
    Left,
    Right
  }
}
</script>

<style lang='scss'>
#app,body,html {
		width: 100%;
		height: 100%;
		margin:0;
		padding:0;
}
#app{
	display: flex;
	flex-direction:row ;
	margin: 0;
	padding: 0;
	.right-main{
		width: 100%;
		height: 100%;
		overflow: auto;
	}
}

</style>
