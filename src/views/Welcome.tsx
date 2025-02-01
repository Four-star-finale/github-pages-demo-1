import { defineComponent, Transition, VNode } from 'vue';
import { RouterLink, RouterView, RouteLocationNormalizedLoaded } from 'vue-router';
import s from './welcome.module.scss'
import logo from '../assets/icons/mangosteen.svg';
import { Swiper } from '../hooks/useSwiper';
import { onMounted } from "vue"

export const Welcome = defineComponent({
  setup: (props, context) => {
    onMounted(() => {
      console.log('Welcome 组件已加载');
    })
    const { currentPage, pages, onTouchStart, onTouchMove } = Swiper();

    return () => <div class={s.wrapper}>
      <header>
        <img src={logo} />
        <h1>山竹记账</h1>
      </header>
      <main
        class={s.main}
        onTouchstart={onTouchStart}
        onTouchmove={onTouchMove}
      >
        <div class={s.card_container}>
          <RouterView name='main'>
            {({ Component: Content, route: R }: { Component: VNode, route: RouteLocationNormalizedLoaded }) =>
              <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
                {Content}
              </Transition>
            }
          </RouterView>
        </div>
        <div class={s.pageIndicator}>
          当前页面：{pages[currentPage.value]}
        </div>
      </main>
      <footer class={s.footer}><RouterView name='footer' /></footer>
    </div>
  }
})