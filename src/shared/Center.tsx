import { defineComponent } from 'vue';
import s from "../shared/Center.module.scss"


export const Center = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.center}>{
        context.slots.default?.()
      }</div>
    )
  }
})