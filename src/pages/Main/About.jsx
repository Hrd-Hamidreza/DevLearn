//! ---------------------------------------- Import
//! ---------------------------------------- Component (About)
export default function About() {
  //! ---------------------------------------- Return
  return (
    <div className="min-h-fit bg-gray-200 rounded-3xl flex-grow max-w-6xl flex flex-col mx-auto text-gray-800 p-5 my-15">
      <h2 className="text-3xl font-extrabold mb-12 text-center">About us</h2>
      <p className="mb-6 text-lg leading-relaxed">
        At
        <span className="font-semibold text-blue-600"> DevLearn </span>, we
        believe that learning to code should be simple, purposeful, and
        effective. By offering comprehensive and up-to-date courses, we strive
        to provide the best educational experience for technology enthusiasts
        around the world.
      </p>
      <p className="mb-6 text-lg leading-relaxed">
        Our team consists of professional and experienced instructors who work
        in various fields such as front-end, back-end, artificial intelligence,
        security, and mobile. Our goal is to help you grow and progress on your
        programming path.
      </p>
      <p className="mb-6 text-lg leading-relaxed">
        Join<span className="font-semibold text-blue-600"> DevLearn </span>
        family and start your learning journey with us!
      </p>
    </div>
  );
}
