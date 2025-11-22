// Translations
const translations = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      experience: "Tajriba",
      education: "Ta'lim",
      services: "Xizmatlar",
      cases: "Loyihalar",
      reviews: "Fikrlar",
      contact: "Aloqa",
    },
    hero: {
      greeting: "Salom, men",
      staticText: "Men ",
      description:
        "Zamonaviy web va mobil ilovalar yaratish bilan shug'ullanaman.",
      cta1: "Xizmatlarim",
      cta2: "Bog'lanish",
      stats: {
        experience: "Yillik Tajriba",
        projects: "Bajarilgan Loyihalar",
        clients: "Mijozlar",
        satisfaction: "Mijoz Qoniqishi",
      },
    },
    titles: [
      "Software Engineer",
      "Full Stack Developer",
      "JavaScript Developer",
      "React.js, Next.js, Node.js Developer",
      "AI Developer",
      "Creative Frontend Engineer",
      "Clean Code Enthusiast",
    ],
    about: {
      tag: "about",
      title: "Men haqimda",
      description:
        "Professional full-stack developer va zamonaviy web texnologiyalari mutaxassisi",
      text1:
        "Men 5+ yillik tajribaga ega full-stack developer bo'lib, zamonaviy web va mobil ilovalar yaratish bilan shug'ullanaman. React, Next.js, Node.js va boshqa ilg'or texnologiyalar yordamida innovatsion yechimlar ishlab chiqaman.",
      text2:
        "Har bir loyihaga kreativ yondashuv va professional bajarish bilan qarayman. Mijozlar bilan uzoq muddatli hamkorlikni qadrlashaman va ularning biznesini rivojlantirishga yordam beraman.",
      skills: {
        frontend: {
          title: "Frontend",
          items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
        },
        backend: {
          title: "Backend",
          items: [
            "Node.js & Express",
            "PostgreSQL & MongoDB",
            "REST & GraphQL API",
            "Redis & WebSocket",
          ],
        },
        mobile: {
          title: "Mobile",
          items: ["React Native", "Expo", "Mobile UI/UX", "App Deployment"],
        },
        devops: {
          title: "DevOps",
          items: [
            "AWS & Vercel",
            "Docker & CI/CD",
            "Nginx & PM2",
            "Git & GitHub Actions",
          ],
        },
      },
    },
    contact: {
      tag: "contact",
      title: "Bog'lanish",
      description: "Loyihangiz haqida muhokama qilishga tayyorman",
      email: "Email",
      phone: "Telefon",
      telegram: "Telegram",
      github: "GitHub",
      linkedin: "LinkedIn",
      form: {
        name: "Ismingiz",
        namePlaceholder: "Ismingizni kiriting",
        email: "Email manzilingiz",
        emailPlaceholder: "email@example.com",
        message: "Xabaringiz",
        messagePlaceholder: "Loyihangiz haqida to'liqroq yozing...",
        submit: "Xabar Yuborish",
        sending: "Yuborilmoqda...",
        success:
          "✓ Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beraman.",
      },
    },
    experience: {
      tag: "experience",
      title: "Ish Tajribam",
      description: "Professional rivojlanish yo'lim va asosiy yutuqlarim",
      job1: {
        date: "2023 - Hozir",
        title: "Senior Full-Stack Developer",
        company: "Tech Solutions LLC",
        description:
          "Enterprise darajadagi web ilovalar yaratish, jamoani boshqarish va texnik arxitektura loyihalash",
      },
      job2: {
        date: "2021 - 2023",
        title: "Full-Stack Developer",
        company: "Digital Agency Uzbekistan",
        description:
          "Mijozlar uchun zamonaviy web va mobil ilovalar yaratish, API integratsiyalar",
      },
      job3: {
        date: "2020 - 2021",
        title: "Frontend Developer",
        company: "StartUp Hub",
        description:
          "Responsive va user-friendly interfeys yaratish, UI/UX dizayn amalga oshirish",
      },
    },
    education: {
      tag: "education",
      title: "Ta'lim",
      description: "Akademik ta'lim va professional sertifikatlar",
      degree1: {
        degree: "Bakalavr diplomi",
        major: "Kompyuter ilmlari va dasturlash texnologiyalari",
        school: "Termiz Davlat Universiteti",
        year: "2022 - 2026",
        description:
          "Dasturlash, algoritm va ma'lumotlar tuzilmasi, web texnologiyalar asoslari",
      },
      cert1: {
        degree: "Sertifikat",
        major: "Full-Stack JavaScript",
        school: "freeCodeCamp",
        year: "2022",
        description: "Node.js, Express, MongoDB, RESTful API design",
      },
      cert2: {
        degree: "Sertifikat",
        major: "Advanced React & Next.js",
        school: "Udemy Online Platform",
        year: "2022",
        description:
          "Server-side rendering, performance optimization, advanced hooks",
      },
      cert3: {
        degree: "Sertifikat",
        major: "AWS Cloud Practitioner",
        school: "Amazon Web Services",
        year: "2023",
        description: "Cloud architecture, deployment strategies, scalability",
      },
    },
    services: {
      tag: "services",
      title: "Xizmatlarim",
      description: "Sizning biznesingiz uchun professional web yechimlar",
      popular: "OMMABOP",
      service1: {
        title: "Web Development",
        description:
          "Zamonaviy va responsive web saytlar yaratish. React, Next.js, TypeScript",
        feature1: "Responsive dizayn",
        feature2: "SEO optimizatsiya",
        feature3: "Tez yuklanish",
        feature4: "Cross-browser support",
        price: "1000$ dan",
      },
      service2: {
        title: "Full-Stack Development",
        description:
          "To'liq funksional web ilovalar. Frontend, Backend, Database",
        feature1: "RESTful API",
        feature2: "Database dizayni",
        feature3: "Authentication",
        feature4: "Payment integration",
        price: "3000$ dan",
      },
      service3: {
        title: "Mobile Development",
        description: "Cross-platform mobil ilovalar. React Native, Expo",
        feature1: "iOS & Android",
        feature2: "Native performance",
        feature3: "Push notifications",
        feature4: "App Store deploy",
        price: "2500$ dan",
      },
      service4: {
        title: "UI/UX Design",
        description: "Foydalanuvchilar uchun qulay interfeys dizayni",
        feature1: "Wireframing",
        feature2: "Prototype",
        feature3: "User research",
        feature4: "Design system",
        price: "800$ dan",
      },
      service5: {
        title: "DevOps & Deployment",
        description: "Server sozlash, CI/CD, monitoring",
        feature1: "AWS/Vercel setup",
        feature2: "Docker containers",
        feature3: "Auto deployment",
        feature4: "Performance monitoring",
        price: "600$ dan",
      },
      service6: {
        title: "Maintenance & Support",
        description: "Sayt va ilovalaringizni texnik qo'llab-quvvatlash",
        feature1: "Bug fixing",
        feature2: "Updates",
        feature3: "Performance tuning",
        feature4: "24/7 support",
        price: "300$/oy",
      },
    },
    cases: {
      tag: "portfolio",
      title: "Loyihalarim",
      description: "Bajarilgan ishlar va muvaffaqiyatli loyihalar",
      viewProject: "Ko'rish →",
      case1: {
        category: "E-commerce",
        title: "Online Market Platform",
        description:
          "To'liq funksional online savdo platformasi. 10,000+ mahsulot, real-time inventory",
        users: "Foydalanuvchilar",
        revenue: "Sotuvlar",
      },
      case2: {
        category: "SaaS Platform",
        title: "Project Management Tool",
        description:
          "Jamoalar uchun loyiha boshqaruv dasturi. Real-time collaboration, task tracking",
        companies: "Kompaniyalar",
        satisfaction: "Qoniqish",
      },
      case3: {
        category: "Mobile App",
        title: "Fitness Tracking App",
        description:
          "Shaxsiy fitness treneri ilovasi. AI-powered workout plans, nutrition tracking",
        downloads: "Yuklamalar",
        rating: "Reyting",
      },
    },
    reviews: {
      tag: "testimonials",
      title: "Mijozlar Fikri",
      description: "Hamkorlarimning fikr-mulohazalari",
      review1: {
        text: "Dilshodbek bilan ishlash ajoyib tajriba bo'ldi! Professional yondashuv, tez bajarish va yuqori sifat. Loyihamiz kutilganidan ham yaxshi natija berdi.",
        name: "Akmal Karimov",
        position: "CEO, Digital Solutions",
      },
      review2: {
        text: "Bizning e-commerce platformamizni yaratishda katta yordam berdi. Har bir detalga e'tibor, mijoz ehtiyojlarini tushunish - bu uning asosiy kuchi!",
        name: "Malika Rahimova",
        position: "Founder, ShopUz",
      },
      review3: {
        text: "Mobile app loyihamizda ajoyib ish qildi. Clean code, optimal performance va deadline'larni hech qachon buzmadi. Tavsiya qilaman!",
        name: "Sardor Usmanov",
        position: "CTO, TechStart",
      },
      review4: {
        text: "Kompaniyamiz uchun CRM tizimini yaratdi. Hamma jarayon avtomatlashtirildi, samaradorlik 3 baravarga oshdi. Rahmat!",
        name: "Nigora Saidova",
        position: "Manager, Business Pro",
      },
      review5: {
        text: "Landing page yaratishda professional yondashuv. Conversion rate 2 baravarga oshdi. Dizayn ham, texnik tomondan ham zo'r!",
        name: "Jasur Tursunov",
        position: "Marketing Director, Growth Agency",
      },
      review6: {
        text: "Websaytimizni SEO optimizatsiya qildi va performance'ni 10 baravarga oshirdi. Google'da birinchi sahifaga chiqdik. Ajoyib!",
        name: "Zilola Aliyeva",
        position: "Owner, Beauty Studio",
      },
    },
    footer: {
      rights: "© 2025 Dilshodbek Aqiyev // Barcha huquqlar himoyalangan",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      experience: "Опыт",
      education: "Образование",
      services: "Услуги",
      cases: "Проекты",
      reviews: "Отзывы",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я",
      staticText: "Я ",
      description: "Создаю современные веб и мобильные приложения.",
      cta1: "Мои услуги",
      cta2: "Связаться",
      stats: {
        experience: "Лет опыта",
        projects: "Завершённых проектов",
        clients: "Клиентов",
        satisfaction: "Удовлетворённость клиентов",
      },
    },
    titles: [
      "Креативный Frontend-разработчик",
      "Инженер-программист",
      "Full Stack разработчик",
      "JavaScript разработчик",
      "React разработчик",
      "Next.js разработчик",
      "Node.js разработчик",
      "AI разработчик",
      "Энтузиаст чистого кода",
    ],
    about: {
      tag: "обо_мне",
      title: "Обо мне",
      description:
        "Профессиональный full-stack разработчик и специалист современных веб-технологий",
      text1:
        "Я full-stack разработчик с опытом более 5 лет, специализирующийся на создании современных веб и мобильных приложений. Разрабатываю инновационные решения с использованием React, Next.js, Node.js и других передовых технологий.",
      text2:
        "К каждому проекту подхожу с креативностью и профессиональным исполнением. Ценю долгосрочное сотрудничество с клиентами и помогаю развивать их бизнес.",
      skills: {
        frontend: {
          title: "Frontend",
          items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
        },
        backend: {
          title: "Backend",
          items: [
            "Node.js & Express",
            "PostgreSQL & MongoDB",
            "REST & GraphQL API",
            "Redis & WebSocket",
          ],
        },
        mobile: {
          title: "Мобильная разработка",
          items: [
            "React Native",
            "Expo",
            "Mobile UI/UX",
            "Развертывание приложений",
          ],
        },
        devops: {
          title: "DevOps",
          items: [
            "AWS & Vercel",
            "Docker & CI/CD",
            "Nginx & PM2",
            "Git & GitHub Actions",
          ],
        },
      },
    },
    contact: {
      tag: "контакты",
      title: "Связаться со мной",
      description: "Готов обсудить ваш проект",
      email: "Email",
      phone: "Телефон",
      telegram: "Telegram",
      github: "GitHub",
      linkedin: "LinkedIn",
      form: {
        name: "Ваше имя",
        namePlaceholder: "Введите ваше имя",
        email: "Ваш email",
        emailPlaceholder: "email@example.com",
        message: "Ваше сообщение",
        messagePlaceholder: "Подробно расскажите о вашем проекте...",
        submit: "Отправить сообщение",
        sending: "Отправка...",
        success: "✓ Ваше сообщение успешно отправлено! Скоро отвечу.",
      },
    },
    experience: {
      tag: "опыт",
      title: "Мой опыт работы",
      description: "Путь профессионального развития и основные достижения",
      job1: {
        date: "2023 - Настоящее время",
        title: "Senior Full-Stack разработчик",
        company: "Tech Solutions LLC",
        description:
          "Создание веб-приложений корпоративного уровня, управление командой и проектирование технической архитектуры",
      },
      job2: {
        date: "2021 - 2023",
        title: "Full-Stack разработчик",
        company: "Digital Agency Uzbekistan",
        description:
          "Создание современных веб и мобильных приложений для клиентов, интеграция API",
      },
      job3: {
        date: "2020 - 2021",
        title: "Frontend разработчик",
        company: "StartUp Hub",
        description:
          "Создание адаптивных и удобных интерфейсов, реализация UI/UX дизайна",
      },
    },
    education: {
      tag: "образование",
      title: "Образование",
      description: "Академическое образование и профессиональные сертификаты",
      degree1: {
        degree: "Диплом бакалавра",
        major: "Компьютерные науки и технологии программирования",
        school: "Термезский государственный университет",
        year: "2016 - 2020",
        description:
          "Программирование, алгоритмы и структуры данных, основы веб-технологий",
      },
      cert1: {
        degree: "Сертификат",
        major: "Advanced React & Next.js",
        school: "Udemy Online Platform",
        year: "2022",
        description:
          "Серверный рендеринг, оптимизация производительности, продвинутые хуки",
      },
      cert2: {
        degree: "Сертификат",
        major: "AWS Cloud Practitioner",
        school: "Amazon Web Services",
        year: "2023",
        description:
          "Облачная архитектура, стратегии развертывания, масштабируемость",
      },
      cert3: {
        degree: "Сертификат",
        major: "Full-Stack JavaScript",
        school: "freeCodeCamp",
        year: "2021",
        description: "Node.js, Express, MongoDB, проектирование RESTful API",
      },
    },
    services: {
      tag: "услуги",
      title: "Мои услуги",
      description: "Профессиональные веб-решения для вашего бизнеса",
      popular: "ПОПУЛЯРНО",
      service1: {
        title: "Веб-разработка",
        description:
          "Создание современных и адаптивных веб-сайтов. React, Next.js, TypeScript",
        feature1: "Адаптивный дизайн",
        feature2: "SEO оптимизация",
        feature3: "Быстрая загрузка",
        feature4: "Кроссбраузерность",
        price: "от $1000",
      },
      service2: {
        title: "Full-Stack разработка",
        description:
          "Полнофункциональные веб-приложения. Frontend, Backend, База данных",
        feature1: "RESTful API",
        feature2: "Дизайн БД",
        feature3: "Аутентификация",
        feature4: "Интеграция платежей",
        price: "от $3000",
      },
      service3: {
        title: "Мобильная разработка",
        description:
          "Кроссплатформенные мобильные приложения. React Native, Expo",
        feature1: "iOS & Android",
        feature2: "Нативная производительность",
        feature3: "Push-уведомления",
        feature4: "Публикация в Store",
        price: "от $2500",
      },
      service4: {
        title: "UI/UX дизайн",
        description: "Дизайн удобного интерфейса для пользователей",
        feature1: "Wireframing",
        feature2: "Прототипирование",
        feature3: "User research",
        feature4: "Дизайн-система",
        price: "от $800",
      },
      service5: {
        title: "DevOps и развертывание",
        description: "Настройка серверов, CI/CD, мониторинг",
        feature1: "Настройка AWS/Vercel",
        feature2: "Docker контейнеры",
        feature3: "Авто-развертывание",
        feature4: "Мониторинг производительности",
        price: "от $600",
      },
      service6: {
        title: "Поддержка и обслуживание",
        description: "Техническая поддержка ваших сайтов и приложений",
        feature1: "Исправление ошибок",
        feature2: "Обновления",
        feature3: "Настройка производительности",
        feature4: "Поддержка 24/7",
        price: "$300/мес",
      },
    },
    cases: {
      tag: "портфолио",
      title: "Мои проекты",
      description: "Выполненные работы и успешные проекты",
      viewProject: "Посмотреть →",
      case1: {
        category: "E-commerce",
        title: "Платформа онлайн-маркета",
        description:
          "Полнофункциональная платформа онлайн-торговли. 10,000+ товаров, инвентарь в реальном времени",
        users: "Пользователей",
        revenue: "Продаж",
      },
      case2: {
        category: "SaaS платформа",
        title: "Инструмент управления проектами",
        description:
          "Программа управления проектами для команд. Совместная работа в реальном времени, отслеживание задач",
        companies: "Компаний",
        satisfaction: "Удовлетворенность",
      },
      case3: {
        category: "Мобильное приложение",
        title: "Приложение для фитнеса",
        description:
          "Приложение личного фитнес-тренера. Планы тренировок на основе AI, отслеживание питания",
        downloads: "Загрузок",
        rating: "Рейтинг",
      },
    },
    reviews: {
      tag: "отзывы",
      title: "Отзывы клиентов",
      description: "Отзывы моих партнеров",
      review1: {
        text: "Работать с Дильшодбеком было потрясающе! Профессиональный подход, быстрое выполнение и высокое качество. Наш проект превзошел ожидания.",
        name: "Акмал Каримов",
        position: "CEO, Digital Solutions",
      },
      review2: {
        text: "Очень помог в создании нашей e-commerce платформы. Внимание к каждой детали, понимание потребностей клиента - это его главная сила!",
        name: "Малика Рахимова",
        position: "Основатель, ShopUz",
      },
      review3: {
        text: "Отлично поработал над нашим mobile app проектом. Чистый код, оптимальная производительность и никогда не нарушал дедлайны. Рекомендую!",
        name: "Сардор Усманов",
        position: "CTO, TechStart",
      },
      review4: {
        text: "Создал CRM систему для нашей компании. Все процессы автоматизированы, эффективность выросла в 3 раза. Спасибо!",
        name: "Нигора Саидова",
        position: "Менеджер, Business Pro",
      },
      review5: {
        text: "Профессиональный подход к созданию landing page. Conversion rate вырос в 2 раза. Отлично и с дизайном, и технически!",
        name: "Жасур Турсунов",
        position: "Директор по маркетингу, Growth Agency",
      },
      review6: {
        text: "Оптимизировал наш сайт для SEO и повысил производительность в 10 раз. Вышли на первую страницу Google. Потрясающе!",
        name: "Зилола Алиева",
        position: "Владелец, Beauty Studio",
      },
    },
    footer: { rights: "© 2025 Дильшодбек Акиев // Все права защищены" },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      services: "Services",
      cases: "Case Studies",
      reviews: "Reviews",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      staticText: "I'm a ",
      description: "I create modern web and mobile applications.",
      cta1: "My Services",
      cta2: "Get in Touch",
      stats: {
        experience: "Years Experience",
        projects: "Completed Projects",
        clients: "Happy Clients",
        satisfaction: "Client Satisfaction",
      },
    },
    titles: [
      "Creative Frontend Engineer",
      "Software Engineer",
      "Full Stack Developer",
      "JavaScript Developer",
      "React Developer",
      "Next.js Developer",
      "Node.js Developer",
      "AI Developer",
      "Clean Code Enthusiast",
    ],
    about: {
      tag: "about",
      title: "About Me",
      description:
        "Professional full-stack developer and modern web technology specialist",
      text1:
        "I'm a full-stack developer with 5+ years of experience, specializing in creating modern web and mobile applications. I develop innovative solutions using React, Next.js, Node.js and other advanced technologies.",
      text2:
        "I approach each project with creativity and professional execution. I value long-term partnerships with clients and help grow their business.",
      skills: {
        frontend: {
          title: "Frontend",
          items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
        },
        backend: {
          title: "Backend",
          items: [
            "Node.js & Express",
            "PostgreSQL & MongoDB",
            "REST & GraphQL API",
            "Redis & WebSocket",
          ],
        },
        mobile: {
          title: "Mobile",
          items: ["React Native", "Expo", "Mobile UI/UX", "App Deployment"],
        },
        devops: {
          title: "DevOps",
          items: [
            "AWS & Vercel",
            "Docker & CI/CD",
            "Nginx & PM2",
            "Git & GitHub Actions",
          ],
        },
      },
    },
    contact: {
      tag: "contact",
      title: "Get in Touch",
      description: "Ready to discuss your project",
      email: "Email",
      phone: "Phone",
      telegram: "Telegram",
      github: "GitHub",
      linkedin: "LinkedIn",
      form: {
        name: "Your Name",
        namePlaceholder: "Enter your name",
        email: "Your Email",
        emailPlaceholder: "email@example.com",
        message: "Your Message",
        messagePlaceholder: "Tell me more about your project...",
        submit: "Send Message",
        sending: "Sending...",
        success:
          "✓ Your message has been sent successfully! I'll respond soon.",
      },
    },
    experience: {
      tag: "experience",
      title: "My Work Experience",
      description: "Professional development path and key achievements",
      job1: {
        date: "2023 - Present",
        title: "Senior Full-Stack Developer",
        company: "Tech Solutions LLC",
        description:
          "Building enterprise-level web applications, team management and technical architecture design",
      },
      job2: {
        date: "2021 - 2023",
        title: "Full-Stack Developer",
        company: "Digital Agency Uzbekistan",
        description:
          "Creating modern web and mobile applications for clients, API integrations",
      },
      job3: {
        date: "2020 - 2021",
        title: "Frontend Developer",
        company: "StartUp Hub",
        description:
          "Creating responsive and user-friendly interfaces, implementing UI/UX design",
      },
    },
    education: {
      tag: "education",
      title: "Education",
      description: "Academic education and professional certificates",
      degree1: {
        degree: "Bachelor's Degree",
        major: "Computer Science and Programming Technologies",
        school: "Termez State University",
        year: "2016 - 2020",
        description:
          "Programming, algorithms and data structures, web technology fundamentals",
      },
      cert1: {
        degree: "Certificate",
        major: "Advanced React & Next.js",
        school: "Udemy Online Platform",
        year: "2022",
        description:
          "Server-side rendering, performance optimization, advanced hooks",
      },
      cert2: {
        degree: "Certificate",
        major: "AWS Cloud Practitioner",
        school: "Amazon Web Services",
        year: "2023",
        description: "Cloud architecture, deployment strategies, scalability",
      },
      cert3: {
        degree: "Certificate",
        major: "Full-Stack JavaScript",
        school: "freeCodeCamp",
        year: "2021",
        description: "Node.js, Express, MongoDB, RESTful API design",
      },
    },
    services: {
      tag: "services",
      title: "My Services",
      description: "Professional web solutions for your business",
      popular: "POPULAR",
      service1: {
        title: "Web Development",
        description:
          "Creating modern and responsive websites. React, Next.js, TypeScript",
        feature1: "Responsive design",
        feature2: "SEO optimization",
        feature3: "Fast loading",
        feature4: "Cross-browser support",
        price: "from $1000",
      },
      service2: {
        title: "Full-Stack Development",
        description:
          "Fully functional web applications. Frontend, Backend, Database",
        feature1: "RESTful API",
        feature2: "Database design",
        feature3: "Authentication",
        feature4: "Payment integration",
        price: "from $3000",
      },
      service3: {
        title: "Mobile Development",
        description: "Cross-platform mobile applications. React Native, Expo",
        feature1: "iOS & Android",
        feature2: "Native performance",
        feature3: "Push notifications",
        feature4: "App Store deploy",
        price: "from $2500",
      },
      service4: {
        title: "UI/UX Design",
        description: "User-friendly interface design",
        feature1: "Wireframing",
        feature2: "Prototype",
        feature3: "User research",
        feature4: "Design system",
        price: "from $800",
      },
      service5: {
        title: "DevOps & Deployment",
        description: "Server setup, CI/CD, monitoring",
        feature1: "AWS/Vercel setup",
        feature2: "Docker containers",
        feature3: "Auto deployment",
        feature4: "Performance monitoring",
        price: "from $600",
      },
      service6: {
        title: "Maintenance & Support",
        description: "Technical support for your sites and applications",
        feature1: "Bug fixing",
        feature2: "Updates",
        feature3: "Performance tuning",
        feature4: "24/7 support",
        price: "$300/month",
      },
    },
    cases: {
      tag: "portfolio",
      title: "My Projects",
      description: "Completed works and successful projects",
      viewProject: "View →",
      case1: {
        category: "E-commerce",
        title: "Online Market Platform",
        description:
          "Fully functional online trading platform. 10,000+ products, real-time inventory",
        users: "Users",
        revenue: "Sales",
      },
      case2: {
        category: "SaaS Platform",
        title: "Project Management Tool",
        description:
          "Project management software for teams. Real-time collaboration, task tracking",
        companies: "Companies",
        satisfaction: "Satisfaction",
      },
      case3: {
        category: "Mobile App",
        title: "Fitness Tracking App",
        description:
          "Personal fitness trainer app. AI-powered workout plans, nutrition tracking",
        downloads: "Downloads",
        rating: "Rating",
      },
    },
    reviews: {
      tag: "testimonials",
      title: "Client Reviews",
      description: "Feedback from my partners",
      review1: {
        text: "Working with Dilshodbek was an amazing experience! Professional approach, fast delivery and high quality. Our project exceeded expectations.",
        name: "Akmal Karimov",
        position: "CEO, Digital Solutions",
      },
      review2: {
        text: "He was a great help in creating our e-commerce platform. Attention to every detail, understanding client needs - that's his main strength!",
        name: "Malika Rahimova",
        position: "Founder, ShopUz",
      },
      review3: {
        text: "Did excellent work on our mobile app project. Clean code, optimal performance and never missed deadlines. Highly recommend!",
        name: "Sardor Usmanov",
        position: "CTO, TechStart",
      },
      review4: {
        text: "Created a CRM system for our company. All processes are automated, efficiency increased 3 times. Thank you!",
        name: "Nigora Saidova",
        position: "Manager, Business Pro",
      },
      review5: {
        text: "Professional approach to creating landing pages. Conversion rate doubled. Great both in design and technically!",
        name: "Jasur Tursunov",
        position: "Marketing Director, Growth Agency",
      },
      review6: {
        text: "Optimized our website for SEO and increased performance 10 times. We made it to Google's first page. Amazing!",
        name: "Zilola Aliyeva",
        position: "Owner, Beauty Studio",
      },
    },
    footer: { rights: "© 2025 Dilshodbek Aqiyev // All rights reserved" },
  },
};

let currentLang = localStorage.getItem("language") || "uz";
let currentTheme = localStorage.getItem("theme") || "dark";

// Initialize theme
document.documentElement.setAttribute("data-theme", currentTheme);
document.getElementById("themeIcon").textContent =
  currentTheme === "dark" ? "🌙" : "☀️";
document.getElementById("mobileThemeIcon").textContent =
  currentTheme === "dark" ? "🌙" : "☀️";

// Theme toggle
function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", currentTheme);
  document.getElementById("themeIcon").textContent =
    currentTheme === "dark" ? "🌙" : "☀️";
  document.getElementById("mobileThemeIcon").textContent =
    currentTheme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("theme", currentTheme);
}

document.getElementById("themeToggle").addEventListener("click", toggleTheme);
document
  .getElementById("mobileThemeToggle")
  .addEventListener("click", toggleTheme);

// Burger menu
const burgerMenu = document.getElementById("burgerMenu");
const mobileSidebar = document.getElementById("mobileSidebar");
const mobileOverlay = document.getElementById("mobileOverlay");

function toggleMobileMenu() {
  burgerMenu.classList.toggle("active");
  mobileSidebar.classList.toggle("active");
  mobileOverlay.classList.toggle("active");
  document.body.style.overflow = mobileSidebar.classList.contains("active")
    ? "hidden"
    : "";
}

function closeMobileMenu() {
  burgerMenu.classList.remove("active");
  mobileSidebar.classList.remove("active");
  mobileOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

burgerMenu.addEventListener("click", toggleMobileMenu);
mobileOverlay.addEventListener("click", closeMobileMenu);

// Close mobile menu when clicking on links
document.querySelectorAll(".mobile-nav-links a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Language toggle
const langToggle = document.getElementById("langToggle");
const langMenu = document.getElementById("langMenu");
const mobileLangToggle = document.getElementById("mobileLangToggle");
const mobileLangMenu = document.getElementById("mobileLangMenu");

langToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  langMenu.classList.toggle("active");
  mobileLangMenu.classList.remove("active");
});

mobileLangToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileLangMenu.classList.toggle("active");
  langMenu.classList.remove("active");
});

document.addEventListener("click", () => {
  langMenu.classList.remove("active");
  mobileLangMenu.classList.remove("active");
});

document.querySelectorAll(".lang-option").forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    const lang = option.getAttribute("data-lang");
    setLanguage(lang);
    langMenu.classList.remove("active");
    mobileLangMenu.classList.remove("active");
  });
});

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  updateLanguage();
  updateActiveLanguage();
  restartTypingAnimation();
}

function updateLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = getNestedTranslation(translations[currentLang], key);
    if (text) el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const text = getNestedTranslation(translations[currentLang], key);
    if (text) el.placeholder = text;
  });

  document.querySelectorAll("[data-i18n-list]").forEach((el) => {
    const key = el.getAttribute("data-i18n-list");
    const items = getNestedTranslation(translations[currentLang], key);
    if (Array.isArray(items)) {
      el.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
    }
  });
}

function getNestedTranslation(obj, path) {
  return path.split(".").reduce((prev, curr) => prev?.[curr], obj);
}

function updateActiveLanguage() {
  document.querySelectorAll(".lang-option").forEach((option) => {
    option.classList.toggle(
      "active",
      option.getAttribute("data-lang") === currentLang
    );
  });
}

// Typing Animation
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80;
const animatedText = document.getElementById("animatedText");

function typeTitle() {
  const currentTitles = translations[currentLang].titles;
  const currentTitle = currentTitles[titleIndex];

  if (isDeleting) {
    animatedText.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 40;
  } else {
    animatedText.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 80;
  }

  if (!isDeleting && charIndex === currentTitle.length) {
    typingSpeed = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % currentTitles.length;
    typingSpeed = 300;
  }

  setTimeout(typeTitle, typingSpeed);
}

function restartTypingAnimation() {
  titleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  animatedText.textContent = "";
}

// Initialize
updateLanguage();
updateActiveLanguage();
typeTitle();

// Default Config
const defaultConfig = {
  meta_title:
    "Dilshodbek Aqiyev - Full-Stack Developer & UI/UX Enthusiast | Portfolio",
  meta_description:
    "Professional full-stack web developer. React, Next.js, Node.js va zamonaviy texnologiyalar bilan 5+ yillik tajriba.",
  meta_keywords:
    "web developer, full-stack developer, react developer, next.js developer",
  full_name: "Dilshodbek Aqiyev",
  tagline: "Full-Stack Developer & UI/UX Enthusiast",
  hero_text: "Zamonaviy web va mobil ilovalar yaratish bilan shug'ullanaman",
  about_title: "Men haqimda",
  about_description:
    "Professional full-stack developer va zamonaviy web texnologiyalari mutaxassisi",
  university_name: "Termiz Davlat Universiteti",
  degree_name: "Kompyuter ilmlari va dasturlash texnologiyalari",
  email_address: "info@dilshodbekaqiyev.uz",
  phone_number: "+998 90 123 45 67",
  telegram_username: "@dilshodbekaqiyev",
  github_username: "dilshodbekaqiyev",
  linkedin_username: "dilshodbekaqiyev",
};

async function onConfigChange(config) {
  const pageTitle = document.getElementById("page-title");
  const metaTitle = document.getElementById("meta-title");
  const metaDescription = document.getElementById("meta-description");
  const metaKeywords = document.getElementById("meta-keywords");

  const title = config.meta_title || defaultConfig.meta_title;
  const description = config.meta_description || defaultConfig.meta_description;
  const keywords = config.meta_keywords || defaultConfig.meta_keywords;

  if (pageTitle) pageTitle.textContent = title;
  if (metaTitle) metaTitle.setAttribute("content", title);
  if (metaDescription) metaDescription.setAttribute("content", description);
  if (metaKeywords) metaKeywords.setAttribute("content", keywords);

  const heroName = document.getElementById("hero-name");
  if (heroName)
    heroName.textContent = config.full_name || defaultConfig.full_name;

  const aboutTitle = document.getElementById("about-title");
  if (aboutTitle)
    aboutTitle.textContent = config.about_title || defaultConfig.about_title;

  const contactEmailValue = document.getElementById("contact-email-value");
  const contactPhoneValue = document.getElementById("contact-phone-value");
  const contactTelegramValue = document.getElementById(
    "contact-telegram-value"
  );
  const contactGithubValue = document.getElementById("contact-github-value");
  const contactLinkedinValue = document.getElementById(
    "contact-linkedin-value"
  );

  if (contactEmailValue)
    contactEmailValue.textContent =
      config.email_address || defaultConfig.email_address;
  if (contactPhoneValue)
    contactPhoneValue.textContent =
      config.phone_number || defaultConfig.phone_number;
  if (contactTelegramValue)
    contactTelegramValue.textContent =
      config.telegram_username || defaultConfig.telegram_username;
  if (contactGithubValue)
    contactGithubValue.textContent =
      config.github_username || defaultConfig.github_username;
  if (contactLinkedinValue)
    contactLinkedinValue.textContent =
      config.linkedin_username || defaultConfig.linkedin_username;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig: defaultConfig,
    onConfigChange: onConfigChange,
    mapToCapabilities: () => ({
      recolorables: [],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined,
    }),
    mapToEditPanelValues: (config) =>
      new Map([
        ["meta_title", config.meta_title || defaultConfig.meta_title],
        [
          "meta_description",
          config.meta_description || defaultConfig.meta_description,
        ],
        ["meta_keywords", config.meta_keywords || defaultConfig.meta_keywords],
        ["full_name", config.full_name || defaultConfig.full_name],
        ["tagline", config.tagline || defaultConfig.tagline],
        ["hero_text", config.hero_text || defaultConfig.hero_text],
        ["about_title", config.about_title || defaultConfig.about_title],
        [
          "about_description",
          config.about_description || defaultConfig.about_description,
        ],
        [
          "university_name",
          config.university_name || defaultConfig.university_name,
        ],
        ["degree_name", config.degree_name || defaultConfig.degree_name],
        ["email_address", config.email_address || defaultConfig.email_address],
        ["phone_number", config.phone_number || defaultConfig.phone_number],
        [
          "telegram_username",
          config.telegram_username || defaultConfig.telegram_username,
        ],
        [
          "github_username",
          config.github_username || defaultConfig.github_username,
        ],
        [
          "linkedin_username",
          config.linkedin_username || defaultConfig.linkedin_username,
        ],
      ]),
  });
}

// Contact Form
const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  submitButton.disabled = true;
  submitButton.innerHTML = `<span>${translations[currentLang].contact.form.sending}</span>`;

  setTimeout(() => {
    formMessage.className = "form-message success";
    formMessage.textContent = translations[currentLang].contact.form.success;

    contactForm.reset();
    submitButton.disabled = false;
    submitButton.innerHTML = `<span>${translations[currentLang].contact.form.submit}</span><span>→</span>`;

    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  }, 1500);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  });
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9a29d37e722b2d19',t:'MTc2MzgyOTE4MS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();

// Navbar links
const navLinks = document.querySelectorAll(".nav-links a");
const mobileLinks = document.querySelectorAll(".mobile-nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100; // navbar balandligi uchun offset
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      mobileLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelectorAll(`.nav-links a[href="#${sectionId}"]`)
        .forEach((link) => link.classList.add("active"));
      document
        .querySelectorAll(`.mobile-nav-links a[href="#${sectionId}"]`)
        .forEach((link) => link.classList.add("active"));
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
  });
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    mobileLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
  });
});
