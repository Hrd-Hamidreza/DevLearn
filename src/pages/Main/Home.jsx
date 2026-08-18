//! ---------------------------------------- Import
import Slider from "/src/components/Home/Slider";
import Popular from "/src/components/Home/Popular";
import Articles from "/src/components/Home/Articles";
//! ---------------------------------------- Component (Home)
export default function Home() {
  //! ---------------------------------------- Retrun
  return (
    <div className="text-gray-800 w-full">
      {/* Hero Banner */}
      {/* Categories */}
      <Slider />
      {/* Popular Courses */}
      <Popular />
      {/* Blog Section */}
      <Articles />
    </div>
  );
}
