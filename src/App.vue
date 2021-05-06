<template>
  <div class="app">
    <page-header></page-header>
    <page-content></page-content>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import PageContent from './components/PageContent'

export default {
  components: {
    PageHeader,
    PageFooter,
    PageContent
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.app{
  border:1px solid #41B883;
  margin:0 auto;
  width:1000px;
  min-height: 200px;
  box-shadow:0 0 30px rgba(65,184,131,0.2);
}
a{
  text-decoration: none;
}
</style>
