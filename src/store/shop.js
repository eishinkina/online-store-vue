export default {
  state: {
    shopList: [
      {
        id: 1,
        title: "Nike red",
        descr:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptates",
        img: require("../assets/img/1.png"),
      },
      {
        id: 2,
        title: "Nike default",
        descr:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptates",
        img: require("../assets/img/4.png"),
      },
      {
        id: 3,
        title: "Nike green",
        descr:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptates",
        img: require("../assets/img/7.png"),
      },
      {
        id: 4,
        title: "Nike street",
        descr:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptates",
        img: require("../assets/img/10.png"),
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getShopList(state) {
      return state.shopList;
    },
  },
};
