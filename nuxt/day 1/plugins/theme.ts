import { useRoute } from "vue-router";
export default defineNuxtPlugin(() => {
    const changeTheme = (layout: string) => {
      const root = document.documentElement;
  
      if (layout === 'admin') {
        root.style.setProperty('--primary-color', '#0051ae'); 
        root.style.setProperty('--primary-text', '#fbfbfb'); 
    } else {
        root.style.setProperty('--primary-color', '#612eb0'); 
        root.style.setProperty('--primary-text', '#fbfbfb'); 
      }
    };
    const route = useRoute()
    const layout = route.meta.layout || 'default';
    changeTheme(layout);
  
  });
  