import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome.module.scss';

export const Fourth = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <svg class={s.IconSize}>
            <use xlinkHref='#cloud' />
          </svg>
          <h1>云储备<br />再也不怕数据丢失</h1>
        </div>
      </div>
    )
  }
})

Fourth.displayName = "Fourth"
