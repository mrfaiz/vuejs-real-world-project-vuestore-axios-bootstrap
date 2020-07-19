<template>
  <div id="ProfilePanel">
    <a href="/">
      <img src="@/assets/avatar.png" class="img-circle" rounded="circle" />
    </a>
    <h5>Alexander Barbie</h5>
  </div>
</template>
<script>
export default {
  name: "ProfilePanel",
  data() {
    return {};
  }
};
</script>

<style>
#ProfilePanel {
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #ccc;
  padding: 10px 25px;
  text-align: center;
 
}
.img-circle {
  border-radius: 50%;
  width: 150px;
}
</style>