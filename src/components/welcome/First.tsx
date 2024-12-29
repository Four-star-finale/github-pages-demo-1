import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome.module.scss';
import { welcomelayout } from './welcomelayout';
import pig from "../../assets/icons/piggy.svg"
export const First = defineComponent({
  setup() {
    return () => (
      <>
        <div class={s.wrapper}>
          <div class={s.card}>
            <img src={pig} class={s.img}></img>
            <h1 >会挣钱<br></br>还要会省钱</h1>
          </div>
        </div>

      </ >
    )
  }
})
