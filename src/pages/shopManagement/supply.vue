<template>
  <div>
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
                    :value="item.value">
                    </el-option>
                </el-select>
                </template>
              <el-input v-model="input" placeholder="请输入内容"></el-input>
              <el-button type="primary">搜索</el-button>
              <div class='buttom'>
                  <img src="../../../static/images/shop.png">
                  <b class='fir'><span></span>BBG羽柔拉拉裤加大号(XL)40片成长裤学步裤纸尿裤尿不湿</b>
                  <b>商品分类：<span>尿不湿>L号</span></b>
                  <b>品牌：<span>花王</span></b>
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
                        :value="item.value">
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
               <span><i>*</i>可销售库存:</span> 
               <el-input v-model="input" placeholder="请输入内容"></el-input>
               <span>ps：请输入商品件数（不是箱数），库存不足将自动下架</span>
            </p>
            <p>
                <span><i>*</i> 上架时间:</span>
                <template>
                <el-select v-model="value" placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                </template>
                <span>ps：上架时间需保证保质期大于一个月</span>
            </p>
            <p>
                <span><i>*</i> 下架时间:</span>
                <template>
                <el-select v-model="value" placeholder="全部">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                </template>
            </p>
            <p>
                <span><i>*</i>规格报价:</span>
            </p>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
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
            width: 217px;
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
</style>
