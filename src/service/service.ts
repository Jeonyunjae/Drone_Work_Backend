import SearchAPI_Naver from "./search/naver/NaverSearchAPI";

class Service {
    SearchAPI_Naver: SearchAPI_Naver = null;

  constructor() {
    this.SearchAPI_Naver = new SearchAPI_Naver(process.env.NAVER_CLIENT_ID, process.env.NAVER_CLIENT_SECRET);
  }
}

const service = new Service();

export default service;
