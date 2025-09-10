export const languages = {
  tr: {
    code: "tr",
    name: "Türkçe",
    flag: "🇹🇷",
  },
  en: {
    code: "en",
    name: "English",
    flag: "🇺🇸",
  },
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "tr";

export const translations = {
  tr: {
    blog: "Blog",
    readMore: "Devamını Oku",
    readTime: "dk okuma",
    publishedOn: "Yayınlanma",
    tags: "Etiketler",
    backToBlog: "Blog'a Dön",
    blogDescription:
      "Frontend ve backend development hakkında deneyimlerimi, öğrendiklerimi ve ipuçlarımı paylaşıyorum.",
    home: "Ana Sayfa",
    about: "Hakkımda",
    skills: "Yetenekler",
    projects: "Projeler",
    contact: "İletişim",
    aboutMe: "Hakkımda",
    myProjects: "Projelerim",
    letsConnect: "İletişime Geçelim",

    welcomeText: "Merhaba, ben",
    roleText: "Software Engineer",
    heroDescription:
      "Frontend ve backend geliştirmeye tutkulu, her proje ile web uygulamalarının karmaşık mekaniklerini derinlemesine anlama hedefiyle ilerleyen bir geliştiriciyim.",

    aboutDescription:
      "Yetkin bir Software Engineer olmaya odaklanmış, kodlama tutkum hem frontend hem de backend geliştirmeyi öğrenmeme yönlendiriyor. Her proje ile web uygulamalarının karmaşık mekaniklerini daha derinlemesine anlıyorum. Yazdığım her kod satırı uzmanlığımı ve problem çözme yeteneklerimi geliştirmeme katkıda bulunuyor.",

    skillsDescription:
      "Çeşitli teknolojiler ve framework'ler ile çalışarak deneyim kazandım.",

    contactDescription:
      "Şu anda yeni fırsatlar arıyorum, gelen kutum her zaman açık. Bir sorunuz olsun ya da sadece merhaba demek isteyin, size geri dönmek için elimden geleni yapacağım!",

    skillsSlogan: "Modern teknolojilerle uygulamalar geliştiriyorum",
    skillsTab: "Yetenekler",
    education: "Eğitim",
    courses: "Kurslar",
    certifications: "Sertifikalar",

    yourEmail: "E-posta adresiniz",
    subject: "Konu",
    message: "Mesaj",
    sendMessage: "Mesaj Gönder",
    emailPlaceholder: "ornek@email.com",
    subjectPlaceholder: "Sadece merhaba demek",
    messagePlaceholder: "Hadi konuşalım...",

    downloadCV: "CV İndir",
    cvTitle: "Özgeçmişim",
    cvDescription:
      "Deneyimlerim, yeteneklerim ve projelerim hakkında detaylı bilgi almak için CV'mi indirebilirsiniz.",
    downloadButton: "CV İndir",
    whatYouWillFind: "CV'mde Neler Bulacaksınız:",
    cvFeatures: [
      "Detaylı iş deneyimi ve sorumluluklar",
      "Teknik yetenekler ve kullandığım teknolojiler",
      "Eğitim geçmişi ve sertifikalar",
      "Kişisel projeler ve başarılar",
      "İletişim bilgileri",
    ],
  },
  en: {
    blog: "Blog",
    readMore: "Read More",
    readTime: "min read",
    publishedOn: "Published on",
    tags: "Tags",
    backToBlog: "Back to Blog",
    blogDescription:
      "I share my experiences, learnings, and tips about frontend and backend development.",
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    aboutMe: "About Me",
    myProjects: "My Projects",
    letsConnect: "Let's Connect",

    welcomeText: "Hi, I am",
    roleText: "Software Engineer",
    heroDescription:
      "Dedicated to becoming a proficient Software Engineer, my passion for coding drives me to master both front-end and back-end development.",

    aboutDescription:
      "Dedicated to becoming a proficient Software Engineer, my passion for coding drives me to master both front-end and back-end development. With each project, I deepen my understanding of the intricate mechanics powering web applications. Every line of code I write contributes to refining my expertise and problem-solving skills.",

    skillsDescription:
      "I have gained experience working with various technologies and frameworks.",

    contactDescription:
      "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    skillsSlogan: "Making apps with modern technologies",
    skillsTab: "Skills",
    education: "Education",
    courses: "Courses",
    certifications: "Certifications",

    yourEmail: "Your email",
    subject: "Subject",
    message: "Message",
    sendMessage: "Send Message",
    emailPlaceholder: "example@email.com",
    subjectPlaceholder: "Just saying hi",
    messagePlaceholder: "Let's talk about...",

    downloadCV: "Download CV",
    cvTitle: "My Resume",
    cvDescription:
      "You can download my CV to get detailed information about my experiences, skills and projects.",
    downloadButton: "Download CV",
    whatYouWillFind: "What You Will Find in My CV:",
    cvFeatures: [
      "Detailed work experience and responsibilities",
      "Technical skills and technologies I use",
      "Educational background and certifications",
      "Personal projects and achievements",
      "Contact information",
    ],
  },
} as const;
