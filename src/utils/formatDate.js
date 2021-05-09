const formatDate = (date) => {
  const dd = new Date(date);
  let month = `${dd.getMonth() + 1}`;
  let day = `${dd.getDate()}`;
  const year = dd.getFullYear();

  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join("-");
};

export default formatDate;
