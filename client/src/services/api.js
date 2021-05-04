import axios from "axios";
// import config from "@/config/config";

export default () => {
  return axios.create({
    baseURL: "http://localhost:8090/api/v1",
  });
};
