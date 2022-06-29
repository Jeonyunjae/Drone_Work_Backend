
import fetch from "node-fetch";
import service from "../../service/service";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    SearchAPI_Local: async (_, { query, display, start, sort }) => {
      //google

      //daum

      //naver
      const result = await service.NaverAPI.getSearchLocal(
        query,
        display,
        start,
        sort
      );
      //facebook

      //instagram


      console.log(result);
      return result;
    },
  },
};

export default resolvers;
