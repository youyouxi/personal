<template>
<div class='messagealert'>
<div class="messagePage">
        <div class="title">
            <span>通知</span>
            <span>全部标记已读</span>
        </div>
        <!--<div>
            <template>
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="全部" name="first">
                        <template>
                            <ul class='messagePage-ul'>
                                <li v-for="(item,index) in list">
                                    <div class="box">
                                    <p><i><img src="../../../static/images/View2.png"></i>新品发布<span>今天 13:08</span></p>
                                    <p class='news-main'>花王L54已加入纸尿裤供货区 ,  您可以报价啦。<span>去报价</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/View2.png"></i>新品发布<span>今天 13:08</span></p>
                                    <p class='news-main'>花王L54已加入纸尿裤供货区 ,  您可以报价啦。<span>去报价</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/dollar.png"></i>账单生成<span>今天 13:08</span></p>
                                    <p class='news-main'>您有一笔结款账单已生成。<span>查看</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/Notepad.png"></i>有新订单<span>今天 13:08</span></p>
                                    <p class='news-main'>您有新订单啦，商品：贝亲婴儿纸尿裤NB 70片<span>去接单</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/退.png"></i>售后处理<span>今天 13:08</span></p>
                                    <p class='news-main'>您有一笔退款订单待处理。<span>去处理</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/dollar.png"></i>等待收款<span>今天 13:08</span></p>
                                    <p class='news-main'>您有一笔结款账单已生成。<span>查看</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/Clock.png"></i>等待发货<span>今天 13:08</span></p>
                                    <p class='news-main'>您有一笔订单已超过3天未发货，请及时发货。<span>发货</span></p>
                                    </div>
                                </li>
                                <li>
                                    <div class="box">
                                    <p><i><img src="../../../static/images/exclamation.png"></i>库存预警<span>今天 13:08</span></p>
                                    <p class='news-main'>商品 贝亲婴儿纸尿裤NB 70片库存不足，请及时补充库存<span>查看</span></p>
                                    </div>
                                </li>
                                </ul>
                        </template>
                    </el-tab-pane>
                    <el-tab-pane label="已读" name="second"></el-tab-pane>
                    <el-tab-pane label="未读" name="third"></el-tab-pane>
                </el-tabs>
            </template>
        </div>-->
            <div id="tabNav">
                <ul>
                    <li v-for="(item,index) in list" @click="newMessage(index)" :class="{active:num==index}">{{item.name}}</li>
                </ul>
            </div>
            <div v-for="(item,index) in tableList"></div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
import qs from 'qs'
export default {
  data () {
    return {
      activeName: 'first',
      list: [
        {
          name: '全部'
        },
        {
          name: '未读'
        },
        {
          name: '已读'
        }
      ],
      num: '',
      tableList: ''
    }
  },

  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    newMessage (i) {
      this.num = i
      if (this.num == 0) {
        var id = 0
      }
      if (this.num == 1) {
        var id = 0
      }
      if (this.num == 2) {
        var id = 1
      }
      this.$http.post('api/msg', qs.stringify({
        hasReades: id
      })).then(res => {
        this.tableList = []// 每次渲染之前将tableList这个列表清空
        // console.log(res)
      })
    }
  },
  mounted () {
    this.$http.get('api/msg', qs.stringify({
        // categoryId:id
        // searchWord:input
      categoryId: 0
    })).then(res => {
      console.log(res)
    }, error => {
      console.log(2)
    })
  }
}
</script>
<style lang="scss" scoped>
.messagePage{
    .title{
        display: flex;
        justify-content: space-between;
        margin-bottom:20px;
        span{
            font: 20px/36px '';
            &:last-child{
                font: 12px/36px "";
            }
        }
    }
    #tabNav{
        ul{
            border:1px solid #dfe4ed;
            height:30px;
            border-radius:2px;
            display:flex;
            li{
                float: left;
                width:76px;
                height:30px;
                border-right:1px solid #dfe4ed;
                text-align:center;
                line-height:30px;
                color:#6e7381;
                &:last-child{
                    border-right:none;
                } 
            }
            .active{
                background:#6e7381;
                color:#fff;
            }
        }
    }
    .messagePage-ul{
        padding:0;
        li{
            border-bottom:1px dashed #ebedf1;
            padding:20px 0;
            .box{
                margin-left:30px;
                p{
                    color:#6e7381;
                    span{
                        &:last-child{
                            font:14px/18px '';
                            color:#bdc1cc;
                            margin-left:10px;
                            
                        }
                    }
                }
                i{
                    margin-left:-30px;
                        margin-right:7px;
                }
                .news-main{
                    font-size:13px;
                    span{
                        color:#13b1eb!important;
                    }
                }
            }
            
        }
    }
}    

</style>

