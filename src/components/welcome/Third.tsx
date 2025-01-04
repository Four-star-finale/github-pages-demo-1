import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome.module.scss';
import chart from "../../assets/icons/chart.svg"
export const Third = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={chart} class={s.img}></img>
          <h1 >数据可视化<br></br>收支一目了然</h1>
        </div>
      </div>
    )
  }
})
