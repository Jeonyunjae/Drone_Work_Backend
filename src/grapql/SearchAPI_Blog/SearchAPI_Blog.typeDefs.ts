import { gql } from "apollo-server";

export default gql`
  type Query {
    "BLOG Search API"
    SearchAPI_Blog(
      query: String!
      display: Int!
      start: Int
      sort: String
    ): Items_Blog!
  }
`;
