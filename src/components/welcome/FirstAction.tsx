import { defineComponent } from 'vue';
import { footerlayout } from './footerlayout';
import { RouterLink } from 'vue-router';
import s from './welcome.module.scss';

export const FirstAction = defineComponent({
  setup: () => {
    return () => (
      <>
        <div class={s.wrapper}>
          <div class={s.actions}>
            <RouterLink to='/' class={s.fake}><h2>跳过</h2></RouterLink>
            <RouterLink to='/Welcome/2'><h2>下一页</h2></RouterLink>
            <RouterLink to='/'><h2>跳过</h2></RouterLink>
          </div>
        </div>

      </>
    )
  }
})
