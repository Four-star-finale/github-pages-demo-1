import { defineComponent, FunctionalComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome.module.scss';
import clock from '../../assets/icons/clock.svg'


export const welcomelayout = defineComponent({
  setup(_, { slots }) {//为什么要添加"_,"呢
    return () => (
      <>
        <div class={s.wrapper}>
          <div class={s.card}>
            {slots.icons?.()},
            {slots.writting?.()}
          </div>
          <div class={s.actions}>
            {slots.buttons?.()}
          </div>
        </div >
      </>
    )
  }
}
) 