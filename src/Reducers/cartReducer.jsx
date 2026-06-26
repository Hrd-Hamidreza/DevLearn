//! ---------------------------------------- Import
//! ---------------------------------------- Variables
export const initialState = {
  courses: [],
};
//! ---------------------------------------- Functions
export function cartReducer(cartState, action) {
  // ! ------------------------------------- Pre
  // ! ------------------- repetitiveCourse
  const repetitiveCourse = cartState.courses.find(
    (course) => +course.id === +action.course.id,
  );
  // ! ------------------- Deleted
  const deleted = cartState.courses.filter(
    (course) => +course.id !== +action.course.id,
  );
  // ! ------------------------------------- Switch
  switch (action.type) {
    // ! -------------------- Buy
    case "Buy":
      return {
        ...cartState,
        courses: repetitiveCourse
          ? [...cartState.courses]
          : [action.course, ...cartState.courses],
      };
    // ! -------------------- Delete
    case "Delete":
      return { ...cartState, courses: deleted };
    // ! -------------------- Quantity
    case "Quantity":
      return {
        ...cartState,
        courses: cartState.courses.map((course) =>
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
