const users = [
  {
    id: 1,
    name: "علی رضایی",
    email: "ali.rezaei@example.com",
    password: "123",
    role: "student",
    avatar: "/images/users/1.png",
    purchasedCourses: [1, 3],
  },
  {
    id: 2,
    name: "زهرا کریمی",
    email: "zahra.karimi@example.com",
    password: "hashed_password_2",
    role: "student",
    avatar: "/images/users/1.png",
    purchasedCourses: [2],
  },
  {
    id: 3,
    name: "علیرضا محمدی",
    email: "alireza.mohamadi@example.com",
    password: "hashed_password_3",
    role: "teacher",
    avatar: "/images/users/1.png",
  },
  {
    id: 4,
    name: "مدیر سایت",
    email: "admin@example.com",
    password: "hashed_password_admin",
    role: "admin",
    avatar: "/images/users/1.png",
  },
];

export default users;
