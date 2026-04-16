/* eslint-disable react/no-unknown-property */

/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
    return <style jsx global>{`

    // 底色
    body{
        background-color: white;
    }
    .dark body{
        background-color: black;
    }

    #theme-proxio .bg-primary {
        --tw-bg-opacity: 1;
        background-color: #121212;
    }
    
    @media (min-width: 540px) {
        #theme-proxio .container {
            max-width: 540px;
        }
    }
    @media (min-width: 720px) {
        #theme-proxio .container {
            max-width: 720px;
        }
    }
    
    @media (min-width: 960px) {
        #theme-proxio .container {
            max-width: 960px;
        }
    }
    @media (min-width: 1140px) {
        #theme-proxio .container {
            max-width: 1140px;
        }
    }
        
    @media (min-width: 1536px) {
        #theme-proxio .container {
            max-width: 1140px;
        }
    }
        

    #theme-proxio .container {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-right: 16px;
        padding-left: 16px;
    }

  #theme-proxio .sticky{
    position: fixed;
    z-index: 20;
    background-color: rgb(255 255 255 / 0.8);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  

  .dark\:bg-dark:is(.dark *) {
    background-color: black!important;
 }

  :is(.dark #theme-proxio .sticky){
    background-color: rgb(17 25 40 / 0.8);
  }
  
  #theme-proxio .sticky {
    -webkit-backdrop-filter: blur(5px);
            backdrop-filter: blur(5px);
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  }
  
  #theme-proxio .sticky .navbar-logo{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  #theme-proxio .sticky #navbarToggler span{
    --tw-bg-opacity: 1;
    background-color: rgb(17 25 40 / var(--tw-bg-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #navbarToggler span){
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  }
  
  #theme-proxio .sticky #navbarCollapse li > a{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky #navbarCollapse li > a:hover{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }

  #theme-proxio .sticky #navbarCollapse li > button{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #navbarCollapse li > a){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #navbarCollapse li > a:hover){
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
  }

  :is(.dark #theme-proxio .sticky #navbarCollapse li > button){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }

  #navbarCollapse li .ud-menu-scroll.active{
    opacity: 0.7;
  }
  
  #theme-proxio .sticky #navbarCollapse li .ud-menu-scroll.active{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }
  
  #theme-proxio .sticky .loginBtn{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky .loginBtn:hover{
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
    opacity: 1;
  }
  
  :is(.dark #theme-proxio .sticky .loginBtn){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky .loginBtn:hover){
    --tw-text-opacity: 1;
    color: rgb(55 88 249 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky .signUpBtn{
    --tw-bg-opacity: 1;
    background-color: rgb(55 88 249 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky .signUpBtn:hover{
    --tw-bg-opacity: 1;
    background-color: rgb(27 68 200 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  #theme-proxio .sticky #themeSwitcher ~ span{
    --tw-text-opacity: 1;
    color: rgb(17 25 40 / var(--tw-text-opacity));
  }
  
  :is(.dark #theme-proxio .sticky #themeSwitcher ~ span){
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity));
  }
  
  .navbarTogglerActive > span:nth-child(1){
    top: 7px;
    --tw-rotate: 45deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .navbarTogglerActive > span:nth-child(2){
    opacity: 0;
  }
  
  .navbarTogglerActive > span:nth-child(3){
    top: -8px;
    --tw-rotate: 135deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
  
  .text-body-color{
    --tw-text-opacity: 1;
    color: rgb(99 115 129 / var(--tw-text-opacity));
  }
  
  .text-body-secondary{
    --tw-text-opacity: 1;
    color: rgb(136 153 168 / var(--tw-text-opacity));
  }

  
.common-carousel .swiper-button-next:after,
.common-carousel .swiper-button-prev:after{
  display: none;
}

.common-carousel .swiper-button-next,
.common-carousel .swiper-button-prev{
  position: static !important;
  margin: 0px;
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(17 25 40 / var(--tw-text-opacity));
  --tw-shadow: 0px 8px 15px 0px rgba(72, 72, 138, 0.08);
  --tw-shadow-colored: 0px 8px 15px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 000), var(--tw-ring-shadow, 0 0 000), var(--tw-shadow);
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.common-carousel .swiper-button-next:hover,
.common-carousel .swiper-button-prev:hover{
  --tw-bg-opacity: 1;
  background-color: rgb(55 88 249 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  --tw-shadow: 0 0 000;
  --tw-shadow-colored: 0 0 000;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 000), var(--tw-ring-shadow, 0 0 000), var(--tw-shadow);
}

:is(.dark .common-carousel .swiper-button-next),:is(.dark 
.common-carousel .swiper-button-prev){
  --tw-bg-opacity: 1;
  background-color: rgb(17 25 40 / var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.common-carousel .swiper-button-next svg,
.common-carousel .swiper-button-prev svg{
  height: auto;
  width: auto;
}

    /* 🔴 建筑作品集 Snøhetta 风格 - 首页 + 列表页 全覆盖 🔴 */

    /* 1. 强制取消所有卡片背景、圆角、阴影 */
    #theme-proxio div[class*="card"],
    #theme-proxio div[class*="blog"],
    #theme-proxio div[class*="post"],
    #theme-proxio div[class*="article"],
    #theme-proxio .wow.fadeInUp {
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
      border-radius: 0 !important;
      padding: 0 !important;
      margin: 0 0 100px 0 !important;
      width: 100% !important;
      max-width: 100% !important;
    }

    /* 2. 强制图片全屏宽、无圆角、铺满、悬停放大 */
    #theme-proxio div[class*="card"] img,
    #theme-proxio div[class*="blog"] img,
    #theme-proxio div[class*="post"] img,
    #theme-proxio div[class*="article"] img,
    #theme-proxio .wow.fadeInUp img {
      width: 100% !important;
      height: auto !important;
      max-height: none !important;
      border-radius: 0 !important;
      object-fit: cover !important;
      transition: transform 0.7s ease !important;
    }

    #theme-proxio div[class*="card"] img:hover,
    #theme-proxio div[class*="blog"] img:hover,
    #theme-proxio div[class*="post"] img:hover,
    #theme-proxio div[class*="article"] img:hover,
    #theme-proxio .wow.fadeInUp img:hover {
      transform: scale(1.05) !important;
    }

    /* 3. 强制标题文字在图下方，极简高级 */
    #theme-proxio div[class*="card"] h1,
    #theme-proxio div[class*="card"] h2,
    #theme-proxio div[class*="card"] h3,
    #theme-proxio div[class*="blog"] h1,
    #theme-proxio div[class*="blog"] h2,
    #theme-proxio div[class*="blog"] h3,
    #theme-proxio div[class*="post"] h1,
    #theme-proxio div[class*="post"] h2,
    #theme-proxio div[class*="post"] h3,
    #theme-proxio div[class*="article"] h1,
    #theme-proxio div[class*="article"] h2,
    #theme-proxio div[class*="article"] h3,
    #theme-proxio .wow.fadeInUp h1,
    #theme-proxio .wow.fadeInUp h2,
    #theme-proxio .wow.fadeInUp h3 {
      font-size: 28px !important;
      font-weight: 400 !important;
      margin: 24px 0 12px 0 !important;
      text-align: left !important;
      color: #111 !important;
      line-height: 1.2 !important;
    }

    /* 4. 强制简介文字灰色小字 */
    #theme-proxio div[class*="card"] p,
    #theme-proxio div[class*="blog"] p,
    #theme-proxio div[class*="post"] p,
    #theme-proxio div[class*="article"] p,
    #theme-proxio .wow.fadeInUp p {
      font-size: 15px !important;
      color: #777 !important;
      margin: 0 !important;
      line-height: 1.5 !important;
      max-width: 700px !important;
    }

    /* 5. 强制取消网格布局，改成全屏单列大图流 */
    #theme-proxio div[class*="grid"],
    #theme-proxio div[class*="flex"].flex-wrap {
      display: block !important;
      max-width: 100% !important;
      padding: 0 !important;
      margin: 0 !important;
    }

    /* 6. 强制隐藏日期标签（建筑作品集不需要日期） */
    #theme-proxio span[class*="rounded"],
    #theme-proxio span[class*="bg-primary"],
    #theme-proxio span[class*="text-xs"] {
      display: none !important;
    }

    /* 7. 强制图片容器取消 overflow-hidden 的旋转效果 */
    #theme-proxio div[class*="overflow-hidden"] {
      overflow: visible !important;
    }
    #theme-proxio .group:hover img {
      transform: scale(1.05) !important;
      rotate: 0 !important;
    }

    /* 8. 强制容器宽度 100%，取消 max-width 限制，让图片铺满 */
    #theme-proxio .container {
      max-width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    
    /* 只给标题文字加左右 padding */
    #theme-proxio .container > div > h3,
    #theme-proxio .container > div > p {
      padding-left: 16px !important;
      padding-right: 16px !important;
      max-width: 1400px !important;
      margin-left: auto !important;
      margin-right: auto !important;
    }
    `}</style>
}

export { Style }
