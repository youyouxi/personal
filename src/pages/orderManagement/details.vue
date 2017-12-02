<template lang="">
<div class='daifukuan'>
	<div class="page-tit bor">
	  	<span class="b-title">订单详情</span><span class="back" @click="back">返回订单列表</span>
	</div>

	<div>
		<div class="state bor">
			<p><span>订单状态：<i style="color: #ff4747;font-weight: 600;">{{state}}</i></span></p>
			<p style="font-size: 14px;margin-top: 15px;"><span>订单号：<i style="margin-right: 40px;">{{childnum}}</i></span></p>
		</div>
		<div style="font:16px/32px '';padding: 0 20px;color: #2a3542;" class="bor">订单明细</div>
		<div class="shop-main">
			<p>收货信息：<span>{{name}}</span>，<span>{{phone}}</span>，<span>{{province}}{{district}}{{adr}}</span>，<span>0000000</span></p>
			<p>报关信息：<span>{{name}}</span>，<span>{{phone}}</span>，<span>{{ID}}</span></p>
			<div class="shop-table">
				<el-table
						:data="tableData"
						border
						style="width: 100%;margin: 20px 0;">
						<el-table-column
							label="商品"
							width="500">
							<template slot-scope="scope">
								<div class="s-shop">
									<img class='s-img' :src="scope.row.img"/>
									<p>{{scope.row.name}}</p>
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
				<span class="beizhu">备注：<span>{{tips}}</span></span>
				<span>支付金额：<span style="color: #ff776d;font-size: 20px;">{{tmoney}}</span>元</span>
			</div>
			<p><span>下单时间：<i>{{ctime}}</i></span><span style='margin-left:30px;'>支付时间：<i>{{ptime}}</i></span></p>
		</div>
			<el-button type="primary" size='medium'>接单</el-button>
	</div>

</div>
</template>

<script lang="">
export default{
  data () {
    return {
      childnum: '',
      name: '',
      phone: '',
      province: '',
      district: '',
      adr: '',
      ID: '身份证号码',
      tips: '',
      tmoney: '',
      ctime: '',
      ptime: '',
      state: '',
      tableData: []
    }
  },
  mounted () {
    this.$http.get('api/sup/orderMsg/1255', {params: {}}).then(res => {
      console.log(res)
      console.log(res.data.data)
      var array = res.data.data
			//array是一个对象
      var list = res.data.data.item
      this.childnum = array.secondaryOrderNo
      this.province = array.provinceName
      this.district = array.areaName
      this.adr = array.addrDetail
      this.name = array.userName
      this.phone = array.cellPhone
      this.tipss = array.remark
      this.tmoney = array.receivedPrice
      this.ctime = array.created
      this.ptime = array.payTime
      if (array.status == 0) {
        array.status = '待支付'
      } else if (array.status == 1) {
        array.status = '待发货'
      } else if (array.status == 2) {
        array.status = '待收货'
      } else if (array.status == 3) {
        array.status = '已完成'
      } else if (array.status == 4) {
        array.status = '已取消'
      }
      this.state = array.status
      if (array.remark !== '') {
        this.tips = array.remark
      } else {
        this.tips = '无'
      }
      for (let i in list) {
        this.tableData.push({
          img: list[i].itemImg,
          name: list[i].itemName,
          price: list[i].price,
          amount: list[i].quantity,
          num: list[i].price,
          freight: list[i].price,
          discounts: list[i].price,
          money: list[i].price,
          hotel: list[i].price
        })
      }
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
	cursor:pointer;
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