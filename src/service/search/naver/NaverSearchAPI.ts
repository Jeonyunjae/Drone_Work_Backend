import axios from "axios";
//import request from "request";
import { logManager } from "../../../utilty/logManager/\blogManager";

interface Items {
  lastBuildDate: Date;
  total: number;
  start: number;
  display: number;
  items: Item;
}
interface Item {
  title: string;
  link: string;
  description: string;
  bloggername: string;
  bloggerlink: string;
  postdate: string;
}

class SearchAPI_Naver {
  clientID: string;
  clientSecret: string;

  constructor(Id: string, Secret: string) {
    this.clientID = Id;
    this.clientSecret = Secret;
  }

  async SearchAPI_Naver(query: string, display: number, start: number, sort: string) {
    let obj: any = null;
    var api_url =
      "https://openapi.naver.com/v1/search/blog?query=" + encodeURI(query);

    if (start != 0) api_url = api_url + "&display=" + display;
    if (sort == "sim" || sort == "date") api_url = api_url + "&sort=" + sort;

    var request = require("request");
    var options = {
      url: api_url,
      headers: {
        "X-Naver-Client-Id": this.clientID,
        "X-Naver-Client-Secret": this.clientSecret,
      },
    };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        obj = JSON.parse(body);
        //console.log(obj)
        return obj;
        //res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        //res.end(body);
        //logManager.InfoToJson(obj);
      } else {
        //res.status(response.statusCode).end();
        logManager.Info("error = " + response.statusCode);
      }
    });
    return obj;
  }
}

export default SearchAPI_Naver;
