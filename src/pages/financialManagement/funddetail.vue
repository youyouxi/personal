<template lang="">
<div class='daifukuan'>
	<div class="page-tit bor">
	  	<span class="b-title">打款详情</span><span class="back" @click="back">返回帐单列表</span>
	</div>
	<div class="shop-main">
		<p>打款金额：<span>21564879635</span><span class='look'>查看账单</span></p>
		<p>账单编号：<span>BM25876864</span></p>
        <p>收款时间：<span>2017-09-08 11:30:23</span></p>
        <p>打款人：<span>李立春</span></p>
        <p>银行流水号：<span>1245454646654</span></p>
        <p>付款截图：<p><img src='../../../static/images/test2.png'><p></p>
        <p>备注：<span>无</span></p>
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