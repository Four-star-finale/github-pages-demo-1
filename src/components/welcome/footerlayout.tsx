import { defineComponent, FunctionalComponent } from 'vue';
import s from './welcome.module.scss';


export const footerlayout = defineComponent({
  setup(_, { slots }) {//为什么要添加"_,"呢
    return () => (
      <>
        <div class={s.wrapper}>
          <div class={s.actions}>
            {slots.buttons?.()}
          </div>
        </div >
      </>
    )
  }
}
) 