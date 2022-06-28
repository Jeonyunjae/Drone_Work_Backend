import { gql } from "apollo-server";

export default gql`
  type Items {
    lastBuildDate: String
    total: Int
    start: Int
    display: Int
    items: [Item]
  }
  type Item {
    title: String
    link: String
    description: String
    bloggername: String
    bloggerlink: String
    postdate: String
  }
  type Query {
    "로그인 API -> UserInfo에서 아이디 비빌번호 확인"
    SearchAPI(
      query: String!
      display: Int!
      start: Int
      sort: String
    ): Items!
  }
`;
