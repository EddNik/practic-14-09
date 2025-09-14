// interface User {
//   name: string;
//   address: { city: string };
// }

// const user: User = {
//   name: "Alice",
//   address: {
//     city: "Kyiv",
//   },
// };

// console.log(user.address?.city);

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek) => {
  if (day > 4) {
    console.log("DayOfWeek is holiday");
  }
};

isWeekend(DayOfWeek.Saturday);
