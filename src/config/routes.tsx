import { Welcome } from "../views/Welcome"
import { First } from "../components/welcome/First"
import { Second } from "../components/welcome/Second"
import { Third } from "../components/welcome/Third"
import { Fourth } from "../components/welcome/Fourth"
import { RouteRecordRaw } from "vue-router"
import { FirstAction } from "../components/welcome/FirstAction"
import { footerlayout } from "../components/welcome/footerlayout"
import { SecondAction } from "../components/welcome/SecondAction"


export const routes: RouteRecordRaw[] = [
  {
    path: '/Welcome',
    component: Welcome,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', components: { main: First, footer: FirstAction } },
      { path: '2', components: { main: Second, footer: SecondAction } },
      { path: '3', component: Third },
      { path: '4', component: Fourth }
    ]
  },
  { path: '/', redirect: '/welcome' }
]