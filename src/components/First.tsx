import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <div>
          <RouterLink to='/Welcome/2'>下一页</RouterLink>
        </div>

      </div>

    )
  }
})