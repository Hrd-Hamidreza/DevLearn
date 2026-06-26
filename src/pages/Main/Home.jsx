//! ---------------------------------------- Import
import Slider from "../../components/Home/Slider";
import Popular from "../../components/Home/Popular";
import Articles from "../../components/Home/Articles";
//! ---------------------------------------- Component (Home)
function Home() {
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

export default Home;
