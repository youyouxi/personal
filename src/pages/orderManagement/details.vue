<template lang="">
<div class='daifukuan'>
	<div class="page-tit bor">
	  	<span class="b-title">订单详情</span><span class="back" @click="back">返回订单列表</span>
	</div>
	<div class="state bor">
		<p><span>订单状态：<i style="color: #ff4747;font-weight: 600;">待接单</i></span><span>剩余付款时间：<i style="color: #ff4747;font-weight: 600;">23小时24分23秒</i></span></p>
		<p style="font-size: 14px;margin-top: 15px;"><span>订单号：<i style="margin-right: 40px;">56465315318</i></span><span>买家：<i style="color:#12a1f3 ;">爱之园母婴旗舰店</i></span></p>
	</div>
	<div style="font:16px/32px '';padding: 0 20px;color: #2a3542;" class="bor">订单明细</div>
	<div class="shop-main">
		<p>收货信息：<span>南瓜粉</span>，<span>13525845698</span>，<span>浙江省西湖区紫霞街</span>，<span>0000000</span></p>
		<p>报关信息：<span>南瓜粉</span>，<span>13525487854</span>，<span>4545114445</span></p>
		<div class="shop-table">
			<el-table
			    :data="tableData"
			    border
			    style="width: 100%;margin: 20px 0;">
			    <el-table-column
			      prop="name"
			      label="商品"
			      width="500">
			      <template slot-scope="scope">
			      	<div class="s-shop">
				      	<img class='s-img' src="../../../static/images/shop.png"/>
				      	<p class="s-name"><span class="s-form">[保税仓]</span>海外原装进口德国爱他美3段婴儿成长配方宝宝奶
粉三段2段国内现货</p>
<p class="s-bot"><span class="s-data">2017年7月-2018年8月</span><span class="s-num">2罐装</span></p>
			      	</div>
			      </template>
			    </el-table-column>
			    <el-table-column
			      prop="price"
			      label="规格单价"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="amount"
			      label="规格数量">
			    </el-table-column>
			    <el-table-column
			      prop="num"
			      label="件数">
			    </el-table-column>
			    <el-table-column
			      prop="freight"
			      label="运费">
			    </el-table-column>
			    <el-table-column
			      prop="discounts"
			      label="优惠">
			    </el-table-column>
			    <el-table-column
			      prop="money"
			      label="订单金额">
			    </el-table-column>
			    <el-table-column
			      prop="hotel"
			      label="供应商">
			    </el-table-column>
			</el-table>
		</div>
		<div class="totle">
			<span class="beizhu">备注：<span>物品易潮，轻拿轻放，发顺风</span></span>
			<span>支付金额：<span style="color: #ff776d;font-size: 20px;">1551.00</span>元</span>
		</div>
	</div>
    <el-button type="primary" size='medium'>接单</el-button>
</div>
</template>

<script lang="">
export default{
  data () {
    return {
      tableData: [
        {
          name: '',
          price: '99.00',
          amount: '2',
          num: '4件',
          freight: '15.00',
          discounts: '-￥0.00',
          money: '187.00',
          hotel: '小宝贸易有限公司'
        }
      ]
    }
  },
  methods: {
    back () {
      window.history.back()
    }
  }

}
</script>
<style lang='scss'>
.daifukuan{
    background: #F4F6F9;
    .el-table__body-wrapper{
        overflow: hidden;
    }
    .el-table__row .el-table_1_column_8 .cell{
        color:#12a1f3!important
    }
    .el-table__row .el-table_1_column_7 .cell{
        font-weight: 700;
    }
}

</style>
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
    span{
        &:last-child{
            cursor:pointer;
        }
    }
	/*position: fixed;
	background: #F4F6F9;
	top: 59px;
	left: 200px;
	z-index: 10;*/
}	
.back{
	color: #12A1F3;
	font-size: 14px;
	margin-left: 10px;
}
.state{
	height: 48px;
	background: #fff;
	padding: 20px;
	font-size: 16px;
	color:#777777 ;
	span{
		display: inline-block;
		width: 300px;
	}
}
.shop-main{
	background: #fff;
	padding: 20px;
	font: 14px/24px "";
	color: #6e7381;
}
.s-shop{
	.s-img{
		width: 62px;
		height:62px ;
		float: left;
		margin-right: 20px;
		border: 1px solid #d6e2ed;
	}
	p{
		width: 376px;
		font: 14px/24px "";
		color:#6e7381
	}
	.s-form{
		font-weight: 600;
	}
	.s-bot{
		color:#b4b8c3;
		span{
			margin-right: 20px;
		}
	}
}
.totle{
	display: flex;
	justify-content: space-between;
}
.el-button{
    width:100px;
    height:30px;
    margin:20px 0 20px 20px;
    text-align:center;
}

</style>