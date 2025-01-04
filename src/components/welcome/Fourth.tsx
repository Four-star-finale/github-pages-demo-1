import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome.module.scss';
import cloud from "../../assets/icons/cloud.svg"
export const Fourth = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img src={cloud} class={s.img}></img>
          <h1 >云备份<br></br>再也不怕数据丢失</h1>
        </div>
      </div>
    )
  }
})
