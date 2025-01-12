import { Welcome } from "../views/Welcome"
import { First } from "../components/welcome/First"
import { Second } from "../components/welcome/Second"
import { Third } from "../components/welcome/Third"
import { Fourth } from "../components/welcome/Fourth"
import { RouteRecordRaw } from "vue-router"
import { FirstAction } from "../components/welcome/FirstAction"
import { SecondAction } from "../components/welcome/SecondAction"
import { ThirdAction } from "../components/welcome/ThirdAction"
import { FourthAction } from "../components/welcome/FourthAction"


export const routes: RouteRecordRaw[] = [
  {
    path: '/Welcome',
    component: Welcome,
    children: [
      { path: '', redirect: '/welcome/1' },
      { path: '1', components: { main: First, footer: FirstAction } },
      { path: '2', components: { main: Second, footer: SecondAction } },
      { path: '3', components: { main: Third, footer: ThirdAction } },
      { path: '4', components: { main: Fourth, footer: FourthAction } }
    ]
  },
  { path: '/', redirect: '/welcome' }
]