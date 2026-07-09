//! ---------------------------------------- Import
import categories from "/src/data/categories";
//! ---------------------------------------- Component (Slider)
export default function Slider() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-blue-50 text-center py-20 px-4 flex gap-5 flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          یادگیری برنامه‌نویسی از پایه تا پیشرفته
        </h2>
        <p className="text-lg text-gray-600">
          با بهترین مدرسین ایران در مسیر یادگیری همراه شو
        </p>
        <button className="btn-primary px-6 py-2">شروع یادگیری</button>
      </section>
      {/* Categories */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">دسته‌بندی‌ها</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white shadow rounded p-4 text-center hover:bg-blue-50 cursor-pointer"
            >
              {category.name}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
