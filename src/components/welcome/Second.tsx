import { defineComponent } from 'vue';
import s from './welcome.module.scss';
import { welcomelayout } from './welcomelayout';
import clock from "../../assets/icons/clock.svg"
export const Second = defineComponent({
  setup() {
    return () => (
      <>
        <div class={s.wrapper}>
          <div class={s.card}>
            <img src={clock} class={s.img}></img>
            <h1 >每日提醒<br></br>不会遗漏每一笔账单</h1>
          </div>
        </div>

      </ >
    )
  }
})


