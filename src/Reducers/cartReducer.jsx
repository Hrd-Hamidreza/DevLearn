//! ---------------------------------------- Import
//! ---------------------------------------- Variables
export const initialState = {
  courses: [],
};
//! ---------------------------------------- Functions
export function cartReducer(state, action) {
  // ! ------------------------------------- Pre
  // ! ------------------- repetitiveCourse
  const repetitiveCourse = state.courses.find(
    (course) => +course.id === +action.course.id,
  );
  // ! ------------------- Deleted
  const deleted = state.courses.filter(
    (course) => +course.id !== +action.course.id,
  );
  // ! ------------------------------------- Switch
  switch (action.type) {
    // ! -------------------- Buy
    case "Buy":
      return {
        ...state,
        courses: repetitiveCourse
          ? [...state.courses]
          : [action.course, ...state.courses],
      };
    // ! -------------------- Delete
    case "Delete":
      return { ...state, courses: deleted };
    // ! -------------------- Quantity
    case "Quantity":
      return {
        ...state,
        courses: state.courses.map((course) =>
          +course.id === +action.course.id
            ? {
                ...course,
                quantity:
                  action.priority === "Plus"
                    ? course.quantity + 1
                    : course.quantity - 1 <= 0
                      ? 1
                      : course.quantity - 1,
              }
            : course,
        ),
      };
  }
}
