//! ---------------------------------------- Import
import { useQuery } from "@tanstack/react-query";
import TeacherCard from "/src/components/Cards/TeacherCard";
import { getTeachersDataFn } from "/src/services/teacherService";
//! ---------------------------------------- Variables
const skeletonCount = 3;
//! ---------------------------------------- Component (Teacher)
export default function Teacher() {
  //! ---------------------------------------- Query
  const { data: teachers, isLoading } = useQuery({
    queryKey: ["teachers"],
    queryFn: getTeachersDataFn,
  });
  //! ---------------------------------------- Return
  return (
    <div className="w-4/5 mx-auto min-h-[30rem] bg-gray-200 rounded-3xl flex-grow max-w-6xl flex flex-col text-gray-800 p-5 my-15">
      <h2 className="text-4xl font-bold text-center mb-12">مدرسین ما</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {isLoading
          ? Array.from({ length: skeletonCount }).map((_, index) => (
              <TeacherCard key={index} />
            ))
          : teachers?.map((teacher) => (
              <TeacherCard key={teacher?.id} {...{ teacher }} />
            ))}
      </div>
    </div>
  );
}
