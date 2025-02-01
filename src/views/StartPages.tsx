import { defineComponent, ref } from 'vue';
import { Button } from "../shared/Button";
import { FloatButton } from '../shared/FloatButton';
import s from './StartPages.module.scss';
import { Center } from '../shared/Center';
import { Icon } from '../shared/Icon';
import { Swiper } from '../hooks/useSwiper';
import { NavBar } from '../shared/NavBar';
import { Overlay } from '../shared/Overlay';

export const StartPage = defineComponent({
  setup: (props, context) => {
    const { currentPage, pages, } = Swiper();
    console.log('当前页面:', currentPage.value);
    console.log('页面列表:', pages);
    const onClick = () => {
      console.log('hi');
    };
    const refOverlayVisiable = ref(false)

    const onClickMenu = () => {
      refOverlayVisiable.value = !refOverlayVisiable.value
    };
    return () => (
      <div>
        <NavBar>
          {{
            default: () => "山竹记账",
            icon: () => <Icon name='menu' class={s.navIcon} onClick={onClickMenu} />
          }}
        </NavBar>
        <Center class={s.pig_wrapper}>
          <Icon name="pig" class={s.pig}></Icon>
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>测试</Button>
        </div>
        <FloatButton iconName='add' />
        {refOverlayVisiable.value && <Overlay onClose={() => refOverlayVisiable.value = false} />}
      </div>
    );
  }
});