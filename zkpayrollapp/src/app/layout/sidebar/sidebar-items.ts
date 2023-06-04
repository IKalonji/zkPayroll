import { RouteInfo } from "./sidebar.metadata";
export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "MENUITEMS.MAIN.TEXT",
    moduleName: "",
    iconType: "",
    icon: "",
    class: "",
    groupTitle: true,
    badge: "",
    badgeClass: "",
    role: ["All"],
    submenu: [],
  },

  // Admin Modules
  {
    path: "",
    title: "MENUITEMS.DASHBOARD.TEXT",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "monitor",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
    ],
  },
  {
    path: "",
    title: "MENUITEMS.PROJECTS.TEXT",
    moduleName: "projects",
    iconType: "feather",
    icon: "book",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/projects/allProjects",
        title: "MENUITEMS.PROJECTS.LIST.ALL-PROJECTS",
        moduleName: "projects",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/projects/addProject",
        title: "MENUITEMS.PROJECTS.LIST.ADD-PROJECT",
        moduleName: "projects",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/projects/projectDetails",
        title: "MENUITEMS.PROJECTS.LIST.PROJECT-DETAILS",
        moduleName: "projects",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.EMPLOYEES.TEXT",
    moduleName: "employees",
    iconType: "feather",
    icon: "users",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/employees/allEmployees",
        title: "MENUITEMS.EMPLOYEES.LIST.ALL-EMPLOYEE",
        moduleName: "employees",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/employees/add-employee",
        title: "MENUITEMS.EMPLOYEES.LIST.ADD-EMPLOYEE",
        moduleName: "employees",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/employees/edit-employee",
        title: "MENUITEMS.EMPLOYEES.LIST.EDIT-EMPLOYEE",
        moduleName: "employees",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/employees/employee-profile",
        title: "MENUITEMS.EMPLOYEES.LIST.PROFILE",
        moduleName: "employees",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.CLIENTS.TEXT",
    moduleName: "clients",
    iconType: "feather",
    icon: "user",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/clients/all-clients",
        title: "MENUITEMS.CLIENTS.LIST.ALL-CLIENTS",
        moduleName: "clients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/clients/add-client",
        title: "MENUITEMS.CLIENTS.LIST.ADD-CLIENT",
        moduleName: "clients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/clients/edit-client",
        title: "MENUITEMS.CLIENTS.LIST.EDIT-CLIENT",
        moduleName: "clients",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },
  {
    path: "",
    title: "MENUITEMS.ACCOUNTS.TEXT",
    moduleName: "accounts",
    iconType: "feather",
    icon: "book-open",
    class: "menu-toggle",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Admin"],
    submenu: [
      {
        path: "/admin/accounts/all-payment",
        title: "MENUITEMS.ACCOUNTS.LIST.ALL-PAYMENTS",
        moduleName: "accounts",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/accounts/add-payment",
        title: "MENUITEMS.ACCOUNTS.LIST.ADD-PAYMENT",
        moduleName: "accounts",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
      {
        path: "/admin/accounts/invoice",
        title: "MENUITEMS.ACCOUNTS.LIST.INVOICE",
        moduleName: "accounts",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        badge: "",
        badgeClass: "",
        role: [""],
        submenu: [],
      },
    ],
  },

  // Employee Modules
  {
    path: "/employee/dashboard",
    title: "MENUITEMS.EMPLOYEE.DASHBOARD",
    moduleName: "dashboard",
    iconType: "feather",
    icon: "airplay",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Employee"],
    submenu: [],
  },
  {
    path: "/employee/attendance",
    title: "MENUITEMS.EMPLOYEE.ATTENDANCE",
    moduleName: "attendance",
    iconType: "feather",
    icon: "edit",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Employee"],
    submenu: [],
  },
  {
    path: "/employee/myprojects",
    title: "MENUITEMS.EMPLOYEE.MYPROJECTS",
    moduleName: "myprojects",
    iconType: "feather",
    icon: "database",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Employee"],
    submenu: [],
  },
  {
    path: "/employee/mytasks",
    title: "MENUITEMS.EMPLOYEE.MYTASKS",
    moduleName: "mytasks",
    iconType: "feather",
    icon: "command",
    class: "",
    groupTitle: false,
    badge: "",
    badgeClass: "",
    role: ["Employee"],
    submenu: [],
  }
];
