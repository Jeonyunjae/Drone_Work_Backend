import { gql } from "apollo-server";

export default gql`
  
  type Query {
    "Local Search API"
    SearchAPI_Local(
      query: String!
      display: Int!
      start: Int
      sort: String
    ): Items_Local!
  }
`;
