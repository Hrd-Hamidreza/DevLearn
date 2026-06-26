const users = [
  {
    id: 1,
    name: "علی رضایی",
    email: "ali.rezaei@example.com",
    password: "hashed_password_1",
    role: "student",
    avatar: "/images/users/1.png",
    purchasedCourses: [1],
  },
  {
    id: 2,
    name: "زهرا کریمی",
    email: "zahra.karimi@example.com",
    password: "hashed_password_2",
    role: "student",
    avatar: "/images/users/2.png",
    purchasedCourses: [2, 5],
  },
  {
    id: 3,
    name: "حمیدرضا دارایی",
    email: "hamidrezadaraei@yahoo.com",
    password: "hashed_password_3",
    role: "student",
    avatar: "/images/users/3.png",
    purchasedCourses: [4, 2, 5],
  },
  {
    id: 4,
    name: "پرنیا طاهریان",
    email: "parniataherian2007@gmail.com",
    password: "hashed_password_4",
    role: "student",
    avatar: "/images/users/4.png",
    purchasedCourses: [6, 1, 3, 2],
  },
  {
    id: 5,
    name: "علیرضا محمدی",
    email: "alireza.mohamadi@example.com",
    password: "hashed_password_5",
    role: "teacher",
    avatar: "/images/users/5.png",
    purchasedCourses: [3, 6, 1, 2, 4, 5],
  },

  {
    id: 6,
    name: "مدیر سایت",
    email: "admin@example.com",
    password: "hashed_password_admin",
    role: "admin",
    avatar: "/images/users/6.png",
  },
];

export default users;
