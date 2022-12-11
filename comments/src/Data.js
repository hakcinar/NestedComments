import image from "./Assets/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
const comments = [
  {
    id: "0",
    Comment: "Bu birinci yorum",
    Author: "Hakan",
    Date: "24/11/2022",
    Upvotes: "0",
    img: image,
    replies: [
      {
        id: "2",
        Author: "Hakan",
        Date: "24/11/2022",
        Comment: "Birinci yorumun ilk yanıtı",
        Upvotes: "0",
        img: image,
      },
      {
        id: "3",
        Author: "Hakan",
        Date: "24/11/2022",
        Comment: "Birinici yorumun ikinci yanıtı",
        Upvotes: "0",
        img: image,
      },
    ],
  },

  {
    id: "1",
    Comment: "İkinci yorum",
    Author: "Hakan",
    Date: "24/11/2022",
    Upvotes: "0",
    replies: [],
    img: image,
  },

  {
    id: "2",
    Comment: "Hello world",
    Author: "Hakan",
    Date: "24/11/2022",
    Upvotes: "0",
    img: image,
    replies: [
      {
        id: "2",
        Author: "Hakan",
        Date: "24/11/2022",
        Comment: "Hello world",
        Upvotes: "0",
        img: image,
      },
      {
        id: "3",
        Author: "Hakan",
        Date: "24/11/2022",
        Comment: "Hello world",
        Upvotes: "0",
        img: image,
      },
    ],
  },

  {
    id: "3",
    Comment: "Hello world",
    Author: "Hakan",
    Date: "24/11/2022",
    Upvotes: "0",
    img: image,
    replies: [
      {
        id: "2",
        Author: "Hakan",
        Date: "24/11/2022",
        Comment: "Hello world",
        Upvotes: "0",
        img: image,
      },
      {
        id: "3",
        Author: "Hakan",
        Date: "24/11/2022",
        Comment: "Hello world",
        Upvotes: "0",
        img: image,
      },
    ],
  },
];

export default comments;
