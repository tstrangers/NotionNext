/**
 * 另一个落地页主题
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: 'WELLCOME', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: 'Notion × AI 个人设计与创意作品集', // 英雄区文字
  PROXIO_HERO_TITLE_2: '空间设计 · AIGC内容 · AI轻开发', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL:
    '', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: '', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: false, // 特性区块开关
  PROXIO_FEATURE_TITLE: '为什么选我',
  PROXIO_FEATURE_TEXT_1: '我能让您的项目焕发光彩',
  PROXIO_FEATURE_TEXT_2: '丰富的案例经验，专业的技术服务，优质的沟通效率',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '高效工作流程',
  PROXIO_FEATURE_1_TEXT_1:
    '精简的设计流程确保快速交付，在紧迫的工期下仍能保证品质与细节不打折扣。',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '协作式流程',
  PROXIO_FEATURE_2_TEXT_1: '与你紧密合作，融合反馈意见，打造超越预期的设计',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '细节把控',
  PROXIO_FEATURE_3_TEXT_1:
    '精益求精雕琢每个元素，确保成品精致统一，令人过目难忘',

  PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 按钮跳转

  // 首页生涯区块
  PROXIO_CAREER_ENABLE: true, // 区块开关
  PROXIO_CAREER_TITLE: '工作经历',
  PROXIO_CAREER_TEXT: '以下是我的工作经历',

  // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
  PROXIO_CAREERS: [
    {
title: 'AIGC建筑与数字内容全链路工作流搭建 | 独立设计师',
      bio: '2025.12-至今',
      text: '具备 AIGC 建筑全链路落地能力，可独立搭建 ComfyUI 私有化 AI 底座、训练建筑专属 LoRA 模型，高效联动 Lovart 智能工具批量出图迭代；兼顾全品类 AI 视觉内容创作与镜头叙事优化，熟练运用自然语言快速搭建并部署全栈个人设计网站，赋能设计数字化落地'
    },
    {
      title: '浮梁县茶源和美乡村建设项目 | 项目建筑师',
      bio: '2024.09-2026.02',
      text: '擅长县域乡村更新落地项目，主导民居改造、公共空间与景观节点整体提升；负责场地踏勘、需求梳理、方案优化与空间效果把控，独立完成建模、效果图、AI模型训练及CAD深化，联动多专业协同落地，借助AI工具实现多风格快速渲染，高效适配甲方迭代需求。'
    },
    {
      title: '惠州环两山建筑艺术计划「策城记」展览空间设计 | 助理建筑师',
      bio: '2025.12-2025.12',
      text: '统筹建筑艺术展整体空间设计，围绕策展主题完成场地布局、参观动线、展陈分区与视觉氛围一体化营造，兼顾专业表达与公众观展体验；独立负责平面优化、立面及展墙结构方案，搭建 SU/Rhino 空间模型，输出 CAD 施工图纸，把控设计落地尺寸与规范衔接。'
    },
    {
      title: '古榕文学村-雕塑设计 | 助理建筑师',
      bio: '2025.03-2025.09',
      text: '负责惠州乡村产业项目地标打造，主导入口主题雕塑与大地艺术景观装置整体设计，塑造园区视觉核心与网红打卡节点；独立完成概念构思、造型创作、尺寸推演及材料甄选，对接结构施工图深化，全程跟进工厂生产、现场巡检，及时整改施工偏差，保障设计效果完美落地。'
    },
    {
      title: '斐济大地艺术发电机计划国际艺术方案 | 助理建筑师',
      bio: '2025.02-2025.05',
      text: '参与跨国大地艺术与新能源主题国际方案征集，聚焦可持续能源、大地景观与公共艺术跨界融合；独立把控整体艺术概念构思、场地介入策略规划，统筹能源系统逻辑架构与空间形态完整设计，以生态低碳理念完成跨界艺术方案整体创作。'
    },
    {
      title: '冰岛可再生能源研究中心国际建筑设计竞赛 | 助理建筑师',
      bio: '2024.10-2025.01',
      text: '参与全球国际建筑设计竞赛，以可再生能源与低碳生态为核心理念，完成研究中心整体概念设计与空间规划；主导方案推演、场地布局、功能流线及低碳策略落地，独立搭建设计逻辑与空间创新体系，全程编制竞赛文本、分析图纸及最终展示版面。'
    },
  ],

  // 文章区块
  PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '设计作品',
  PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '我的最新动态',
  
  // 首页用户测评区块
  PROXIO_TESTIMONIALS_ENABLE: false, // 测评区块开关
  PROXIO_TESTIMONIALS_TITLE: '用户反馈',
  PROXIO_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  PROXIO_TESTIMONIALS_TEXT_2:
    '数千位站长选择用NotionNext搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',

  // 用户测评处的跳转按钮
  PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
      PROXIO_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  PROXIO_FAQ_ENABLE: false, // 常见问题模块开关
  PROXIO_FAQ_TITLE: '常见问题解答',
  PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
  PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
  PROXIO_FAQS: [
    {
      q: 'NotionNext有帮助文档吗？',
      a: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署'
    },
    {
      q: '部署后要如何编写文章？',
      a: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>'
    },
    {
      q: '站点部署失败，更新失败？',
      a: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助'
    },
    {
      q: '文章没有实时同步？',
      a: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决'
    }
  ],

  // 关于作者区块
  PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
  PROXIO_ABOUT_TITLE: '个人简介',
  PROXIO_ABOUT_TEXT_1: '建筑设计师 / 空间设计师 / AIGC 创意设计师',
  PROXIO_ABOUT_TEXT_2:
    '我是一名建筑设计 + AIGC 双向创作的实践者，喜欢用创意和 AI 工具把想法落地。擅长空间设计、视觉表达与内容创作，熟练运用各类建模软件，也会用 AI 制作动画、广告、短剧这类动态内容。享受把灵感变成可看、可展示、可落地的真实成果。',
  PROXIO_ABOUT_PHOTO_URL: 'https://raw.githubusercontent.com/tstrangers/img-bed/main/20260329-DJI_20260329113153_0717_D.jpg',
  PROXIO_ABOUT_KEY_1: '',
  PROXIO_ABOUT_VAL_1: '建筑设计',
  PROXIO_ABOUT_KEY_2: '',
  PROXIO_ABOUT_VAL_2: '空间设计',
  PROXIO_ABOUT_KEY_3: '',
  PROXIO_ABOUT_VAL_3: 'AIGC设计',
  PROXIO_ABOUT_KEY_4: '',
  PROXIO_ABOUT_VAL_4: 'Vibe Coding',

  PROXIO_ABOUT_BUTTON_URL: '/resume-portfolio.zip',
  PROXIO_ABOUT_BUTTON_TEXT: '下载简历和作品',

  // 横向滚动文字
  PROXIO_BRANDS_ENABLE: true, // 滚动文字
  PROXIO_BRANDS: [
    '建筑设计',
    '空间设计',
    'AIGC设计',
    '雕塑设计',
    '展陈空间设计'
  ],

  PROXIO_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '',
      menus: [
        {
          title: '',
          href: ''
        },
        {
          title: '',
          href: ''
        }
      ]
    },
    {
      name: '联系方式',
      menus: [
        { title: '1049987821@qq.com', href: '' },
        {
          title: '18236850436',
          href: ''
        },
        {
          title: '',
          href: ''
        },
        {
          title: '',
          href: ''
        },
        {
          title: '',
          href: ''
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
  PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  PROXIO_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  PROXIO_CTA_ENABLE: false,
  PROXIO_CTA_TITLE: '与我建立联系',
  PROXIO_CTA_TITLE_2: '让我们立刻启动您的项目',
  PROXIO_CTA_DESCRIPTION:
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
  PROXIO_CTA_BUTTON: true, // 是否显示按钮
  PROXIO_CTA_BUTTON_URL: '/about',
  PROXIO_CTA_BUTTON_TEXT: '联系我',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
