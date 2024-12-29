import { defineComponent, Transition, VNode } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg';

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <h1>山竹记账</h1>
        </header>
        <main class={s.main}>
          <RouterView name='main'>
            {({ Component: X, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) => (
              <Transition name='slide-fade'>
                {X}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer class={s.footer}><RouterView name='footer' /></footer>
      </div >
    )
  }
})