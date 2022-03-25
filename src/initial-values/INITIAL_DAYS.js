export const INITIAL_DAYS = [
  {
    label: "Monday",
    text: "Monday",
    value: 1
  },
  {
    label: "Tuesday",
    text: "Tuesday",
    value: 2
  },
  {
    label: "Wednesday",
    text: "Wednesday",
    value: 3
  },
  {
    label: "Thursday",
    text: "Thursday",
    value: 4
  },
  {
    label: "Friday",
    text: "Friday",
    value: 5
  },
  {
    label: "Saturday",
    text: "Saturday",
    value: 6
  },
  {
    label: "Sunday",
    text: "Sunday",
    value: 0
  }
]

export function convertDays(dayNum) {
  let day = "";

  switch (dayNum) {
    case "Sunday":
      day = "Sunday";
      return day;
    case 1:
      day = "Monday";
      return day;
    case 2:
      day = "Tuesday";
      return day;
    case 3:
      day = "Wednesday";
      return day;
    case 4:
      day = "Thursday";
      return day;
    case 5:
      day = "Friday";
      return day;
    case 6:
      day = "Saturday";
      return day;
    default:
      return "Sunday";
  }

}