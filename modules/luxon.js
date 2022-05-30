export default () => {
  const time = document.getElementById('time');
  const today = new Date();
  const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const mytime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  const dateTime = `${date} ${mytime}`;

  time.innerHTML = dateTime;
};
