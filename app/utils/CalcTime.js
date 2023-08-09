export const calcTime = () => {
  const today = new Date();
  const curHr = today.getHours();
  let time = "";
  if (curHr < 12) {
    time = "Good Morning";
    return time;
  }
  if (curHr < 18) {
    time = "Good Afternoon";
    return time;
  }
  time = "Good Evening";
  return time;
};
