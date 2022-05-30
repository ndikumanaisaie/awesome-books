/* eslint-disable no-undef */
export default () => {
  const time = document.getElementById('time');
  setInterval(() => {
    const dt = luxon.DateTime.now();
    time.textContent = dt.toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1);
};
