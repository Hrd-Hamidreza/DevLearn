//! ---------------------------------------- Import
import React from "react";
//! ---------------------------------------- Component (Main)
const About = () => {
  return (
    <div className="min-h-fit bg-gray-200 rounded-3xl flex-grow max-w-6xl flex flex-col mx-auto text-gray-800 p-5 my-15">
      <h2 className="text-4xl font-bold mb-6 text-center">درباره ما</h2>
      <p className="mb-6 text-lg leading-relaxed">
        ما در <span className="font-semibold text-blue-600">DevLearn</span>
        معتقدیم که یادگیری برنامه‌نویسی باید ساده، هدفمند و موثر باشد. با ارائه
        دوره‌های جامع و به‌روز، تلاش می‌کنیم تا بهترین تجربه آموزشی را برای
        علاقه‌مندان به فناوری‌های روز دنیا فراهم کنیم.
      </p>
      <p className="mb-6 text-lg leading-relaxed">
        تیم ما متشکل از مدرسین حرفه‌ای و با تجربه است که در زمینه‌های مختلفی
        مانند فرانت‌اند، بک‌اند، هوش مصنوعی، امنیت و موبایل فعالیت دارند. هدف ما
        کمک به رشد و پیشرفت شما در مسیر برنامه‌نویسی است.
      </p>
      <p className="mb-6 text-lg leading-relaxed">
        به جمع خانواده‌ی
        <span className="font-semibold text-blue-600">DevLearn</span> بپیوندید و
        مسیر یادگیری خود را با ما آغاز کنید!
      </p>
    </div>
  );
};

export default About;
