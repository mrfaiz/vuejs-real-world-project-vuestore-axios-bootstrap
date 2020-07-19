<template>
  <footer id="Footer">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="logo-font">Home</router-link>
        <span class="attribution">
          This is a footer
        </span>
      </div>
    </footer>
</template>
<script>
  export default {
    name: 'Footer',
  };
</script>
<style>
</style>