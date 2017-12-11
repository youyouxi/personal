<template>
  <div class='woyaogonghuo'>
      <div class='title'>
          我要供货<span @click='back'>返回供货列表</span>
      </div>
      <div class='main'>
          <div class='s-title'><span>第一步：</span>选择要报价的商品</div>
          <div class='s-main'>
              <span>商品分类：</span>
              <template>
                <el-select v-model="value" placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :id="item.id"
                    @click.native="listId(item.id)"
                    >
                    </el-option>
                </el-select>
                </template>
              <el-input v-model="input1" placeholder="请输入内容"></el-input>
              <el-button type="primary" @click='showtime'>搜索</el-button>
              <div class='buttom' v-if='show==1'>
                  <img src="../../../static/images/shop.png">
                  <b class='fir'><span>[国内仓发货]</span>BBG羽柔拉拉裤加大号(XL)40片成长裤学步裤纸尿裤尿不湿</b>
                  <b>商品分类：<span>尿不湿>L号</span></b>
                  <b>品牌：<span>{{names}}</span></b>
                  <b>建议售价：<span>￥128.00</span></b>
              </div>
          </div>
          <div class='s-title'><span>第二步：</span>填写报价信息</div>
          <div class='s-main'>
            <p>
                  <span><i>*</i> 运费模板:</span>
                  <template>
                    <el-select v-model="value" placeholder="全部">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                        >
                        </el-option>
                    </el-select>
                  </template>
                  <span>新增运费模板</span>
            </p>
            <p>
               <span>生产日期:</span> 
               <el-input v-model="input" placeholder="请输入内容"></el-input>
               <span>ps：如果商品有保质期，商品保质期必须大于一个月，超过保质期将自动下架</span>
            </p>
            <p>
               <span>保质期:</span> 
               <el-input v-model="input" placeholder="请输入内容"></el-input>
            </p>
            <p>
               <span>商品编号:</span> 
               <el-input v-model="input" placeholder="请输入内容"></el-input>
               <span>ps：供应商自己的商品编号</span>
            </p>
            <p>
               <span><i>*</i> 可销售库存:</span> 
               <el-input v-model="input" placeholder="请输入内容"></el-input>
               <span>ps：请输入商品件数（不是箱数），库存不足将自动下架</span>
            </p>
            <p>
                <span><i>*</i> 上架时间:</span>
                <template>
                    <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="">
                    </el-date-picker>
                </template>
                <span>ps：上架时间需保证保质期大于一个月</span>
            </p>
            <p>
                <span><i>*</i> 下架时间:</span>
                <template>  
                <el-date-picker
                    v-model="value2"
                    type="date"
                    placeholder="">
                </el-date-picker>
                </template>
            </p>
            <p class='special'>
                <span ><i>*</i> 规格报价:</span>
                <template>
                    <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 70%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="data"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    label="规格一"
                    width="100">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                    type="num"
                    label="规格二"
                    width="100">
                        <template slot-scope="scope">{{ scope.row.num }}</template>
                    </el-table-column>
                    <el-table-column
                    prop="weight"
                    label="物流重量（kg）"
                    >
                        <template slot-scope="scope"><input class='ss' placeholder=""/></template>
                    </el-table-column>
                    <el-table-column
                    prop="total"
                    label="单规格总价格"
                    >
                        <template slot-scope="scope"><input class='ss' placeholder=""/></template>
                    </el-table-column>
                    <el-table-column
                    prop="shopsku"
                    label="商家编码SKU"
                    >
                        <template slot-scope="scope"><input class='ss' placeholder=""/></template>
                    </el-table-column>
                    <el-table-column
                    prop="price"
                    label="折合每件单价（不含运费）"
                    show-overflow-tooltip>
                    </el-table-column>
                    </el-table>
                </template>
            </p>
            <p class='offer'>实时报价信息</p>
          </div>
          <div class='bot'>
            <button type="submit">保存</button>
            <button type="submit">取消</button>
          </div>
      </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      input: '',
      input1: '',
      value: '',
      value1: '',
      value2: '',
      id: '',
      show: 0,
      names: '',
      options: [
    //       {
    //     value: '选项1',
    //     label: '黄金糕'
    //   }, {
    //     value: '选项2',
    //     label: '双皮奶'
    //   }, {
    //     value: '选项3',
    //     label: '蚵仔煎'
    //   }, {
    //     value: '选项4',
    //     label: '龙须面'
    //   }, {
    //     value: '选项5',
    //     label: '北京烤鸭'
    //   }
      ],
      tableData3: [{
        date: '2017-1-1',
        num: '2',
        totle: '',
        shopsku: '',
        price: '自动计算'
      }, {
        date: '2017-5-5',
        num: '3',
        totle: '',
        shopsku: '',
        price: '自动计算'
      }],
      multipleSelection: []
    }
  },
  mounted () {
    setTimeout(function () {
      $('.clearr').addClass('router-link-active')
    }, 10)
    this.$http.get('api/item/secondCategory', {params: {
    }}).then(res => {
      var arrList = res.data.data
      for (let i in arrList) {
        this.options.push({
          value: arrList[i].categoryName,
          label: arrList[i].categoryName,
          id: arrList[i].id
        })
      }
    }, error => {
      console.log(2)
    })
  },
  destroyed () {
    setTimeout(function () {
      $('.clearr').removeClass('router-link-active')
    }, 10)
  },
  methods: {
    back () {
      window.history.back()
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    showtime () {
      this.show = 1
      var id = this.id
      var input = this.input1

      this.$http.get('api/item/' + id + '&' + input + '', {params: {
            // categoryId:id
            // searchWord:input
      }}).then(res => {
        console.log(res.data)
            // var arr = res.data.data
            // names:arr.supplierGroup
        console.log(res)
      }, error => {
        console.log(2)
      })
    },
    listId (id) {
      this.id = id
    }
  }
}
</script>
<style>
.woyaogonghuo .el-input--suffix .el-input__inner{
    width:340px;
}
.router-link-active{
    color: #fff!important;
}
</style>
<style lang="scss" scoped>
.title{
    font:18px/60px '';
    color: #2a3542;
    border-bottom: 1px solid #d6e2ed;
    text-indent: 20px;
    span{
        color: #12A1F3;
        font-size: 14px;
        margin-left: 10px;
        cursor:pointer;
    }
}
.main{
    .s-title{
        font-size: 14px;
        line-height: 32px;
        padding: 0 20px;
        color: #2a3542;
        background:#fafbfc;
        span{
            font-size:16px;
            font-weight: 700;
        }
    }
    .s-main{
        padding: 20px;
        .el-input{
            width: 340px;
        }
        .el-button{
            background: #f0ad4e;
            border: none;
        }
        .buttom{
            margin:20px 0;
            img{
                float: left;
                width:120px ;
                height:120px;
                border:1px solid #d6e2ed;
                margin-right:20px;
            }
            b{
                display: block;
                font:14px/24px '';
                color:#a3adc8;
                span{
                    color:#6e7381;
                }
            }
            .fir{
                    font:19px/36px '';
                    color:#2a3542;
                    span{
                        font-weight: 600;
                    }
                }
            }
            p{
                font:14px/24px '';
                margin-bottom:15px;
                span{
                    &:last-child{
                        color:#a3adc8;
                        margin-left:10px;
                    }
                    &:first-child{
                        width: 100px;
                        display: inline-block;
                        text-align: right;
                        margin-right:10px;
                    }
                }
                i{
                    color: #ff776d
                }
            }
    }  
}
.offer{
    margin-left:110px;
    color:#12A1F3;
}
.bot{
    background: #f4f6f9;
    padding-left:100px;
    padding-top:10px;
    height:40px;
    button{
        height:36px;
        width:80px;
        background: #fff;
        border-radius: 4px;
        margin-right:20px;
        border: 1px solid #d7dbe0;
        &:first-child{
            background: #12A1F3;
            color: #fff;
            border: none;
        }
    }
}
.special{
    span{
        float:left;
        margin-right:20px;
    }
    .el-table{
        border:1px solid #f0f0f0;
        border-bottom:none;
    }
    .ss{
        border:1px solid #f0f0f0;
        background: #fff;
        width:130px;
        height:30px;
        border-radius: 4px;
        padding-left:10px;
    }
}
</style>
