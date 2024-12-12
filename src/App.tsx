import { defineComponent } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <div>
          <RouterView></RouterView>
        </div>
      </>)
  }
})