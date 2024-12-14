import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './welcome/First.modual.scss'

export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <card></card>
        <action>
          <RouterLink to='/Welcome/2'>下一页</RouterLink>
        </action>
        <div>
          <RouterView></RouterView>
        </div>
      </div>

    )
  }
})