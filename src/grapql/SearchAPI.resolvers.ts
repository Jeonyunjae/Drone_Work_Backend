import { Resolvers } from "../types";
import { logManager } from "../utilty/logManager/\blogManager";

import fetch from "node-fetch";
import service from "../service/service";

const resolvers: Resolvers = {
  Query: {
    SearchAPI: async (_, { query, display, start, sort }) => {
      //google

      //daum

      //naver
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
      
      let result:Items = await service.SearchAPI_Naver.SearchAPI_Naver(
        query,
        display,
        start,
        sort
      );
      //facebook
        console.log(result);
      //instagram
      return {
        result,
      };
    },
  },
};

export default resolvers;
