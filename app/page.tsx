"use client";

import React, { useState, useEffect, useRef } from "react";

const DICTIONARY = {
  en: {
    title: "CHANG LUJIA",
    subtitle: "personal portfolio",
    enterBtn: "Enter Home →",
    navHome: "Home",
    navAbout: "About",
    navPortfolio: "Portfolio",
    heroTitle: "CHANG LUJIA",
    heroSubtitle: "Research Enthusiast in Digital Media and Creative Innovation",
    heroDesc: "Focusing on sports communication, digital content innovation and cross-cultural communication, with relevant academic and practical accumulation, I am eager to further my academic study in this field under the guidance of mentors.",
    btnPortfolio: "View Portfolio",
    btnAbout: "About",
    aboutTitle: "About Me",
    aboutMeTitle: "About Me",
    aboutMeContent: "I'm Chang Lujia, a 2026 undergraduate majoring in Journalism (Audio-Visual Communication Direction) at Beijing Sport University. My research interests consistently focus on sports communication, international communication, digital content innovation and visual communication.\n\nOver my four years of undergraduate study, I have kept exploring along the path of \"academic tracing - practice implementation - industry verification\": starting from academic research on modern Chinese sports newspapers and traditional sports history, I extended to full-chain practice covering international communication of major events, traditional sports culture IP building, public welfare sports and silver-age sports scene innovation, and accumulated front-line industry experience in sports event communication at top platforms including Tencent and Douyin. I always believe that sports is a universal language across cultures and generations, and communication is the core path to make this power seen by more people.",
    educationTitle: "Education",
    eduSchool: "Beijing Sport University",
    eduMajor: "B.A. in Journalism (Audio-Visual Communication)",
    eduGPA: "GPA: 4.36 / 5.0",
    eduRanking: "Major Ranking:10%",
    eduCoursework: "Selected Coursework",
    eduCourses: [
      "History of Sports Journalism (97)",
      "News Reporting & Writing (95)",
      "Sports Marketing Communication (95)",
      "Audio-Visual Language (94)",
      "History of Chinese & Global Journalism (93)",
      "Sports Video Production (93)",
      "Introduction to Communication Studies (92)"
    ],
    researchTitle: "Academic Research",
    researchList: [
      {
        title: "Urban Style and Sports Newspaper Production (1932–1937)",
        subtitle: "Urban Style and Content Production of Sports Newspapers: A Comparative Study of Tianjin Sports Weekly and Shanghai Diligent Sports Monthly",
        content: "This thesis examines two influential sports periodicals (1932–1937) through content analysis, comparing editorial focus, narrative style, and contributor composition. By situating the publications within the urbanization processes and cultural contexts of Tianjin and Shanghai, the study reveals how regional culture shaped sports media production in modern China. It contributes to comparative research on north–south sports communication history.",
        achievements: [
          "Outstanding Undergraduate Thesis, Beijing Sport University (2 selected university-wide)",
          "Presenter at the 2nd “Media and Sports” Conference, Chinese Association for the History of Journalism and Mass Communication (sole independent undergraduate author)"
        ]
      },
      {
        title: "International Communication Strategies of Traditional Chinese Sports during the Hangzhou Asian Games",
        subtitle: "",
        content: "This project examined the international communication dynamics of traditional Chinese sports throughout the full cycle of the 2023 Hangzhou Asian Games. Using Java-based web scraping, I collected 81 English-language reports published by China Daily, CGTN, and Xinhuanet during the pre-event, event, and post-event phases (June–November 2023). The study conducted empirical analysis across three dimensions: media framing characteristics, differences in sport representation, and degrees of event integration. In addition, I analyzed audience feedback data from YouTube and Facebook to identify international reception patterns and communication bottlenecks. The project ultimately proposed strategic recommendations for enhancing the global communication of traditional culture within mega sporting events, providing both empirical evidence and practical implications.",
        achievements: [
          "National College Students’ Innovation and Entrepreneurship Training Program (only one project in the college, and I am the project leader)"
        ]
      },
      {
        title: "Mùshè: Historical Origins and Contemporary Revitalization",
        subtitle: "Historical Origins and Contemporary Development Pathways of Mùshè (Traditional Chinese Archery Game)",
        content: "Using archival research, survey analysis, and field experimentation, this study reconstructs the historical evolution and rule system of Mùshè. It evaluates contemporary youth awareness and participation willingness, and tests communication strategies through live public events. The project proposes revitalization pathways suited to today’s media and cultural environment.",
        achievements: [
          "Accepted (First Author), 13th National Sports Science Conference"
        ]
      }
    ],
    practiceTitle: "Practice & Entrepreneurship",
    practiceList: [
      {
        title: "YiMu Sports (Youth Entrepreneurship Team)",
        role: "Founder & Director | Oct 2022 – Present",
        content: "YiMu Sports is dedicated to revitalizing traditional Chinese sports through systematic cultural innovation. The project integrates archival research, rule reinterpretation, media visualization, cultural product development, and offline event operations to promote contemporary transformation of traditional sports. Activities were implemented at venues such as the Yuanmingyuan Cultural Market in Beijing and received official recognition from Haidian District cultural and sports authorities. The original IP mascot was praised by Anthony Edgar, former Media Operations Director of the International Olympic Committee. Project outcomes were presented at the 2024 Haidian Sports Industry Innovation Forum. The team has received multiple awards, including Top 22 in the Beijing Cultural and Creative Competition, Bronze Award in the China Computer Design Competition, Top 100 in the Beijing University Innovation Competition, and Second Prize in the Beijing Division of the China “Internet+” Innovation and Entrepreneurship Competition. Two works have been officially registered with the National Copyright Administration.",
        mediaLinks: [
          {
            title: "Experts discuss high-quality development of sports industry",
            url: "https://baijiahao.baidu.com/s?id=1792186836924521226&wfr=spider&for=pc",
            coverImg: "/yimu-media-1.jpg" 
          },
          {
            title: "Beijing News: YiMu Sports from Beijing Sport University",
            url: "http://m.bjnews.com.cn/detail/1701766282129140.html",
            coverImg: "/yimu-media-2.jpg"
          },
          {
            title: "HuaCan Workshop: The Power of Youth in Traditional Sports",
            url: "https://mp.weixin.qq.com/s/59J6K0MfQWz_KNTMgzUpHA",
            coverImg: "/yimu-media-3.jpg"
          },
          {
            title: "BSU Journalism School Summer Social Practice Showcase",
            url: "https://mp.weixin.qq.com/s/WQndwSYmr4aBthknQDbcVA",
            coverImg: "/yimu-media-4.jpg"
          }
        ]
      },
      {
        title: "Green Field Dream Building · Western China Football Aid Program",
        role: "Communication & Design Lead | 2022 – 2023",
        content: "I led the development of the project’s visual identity system and public narrative strategy. Responsibilities included independent mascot IP design, comprehensive presentation development for funding applications and public advocacy, and visual storytelling to articulate project logic and social impact. I also supported promotional material production and offline outreach activities. The project secured RMB 500,000 in dedicated funding, won a National Bronze Award in the “Internet+” Competition, and implemented football support programs across multiple primary and secondary schools in Northwest China, benefiting over 200 rural students."
      },
      {
        title: "Yolo Wellness · Silver Age Gym Innovation Project",
        role: "Venue Design & Product Development Lead | 2023 – 2024",
        content: "I was responsible for age-friendly spatial design and digital product development. Based on the physical and behavioral characteristics of elderly users, I designed a comprehensive wellness gym layout balancing professional functionality, safety standards, and social engagement. I also independently developed the concept and front-end prototype of a wellness app, focusing on exercise guidance, health monitoring, and community interaction. The project won a Municipal Innovation and Entrepreneurship Competition Silver Award, and the design was adopted by the Tianjin Baodi Community Senior Care Center."
      }
    ],
    industryTitle: "Industry Experience",
    industryList: [
      {
        company: "Tencent Sports",
        role: "Visual Design Intern | 2023.09 - 2023.11",
        logo: "/tencent-logo.jpg",
        content: "Worked on visual communication for the 19th Hangzhou Asian Games. Designed daily champion poster series and live broadcast screen visuals. Collaborated on sponsor campaign materials. Content reached 10M+ platform impressions."
      },
      {
        company: "Douyin Sports",
        role: "Event Content Operations Intern | 2024.07 - 2024.10",
        logo: "/douyin-logo.jpg",
        content: "Maintained real-time medal table data and athlete information. Managed broadcast links and match updates. Ensured compliance and operational stability during live coverage."
      }
    ],
    hobbyTitle: "Individual Hobbies",
    // 1. 修改英文版hobbyList格式（从字符串数组改为对象数组）
    hobbyList: [
      { name: "Skiing", img: "/Skiing.jpg" },
      { name: "Mountaineering", img: "/Mountaineering.jpg" },
      { name: "Design", img: "/Design.jpg" },
      { name: "Photography", img: "/Photography.jpg" }
    ],
    // 2. 新增英文版技术能力相关字段
    techTitle: "Tech stack",
    techStack: {
      programming: { title: "programming", skills: ["Python", "Javascript"] },
      vision: { title: "vision", skills: ["PR", "AE", "PS"] },
      ai: { title: "ai", skills: ["Gemini", "Nano banana"] },
      tools: { title: "tools", skills: ["Excel", "PowerPoint (Very Proficient)"] }
    },
    // 3. 新增英文版作品集数据
    portfolioList: [
      { id: "thesis", title: "Urban Style and Sports Newspaper Production...", img: "/city.jpg" },
      { id: "yimu", title: "YiMu Sports - Traditional Sports...", img: "/颐木体育项目介绍_01.jpg" },
      { id: "design", title: "Other Designs", img: "/personal_01.jpg" }
    ],
    // 4. 新增英文版底部署名
    footerText: "The website is designed by Chang Lujia",
  },
  zh: {
    title: "CHANG LUJIA",
    subtitle: "常璐佳个人作品集",
    enterBtn: "进入主页 →",
    navHome: "首页",
    navAbout: "关于",
    navPortfolio: "作品",
    heroTitle: "常璐佳",
    heroSubtitle: "数字媒体与创意创新领域学生",
    heroDesc: "研究聚焦体育传播、数字内容创新与文化传播方向，拥有相关的学术探索与实践积累，衷心希望能在导师的指导下，于本领域开展更深入的学术深造与研究。",
    btnPortfolio: "查看作品",
    btnAbout: "关于我",
    aboutTitle: "关于我",
    aboutMeTitle: "关于我",
    aboutMeContent: "我是常璐佳，北京体育大学新闻学（视听传播方向）2026 届应届本科毕业生，研究方向始终聚焦体育传播、国际传播、数字内容创新与视觉传播。\n\n本科四年，我沿着「学术溯源 — 实践落地 — 行业验证」的路径持续探索：从中国近代体育报刊与传统体育史的学术研究出发，延伸至大型赛事国际传播、传统体育文化 IP 打造、公益体育与银发体育场景创新的全链条实践，同时在腾讯、抖音等头部平台积累了体育赛事传播的一线行业经验。我始终相信，体育是跨越文化与代际的通用语言，而传播，是让这份力量被更多人看见的核心路径。",
    educationTitle: "教育经历",
    eduSchool: "北京体育大学",
    eduMajor: "新闻学（视听传播方向）",
    eduGPA: "GPA：4.36 / 5.0",
    eduRanking: "专业排名：10%",
    eduCoursework: "核心课程",
    eduCourses: [
      "体育新闻传播史（97）",
      "新闻采访与写作（95）",
      "体育营销传播（95）",
      "视听语言（94）",
      "中外新闻传播史（93）",
      "体育视频新闻制作（93）",
      "传播学概论（92）"
    ],
    researchTitle: "学术研究",
    researchList: [
      {
        title: "城市风格与体育报刊内容生产（1932–1937）",
        subtitle: "《城市风格与体育报刊内容生产：以天津〈体育周报〉与上海〈勤奋体育月报〉为中心》",
        content: "本研究以1932—1937年两份具有代表性的体育专业报刊为对象，通过内容分析法比较其选题结构、叙事方式与作者群体特征，并结合天津与上海的城市化进程与地域文化语境，探讨地域文化如何影响近代体育报刊的内容生产机制。研究为近代南北城市体育传播的比较研究提供了新的视角与补充。",
        achievements: [
          "北京体育大学本科优秀毕业论文（学院仅2篇）",
          "入选中国新闻史学会第二届“媒介与体育”学术会议并作发言（唯一以本科生身份独立入选作者）"
        ]
      },
      {
        title: "杭州亚运会中国传统体育国际传播路径研究",
        subtitle: "",
        content: "项目聚焦2023杭州亚运会全周期中国传统体育的国际传播逻辑，通过Java技术抓取China Daily、CGTN、新华网三大官方外宣媒体在亚运预热、举办、收尾全周期（2023.06-2023.11）的81条传统体育相关报道，从媒体传播特征、项目传播差异、赛事关联度三个维度开展实证分析；同时结合YouTube、Facebook海外社交平台的用户反馈数据，厘清海外受众对中国传统体育的接收偏好与传播痛点，最终提出大型国际赛事中传统文化国际传播的优化路径，为相关理论研究与实践落地提供实证参考。",
        achievements: [
          "项目被评选为国家级大学生创新创业训练计划项目（学院仅1项，本人为项目负责人）"
        ]
      },
      {
        title: "木射：历史溯源与当代转化路径",
        subtitle: "《传统体育木射运动的历史溯源与当代发展路径研究》",
        content: "本研究结合文献梳理、问卷调查与实地实验，系统还原木射的历史演变与规则体系，分析当代青少年群体的认知与参与意愿，并通过公共活动实践检验其传播效果。在此基础上，提出契合当代媒介环境与文化语境的创新发展路径。",
        achievements: [
          "以第一作者身份入选第十三届全国体育科学大会"
        ]
      }
    ],
    practiceTitle: "实践与创业",
    practiceList: [
      {
        title: "颐木体育 大学生青年创业团队",
        role: "发起人 & 主理人 | 2022.10 - 至今",
        content: "团队以 “让已逝的传统体育活起来” 为初心，深度发掘中华传统体育文化遗产，通过典籍整理、现代规则再译、传媒可视化呈现、文创产品开发全链条运营，推动传统体育的当代传播与创新发展。项目落地北京圆明园文创市集等多场线下活动，获北京市海淀区文化发展促进中心、海淀区体育局官方认可；原创 IP 吉祥物 “颐木木” 获前奥组委媒体运行总监安东尼・埃德加先生高度赞誉；项目成果受邀在 2024 年海淀区体育产业创新发展论坛作主题分享，获业内专家一致好评。团队先后斩获北京市文创大赛 22 强、“京彩大创” 北京大学生创新创业大赛百强团队、中国计算机大赛铜奖、“挑战杯”北京赛区一等奖、“互联网 +” 创新创业大赛北京赛区二等奖等荣誉，完成 2 项国家版权局作品登记。",
        mediaLinks: [
          { 
            title: "专家企业家纵论体育产业高质量发展路径和新增长点", 
            url: "https://baijiahao.baidu.com/s?id=1792186836924521226&wfr=spider&for=pc",
            coverImg: "/yimu-media-1.jpg" 
          },
          { 
            title: "新京报：文化创意项目赛道 颐古宜新 怡文育体 北京体育大学颐木体育", 
            url: "http://m.bjnews.com.cn/detail/1701766282129140.html",
            coverImg: "/yimu-media-2.jpg" 
          },
          { 
            title: "华灿工场：传承之光：学子力量闪耀，探寻传统体育的精髓", 
            url: "https://mp.weixin.qq.com/s/59J6K0MfQWz_KNTMgzUpHA",
            coverImg: "/yimu-media-3.jpg" 
          },
          { 
            title: "BSU 新传学生汇：新闻与传播学院暑期社会实践团队风采展示（五）", 
            url: "https://mp.weixin.qq.com/s/WQndwSYmr4aBthknQDbcVA",
            coverImg: "/yimu-media-4.jpg" 
          }
        ]
      },
      {
        title: "绿茵筑梦·西部足球助学 大学生青年创业项目",
        role: "宣传设计负责人 | 项目周期：2022 – 2023",
        content: "我负责项目品牌视觉体系构建与公益叙事整体呈现，独立完成吉祥物IP形象设计，构建契合西部足球助学主题的视觉系统；统筹项目申报、成果展示与公益宣讲的全流程PPT策划与制作，通过可视化叙事梳理项目逻辑、呈现社会价值并提升资助方沟通效率；协同团队完成宣传物料设计与线下宣讲视觉支持。项目成功对接专项资金50万元，获“互联网+”全国铜奖，并在西北多所中小学落地足球助学活动，覆盖200余名乡村学生。"
      },
      {
        title: "Yolo康养·银发健身房 大学生青年创新项目",
        role: "场馆设计 & 产品开发负责人 | 项目周期：2023 – 2024",
        content: "我负责项目适老化空间设计与数字产品开发，基于老年群体身体特征与运动需求完成康养健身房整体空间规划，在保障运动专业性的同时强化安全性与社交属性；同时独立完成银发康养App概念设计与前端代码开发，围绕运动指导、健康监测与社区互动三大功能模块构建适老化UI界面与交互逻辑，有效降低老年用户数字使用门槛。项目获市级创新创业大赛银奖，相关设计方案被天津宝坻社区养老服务中心采纳参考。"
      }
    ],
    industryTitle: "行业经历",
    industryList: [
      {
        company: "腾讯科技（北京）有限公司",
        role: "视觉设计实习生 ｜ 2023.09 - 2023.11",
        logo: "/tencent-logo.jpg",
        content: "参与第19届杭州亚运会视觉传播项目，设计每日冠军海报与直播大屏视觉内容，协助商业赞助素材制作。相关内容全平台曝光量超千万。详情见作品集"
      },
      {
        company: "北京抖音信息服务有限公司",
        role: "赛事内容运营实习生 ｜ 2024.07 - 2024.10",
        logo: "/douyin-logo.jpg",
        content: "负责官方奖牌榜实时更新与数据维护，保障运动员信息与比赛数据零差错同步；维护赛事对阵与转播入口；参与赛事直播后台监播工作，确保播出合规与稳定。"
      }
    ],
    hobbyTitle: "个人爱好",
    // 1. 修改中文版hobbyList格式（从字符串数组改为对象数组）
    hobbyList: [
      { name: "滑雪 / Skiing", img: "/Skiing.jpg" },
      { name: "登山 / Mountaineering", img: "/Mountaineering.jpg" },
      { name: "设计 / Design", img: "/Design.jpg" },
      { name: "摄影 / Photography", img: "/Photography.jpg" }
    ],
    // 2. 新增中文版技术能力相关字段
    techTitle: "技术能力",
    techStack: {
      programming: { title: "编程", skills: ["Python", "Javascript"] },
      vision: { title: "视觉", skills: ["PR", "AE", "PS", "Blender", "Nomand"] },
      ai: { title: "AI", skills: ["Gemini", "Nano banana"] },
      tools: { title: "工具", skills: ["Excel", "PowerPoint（非常熟练）"] }
    },
    // 3. 新增中文版作品集数据
    portfolioList: [
      { id: "thesis", title: "城市风格与体育报刊内容生产（1932–1937）", img: "/city.jpg" },
      { id: "yimu", title: "颐木体育——传统体育文化创意项目", img: "/颐木体育项目介绍_01.jpg" },
      { id: "design", title: "其余设计", img: "/personal_01.jpg" }
    ],
    // 4. 新增中文版底部署名
    footerText: "此网站由常璐佳设计",
  }
};

const CollapsibleCard = ({ item, theme }: { item: any, theme: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <div className={`border rounded-xl overflow-hidden mb-4 transition-colors duration-300 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className={`w-full px-6 py-4 flex justify-between items-center transition-colors ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'}`}>
        <div className="text-left pr-4">
          <h3 className="font-bold text-lg">{item.title}</h3>
          {item.role && <p className={`text-sm mt-1 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{item.role}</p>}
        </div>
        <svg className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="p-6 space-y-4">
            {item.subtitle && <p className={`font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{item.subtitle}</p>}
            <p className={`whitespace-pre-wrap leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.content}</p>
            {item.achievements && (
              <ul className="space-y-2 mt-4">
                {item.achievements.map((ach: string, i: number) => (
                  <li key={i} className={`flex items-start gap-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
                    <span className="leading-relaxed">{ach}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.mediaLinks && (
              <div className="mt-6 flex gap-4 overflow-x-auto pb-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {item.mediaLinks.map((link: any, i: number) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="relative flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden group snap-center">
                    <img 
                       src={link.coverImg} alt={link.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                    <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm font-medium line-clamp-3">{link.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PortfolioPage() {
  const [isEntered, setIsEntered] = useState(false);
  const [lang, setLang] = useState<"en" | "zh">("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "portfolio">("home");
  
  // 用于控制放大的图片路径
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  // 👇 【新增在这里】作品集详情页状态管理：null=列表页，字符串=对应项目详情页
  const [activePortfolioItem, setActivePortfolioItem] = useState<"thesis" | "yimu" | "design" | null>(null);

  // 监听 ESC 键关闭图片（保留你原有的代码）
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomedImg(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const themeRef = useRef(theme);
  const pageRef = useRef(currentPage);

  useEffect(() => { themeRef.current = theme; }, [theme]);
  useEffect(() => { pageRef.current = currentPage; }, [currentPage]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const sphereParticles: any[] = [];
    for (let i = 0; i < 800; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = width < 768 ? 160 : 280;
      sphereParticles.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.cos(phi),
        z: r * Math.sin(phi) * Math.sin(theta),
        size: Math.random() * 1.5 + 0.5,
        colorType: Math.random() > 0.5 ? 1 : 2,
      });
    }

    const scatterParticles: any[] = [];
    for (let i = 0; i < 800; i++) {
      scatterParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 0.9 + 0.1,
      });
    }

    let angleX = 0;
    let angleY = 0;
    let currentSphereAlpha = 1;
    let currentScatterAlpha = 0;

    const render = () => {
      angleY += 0.002;
      angleX += 0.001;
      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === "dark";
      const color1 = isDark ? "138, 43, 226" : "90, 30, 180"; 
      const color2 = isDark ? "100, 149, 237" : "50, 100, 200";
      const isHome = pageRef.current === "home";
      
      currentSphereAlpha += ((isHome ? 1 : 0) - currentSphereAlpha) * 0.05;
      currentScatterAlpha += ((isHome ? 0 : 0.2) - currentScatterAlpha) * 0.05;

      if (currentSphereAlpha > 0.01) {
        sphereParticles.forEach((p) => {
          const rotX = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
          const rotZ = p.z * Math.cos(angleY) + p.x * Math.sin(angleY);
          const rotY = p.y * Math.cos(angleX) - rotZ * Math.sin(angleX);
          const finalZ = rotZ * Math.cos(angleX) + p.y * Math.sin(angleX);
          const scale = 800 / (800 + finalZ);
          let x2d = width / 2 + rotX * scale;
          let y2d = height / 2 + rotY * scale;

          const dx = mouse.x - x2d;
          const dy = mouse.y - y2d;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            x2d -= (dx / dist) * force * 20;
            y2d -= (dy / dist) * force * 20;
          }

          ctx.beginPath();
          ctx.arc(x2d, y2d, p.size * scale, 0, Math.PI * 2);
          const alpha = Math.max(0.1, Math.min(1, scale * 1.5 - 0.5)) * currentSphereAlpha;
          ctx.fillStyle = `rgba(${p.colorType === 1 ? color1 : color2}, ${alpha})`;
          ctx.fill();
        });
      }

      if (currentScatterAlpha > 0.01) {
        scatterParticles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let offsetX = 0, offsetY = 0;
          if (dist < 80) {
            const force = (80 - dist) / 80;
            offsetX = -(dx / dist) * force * 1.5;
            offsetY = -(dy / dist) * force * 1.5;
          }

          ctx.beginPath();
          ctx.arc(p.x + offsetX, p.y + offsetY, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color1}, ${currentScatterAlpha})`;
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const t = DICTIONARY[lang];
  const isDark = theme === "dark";

  // 处理图片点击放大
  const handleImgClick = (imgSrc: string) => {
    setZoomedImg(imgSrc);
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden transition-colors duration-1000 ${isDark ? "bg-[#050505] text-white" : "bg-gray-50 text-gray-900"}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Entrance */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 z-50 ${isEntered ? "opacity-0 -translate-y-12 pointer-events-none" : "opacity-100 translate-y-0"}`}>
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4 hover:scale-105 transition-transform duration-500 cursor-default">{t.title}</h1>
        <p className={`text-xl md:text-2xl tracking-widest mb-12 uppercase ${isDark ? "text-gray-400" : "text-gray-500"}`}>{t.subtitle}</p>
        <button onClick={() => setIsEntered(true)} className="group relative px-8 py-3 rounded-full overflow-hidden border border-purple-500/50 hover:border-purple-500 transition-colors duration-300">
          <div className="absolute inset-0 bg-purple-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative text-sm md:text-base tracking-widest font-medium">{t.enterBtn}</span>
        </button>
      </div>

      {/* Navbar */}
      <header className={`fixed top-0 inset-x-0 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-md z-40 transition-all duration-1000 ${isEntered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"} ${isDark ? "bg-black/20 border-b border-white/5" : "bg-white/50 border-b border-black/5"}`}>
        <div onClick={() => setCurrentPage("home")} className="text-xl font-bold tracking-wider cursor-pointer hover:text-purple-500 transition-colors">CHANG LUJIA</div>
        <div className="flex items-center gap-4 md:gap-8 text-sm font-medium">
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentPage("home")} className={`transition-colors ${currentPage === 'home' ? 'text-purple-500' : 'hover:text-purple-500'}`}>{t.navHome}</button>
            <button onClick={() => setCurrentPage("about")} className={`transition-colors ${currentPage === 'about' ? 'text-purple-500' : 'hover:text-purple-500'}`}>{t.navAbout}</button>
            <button onClick={() => setCurrentPage("portfolio")} className={`transition-colors ${currentPage === 'portfolio' ? 'text-purple-500' : 'hover:text-purple-500'}`}>{t.navPortfolio}</button>
          </div>
          <div className={`w-px h-4 hidden md:block ${isDark ? "bg-gray-700" : "bg-gray-300"}`}></div>
          <button onClick={() => setLang(lang === "en" ? "zh" : "en")} className="hover:text-purple-500 transition-colors w-8">{lang === "en" ? "中" : "EN"}</button>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="hover:text-purple-500 transition-colors">{theme === "dark" ? "Light" : "Dark"}</button>
        </div>
      </header>

      {/* Home Page */}
      <div className={`absolute inset-0 pt-24 flex items-center justify-center p-6 md:p-12 z-10 transition-all duration-700 ease-in-out ${isEntered && currentPage === "home" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"}`}>
        <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24">
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{t.heroTitle}</h1>
            <h2 className="text-lg md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">{t.heroSubtitle}</h2>
            <p className={`text-base md:text-lg leading-relaxed max-w-2xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>{t.heroDesc}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-6">
              <button onClick={() => setCurrentPage("portfolio")} className="w-full sm:w-auto px-8 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:-translate-y-1">{t.btnPortfolio}</button>
              <button onClick={() => setCurrentPage("about")} className={`w-full sm:w-auto px-8 py-3 rounded-full font-medium border transition-all duration-300 hover:-translate-y-1 ${isDark ? "border-gray-600 hover:border-gray-300 hover:bg-white/5" : "border-gray-300 hover:border-gray-600 hover:bg-black/5"}`}>{t.btnAbout}</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full p-2 border-2 border-dashed border-purple-500/40 hover:border-purple-500 transition-colors duration-500 group animate-[spin_20s_linear_infinite] hover:[animation-play-state:paused]">
              <div className="w-full h-full rounded-full overflow-hidden animate-[spin_20s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/seed/avatar/400/400"; }}
                  onClick={() => handleImgClick("/profile.jpg")}
                />
                <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-colors duration-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Page */}
      <div className={`absolute inset-0 pt-24 overflow-y-auto z-20 transition-all duration-700 ease-in-out ${isEntered && currentPage === "about" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"}`}>
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-24">
          
          {/* About Me */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              {t.aboutMeTitle}
            </h2>
            <p className={`text-lg leading-loose whitespace-pre-wrap ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {t.aboutMeContent}
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              {t.educationTitle}
            </h2>
            <div className={`flex flex-col md:flex-row gap-8 p-8 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/20 p-1">
                  <img 
                    src="/bsu-logo.jpg" 
                    alt="BSU Logo" 
                    className="w-full h-full rounded-full object-cover cursor-pointer" 
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://picsum.photos/seed/bsu/200/200"; }}
                    onClick={() => handleImgClick("/bsu-logo.jpg")}
                  />
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              </div>
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold">{t.eduSchool}</h3>
                  <p className={`text-lg mt-1 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{t.eduMajor}</p>
                </div>
                <div className={`flex flex-wrap gap-6 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span>{t.eduGPA}</span>
                  <span>{t.eduRanking}</span>
                </div>
                <div>
                  <p className={`text-sm mb-3 font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{t.eduCoursework}</p>
                  <div className="flex flex-wrap gap-2">
                    {t.eduCourses.map((course: string, i: number) => (
                      <span key={i} className={`px-3 py-1.5 text-sm rounded-lg transition-all duration-300 hover:scale-105 cursor-default ${isDark ? 'bg-white/10 hover:bg-purple-500/20 text-gray-200' : 'bg-gray-100 hover:bg-purple-50 text-gray-700'}`}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Academic Research */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              {t.researchTitle}
            </h2>
            <div className="space-y-4">
              {t.researchList.map((item: any, i: number) => (
                <CollapsibleCard key={i} item={item} theme={theme} />
              ))}
            </div>
          </section>

          {/* Practice & Entrepreneurship */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              {t.practiceTitle}
            </h2>
            <div className="space-y-4">
              {t.practiceList.map((item: any, i: number) => (
                <CollapsibleCard key={i} item={item} theme={theme} />
              ))}
            </div>
          </section>

          {/* Industry Experience */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              {t.industryTitle}
            </h2>
            <div className="space-y-6">
              {t.industryList.map((item: any, i: number) => (
                <div key={i} className={`flex flex-col sm:flex-row gap-6 p-6 rounded-xl border transition-colors hover:border-purple-500/50 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-full overflow-hidden border border-gray-200/20 bg-white">
                    <img 
                      src={item.logo} 
                      alt={item.company} 
                      className="w-full h-full object-contain p-2 cursor-pointer" 
                      onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/logo${i}/100/100`; }}
                      onClick={() => handleImgClick(item.logo)}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{item.company}</h3>
                    <p className={`text-sm mt-1 mb-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>{item.role}</p>
                    <p className={`leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

         {/* Individual Hobbies */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              {t.hobbyTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.hobbyList.map((hobby: any, i: number) => (
                <div key={i} className={`relative p-4 rounded-2xl border backdrop-blur-sm group flex flex-col items-center ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/50 border-gray-200 hover:bg-white shadow-sm'}`}>
                  <div 
                    className="w-[200px] h-[150px] rounded-lg overflow-hidden mb-4 cursor-pointer"
                    onClick={() => setZoomedImg(hobby.img)}
                  >
                    <img src={hobby.img} alt={hobby.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/hobby${i}/200/150`; }} />
                  </div>
                  <p className="text-center font-medium tracking-wider">{hobby.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="pb-32">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
              {t.techTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.values(t.techStack).map((category: any, i: number) => (
                <div key={i} className={`p-6 rounded-2xl border backdrop-blur-sm ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/50 border-gray-200 shadow-sm'}`}>
                  <h3 className="text-xl font-bold mb-4 capitalize">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string, j: number) => (
                      <span key={j} className={`px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-white/10 text-gray-200' : 'bg-white border border-gray-200 text-gray-700'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Portfolio Page */}
      <div className={`absolute inset-0 pt-24 overflow-y-auto z-20 transition-all duration-700 ease-in-out ${isEntered && currentPage === "portfolio" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none"}`}>
        
        {/* 1. 作品集列表页 (当 activePortfolioItem 为 null 时显示) */}
        {!activePortfolioItem && (
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.portfolioList.map((item: any, i: number) => (
                <div 
                  key={i} 
                  onClick={() => setActivePortfolioItem(item.id)}
                  className={`group rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${isDark ? 'bg-white/5 border-white/10 hover:shadow-purple-500/10' : 'bg-white border-gray-200 hover:shadow-purple-500/10'}`}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/port${i}/800/450`; }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold line-clamp-2">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. 作品集详情页 (当 activePortfolioItem 不为 null 时显示) */}
        {activePortfolioItem && (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 pb-32">
            
            {/* 返回上一级按钮 */}
            <button 
              onClick={() => setActivePortfolioItem(null)}
              className={`sticky top-24 z-30 mb-8 flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:-translate-x-2 shadow-sm ${isDark ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' : 'bg-white/60 border-gray-200 text-gray-900 hover:bg-white/80'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              返回上一级
            </button>

            {/* 详情页内容容器 */}
            <div className={`rounded-2xl p-6 md:p-12 backdrop-blur-sm border ${isDark ? 'bg-black/40 border-white/10 text-gray-200' : 'bg-white/60 border-gray-200 text-gray-800'}`}>
              
              {/* === 项目1：论文详情页 === */}
              {activePortfolioItem === "thesis" && (
                <div className="max-w-4xl mx-auto">
                  <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center leading-snug">《城市风格与体育报刊内容生产：以天津〈体育周报〉与上海〈勤奋体育月报〉为中心(1932-1937)》</h1>
                  <p className="text-center mb-12 opacity-70">常璐佳 June，2025</p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2 border-purple-500/30">摘要</h2>
                  <p className="mb-6 leading-relaxed text-justify">本文以 1932-1937 年天津《体育周报》与上海《勤奋体育月报》两份核心体育专业报刊为研究对象，通过内容分析法对比两刊的选题定位、内容呈现、作者群体的共性与差异，结合近代天津与上海的城市化进程、地域文化特征与社会历史语境，阐明近代中国地域文化与体育报刊内容生产的内在关联，为近代南北城市体育传播对比研究提供新的视角。</p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2 border-purple-500/30">引言</h2>
                  <p className="mb-6 leading-relaxed text-justify">1931年“九一八”事变后，“体育救国”呼声迭起，保家卫国、抵制侵略、强身健体之体育精神席卷社会，体育聚集学界、政界、商界目光，一批专注体育内容、关注社会公众的专业体育期刊诞生。《体育周报》和《勤奋体育月报》均于此况中创刊，相同时代背景下诞生着共同“体育救国”的期盼。</p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2 border-purple-500/30">理论框架</h2>
                  <p className="mb-6 leading-relaxed text-justify">本研究以布尔迪厄“场域”理论、哈贝马斯“公共领域”理论为核心框架，同时引入新闻框架理论展开分析。<br/>其一，基于场域理论，将两刊视为体育传播场域中的行动者，把政商力量、学术网络、租界制度等场域要素作为核心资本形式，观察其对于两刊内容选题与主导话语的形塑作用；<br/>其二，依托公共领域理论，剖析两刊作为城市媒介介入公共讨论的不同路径，即上海知识精英与天津青年社群通过报刊展开的差异化话语实践，折射出南北城市公共空间的分野；<br/>其三，借助新闻框架理论，揭示两刊如何通过选题侧重、话语策略等框架设置，建构“体育救国”的叙事范式。这种框架差异既源于南北城市的地域文化与社会语境，也反过来塑造了公众对体育与国家命运的认知，为理解近代体育传播的地域分化提供了传播学维度的核心阐释。</p>
                  
                  <div className="my-10 text-center">
                    <img src="/achart1.jpg" loading="lazy" alt="理论框架示意图" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">表1 理论框架示意图</p>
                  </div>

                  <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2 border-purple-500/30">城市分析</h2>
                  <p className="mb-6 leading-relaxed text-justify">天津与上海虽同属近代开埠城市，却因地理区位、历史脉络与权力结构的差异，形成了截然不同的城市形态与发展路径。</p>

                  <div className="my-10 text-center">
                    <img src="/apicture1.jpg" loading="lazy" alt="天津《体育周报》报社地址绘制图" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">图1 天津《体育周报》报社地址绘制图</p>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4">天津区位分析</h3>
                  <p className="mb-6 leading-relaxed text-justify">天津作为京都卫城，因河而生、依漕而兴，城市空间由传统权力中心向消费型结构转型，政治上呈现中央权威式微、地方势力与外国势力相互制衡的格局，经济上则在日资挤压下催生出自发的国货运动，体育实践以高校为核心阵地，兼具社会启蒙与民族主义色彩，传媒则在租界相对自由的环境中，成为知识分子构筑抗日舆论的重要场域。</p>

                  <div className="my-10 text-center">
                    <img src="/apicture2.jpg" loading="lazy" alt="上海《勤奋体育月报》报社地址绘制图" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">图2 上海《勤奋体育月报》报社地址绘制图</p>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4">上海区位分析</h3>
                  <p className="mb-6 leading-relaxed text-justify">而上海则因港而兴、以商立市，扼守长江入海口，成为全国经济与贸易的枢纽，政治上虽受租界“国中之国” 的影响，却始终是国民政府重点扶持的“第二首都”处于“训政”体制的规范之下，经济上则迎来民族资本的“黄金时期”，体育发展深受国家政策推动，呈现出高度制度化与职业化的特征，传媒系统则更为规范专业，成为国家教育与体育议题的重要引导者。这种“卫城—港城”的城市定位差异，深刻塑造了两地体育空间的形态与媒介内容的生产逻辑，为本研究提供了核心的分析框架。</p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2 border-purple-500/30">报刊生产分析</h2>
                  <h3 className="text-xl font-bold mt-8 mb-4">办报人身份：学界办报与政商办报</h3>
                  <p className="mb-6 leading-relaxed text-justify">两刊办报团队的身份差异，从根源上决定了报刊的生产逻辑与价值取向。<br/>周科徵毕业论文《中國日報的索引法》办报期间仍就读于燕京大学新闻系并于1933年5月毕业；《燕京辅仁排球战绩》记载沈祖徽作为燕大排球运动员参加比赛。<br/>马崇淦曾为《申报》体育记者、教育版主编，并同时间活跃在多家报纸，曾任暨南大学新闻教授，1929年在上海开设专门出售体育书籍的店面，并向市民发售；邵汝干早年曾投身辛亥革命，任南京市教育局社教科民众体育埠主任、上海体育督学，实为南京国民政府指派入沪，带有官方色彩。</p>

                  <div className="my-10 text-center">
                    <img src="/achart2.jpg" loading="lazy" alt="主编身份差异图示例" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">表2 《体育周报》与 《勤奋体育月报》主编身份差异图示例</p>
                  </div>

                  <h3 className="text-xl font-bold mt-8 mb-4">报刊投稿人群体：地方新星与名流荟萃</h3>
                  <p className="mb-6 leading-relaxed text-justify">“地方新星”，一是“地方”，即《体育周报》的投稿群体是地方化的，以天津、北平为中心向外辐散，集中于华北地区的地方性群体，二是“新星”，即《体育周报》的投稿群体年龄较为年轻，或者是与年轻人有密切关系的。<br/>“名流荟萃”，“名流”即是有较强社会地位、影响力的名家名人，“荟萃”在此强调的是职业属性，即具有丰富的职业履历经历的。<br/>为进行投稿人分析，笔者现将可收集所有投稿人中发稿次数≥2，对抗日战争与近代中日关系文献数据平台中可搜索的23期《勤奋体育月报》信息中所有投稿人信息，大成故纸堆数据平台中已分类的20期《体育周报》，通过代码进行人名出现频次统计。</p>

                  <div className="my-10 text-center">
                    <img src="/apicture3.jpg" loading="lazy" alt="作者群体职业流动图示" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">图3 《体育周报》与 《勤奋体育月报》作者群体职业流动图示<br/>（左为《体育周报》，右为《勤奋体育月报》）</p>
                  </div>

                  <div className="my-10 text-center">
                    <img src="/apicture4.jpg" loading="lazy" alt="作者群体职业占比图示" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">图4 《体育周报》与 《勤奋体育月报》作者群体职业占比图示<br/>（左为《体育周报》，右为《勤奋体育月报》）</p>
                  </div>

                  <p className="mb-6 leading-relaxed text-justify">在差异中《体育周报》体现了其贴近基层体育实践、鼓励青年参与体育的办报宗旨，具有较强的民间性和自发性。而《勤奋体育月报》的投稿人以教育家、官员和媒体人为核心，则彰显了其官方背景和专业化倾向，更注重体育政策的宣传、体育教育的推广以及体育文化的系统性建构。一种一条自下而上扎根生态点火燎原的体育传播路径，一种自上而下击铎传声的体育近代化方向，两种不同的道路油然展开。</p>

                  <div className="my-10 text-center">
                    <img src="/achart3.jpg" loading="lazy" alt="天津《体育周报》投稿人身份详情" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">表3 天津《体育周报》投稿人身份详情</p>
                  </div>

                  <p className="mb-6 leading-relaxed text-justify">《体育周报》作者多为较为年轻的群体，一为青年学生，二为教育工作者，其多背靠高校，所以天津及周边高校第一时间的体育赛事消息能及时让编辑获知并刊发，该报记录各类赛事信息之多，是《勤奋体育日报》远不能及的。在前期作者群体主要是天津及周边地区，例如河北董守义、王健吾等人，山东的阮蔚村、陈嘉震等人，能见其在华北较有影响力。随着报纸知名度提升，其印刷数量从2000份增长到15000份，投稿作者群体不断扩大。后期更多知名人士，例如夏承楹、宋如海等。</p>

                  <div className="my-10 text-center">
                    <img src="/achart4.jpg" loading="lazy" alt="上海《勤奋体育月报》投稿人身份详情" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">表4 上海《勤奋体育月报》投稿人身份详情</p>
                  </div>

                  <p className="mb-6 leading-relaxed text-justify">《勤奋体育月报》的“名流荟萃”，核心体现在作者群体的全国性影响力与职业化属性。刊物所有署名作者均标注所属单位及职务，撰稿人以教育家、政府官员、专业媒体人为核心，其中不乏国民党中央监察委员褚民谊、中央大学体育系教授程登科等政界、学界顶层人物，也有刘长春、姜容樵等体育界标杆人物，形成了“政商学体界名流共建”的作者格局，彰显出强烈的官方背景与专业化倾向。</p>

                  <h3 className="text-xl font-bold mt-8 mb-4">城市下的报刊生产机制：杏坛师友与政苑商潮</h3>
                  <p className="mb-6 leading-relaxed text-justify">从编辑身份、作者网络到运营策略，两刊的生产逻辑深度折射出天津与上海近代城市化进程中的差异化空间格局，形成了“学界—社团”与“政商—系统”协同运作的两种生产范式。</p>

                  <div className="my-10 text-center">
                    <img src="/apicture5.jpg" loading="lazy" alt="办报策略" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">图5 《体育周报》与 《勤奋体育月报》办报策略<br/>（上为《体育周报》，下为《勤奋体育月报》）</p>
                  </div>

                  <p className="mb-6 leading-relaxed text-justify">天津《体育周报》形成了“杏坛师友”为核心的生产网络。青年编辑与作者的高校身份，映射出天津作为中国近代高等体育教育策源地的特殊地位，让该刊成为连接校园赛事与城市公共生活的信息纽带；1928年成立的天津体育协进会形成的“社团化”体育活动组织模式，为刊物突破学生刊物的局限提供了地缘社会资本，形成了“学界—社团”运作模式。形成“学界社团”双轮驱动的独特生产模式。主编周科徵亲访运动员、邀约燕京大学教授的人情化约稿方式，既受限于办报资金的短缺，也恰恰呼应了天津高校密集的知识网络优势，形成情感联结式的本土化生产逻辑。<br/>上海《勤奋体育月报》构建“政苑商潮”为底色的“政商—系统”协作网络，完全遵循现代文化产业的运作逻辑。1932年《国民体育实施方案》颁布后，上海作为国民政府推行体育国家化的核心据点，使得刊物天然承载了官方体育政策传播的功能，主编邵汝干的政府督学身份、大量政界学界名流的撰稿，凸显出南京政权通过上海辐射全国体育现代化的意图；而主办人马崇淦横跨媒体人与书局经营者的双重身份，使得刊物衍生出“编印发分离”的商业化媒介生产基因。“政府背书 + 商业运营”的运作机制，最终形成了官员、教育家与媒体人共同编织体育国家叙事的话语网络。</p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2 border-purple-500/30">报刊内容分析</h2>
                  <h3 className="text-xl font-bold mt-8 mb-4">报刊主旨分析：体育救国下的不同路径</h3>
                  <p className="mb-6 leading-relaxed text-justify">两刊共享着“体育救国”的时代主旨，却在叙事的表达与发展中呈现有所差异的价值立场与发展脉络。<br/>《体育周报》以“强种救国”为核心理念，创刊词便以“活跃前进的力、民族生存一致的力、力的艺术化发展”，锚定传播体育之力以救亡的初心。其内容兼具体育科普的实用性与社会评论的思想性，在民族主义立场上展现出极强的政治自觉与理性思辨：1932年刘长春代表伪满洲国参奥事件中，刊物率先刊发9篇相关内容，以“中华民国之国民，勿为利诱！勿懼势迫！勿叛国！勿辱身！”抵制体育殖民；同时以辩证思维超越中西体育的二元对立，既反对盲目崇洋的体育移植，也批判固守传统的保守倾向，强调体育的教育本质，反对体育的商业化、锦标主义异化，形成了兼具批判性与启蒙性的理性民族主义立场。<br/>《勤奋体育月报》同样以“强种救国”为创刊底色，但在抗日救亡的整体语境下该报的主题曾发生过三次变迁，发刊词言“强邻压境，困难临头，我中华国家民族处于生死存亡关头…… 加紧体魄训练，用铁血和肉弹冲破此重重死线”；报一周年，刊物聚焦“中国体育应行的途径”，搭建体育学术交流的专业平台；办报两周年，刊物提出“体育设施要大众化”，推动体育从精英圈层走向普通民众。整体呈现出从政治口号到专业体系、再到大众推广普及的渐进式发展脉络，实现专业体育叙事从“振臂疾呼”到“体系化建设”的转型。</p>

                  <h3 className="text-xl font-bold mt-8 mb-4">报刊栏目差异：短刀冷玉与方圆棋格</h3>
                  <p className="mb-6 leading-relaxed text-justify">两刊的栏目设置形成了“短刀冷玉”与“方圆棋格”的风格对比，精准对应两刊的办报定位与城市风格。<br/>天津《体育周报》的栏目设置灵活犀利、不拘一格，核心栏目包括“短笛”“运动界纪事”“碎锦”“名人传”“编余”等。其中“短笛”取“短笛无腔信口吹”之意，以数十百字的短评针砭体育界时弊、直击痛点，宛如短刀寸剑；“碎锦”栏目如碎玉零珠，零散收录体育界名人轶事、赛场花絮、江湖传闻，穿插于版面之中，让刊物兼具信息密度与可读性。作为周刊，该报更注重单篇内容的传播力，多数时评、纪事未归入固定栏目，仅将杂谈类内容做栏目化处理，整体呈现出灵活、接地气的栏目风格。<br/>上海《勤奋体育月报》的栏目设置体系完整规范专业，宛如布局严谨的方圆棋格。其首栏为 “勤奋体育画报”，以赛事图片、动作图解、体育明星专题为核心，重大赛事期间更是以全版面画报完成专题报道，留存了大量珍贵的体育影像；第二栏为核心内容板块 “编辑谈话”，下设 “勤奋体育评坛”“世界体育展望台”“国术”“史料与调查”“教学与实验” 等十余个子栏目，覆盖体育评论、理论研究、技术教学、史料整理等全维度内容，完全贴合现代专业期刊的栏目范式；第三栏为服务性板块，设置 “读书顾问”“体育名词解释”“读者园地”“读者顾问” 等栏目，高度重视读者互动与需求，形成了 “内容生产 - 读者反馈” 的完整闭环。</p>

                  <h3 className="text-xl font-bold mt-8 mb-4">报刊主题分析</h3>
                  <p className="mb-6 leading-relaxed text-justify">基于《体育周报》与《勤奋体育月报》的词频统计数据，在量化部分通过数据清洗与主题分类进行量化分析。首先提取两报刊的高频词汇（如“运动”“体育”“世界”等）、词性、出现次数及TF-IDF权重，结合主题概率分布识别核心主题进行分析，以下为分析结果。</p>

                  <div className="my-10 text-center">
                    <img src="/apicture6.jpg" loading="lazy" alt="天津《体育周报》文章内容地域分布图示" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">图6 天津《体育周报》文章内容地域分布图示</p>
                  </div>

                  <p className="mb-6 leading-relaxed text-justify">在地域关注上，《体育周报》形成了华北地区的深度聚焦。标题数据中“北平”主题占比超50%，而全文本地域统计中天津为报道核心，天津之名在标题中出现频次低，本质是因为其将天津作为报道的默认语境，从天津单项运动的整体发展到单支球队的赛场表现，均能单篇成章；对北平的高频关注，则源于北平高校密集的师生投稿与校际赛事联动。</p>

                  <div className="my-10 text-center">
                    <img src="/apicture7.jpg" loading="lazy" alt="上海《勤奋体育月报》文章内容地域分布图示" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">图7 上海《勤奋体育月报》文章内容地域分布图示</p>
                  </div>

                  <p className="mb-6 leading-relaxed text-justify">《勤奋体育月报》在地域上，报刊以上海为中心关注中国东部地区体育事业发展，并广泛覆盖如湖北、江西、河南、四川等中西部地区的体育建设状况。这种“广域化”布局反映了其对全国体育发展不均衡现状的关注与补充，也映射出当时体届政商有意推进城市体育向乡村扩张。第三期第六卷中首篇评论编辑邵汝干就说到“尤其是劳苦农民，也要有享有体育的权利”。</p>

                  <div className="my-10 text-center">
                    <img src="/apicture8.jpg" loading="lazy" alt="天津《体育周报》文章内容主题图示" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">图8 天津《体育周报》文章内容主题图示</p>
                  </div>

                  <div className="my-10 text-center">
                    <img src="/apicture9.jpg" loading="lazy" alt="上海《勤奋体育月报》文章内容主题图示" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">图9 上海《勤奋体育月报》文章内容主题图示</p>
                  </div>

                  <p className="mb-6 leading-relaxed text-justify">在内容上，《体育周报》以运动实践与赛事纪事为核心，重点报道四类赛事：天津体育协进会发起的大众赛事、高校间友谊赛、体育俱乐部对抗赛、中外军队体育交流赛，内容扎根基层体育实践，兼具纪实性与现场感；在评论中《周报》语言讽刺冷峻，侧重指明国内体届问题，例如1932年第三十六期，“一般投机者，由于皖省体育人才缺乏……纷纷投考上海苏州等处（私立）体校……这都一般体育混子，私立体校不但误人子弟，并有碍各省体育前途。”<br/>内容上《勤奋体育月报》则形成了“理论 &gt; 实践 &gt; 教学”的内容结构，大量收录政策性文献、体育理论评论与系统性教学内容，从体操教材、田径训练法到裁判规则、乡土体育游戏，并“备全国体育教师参考并应用”，形成了服务全国体育教师与从业者的专业内容体系，学术性与体系化特征显著。</p>

                  <p className="mb-6 leading-relaxed text-justify">在全球视野上，两刊均关注国际体育发展，却呈现出不同的叙事逻辑。《体育周报》既系统介绍德、意等国的体育发展模式，也直面西方体育霸权，批判外籍裁判判罚不公、以外语口令训练中国运动员等现象，在国际体育叙事中始终坚守民族立场与批判视角。<br/>《勤奋体育月报》则通过“世界体育展望台”“海外通讯”等固定栏目，系统介绍各国体育组织架构、教育体系与竞赛成绩，核心聚焦其对中国体育现代化的借鉴意义，但由于其需服务于国民党体育事业建设，也曾出现部分评论不客观现象，如“我见美国篮球队甚不如南开五虎”。</p>

                  <h3 className="text-xl font-bold mt-8 mb-4">大型赛事内容分析：从国内赛事到国外赛事</h3>
                  <p className="mb-6 leading-relaxed text-justify">以华北运动会特刊为核心案例，两刊在大型赛事报道中呈现出 “制度反思” 与 “制度歌颂” 之别，映射天津与上海城市传播在历史背景下的差异。</p>

                  <div className="my-10 text-center">
                    <img src="/achart5.jpg" loading="lazy" alt="华北运动会的报道差异对比" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
                    <p className="text-sm mt-3 opacity-60">表5 华北运动会的报道差异对比</p>
                  </div>

                  <p className="mb-6 leading-relaxed text-justify">1933年《体育周报》第十七届华北运动会特刊，以述评结合为核心形式，头条文章并未聚焦赛事成就，而是直指赛事中的四大核心问题：物资发放的腐败乱象、裁判误判的不公现象、运动员公然犯规的纪律问题、参赛选手购买日货的民族立场问题。文中首篇长评以“仁侠精神”为内核，直言“一切的缺点，常常是因为没有人提出公开讨论，才没有完善的改进方法”，同时完整记录了赛事筹备、场地建设、赛程赛果、闭幕式全过程，更在文末发出振聋发聩的追问：“诸选手当彻底了解练就一身铜筋铁骨，将作何用”，实现从赛事报道到民族启蒙的价值升华。整体报道以批判现实、揭示问题为导向，发挥着民族启蒙的作用。<br/>1934年《勤奋体育月报》第十八届华北运动会特刊，则以官方叙事为核心基调。首篇文章便总结了赛事“化除己见、全体合作、纪律严整”三大精神上的成功，后续8篇评论也多围绕赛事组织的有序性、选手纪律的规范性、体育普及的广泛性展开，重点肯定赛事的正面价值与治理成效，仅有少量内容提及票务乱象等边缘问题。董守义等作者的文章，也核心聚焦于赛事对华北体育普及的推动价值，整体呈现出“肯定成就、总结经验”的报道逻辑，凸显出刊物服务于官方体育叙事、注重秩序与合作的价值取向。<br/>究其缘由，天津毗邻东北，直面民族危亡的最前线，让《体育周报》天然带着批判现实、唤醒国民的使命；而上海偏安江南，在国民政府的重点扶持下形成了稳定的制度环境，让《勤奋体育月报》更倾向于在体制内推动体育现代化建设，形成了两种截然不同的赛事叙事范式。</p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2 border-purple-500/30">总结</h2>
                  <h3 className="text-xl font-bold mt-8 mb-4">两座城市孕育出的两种报刊</h3>
                  <p className="mb-6 leading-relaxed text-justify">城市空间从根源上决定了两刊的生存形态与发展路径，是报刊内容生产的底层土壤。<br/>天津法租界的特殊区位，为《体育周报》提供了“夹缝中的自主性”—— 报社选址法租界基泰大楼，既规避了华界的政治动荡，又借助租界相对自由的舆论环境与现代化体育设施获取赛事资源，突破了国民政府与日伪势力的双重管控，形成了以体育为载体的民族主义叙事空间。刊物充分发挥天津作为华北教育枢纽的优势，深度聚焦学校体育与大众体育，将张伯苓“体教融合”的理念从校园辐射至全社会，让青年群体的校园运动成为城市公共议题。天津半殖民地的破碎化格局，反而为刊物提供了多元的文化资源与抗争空间，让这份体育专业报刊，最终成为直面国难、批判现实的民族救亡阵地。<br/>《勤奋体育月报》的诞生，是 1930 年代上海租界空间政治、民族主义浪潮与都市文化消费转型三重力量交织的必然产物。刊物通过勤奋书局构建了“门市部 + 发行部”分离的商业化运营体系，依托上海的航运网络形成了覆盖全国的传播格局。面对租界“体育殖民”与民族觉醒的二元张力，刊物通过优先报道国内赛事、弱化西方体育叙事、挖掘本土传统武术内容等方式，争夺国内体育界的话语权；同时在国民政府“体育救国”政策与租界自由主义之间找到了微妙平衡，既通过连载军事体育理论、宣传全运会等官方议程获得体制内合法性，又借助租界的舆论空间突破单一政治叙事，将体育内容从精英圈层延伸至乡村、工人等普通群体，最终构建起上海体育公共领域的立体图景，成为民族危机下上海体育启蒙的核心载体。</p>

                  <h3 className="text-xl font-bold mt-8 mb-4">报刊棱镜中折射的城市体育</h3>
                  <p className="mb-6 leading-relaxed text-justify">两份报刊不仅是城市体育发展的记录者，更是城市文化秩序的建构者，其文本气质与话语体系，精准折射出两座城市的深层结构与精神内核。<br/>《体育周报》的文本气质，与1930年代天津北洋遗绪尚存、政治权力多元破碎的城市结构深度绑定。刊物以 “体育强种” 为名，始终游走于体育、政治与道德话语之间，报中高频出现的“青年”“强种”“废旧”等词汇，背后是天津南开、北洋等高校教育精英，试图借助体育建立城市新文化秩序的努力。刊物形成了一套独特的文化筛选机制，通过对体育事件的选择性报道与批判性评论，隐性划定了体育发展“有益”与“无益”的边界；高密度的议论性评论、爱国道德感召的语式、中西对比的批判视角，正是刊物以现代话语取代传统权威的核心尝试。可以说，《体育周报》不只是天津城市体育发展的镜像，更是新天津文化秩序的主动制造者。<br/>《勤奋体育月报》则深度折射出上海高度市场化、规范化的现代城市系统，是“海派现代性”在体育传媒领域的典型体现。刊物内容高度强调赛事组织、技术普及、教育训练的理性化维度，本质上是上海都市社会中“技术—管理—中产” 三者间权力流动的具象化——体育被视为治理身体、规范劳动力、重塑市民秩序的工具。刊物是上海城市“新生活运动”的文化延伸，是现代市民教育、国家意识重建与城市治理逻辑下的规范化传播机制。正如阿尔都塞所言，意识形态的再生产并非依赖强制暴力，而是通过日常生活中看似中立的话语实现。《勤奋体育月报》的“专业中立性”背后，正是城市权力对民众身体、精神与行为方式的再塑，最终让刊物成为塑造上海城市现代性结构的关键制度节点。</p>

                  <h2 className="text-2xl font-bold mt-12 mb-6 border-b pb-2 border-purple-500/30">结论</h2>
                  <p className="mb-6 leading-relaxed text-justify">20 世纪 30 年代天津与上海的城市空间环境，作为近代中国南北两大经济中心的典型样本，通过政治权力结构、经济资本流动、文化消费惯习与媒介生态系统的复杂交织，对《体育周报》与《勤奋体育月报》的内容生产形成了差异化的深度形塑。这种空间与媒介的双向互动，最终让两份共享“体育救国”时代内核的刊物，呈现出“同源异流”的传播景观。<br/>这种空间与媒介的深度互动，最终在抗日战争前夕形成了两种典型的体育传播范式：天津模式以地域共同体构建为核心，通过学校体育网络强化地方认同，以批判启蒙探索体育救国的底层路径；上海模式则以现代性知识体系构建为核心，在全球化与本土化的对话中，以体系化建设推动国家体育现代化进程。两种范式既折射出近代中国城市发展的多元轨迹，也为当下体育传媒与城市文化的互动提供了历史镜鉴——当体育报刊既成为城市空间的文化投影，又成为重塑空间意义的话语实践时，媒介便超越了信息载体的角色，成为构建城市精神不可或缺之力量。</p>
                </div>
              )}

              {/* === 项目2：颐木体育详情页 === */}
              {activePortfolioItem === "yimu" && (
                <div className="flex flex-col gap-4 max-w-5xl mx-auto">
                  {Array.from({ length: 32 }).map((_, i) => {
                    const num = String(i + 1).padStart(2, '0');
                    return (
                      <img 
                        key={i}
                        src={`/颐木体育项目介绍_${num}.jpg`}
                        alt={`颐木体育项目介绍 ${num}`}
                        loading="lazy"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    );
                  })}
                </div>
              )}

              {/* === 项目3：其余设计详情页 === */}
              {activePortfolioItem === "design" && (
                <div className="flex flex-col gap-4 max-w-5xl mx-auto">
                  {Array.from({ length: 11 }).map((_, i) => {
                    const num = String(i + 1).padStart(2, '0');
                    return (
                      <img 
                        key={i}
                        src={`/personal_${num}.jpg`}
                        alt={`其余设计 ${num}`}
                        loading="lazy"
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    );
                  })}
                </div>
              )}

            </div>
          </div>
        )}
      </div>

      {/* Image Zoom Modal (图片放大遮罩层) - 替换为新的样式 */}
      <div 
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${zoomedImg ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div className="absolute inset-0 bg-black/70" onClick={() => setZoomedImg(null)}></div>
        <img 
          src={zoomedImg || ''} 
          alt="Zoomed" 
          className={`relative z-10 max-w-[80%] max-h-[80%] object-contain rounded-lg shadow-2xl transition-transform duration-300 ${zoomedImg ? 'scale-100' : 'scale-95'}`}
          onClick={() => setZoomedImg(null)}
        />
      </div>

      {/* Footer Signature (底部固定署名) - 新增 */}
      <div className={`fixed bottom-0 inset-x-0 py-5 text-center text-sm z-30 pointer-events-none transition-opacity duration-1000 ${isEntered ? "opacity-100" : "opacity-0"} ${isDark ? "text-gray-500" : "text-gray-400"}`}>
        {t.footerText}
      </div>
    </div>
  );
}