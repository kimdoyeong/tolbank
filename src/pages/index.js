import loadable from "@loadable/component";

const pages = [
  {
    path: "/",
    exact: true,
    component: loadable(() => import("./IndexPage"))
  },
  {
    path: "/signup",
    exact: true,
    component: loadable(() => import("./SignUpPage"))
  },
  {
    path: "/drive",
    exact: true,
    component: loadable(() => import("./DrivePage"))
  }
];

export default pages;
