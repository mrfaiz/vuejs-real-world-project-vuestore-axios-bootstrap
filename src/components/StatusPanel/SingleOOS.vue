<template>
  <div id="SingleOOS">
    <b-row class="single-oos-style" v-on:click="gotoCommand( oos.name )">
      <b-col md="1">
        <div
          :class="[check_is_active(oos.timestamp)? 'circle circle-green' : 'circle circle-red']"
        >{{oos.name}}</div>
      </b-col>
      <b-col class="texts_properties">OOS {{oos.name}}</b-col>
      <b-col class="last_time">{{timeConversion(oos.timestamp)}}</b-col>
    </b-row>
  </div>
</template>

<script>
import CONSTANTS from "@/constants/Common.constants";

export default {
  name: "SingleOOS",
  props: ["oos"],
  methods: {
    check_is_active(timeInSecs) {
      const currentTimeInMillis = Date.now();
      const givenTime = Math.round(timeInSecs * 1000);
      const inactive_time = currentTimeInMillis - givenTime;
      return inactive_time < CONSTANTS.OFFLINE_PEEK_TIME;
    },
    gotoCommand(oos_name) {
      this.$router.push("/command-panel/" + oos_name);
    },
    timeConversion(timeInSecs) {
      if (!this.check_is_active(timeInSecs)) {
        const currentTimeInMillis = Date.now();
        const givenTime = Math.round(timeInSecs * 1000);
        const millisec = currentTimeInMillis - givenTime;
        var seconds = (millisec / 1000).toFixed(1);

        var minutes = (millisec / (1000 * 60)).toFixed(1);

        var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
        let last_seen = "";
        if (seconds < 60) {
          last_seen = last_seen + " " + seconds + " Sec";
        } else if (minutes < 60) {
          last_seen = last_seen + " " + minutes + " Min";
        } else if (hours < 24) {
          last_seen = last_seen + " " + hours + " Hrs";
        } else {
          last_seen = last_seen + " " + days + " Days";
        }
        return last_seen;
      } else {
        return "";
      }
    }
  }
};
</script>

<style>
.single-oos-style {
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.single-oos-style:hover {
  background-color: #81d4fa;
}
.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 13px;
  color: white;
  line-height: 30px;
  text-align: center;
}
.circle-green {
  background: green;
}
.circle-red {
  background: red;
}

.texts_properties {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  margin-left: 5px;
}
.last_time {
  align-content: right;
  margin-right: 10px;
  text-align: right;
}
</style>