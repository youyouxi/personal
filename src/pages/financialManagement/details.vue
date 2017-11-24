<template lang="">
<div class='daifukuan'>
	<div class="page-tit bor">
	  	<span class="b-title">账单详情</span><span class="back" @click="back">返回帐单列表</span>
	</div>
	<div class='basics'>账单信息</div>
	<div class="shop-main">
		<p>对账状态：<span style='color:#ff776d;'>待确认</span></p>
		<p>转账状态：<span>未付款</span></p>
        <p>账单编号：<span>BM2515641</span></p>
        <p>账单日期：<span>2017-09-08 11:30:23</span>至<span>2017-09-08 11:30:23</span></p>
        <p>创建时间：<span>2017-09-08 11:30:23</span></p>
	</div>
    <div class='basics'>金额信息</div>
    <div class="shop-main">
		<p>订单金额（元）：<span>548200</span></p>
		<p>退款金额（元）：<span>600</span></p>
        <p>结算金额（元）：<span>2580000</span><span style='color:#12A1F3;margin-left:10px;'>查看流水</span></p>
	</div>
    <div class='basics'>收款账号</div>
    <div class="shop-main spe">
		<p>银行开户名：<span>小包贸易有限公司</span></p>
		<p>公司银行账号：<span>5413213545846463131212365126515</span></p>
        <p>开户银行支行名称：<span>某某支行</span><span></span></p>
	</div>
</div>
</template>

<script lang="">
export default{
  data () {
    return {

    }
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
	width: 100%;
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