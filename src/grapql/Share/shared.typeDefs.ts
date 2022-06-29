import { gql } from "apollo-server";

export default gql`
  type Items_Local {
    lastBuildDate: String
    total: Int
    start: Int
    display: Int
    items: [Item_Local]
  }
  type Item_Local {
    title: String
    link: String
    description: String
    telephone: String
    address: String
    roadAddress: String
    mapx: Int
    mapy: Int
  }

  type Items_Blog {
    lastBuildDate: String
    total: Int
    start: Int
    display: Int
    category: String
    items: [Item_Blog]
  }
  type Item_Blog {
    title: String
    link: String
    description: String
    bloggername: String
    bloggerlink: String
    postdate: String
  }
`;
