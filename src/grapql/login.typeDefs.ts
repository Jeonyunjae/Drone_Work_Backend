import { gql } from "apollo-server";

export default gql`
  type LoginResult {
    ok: Boolean!
  }
  type Query {
    "로그인 API -> UserInfo에서 아이디 비빌번호 확인"
    login(
      userCode: String!
      password: String!
    ): LoginResult!
  }
`;