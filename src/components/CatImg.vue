<template>
  <img :src="'https://cataas.com/cat/'+imgUrl" :width="picsInRow"  :height="picsHeigh"/>
</template>

<script>
export default {
  name: "CatImg",
  props: {
    imgUrl: String,
    picsInRow: String,
    picsHeigh: String,
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
