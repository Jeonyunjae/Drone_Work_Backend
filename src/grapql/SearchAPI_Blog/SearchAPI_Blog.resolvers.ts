import fetch from "node-fetch";
import service from "../../service/service";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    SearchAPI_Blog: async (_, { query, display, start, sort }) => {

      //google

      //daum

      //naver
      const result = await service.NaverAPI.getSearchBlog(
        query,
        display,
        start,
        sort
      );
      //facebook
      
      //instagram

      return result;
    },
  },
};

export default resolvers;
