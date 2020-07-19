import URLS from "@/constants/App.urls";
import axios from "axios";

export default {
  connectWithRosBridge() {
    let data = {
      host_ip: URLS.ROS_BRIDGE_ADDRESS,
      host_port: URLS.ROS_BRIDGE_PORT,
    };
    const url = new URL("/connect", URLS.API_GATEWAY_URL);
    return axios.post(url, data).catch((error) => {
      throw new Error(error);
    });
  },
  fetchOosList() {
    const url = new URL("/get-all-oos", URLS.API_GATEWAY_URL);
    return axios.post(url).catch((error) => {
      throw new Error(error);
    });
  },
  subscribeATestService() {
    const url = new URL("/subscribe-test-service", URLS.API_GATEWAY_URL);
    return axios.post(url).catch((error) => {
      throw new Error(error);
    });
  },
  fetchRosStatus() {
    const url = new URL("/ros-status", URLS.API_GATEWAY_URL);
    return axios.post(url).catch((error) => {
      throw new Error(error);
    });
  },
};
