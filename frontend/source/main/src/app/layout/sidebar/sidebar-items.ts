import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  {
    path: '',
    title: 'MENUITEMS.MAIN.TEXT',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },

  // Admin Modules

  {
    path: '/admin/dashboard/main',
    title: 'MENUITEMS.DASHBOARD.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      // {
      //   path: '/admin/dashboard/main',
      //   title: 'MENUITEMS.DASHBOARD.LIST.DASHBOARD',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },

    ],
  },
  {
    path: '/admin/teachers/all-teachers',
    title: 'MENUITEMS.TEACHERS.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'person',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      // {
      //   path: '/admin/teachers/all-teachers',
      //   title: 'MENUITEMS.TEACHERS.LIST.ALL TEACHERS',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
      // {
      //   path: '/admin/teachers/add-teacher',
      //   title: 'MENUITEMS.TEACHERS.LIST.ADD-TEACHER',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
      // {
      //   path: '/admin/teachers/edit-teacher',
      //   title: 'MENUITEMS.TEACHERS.LIST.EDIT-TEACHER',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
      // {
      //   path: '/admin/teachers/about-teacher',
      //   title: 'MENUITEMS.TEACHERS.LIST.ABOUT-TEACHER',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
    ],
  },
  {
    path: '',
    title: 'MENUITEMS.STUDENTS.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'people_alt',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/students/all-students',
        title: 'MENUITEMS.STUDENTS.LIST.ALL STUDENT',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      // {
      //   path: '/admin/students/add-student',
      //   title: 'MENUITEMS.STUDENTS.LIST.ADD STUDENT',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
      // {
      //   path: '/admin/students/edit-student',
      //   title: 'MENUITEMS.STUDENTS.LIST.EDIT STUDENT',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
      // {
      //   path: '/admin/students/about-student',
      //   title: 'MENUITEMS.STUDENTS.LIST.ABOUT STUDENT',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
      {
        path: '/admin/students/student-attendance',
        title: 'MENUITEMS.STUDENTS.LIST.STUDENT ATTENDANCE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },
  {
    path: '',
    title: 'MENUITEMS.COURSES.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'school',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/courses/all-courses',
        title: 'MENUITEMS.COURSES.LIST.ALL-COURSES',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/courses/add-course',
        title: 'MENUITEMS.COURSES.LIST.ADD-COURSE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/admin/courses/edit-course',
        title: 'MENUITEMS.COURSES.LIST.EDIT-COURSE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      // {
      //   path: '/admin/courses/about-course',
      //   title: 'MENUITEMS.COURSES.LIST.ABOUT-COURSE',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
    ],
  },

  {
    path: '/admin/schools/all-schools',
    title: 'MENUITEMS.SCHOOLS.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'business',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      // {
      //   path: '/admin/schools/all-schools',
      //   title: 'MENUITEMS.SCHOOLS.LIST.ALL-SCHOOLS',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },

    ],
  },
  {
    path: '',
    title: 'MENUITEMS.FEES.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'monetization_on',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [
      {
        path: '/admin/fees/all-fees',
        title: 'MENUITEMS.FEES.LIST.ALL-FEES',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      // {
      //   path: '/admin/fees/add-fees',
      //   title: 'MENUITEMS.FEES.LIST.ADD-FEES',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
      // {
      //   path: '/admin/fees/edit-fees',
      //   title: 'MENUITEMS.FEES.LIST.EDIT-FEES',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
      // {
      //   path: '/admin/fees/fee-receipt',
      //   title: 'MENUITEMS.FEES.LIST.FEE-RECEIPT',
      //   iconType: '',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   badge: '',
      //   badgeClass: '',
      //   role: [''],
      //   submenu: [],
      // },
    ],
  },
      {
    path: 'settings',
    title: 'MENUITEMS.ADMIN.LIST.SETTINGS',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Admin'],
    submenu: [],
    },
  // {
  //   path: '',
  //   title: 'MENUITEMS.ATTENDANCE.TEXT',
  //   iconType: 'material-icons-two-tone',
  //   icon: 'history_edu',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   badge: '',
  //   badgeClass: '',
  //   role: ['Admin'],
  //   submenu: [
  //     {
  //       path: '/admin/attendance/staff',
  //       title: 'MENUITEMS.ATTENDANCE.LIST.STAFF',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: ['Admin'],
  //       submenu: [],
  //     },
  //     {
  //       path: '/admin/attendance/details',
  //       title: 'MENUITEMS.ATTENDANCE.LIST.DETAILS',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: ['Admin'],
  //       submenu: [],
  //     },
  //     {
  //       path: '/admin/attendance/attendance-sheet',
  //       title: 'MENUITEMS.ATTENDANCE.LIST.SHEET',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: ['Admin'],
  //       submenu: [],
  //     },
  //   ],
  // },

  // Teacher Modules

  {
    path: '/teacher/dashboard',
    title: 'MENUITEMS.TEACHER.LIST.DASHBOARD',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '/teacher/lectures',
    title: 'MENUITEMS.TEACHER.LIST.LECTURES',
    iconType: 'material-icons-two-tone',
    icon: 'menu_book',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },

  {
    path: '/teacher/leave-request',
    title: 'MENUITEMS.TEACHER.LIST.LEAVE-REQUEST',
    iconType: 'material-icons-two-tone',
    icon: 'offline_pin',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
   {
    path: '/teacher/exam-schedule',
    title: 'MENUITEMS.TEACHER.LIST.EXAM-SCHEDULE',
    iconType: 'material-icons-two-tone',
    icon: 'history_edu',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '/teacher/settings',
    title: 'MENUITEMS.TEACHER.LIST.SETTINGS',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [],
  },
  {
    path: '',
    title: 'MENUITEMS.COURSES.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'school',
    class: 'menu-toggle',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Teacher'],
    submenu: [
      {
        path: '/teacher/courses/all-courses',
        title: 'MENUITEMS.COURSES.LIST.ALL-COURSES',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/teacher/courses/add-course',
        title: 'MENUITEMS.COURSES.LIST.ADD-COURSE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/teacher/courses/edit-course',
        title: 'MENUITEMS.COURSES.LIST.EDIT-COURSE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
      {
        path: '/teacher/courses/about-course',
        title: 'MENUITEMS.COURSES.LIST.ABOUT-COURSE',
        iconType: '',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        role: [''],
        submenu: [],
      },
    ],
  },


  // Student Modules

  {
    path: '/student/dashboard',
    title: 'MENUITEMS.STUDENT.LIST.DASHBOARD',
    iconType: 'material-icons-two-tone',
    icon: 'space_dashboard',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/homework',
    title: 'MENUITEMS.STUDENT.LIST.HOMEWORK',
    iconType: 'material-icons-two-tone',
    icon: 'article',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/leave-request',
    title: 'MENUITEMS.STUDENT.LIST.LEAVE-REQUEST',
    iconType: 'material-icons-two-tone',
    icon: 'offline_pin',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/timetable',
    title: 'MENUITEMS.STUDENT.LIST.TIME-TABLE',
    iconType: 'material-icons-two-tone',
    icon: 'table_chart',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },

  {
    path: '/student/settings',
    title: 'MENUITEMS.STUDENT.LIST.SETTINGS',
    iconType: 'material-icons-two-tone',
    icon: 'settings',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  {
    path: '/student/feedback',
    title: 'MENUITEMS.STUDENT.LIST.FEEDBACK',
    iconType: 'material-icons-two-tone',
    icon: 'school',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['Student'],
    submenu: [],
  },
  // Common Module

  {
    path: '',
    title: 'MENUITEMS.APPS.TEXT',
    iconType: '',
    icon: '',
    class: '',
    groupTitle: true,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },
  // {
  //   path: 'calendar',
  //   title: 'MENUITEMS.CALENDAR.TEXT',
  //   iconType: 'material-icons-two-tone',
  //   icon: 'event_note',
  //   class: '',
  //   groupTitle: false,
  //   badge: 'New',
  //   badgeClass: 'badge bg-blue sidebar-badge float-end',
  //   role: ['All'],
  //   submenu: [],
  // },
  {
    path: 'task',
    title: 'MENUITEMS.TASK.TEXT',
    iconType: 'material-icons-two-tone',
    icon: 'fact_check',
    class: '',
    groupTitle: false,
    badge: '',
    badgeClass: '',
    role: ['All'],
    submenu: [],
  },

  // {
  //   path: '',
  //   title: 'Email',
  //   iconType: 'material-icons-two-tone',
  //   icon: 'email',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   badge: '',
  //   badgeClass: '',
  //   role: ['All'],
  //   submenu: [
  //     {
  //       path: '/email/inbox',
  //       title: 'Inbox',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     {
  //       path: '/email/compose',
  //       title: 'Compose',
  //       iconType: '',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       badge: '',
  //       badgeClass: '',
  //       role: [''],
  //       submenu: [],
  //     },
  //     // {
  //     //   path: '/email/read-mail',
  //     //   title: 'Read Email',
  //     //   iconType: '',
  //     //   icon: '',
  //     //   class: 'ml-menu',
  //     //   groupTitle: false,
  //     //   badge: '',
  //     //   badgeClass: '',
  //     //   role: [''],
  //     //   submenu: [],
  //     // },
  //   ],
  // },
];
