
import { Welcome } from "../views/Welcome"
import { First } from "../components/First"
import { Second } from "../components/Second"
import { Third } from "../components/Third"
import { Fourth } from "../components/Fourth"

export const routes = [
  {
    path: '/Welcome',
    component: Welcome,
    children: [
      { path: '1', component: First },
      { path: '2', component: Second },
      { path: '3', component: Third },
      { path: '4', component: Fourth }
    ]
  }
]