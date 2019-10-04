import loadable from "@loadable/component";

const pages = [
  {
    path: "/",
    exact: true,
    component: loadable(() => import("./IndexPage"))
  }
];

export default pages;
