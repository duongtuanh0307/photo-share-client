export type PhotoTypes = {
  url: string;
  description: string;
};

export type TopicTypes = {
  id: number;
  topic: string;
  color: string;
  photos: PhotoTypes[];
};

type dataTypes = TopicTypes[];

export const guestPageData: dataTypes = [
  {
    id: 1,
    topic: "weeknight dinner idea",
    color: "purple",
    photos: [
      {
        url:
          "https://i.pinimg.com/originals/d2/e5/78/d2e5786dcf272fdb327d287a2d97fa2e.jpg",
        description: "",
      },
      {
        url:
          "https://images.immediate.co.uk/production/volatile/sites/30/2019/12/tandoori-trout-bb9fe6c.jpg?quality=90&resize=960,872",
        description: "",
      },
      {
        url:
          "http://www.emmaslittlekitchen.com/wp-content/uploads/2014/10/IMG_4697-1024x764.jpg",
        description: "",
      },
      {
        url:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-recipes-marquee-1577978180.png?crop=0.663xw:0.993xh;0.171xw,0&resize=640:*",
        description: "",
      },
      {
        url:
          "https://media.self.com/photos/5aaad3bc19b7c01d73149e1c/master/pass/0717-cheeseburger-herb-corn-salad-lg.jpg",
        description: "",
      },
      {
        url:
          "https://blog.myfitnesspal.com/wp-content/uploads/2017/12/Essential-Guide-to-Healthy-Eating-2.png",
        description: "",
      },
      {
        url:
          "https://www.flavcity.com/wp-content/uploads/2019/08/aldi-nachos-salad.jpg",
        description: "",
      },
      {
        url:
          "https://www.flavcity.com/wp-content/uploads/2019/08/aldi-fried-rice.jpg",
        description: "",
      },
    ],
  },
  {
    id: 2,
    topic: "home decor idea",
    color: "red",
    photos: [
      {
        url:
          "https://i.pinimg.com/originals/fa/0d/a7/fa0da742f8360f66084bc4f6aae7fa3d.png",
        description: "",
      },
      {
        url:
          "https://i.pinimg.com/originals/f5/03/85/f503851205463aea5459da1ca9edb764.jpg",
        description: "",
      },
      {
        url:
          "https://i.pinimg.com/originals/fa/0d/a7/fa0da742f8360f66084bc4f6aae7fa3d.png",
        description: "",
      },
      {
        url: "https://homedecormodels.com/wp-content/uploads/2020/08/0-7.jpg",
        description: "",
      },
      {
        url:
          "https://i.pinimg.com/736x/e1/e2/b3/e1e2b3f9716b8129497d4b6c00da1e26.jpg",
        description: "",
      },
      {
        url:
          "https://ecoforestdecor.com/wp-content/uploads/121072400_2770206293250021_5965951826358334894_o.jpg",
        description: "",
      },
      {
        url:
          "https://bizweb.dktcdn.net/thumb/large/100/178/833/articles/thiet-ke-chung-cu-thien-hien-dai-1pn-home-decorvn-bia-1.jpg?v=1591588065193",
        description: "",
      },
      {
        url:
          "https://ugolini.co.th/wp-content/uploads/9839/want-to-change-up-your-home-decor-enter-foerni-hong-kongs-first-luxe-furniture-subscription.jpg",
        description: "",
      },
    ],
  },
  {
    id: 3,
    topic: "new look outfit",
    color: "blue",
    photos: [
      {
        url:
          "https://ryuryumall.jp/onlineprod/23/mode-4827/mode-4827_01_700_700.jpg",
        description: "",
      },
      {
        url:
          "https://i.pinimg.com/originals/f0/19/14/f019143171b9e0d5cdd427e6560e7746.jpg",
        description: "",
      },
      {
        url: "https://c.imgz.jp/221/26864221/26864221b_18_d_500.jpg",
        description: "",
      },
      {
        url:
          "https://tasclap.k-img.com/images/tasclapicv/450/000/000/3/3396/tasclapimage_3396_32_1.jpg?d=20191118104456",
        description: "",
      },
      {
        url:
          "https://i.pinimg.com/originals/46/29/aa/4629aa391c3e11e3d29197f4e41d1cad.jpg",
        description: "",
      },
      {
        url:
          "https://images.boardriders.com/global/rvca-products/all/default/hi-res/q3jkrhrvf9_rvca,wg_3664_frt1.jpg",
        description: "",
      },
      {
        url:
          "https://www.urban-research.jp/common/images/products/color/3/382953/1681249_base.jpg?20200716175052",
        description: "",
      },
      {
        url:
          "https://images.bewakoof.com/utter/content/2656/content_Tee_with_skirt.jpg",
        description: "",
      },
    ],
  },
  {
    id: 4,
    topic: "green thumb idea",
    color: "green",
    photos: [
      {
        url:
          "https://www.ikea.com/us/en/images/products/fejka-artificial-potted-plant-indoor-outdoor-monstera__0614197_PE686822_S5.JPG",
        description: "",
      },
      {
        url:
          "https://salisburygreenhouse.com/wp-content/uploads/Top-10-Plants-That-Make-You-Happy-feature.png",
        description: "",
      },
      {
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_rNc9vS618q7gLFxZLDcxOr-QrfRK0dsaA&usqp=CAU",
        description: "",
      },
      {
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1UN3prYvnVicZluwJdBHcGBROOGWRVsl7g&usqp=CAU",
        description: "",
      },
      {
        url:
          "https://post.healthline.com/wp-content/uploads/2020/05/435791-Forget-You-Have-Plants-11-Types-That-Will-Forgive-You_Thumnail.jpg",
        description: "",
      },
      {
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkK7-sIPYYDJXqmFmKRBl5JnKLpMzjuIaxg&usqp=CAU",
        description: "",
      },
      {
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4es1qcXLKfmjJm6JbIY_zaEm36jpKnqvA-w&usqp=CAU",
        description: "",
      },
      {
        url:
          "https://res.cloudinary.com/patch-gardens/image/upload/c_fill,f_auto,h_840,q_auto:good,w_840/v1604602574/aupkyv8vkvhaiywcvebj.jpg",
        description: "",
      },
    ],
  },
];
