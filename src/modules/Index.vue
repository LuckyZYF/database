<template>
    <div class="index">
        <show-items v-for="(items,index) in conArrs" :key="index"
        :item="items"></show-items>
        <div class="link">
            <button @click="next">注销</button>
        </div>
    </div>
</template>

<script>
import ShowItems from '../components/ShowItems'
export default {
  components: {
    ShowItems
  },
  data () {
    return {
      conArrs: []
    }
  },
  created () {
    this.conArrs = [
      '亲爱的用户，你好。',
      '愿你多吃不胖，愿你深情不负，愿你长久幸运。',
      '祝你百事可乐，万事芬达。'
    ]
  },
  methods: {
    next () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.index{
    width: 100%;
    height:100%;
    align-items: center;
    padding: 24px;
}
.box{
    width: 90%;
    border:3px solid #41B883;
    border-radius: 0 15px;
}
.link{
    display: flex;
    justify-content: center;
    margin-top:56px;
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
