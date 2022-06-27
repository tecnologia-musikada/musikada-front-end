<template>
  <div class="home">
     <HeaderWithoutBar/>
    <div class="home-body">
      <myPosts/>
    </div>
    <!-- <TopVideos /> --> 
    <MusikadaFooter />  
  </div>
</template>

<script>

/* import TopVideos from "@/components/TopVideos.vue"; */
import MusikadaFooter from "@/components/Footer/MusikadaFooter.vue";
import HeaderWithoutBar from "@/components/Header/HeaderWithoutBar.vue"
import myPosts from "../components/Posts/myPosts.vue"


export default {
  name: "EventsView",
  components: {
    MusikadaFooter,
    /* TopVideos, */
    HeaderWithoutBar,
    myPosts
    
    
  },
  data() {
      return {
      }
    }
};
</script>

<style scoped>
/* .home-body {
  display: flex;
  flex-direction: row;
  text-align: center;
} */
/* .topEventos{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 50px;
}
.topEventos {
  width: 50%;
  float: right;
  border-left: 1px solid #000;
} */


</style>

