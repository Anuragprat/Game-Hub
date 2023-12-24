import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "f1f16217e97046319ded92d214063f1b",
  },
});
