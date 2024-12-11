import { Foo } from "../views/Foo"
import { Bar } from "../views/Bar"
import { Welcome } from "../views/Welcome"
import { First } from "../components/First"

export const routes = [
  { path: '/', component: Foo },
  { path: '/about', component: Bar },
  {
    path: '/Welcome',
    component: Welcome,
    children: [
      { path: '1', component: First }
    ]
  }
]