import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import s from './welcome.module.scss';
export const SecondAction = defineComponent({
  setup: () => {
    return () => (
      <>
        <div class={s.wrapper}>
          <div class={s.actions}>
            <RouterLink to='/' class={s.fake}><h2>跳过</h2></RouterLink>
            <RouterLink to='/Welcome/3'><h2>下一页</h2></RouterLink>
            <RouterLink to='/'><h2>跳过</h2></RouterLink>
          </div>
        </div>
      </>
    )
  }
})