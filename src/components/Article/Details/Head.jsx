//! ---------------------------------------- Import
//! ---------------------------------------- Component (Head)
export default function Head({ chosen }) {
  return (
    <>
      <div className="overflow-hidden rounded-2xl mb-6 shadow">
        <img
          alt={chosen.title}
          className="w-full h-75 object-fill"
          src={chosen.cover}
        />
      </div>
    </>
  );
}
