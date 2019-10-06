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
    component: loadable(() => import("./DrivePage"))
  },
  {
    path: "/price",
    exact: true,
    component: loadable(() => import("./PricePage"))
  },
  {
    path: "/transmission",
    exact: true,
    component: loadable(() => import("./TransmissionPage"))
  },
  {
    path: "/file/*",
    component: loadable(() => import("./FilePage"))
  }
];

export default pages;
