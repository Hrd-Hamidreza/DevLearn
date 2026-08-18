//! ---------------------------------------- Import

//! ---------------------------------------- Component (CategoriesCard)
export default function CategoriesCard({ category = undefined }) {
  //! ---------------------------------------- Return
  return (
    <div className="relative min-h-14 bg-white shadow rounded overflow-hidden p-4 text-center hover:bg-blue-50 cursor-pointer">
      {!category ? <div className="skeleton" /> : <span>{category?.name}</span>}
    </div>
  );
}
