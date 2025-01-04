import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome.module.scss';
import pig from "../../assets/icons/pig.svg"
export const First = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <svg>
            <use xlinkHref='#pig'></use>
          </svg>
          <h1 >会挣钱<br></br>还要会省钱</h1>
        </div>
      </div>
    )
  }
})

First.displayName = "First"
