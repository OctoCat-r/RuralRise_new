import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications, Production, ExportTable, WastageTable } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";

// import ExportsTable from "@/components/ExportsTable"; // Import the component for the Exports table


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Import",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Export",
        path: "/export",
        element: <ExportTable />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Production",
        path: "/production",
        element: <Production />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Consumption",
        path: "/consumption",
        element: <Tables />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Wastage",
        path: "/wastage",
        element: <WastageTable/>,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "notifactions",
        path: "/notifactions",
        element: <Notifications />,
      },
      // {
      // path: "/exports",
      // element: <ExportsTable />
      // }
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
