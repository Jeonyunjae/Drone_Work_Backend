const APIProperties = {
  NAVER: {
    HEADER: {
      "Content-type": "application/json",
      "X-Naver-Client-Id": "NXUnBi1hGRDD0YALBt0h",
      "X-Naver-Client-Secret": "As4fRZod9c",
    },
    BASE: "https://openapi.naver.com/v1/",
    SEARCH: "search/",
    SEARCH_Blog: "blog",
    SEARCH_News: "news",
    SEARCH_Book: "book_adv",
    SEARCH_Adult: "adult",
    SEARCH_Encyc: "encyc",
    SEARCH_Movie: "movie",
    SEARCH_Cafe: "cafearticle",
    SEARCH_Kin: "kin",
    SEARCH_Local: "local",
    SEARCH_Errata: "errata",
    SEARCH_Web: "webkr",
    SEARCH_Image: "image",
    SEARCH_Shop: "shop",
    SEARCH_Doc: "doc",
    property: {
      title: "title",
      link: "link",
      description: "desc",
      bloggername: "author",
      postdate: "date",
    },
  },
};

export default APIProperties;
