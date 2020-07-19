<template>
  <div id="Header">
    <div class="header_title">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>
import CONSTANTS from "@/constants/Common.constants";
export default {
  name: "Header",
  data() {
    return {
      title: CONSTANTS.BANNER_MESSAGE
    }
  },
};
</script>

<style>
#Header {
  height: 55px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  background-color: #f5f5f5;
  background-image: linear-gradient(to bottom, #ffffff, #e2e2e2);
  border-bottom: 1px solid #ccc;
  margin-bottom: 1px !important;
}

.header_title {
  margin: 0 auto;
}
</style>