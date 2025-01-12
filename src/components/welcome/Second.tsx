import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome.module.scss';

export const Second = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <svg class={s.IconSize}>
            <use xlinkHref='#clock' />
          </svg>
          <h1>每日提醒<br />不要遗漏每一笔账单</h1>
        </div>
      </div>
    )
  }
})

Second.displayName = "Second"
