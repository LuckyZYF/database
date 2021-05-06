<template>
    <div class="login">
        <div class="box">
            <div class="item top">
                <div class="text">
                    账号：
                </div>
                <div class="input">
                    <input type="text" v-model="acctNo">
                </div>
            </div>

            <div class="item">
                <div class="text">
                    密码：
                </div>
                <div class="input">
                    <input type="password" v-model="password">
                </div>
            </div>

            <div class="link">
                <button @click="next">登陆</button>
            </div>
        </div>
    </div>
</template>

<script>
// 导入账号密码
import data from '@/assets/js/data.js'
export default {
  data () {
    return {
      acctNo: '',
      password: ''
    }
  },
  methods: {
    next () {
      if (this.acctNo == '' || this.password == '') {
        alert('账号及密码不能为空')
        return
      }
      const arr = data.acctData
      for (var i = 0; i < arr.length; i++) {
        if ((arr[i].acctNo == this.acctNo) && (arr[i].password == this.password)) {
          this.$router.push('/index')
          return
        } else {
          this.$router.push('/error')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login{
    width: 100%;
    height:100%;
    align-items: center;
    padding: 50px 0;
}
.box{
    width: 459px;
    height: 300px;
    margin: 0 auto;
    border:3px solid #41B883;
    border-radius: 0 15px;
    .top{
        margin-top: 64px;
    }
}
.item{
    display: flex;
    justify-content: center;
    color: #41B883;
    padding: 15px 0;
    align-items: center;
    .text{
        font-size: 20px;
    }
    input{
        border: 1px solid #41B883;
        height: 24px;
        padding: 0 10px;
    }
}
.link{
    display: flex;
    justify-content: center;
    margin-top:24px;
}
button{
    display: block;
    width: 100px;
    height: 36px;
    background:#41B883;
    color:#fff;
    font-size:18px;
    border: 1px solid #41B883;
    border-radius: 0 5px;
    text-align: center;
    line-height: 36px;
    transition: 0.3s;
    &:hover,&.myActive{
        background: #fff;
        color:#41B883;
    }

}
</style>,
