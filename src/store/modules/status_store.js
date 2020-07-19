import StatusService from "@/services/status-services";
import {
  CONNECT_WITH_ROS_BRIDGE,
  FETCH_OOS_LIST,
  SUBSCRIBE_A_TEST_SERVICE,
  FETCH_ROS_STATUS,
} from "../actionTypes";

import {
  SET_ROS_CONNECTION_STATUS,
  SET_OOS_LIST,
  SET_SUBSCRIPTION_RESULT,
  SET_ROS_STATUS,
} from "../mutationTypes";

export const state = {
  is_connected_with_ros_bridge: false,
  oos_list: [],
  ros_status: false,
  is_subscribed: false,
};

export const actions = {
  [CONNECT_WITH_ROS_BRIDGE]({ commit }) {
    return StatusService.connectWithRosBridge()
      .then((response) => {
        commit(SET_ROS_CONNECTION_STATUS, response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [FETCH_OOS_LIST]({ commit }) {
    return StatusService.fetchOosList()
      .then((resonse) => {
        commit(SET_OOS_LIST, resonse);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [SUBSCRIBE_A_TEST_SERVICE]({ commit }) {
    return StatusService.subscribeATestService()
      .then((response) => {
        commit(SET_SUBSCRIPTION_RESULT, response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  [FETCH_ROS_STATUS]({ commit }) {
    return StatusService.fetchRosStatus()
      .then((response) => {
        commit(SET_ROS_STATUS, response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

/* eslint no-param-reassign: ["error", { "props": false }] */
export const mutations = {
  [SET_ROS_CONNECTION_STATUS](currentState, response) {
    console.log(SET_ROS_CONNECTION_STATUS + " =>" + response.data[0]);
    if (response.data[0] == true || response.data[0] == "True") {
      currentState.is_connected_with_ros_bridge = true;
    }
  },
  [SET_SUBSCRIPTION_RESULT](currentState, response) {
    console.log(SET_SUBSCRIPTION_RESULT + " =>" + response.data);
    if (response.data == true) {
      console.log(SET_SUBSCRIPTION_RESULT + " =>" + response.data);
      currentState.is_subscribed = true;
    }
  },
  [SET_OOS_LIST](currentState, response) {
    if (response != undefined) {
      const obj = JSON.parse(response.data);
      let oos_list = [];
      for (const property in obj) {
        oos_list.push(obj[property]);
      }
      currentState.oos_list = oos_list;
    }
  },
  [SET_ROS_STATUS](currentState, response) {
    console.log(SET_ROS_STATUS + " =>" + response.data);
    currentState.ros_status = true;
  },
};

export default {
  state,
  actions,
  mutations,
};
