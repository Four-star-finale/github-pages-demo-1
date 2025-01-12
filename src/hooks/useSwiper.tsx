import { ref } from "vue";
import { useRouter } from 'vue-router';

export const Swiper = () => {
  const StartTouch = { startX: 0 }; // 记录起始触摸点
  const currentPage = ref(0); // 当前页索引
  const router = useRouter(); // 路由对象
  const pages = ["/welcome/1", "/welcome/2", "/welcome/3", "/welcome/4"]; // 路由页面数组
  const distance = ref(0); // 记录滑动距离
  const sliding = ref(false); // 防止连续触发滑动事件

  // 切换到上一页
  const previousPage = () => {
    if (currentPage.value > 0) {
      currentPage.value -= 1;
      router.push(pages[currentPage.value]);
    }
  };
  // 切换到下一页
  const nextPage = () => {
    if (currentPage.value < pages.length - 1) {
      currentPage.value += 1;
      router.push(pages[currentPage.value]);
    }
  };

  // 触摸开始事件
  const onTouchStart = (e: TouchEvent) => {
    StartTouch.startX = e.touches[0].clientX;
    distance.value = 0;
    sliding.value = false; // 重置滑动状态
  };

  // 触摸滑动事件
  const onTouchMove = (e: TouchEvent) => {
    if (sliding.value) return; // 如果正在滑动，直接返回

    const moveDistance = e.touches[0].clientX - StartTouch.startX;
    const threshold = 50; // 定义滑动切换阈值（80px）

    // 更新滑动距离
    distance.value = moveDistance;

    // 判断滑动方向并切换页面
    if (Math.abs(moveDistance) >= threshold) {
      if (moveDistance > 0) {
        // 向右滑动
        if (currentPage.value === 0) {
          currentPage.value = pages.length; // 跳转到最后一页
        } else {
          previousPage(); // 切换到上一页
        }
      } else {
        // 向左滑动
        if (currentPage.value === pages.length - 1) {
          currentPage.value = -1; // 跳转到第一页
        } else {
          nextPage(); // 切换到下一页
        }
      }

      sliding.value = true; // 标记当前滑动事件已触发，防止重复滑动
    }
  };

  // 触摸结束事件
  const onTouchEnd = () => {
    distance.value = 0; // 重置滑动距离
  };

  return {
    currentPage,
    distance,
    pages,
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};
