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
import Left from './components/leftMenu/leftMenu.vue'
import Right from './components/rightTop/rightTop.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
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
	}
}

</style>
