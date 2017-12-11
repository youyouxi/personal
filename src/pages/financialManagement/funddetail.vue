<template lang="">
<div class='daifukuan'>
	<div class="page-tit bor">
	  	<span class="b-title">打款详情</span><span class="back" @click="back">返回帐单列表</span>
	</div>
	<div class="shop-main">
		<p>打款金额：<span>{{money}}</span><span class='look'>查看账单</span></p>
		<p>账单编号：<span>{{num}}</span></p>
        <p>收款时间：<span>{{btime}}</span></p>
        <p>打款人：<span>{{person}}</span></p>
        <p>银行流水号：<span>{{account}}</span></p>
        <p>付款截图：<p><img :src='imgs'></p></p>
        <p>备注：<span>{{remark}}</span></p>
	</div>
</div>
</template>
<script lang="">
import $ from 'jquery'
export default{
  data () {
    return {
      money: '',
      num: '',
      btime: '',
      person: '',
      account: '',
      imgs: '',
      remark: ''
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  },
  mounted () {
    setTimeout(function () {
      $('.clearr3').addClass('router-link-active')
    }, 10)
    this.$http.get('api/sup/transferMsg/asd1231a3s2', {params: {
      billNo: ''
    }}).then(res => {
      console.log(res.data.data)
      var arr = res.data.data
      this.money = arr.transferMoney
      this.num = arr.transferMoney
      this.btime = arr.collectionTime
      this.person = arr.transferUserName
      this.account = arr.bankFlowNo
      this.imgs = arr.transferPicUrl
      if (arr.transferRemark !== '') {
        this.remark = arr.transferRemark
      } else {
        this.remark = '无'
      }
    }, error => {
      console.log(2)
    })
  },
  destroyed () {
    setTimeout(function () {
      $('.clearr3').removeClass('router-link-active')
    }, 10)
  }
}
</script>
<style lang="scss" scoped>
.bor{
	border-bottom: 1px solid #d6e2ed;
    background:#F4F6F9;
}
.page-tit{
	font: 18px/36px "";
	color:#2a3542;
	padding: 10px 20px; 
}	
.back{
	color: #12A1F3;
	font-size: 14px;
	margin-left: 10px;
    cursor:pointer;
}
.shop-main{
	background: #fff;
	padding: 20px;
    p{
        font: 14px/30px "";
	    color: #6e7381;
        img{
            margin-bottom:10px;
        }
    }
    .look{
        color:#12A1F3;
        margin-left:10px;
        cursor:pointer;
    }
}
</style>