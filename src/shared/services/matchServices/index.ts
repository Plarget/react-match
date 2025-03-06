import {TMatchServices} from "./type";
import axios from "axios"

const BASE_URL = "https://app.ftoyd.com/fronttemp-service"

const matchServices: TMatchServices = {
  getMatches: async () => (
    axios.get(`${BASE_URL}/fronttemp`)
      .then(({data}) => data)
  ),
}

export default matchServices