import NaverAPI from "./search/naver/NaverAPI.controller";
import SearchAPI_Naver from "./search/naver/NaverAPI.controller";

class Service {
  NaverAPI: NaverAPI = null;

  constructor() {
    this.NaverAPI = new NaverAPI(process.env.NAVER_CLIENT_ID, process.env.NAVER_CLIENT_SECRET);
  }
}

const service = new Service();

export default service;
