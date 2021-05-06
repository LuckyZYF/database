<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/logo1.png" alt="">
            <h1>中软测试系统</h1>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header{
    height: 100px;
    width: 100%;
    align-items: center;
    background: #41B883;
}
.logo{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 20px;
    color: #fff;
}
img{
    height: 60px;
}
h1{
    color:rgba(255,255,255,0.9);
}
</style>
