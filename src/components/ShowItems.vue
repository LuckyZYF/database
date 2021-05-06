<template>
    <div class="box">
        <h1>{{item}}</h1>
    </div>
</template>

<script>
export default {
  props: ['item']

}
</script>

<style lang="less" scoped>

.box{
    width: 90%;
    height: 56px;
    border:3px solid #41B883;
    border-radius: 0 15px;
    margin: 25px 0;
}
h1{
    padding: 0 10px;
    line-height: 56px;
}
</style>
