import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import s from './Welcome.module.scss'

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <header>logo</header>
        <main><RouterLink to='/Welcome/1'>First</RouterLink></main>
        <footer></footer>
        <div>
          <RouterView></RouterView>
        </div>
      </div >
    )
  }
})