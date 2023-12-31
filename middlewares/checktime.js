function check(req, res, next) {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  console.log(currentTime.getDay());
  if (
    currentTime.getDay() > 0 &&
    currentTime.getDay() < 6 &&
    currentHour >= 9 &&
    currentHour <= 17
  ) {
    next();
  } else {
    res.status(403).send("acess forbidden");
  }
}
module.exports = check;
