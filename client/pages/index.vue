<template>
  <div class="index">
    <span>请访问后台<nuxt-link to="/admin">后台</nuxt-link></span>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '网站首页',
      meta: [
        {
          hid: "description",
          name: "description",
          content: '网站首页'
        }
      ]
    }
  }
};
</script>

<style lang="less">
.index{
  display: flex;
  width:100%;height:100%;
  justify-content: center;
  align-items: center;
  span{
    font-size: 24px;
  }
}
</style>
