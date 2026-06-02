const teachers = [
  {
    id: 1,
    name: "فرهاد کاظم زاده",
    bio: "برنامه‌نویس و مدرس حرفه‌ای React با بیش از 7 سال سابقه.",
    image: "/images/teachers/1.webp",
    skills: ["Git", "React", "Js", "Php", "Python", "Laravel"],
    social: {
      instagram: "https://instagram.com/farhad",
      linkedin: "https://linkedin.com/farhad",
      twitter: "https://twitter.com/farhad",
    },
    courses: [
      { id: 3, name: "اموزش Git", image: "/public/images/course/Git.webp" },
      {
        id: 1,
        name: "اموزش JavaScript",
        image: "/public/images/course/Js.webp",
      },
      { id: 2, name: "اموزش Php", image: "/public/images/course/php.webp" },
    ],
  },
  {
    id: 2,
    name: "سارا احمدی",
    bio: "متخصص امنیت وب و مدرس دوره‌های OWASP و تست نفوذ.",
    image: "/images/teachers/2.png",
    skills: ["Php", "Python", "Laravel"],
    social: {
      instagram: "https://instagram.com/saraAhmadi",
      linkedin: "https://linkedin.com/in/saraAhmadi",
      twitter: "https://twitter.com/saraAhmadi",
    },
    courses: [
      { id: 2, name: "اموزش Php", image: "/public/images/course/php.webp" },
    ],
  },
  {
    id: 3,
    name: "محمد کریمی",
    bio: "توسعه‌دهنده بک‌اند و مدرس Node.js و Express.",
    image: "/images/teachers/3.png",
    skills: ["Git", "React", "Js", "Php", "Laravel", "Html"],
    social: {
      instagram: "https://instagram.com/mohammadkarimi",
      linkedin: "https://linkedin.com/in/mohammadkarimi",
      twitter: "https://twitter.com/mohammadkarimi",
    },
    courses: [
      { id: 2, name: "اموزش Php", image: "/public/images/course/php.webp" },
      { id: 1, name: "اموزش Js", image: "/public/images/course/Js.webp" },
    ],
  },
];

export default teachers;
