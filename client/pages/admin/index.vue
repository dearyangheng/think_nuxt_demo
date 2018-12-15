<template>
  <div class="content">
    <h2>信息{{msg}}</h2>
  </div>
</template>

<script>
export default {
  layout: 'block',
  middleware: 'admin_index',
  head() {
    return {
      title: '后台首页',
      meta: [
        {
          hid: "description",
          name: "description",
          content: '网站首页'
        }
      ]
    }
  },
  data: () => {
    return {}
  },
  asyncData (ctx) {
    return {
      msg: ctx.app.msg
    }
  },
  created () {
  }
};
</script>

<style lang="less">
.content{
  display: flex;
  width:100%;height:100%;
  justify-content: center;
  align-items: center;
}
</style>
