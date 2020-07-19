<template>
  <div id="app">
    <header>
      <Header />
    </header>
    <div id="body">
      <div class="left_side_bar">
        <LeftSideBar />
      </div>
      <div class="main_body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/layout/Header";
import LeftSideBar from "@/components/layout/LeftSideBar";
export default {
  name: "app",
  components: {
    Header,
    LeftSideBar
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color:  #232525;
   font-size: 14px;
}

html,
body {
  height: 100%;
}

#holder {
  min-height: 100%;
  position: relative;
}

footer {
  height: 50px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
}
.left_side_bar {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 20%; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  background-color: #ffffff;

  border-right: 1px solid #ccc;
  
  border-right: 1px solid #ccc;
  margin-right: 1px !important;
}

.main_body {
  width: 80%;
  position: fixed;
  right: 0;
  height: 100%;
  background-color: white;
  padding-left: 5px;
  padding-top: 5px;
}
</style>