import axios from "axios";
//import request from "request";
import { logManager } from "../../../utilty/logManager/\blogManager";
import APIProperties from "./NaverAPI.properties";

class NaverAPI {
  private SearchAPI: any;
  constructor(ClientId: string, ClientSecret: string) {
    this.SearchAPI = axios.create({
      baseURL: APIProperties.NAVER.BASE,
      headers: APIProperties.NAVER.HEADER,
    });
  }
  getSearchBlog(query: string, display: number, start: number, sort: string) {
    const data = this.SearchAPI.get(
      APIProperties.NAVER.SEARCH + APIProperties.NAVER.SEARCH_Blog,
      {
        params: {
          query: query,
          display: display || 10,
          start: start || 1,
          sort: sort || "sim",
        },
      }
    ).then(function(response){
      return response.data;
    }).catch(function (error) {
      logManager.Info(error.message);
    });
    return data;
  }

  getSearchLocal(query: string, display: number, start: number, sort: string) {
    const data = this.SearchAPI.get(
      APIProperties.NAVER.SEARCH + APIProperties.NAVER.SEARCH_Local,
      {
        params: {
          query: query,
          display: display || 10,
          start: start || 1,
          sort: sort || "sim",
        },
      }
    ).then(function(response){
      return response.data;
    }).catch(function (error) {
      logManager.Info(error.message);
    });
    return data;
  }
}

export default NaverAPI;
