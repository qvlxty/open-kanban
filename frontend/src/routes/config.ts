import { KanbanPage, SlotsPage, LoginPage, UsersPage  } from "@/pages"

export enum Routes {
    root = '/',
    kanban = '/kanban',
    users = '/users',
    slots = '/slots',
}

export const basicRoutes = [
  {
    path: Routes.root,
    component: LoginPage,
  },
]

export const privateRoutes = [
  {
    path: Routes.kanban,
    component: KanbanPage,
  },
  {
    path: Routes.users,
    component: UsersPage,
  },
  {
    path: Routes.slots,
    component: SlotsPage,
  },
]