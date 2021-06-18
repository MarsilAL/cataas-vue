<template>
  <div id="app">
    <label for>Select a Tag :</label>
    <select id="sel" v-model="selectedtag" @change="getCat">
      <option v-for="(tag, index) in tagslist" v-bind:key="index">{{ tag }}</option>
    </select>
    {{totalPics}}
    <label for>|| Pics Limit :</label>
    <input class="li" type="text" v-model="limit" @input="getCat" />
    <label for>|| Pics in row :</label>
    <select id="sel" v-model="picInRow" @change="setHeigh">
      <option value="100%">1</option>
      <option value="50%">2</option>
      <option value="33.33%">3</option>
      <option value="25%">4</option>
      <option value="20%">5</option>
      <option value="16%">6</option>
      <option value="14.2%">7</option>
      <option value="12.5%">8</option>
      <option value="11.1111%">9</option>
      <option value="10%">10</option>
    </select>
    <br />
    <CatImg
      v-for="(cat, index) in showList"
      v-bind:key="index"
      v-on:click.right.native="deleteCat(index)"
      v-on:click.left.native="openCat(cat.id)"
      :imgUrl="cat.id"
      :picsInRow="picInRow"
      :picsHeigh="picHeigh"
    />
  </div>
</template> 

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import CatImg from "./components/CatImg.vue";

export default {
  name: "App",
  components: {
    CatImg,
  },
  data() {
    return {
      tagslist: [],
      showList: [],
      picInRow: "20%",
      picHeigh: "190px",
      Catslist: [],
      selectedtag: "",
      totalPics: 0,
      limit: 10,
    };
  },
  methods: {
    getTags() {
      Vue.axios.get("https://cataas.com/api/tags").then((results1) => {
        console.log(results1);
        this.tagslist = results1.data;
      });
    },
    getCat() {
      Vue.axios
        .get("https://cataas.com/api/cats?tags=" + this.selectedtag)
        .then((results) => {
          console.log(results);

          this.Catslist = results.data;
          this.totalPics = this.Catslist.length;
          this.showList = this.Catslist.splice(0, this.limit);
        });
    },
    setHeigh() {
      if (this.picInRow === "100%") {
        return (this.picHeigh = "450px");
      } else {
        return (this.picHeigh = "190px");
      }
    },
    deleteCat(index) {
      this.showList.splice(index, 1);
      console.log("deelllll");
    },
    openCat(imgu) {
      var uri = "https://cataas.com/cat/" + imgu;
      console.log("open a pic \n " + uri);
      window.open(uri, "_blank");
    },
  },
  created: function () {
    this.getTags();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
