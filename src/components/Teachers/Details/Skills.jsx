//! ---------------------------------------- Import
//! ---------------------------------------- Component (Router)
export default function Skills({ chosen }) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">
        مهارت‌ها و تخصص‌ها
      </h3>
      <div className="flex flex-wrap gap-3">
        {chosen.skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
