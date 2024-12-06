import { defineComponent } from 'vue';
const Bar = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>bar</div>
    )
  }
})