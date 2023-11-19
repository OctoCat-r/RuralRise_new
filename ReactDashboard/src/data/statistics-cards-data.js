import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "FY2022-23",
    value: "$31.4 bn",
    footer: {
      color: "text-green-500",
      // value: "+55%",
      label: "Total Imports",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "FY2022-23",
    value: "$43.2 bn",
    footer: {
      color: "text-green-500",
      // value: "+3%",
      label: "Total Exports",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "FY2022-23",
    value: "330m ton",
    footer: {
      // color: "text-red-500",
      // value: "-2%",
      label: "Total Production",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "FY2022-23",
    value: "150m ton",
    footer: {
      // color: "text-green-500",
      // value: "+5%",
      label: "Total Consumption",
    },
  },
];

export default statisticsCardsData;
