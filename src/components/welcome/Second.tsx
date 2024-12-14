import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
export const Second = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <RouterLink to='./Welcome/3'>Second</RouterLink>
      </div>
    )
  }
})