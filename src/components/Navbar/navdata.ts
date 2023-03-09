interface INavItem {
  title: string;
  url: string;
}
interface NavData {
  [key: string]: INavItem[];
}

const apis: INavItem[] = [
  {
    title: "Rest API",
    url: "https://github.com/yinotherhino/Express-Rest-Api/tree/main/convert_To_Mongo",
  },
  {
    title: "GraphQL API",
    url: "https://github.com/yinotherhino/graphql_efosa",
  },
];

const mernApps: INavItem[]  = [
  {
    title: "Smooze Music App",
    url: "https://smoozepro.netlify.app/",
  },
  {
    title: "Food Order App",
    url: "https://foodorderring.netlify.app/",
  },
  {
    title: "Ride hailing app",
    url: "https://github.com/yinotherhino/Ridex",
  },
];
const napApps: INavItem[]  = [
  {
    title: "Angular/Nestjs weather app",
    url: "https://seams-weathered.netlify.app",
  },
];
const phpApps: INavItem[]  = [
  {
    title: "PHP/MySQL app",
    url: "https://markazbaraje.org.ng",
  },
];
const pythonApps: INavItem[]  = [
  {
    title: "Python/Django app",
    url: "https://github.com/yinotherhino/Proj_metadata_85_backend",
  },
];

export default {
  APIs: apis,
  "MERN Stack": mernApps,
  "NAP Stack": napApps,
  "PHP/MySQL": phpApps,
  "Python/Django": pythonApps,
} as NavData;
