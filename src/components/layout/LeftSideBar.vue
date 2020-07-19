<template>
  <div id="LeftSideBar">
    <b-row>
      <ProfilePanel />
    </b-row>
    <b-row>
      <StatusPanel />
    </b-row>
    <!-- <ul>
      <li>
        <router-link to="/command-panel/24234" class="nav-link" href>CommandPanel</router-link>
        <router-link to="/dship-panel" class="nav-link" href>DShip Panel</router-link>
        <router-link to="/environmental-data-panel" class="nav-link" href>EnvironmentalDataPanel</router-link>
      </li>
    </ul>-->
  </div>
</template>
<script>
import ProfilePanel from "@/components/ProfilePanel/Index";
import StatusPanel from "@/components/StatusPanel/Index";
export default {
  name: "LeftSideBar",
  data() {
    return {};
  },
  components: {
    ProfilePanel,
    StatusPanel
  }
};
</script>

<style>
</style>