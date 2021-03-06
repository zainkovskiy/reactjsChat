import { Layout } from "components/Layout";
import { ProfileRedux } from "containers/ProfileContainer";

export const routes = [
  {
    path: '/',
    exact: true,
    component: Layout,
  },
  {
    path: '/chats/:id',
    exact: true,
    component: Layout,
  },
  {
    path: '/profile',
    exact: true,
    component: ProfileRedux,
  }
]