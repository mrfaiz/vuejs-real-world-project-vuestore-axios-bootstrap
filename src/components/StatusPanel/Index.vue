<template>
  <div id="StatusPanel">
    <div class="row status_panel">
      <div
        :class="[ getRosStatus ?'status_online':'status_offline']"
      >Ros Status {{ getRosStatus?"Online":"Offline" }}</div>
    </div>
    <div class="status_container">
      <SingleOOS v-for="oos in getOosList" v-bind:key="oos.name" v-bind:oos="oos"></SingleOOS>
    </div>
  </div>
</template>
<script>
import {
  CONNECT_WITH_ROS_BRIDGE,
  SUBSCRIBE_A_TEST_SERVICE,
  FETCH_OOS_LIST,
  FETCH_ROS_STATUS
} from "@/store/actionTypes";

import SingleOOS from "./SingleOOS";
export default {
  name: "StatusPanel",
  beforeMount() {},
  data() {
    return {
      timer: ""
    };
  },
  components: { SingleOOS },
  created() {
    this.timer = setInterval(this.timer_methods, 6000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    register_ros_message_handler() {
      if (!this.$store.state.status_store.is_connected_with_ros_bridge) {
        this.$store.dispatch(CONNECT_WITH_ROS_BRIDGE);
      }
    },
    subscription_handler() {
      // if (!this.$store.state.status_store.is_subscribed) {
        this.$store.dispatch(SUBSCRIBE_A_TEST_SERVICE);
      // }
    },
    get_oos_list() {
      this.$store.dispatch(FETCH_OOS_LIST);
    },
    get_ros_status() {
      this.$store.dispatch(FETCH_ROS_STATUS);
    },
    timer_methods() {
      try {
        this.register_ros_message_handler();
      } catch (e) {
        console.log(e);
      }
      try {
        this.subscription_handler();
      } catch (e) {
        console.log(e);
      }
      try {
        this.get_oos_list();
      } catch (e) {
        console.log(e);
      }
      try {
        this.get_ros_status();
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    getOosList() {
      return this.$store.state.status_store.oos_list;
    },
    getRosStatus() {
      return this.$store.state.status_store.ros_status;
    }
  }
};
</script>
<style>
#StatusPanel {
  width: 100%;
}
.status_panel {
  border-bottom: 1px solid #ccc;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status_offline {
  display: flex;
  font-family: "Arial";
  color: white;
  background: red;
  padding: 10px 25px 10px 25px;
}

.status_online {
  display: flex;
  font-family: "Arial";
  color: white;
  background: green;
  padding: 10px 25px 10px 25px;
  align-items: right;
  text-align: center;
}
.status_container {
  padding: 10px 25px;
}
</style>