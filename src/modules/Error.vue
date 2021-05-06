<template>
    <div class="error">
        <div class="box">
            <div class="text">
                <h1>账号密码输入有误，请重新输入！</h1>
            </div>

            <div class="link">
                <button @click="back">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.error{
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

}
.text{
    text-align: center;
    margin-top:80px;
    h1{
        color: #41B883;
        font-size: 24px;
    }
}

.link{
    display: flex;
    justify-content: center;
    margin-top:90px;
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
</style>
