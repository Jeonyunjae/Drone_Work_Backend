import { Resolvers } from "../types";

const resolvers: Resolvers = {
  Query: {
    login: async (_, {}) => {
      
      return {
        ok: true,
      };
    },
  },
};

export default resolvers;
