// better-date/index.js

function formatDate(date, format = "YYYY-MM-DD") {
  const d = new Date(date);
  return format
    .replace("YYYY", d.getFullYear())
    .replace("MM", String(d.getMonth() + 1).padStart(2, "0"))
    .replace("DD", String(d.getDate()).padStart(2, "0"));
}

function getRelativeTime(inputDate) {
  const now = new Date();
  const date = new Date(inputDate);
  const diff = now - date;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return `just now`;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

module.exports = { formatDate, getRelativeTime, isLeapYear };
