import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome.module.scss';

export const First = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <svg>
            <use xlinkHref='#pig' />
          </svg>
          <h1>会挣钱<br />还要会省钱</h1>
        </div>
      </div>
    )
  }
})

First.displayName = "First"
