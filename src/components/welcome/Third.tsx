import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome.module.scss';

export const Third = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <svg class={s.IconSize}>
            <use xlinkHref='#chart' />
          </svg>
          <h1>数据可视化<br />收支一目了然</h1>
        </div>
      </div>
    )
  }
})

Third.displayName = "Third"
