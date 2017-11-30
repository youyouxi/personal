<template lang="">
<div class='daifukuan'>
	<div class="page-tit bor">
	  	<span class="b-title">账单详情</span><span class="back" @click="back">返回帐单列表</span>
	</div>
	<div class='basics'>账单信息</div>
	<div class="shop-main">
		<p>对账状态：<span style='color:#ff776d;'>{{state1}}</span></p>
		<p>转账状态：<span>{{state2}}</span></p>
        <p>账单编号：<span>{{bill}}</span></p>
        <p>账单日期：<span>{{btime}}</span>至<span>{{etime}}</span></p>
        <p>创建时间：<span>{{ctime}}</span></p>
	</div>
    <div class='basics'>金额信息</div>
    <div class="shop-main">
		<p>订单金额（元）：<span>{{money}}</span></p>
		<p>退款金额（元）：<span>{{bmoney}}</span></p>
        <p>结算金额（元）：<span>{{tmoney}}</span><span style='color:#12A1F3;margin-left:10px;'>查看流水</span></p>
	</div>
    <div class='basics'>收款账号</div>
    <div class="shop-main spe">
		<p>银行开户名：<span>{{name}}</span></p>
		<p>公司银行账号：<span>{{banknum}}</span></p>
        <p>开户银行支行名称：<span>{{bankname}}</span><span></span></p>
	</div>
</div>
</template>

<script lang="">
export default{
  data () {
    return {
      state1: '',
      state2: '',
      bill: '',
      btime: '',
      etime: '',
      ctime: '',
      money: '',
      bmoney: '',
      tmoney: '',
      name: '',
      banknum: '',
      bankname: ''
    }
  },
  mounted () {
    this.$http.get('api/sup/billMsg/asd1231a3s2', {params: {
      billNo: ''
    }}).then(res => {
      console.log(res.data.data)
      var arr = res.data.data
      this.state1 = arr.contrastBillStatus
      this.state2 = arr.transferStatus
      this.bill = arr.billNo
      this.btime = arr.startTime
      this.etime = arr.endTime
      this.ctime = arr.created
      this.money = arr.orderMoney
      this.bmoney = arr.refundMoney
      this.tmoney = arr.clearingMoney
      this.name = arr.bankAccount
      this.banknum = arr.bankCard
      this.bankname = arr.bankName
    }, error => {
      console.log(2)
    })
  },
  methods: {
    back () {
      window.history.back()
    }
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
    }
}
.spe{
    p{color:#2a3542;}
}
.el-button{
    width:100px;
    height:30px;
    margin:20px 0 20px 20px;
    text-align:center;
}
.basics{
    font-size: 14px;
    line-height: 32px;
    padding: 0 20px;
    color: #2a3542;
    background:#fafbfc;
}
</style>