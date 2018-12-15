<template>
  <div class="block">
    <div class="header"></div>
    <nuxt class="content"/>
    <div class="footer"></div>
  </div>
</template>

<script>
import AppLogo from "~/components/test.vue";

export default {
  data: () => {
    return {
      msg: "Hello Nuxt.js"
    };
  }
};
</script>

<style>
.block{
  width:100%;height:100%;
  display: flex;
  flex-direction: column;
}
.block .header{
  height:60px;background:pink;flex-shrink: 0;width:100%;
}
.block .content{
  height:0;
  flex-grow: 1;width:100%;
}

.block .footer{
  height:60px;background:pink;flex-shrink: 0;width:100%;
}
</style>
