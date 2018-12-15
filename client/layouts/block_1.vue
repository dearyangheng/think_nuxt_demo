<template>
  <div class="block_1">
    <div class="header">{{}}</div>
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
  },
  asyncData (ctx) {
    console.log(ctx)
  }
};
</script>

<style>
.block_1{
  width:100%;height:100%;
  display: flex;
  flex-direction: column;
}
.block_1 .header{
  height:60px;background:blue;flex-shrink: 0;width:100%;
}
.block_1 .content{
  height:0;
  flex-grow: 1;width:100%;
}

.block_1 .footer{
  height:60px;background:blue;flex-shrink: 0;width:100%;
}
</style>
