import { defineComponent, PropType } from 'vue';
import s from "../shared/Button.module.scss";

interface Props {
  onClick?: (e: MouseEvent) => void
}

export const Button = defineComponent({
  setup(props, context) {
    return () => (
      <button class={s.button} >
        {context.slots.default?.()}
      </button>
    )
  }
})