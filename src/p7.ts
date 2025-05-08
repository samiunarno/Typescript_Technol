{
  enum days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: days): string {
    switch (day) {
      case days.Friday:
      case days.Friday:
        return "Weekend";

      case days.Monday:
      case days.Tuesday:
      case days.Wednesday:
      case days.Thursday:
      case days.Saturday:
      case days.Sunday:
        return "Weekday";

      default:
        return "Wrong Day";
    }
  }

  const dayType = getDayType(days.Monday);
  const dayType2 = getDayType(days.Friday);
  console.log("Today is :", dayType);
  console.log("Today is : ", dayType2);
}
