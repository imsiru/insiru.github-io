// calendar.js
const calendar = document.getElementById('calendar');
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

function generateCalendar(year, month) {
  const date = new Date(year, month);
  let html = `<h3>${date.toLocaleString('default', { month: 'long' })} ${year}</h3>`;
  html += `<table><tr><th>Sun</th><th>Mon</th><th>Tue</th>
           <th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>`;

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  for (let i = 0; i < firstDay; i++) html += "<td></td>";
  for (let day = 1; day <= lastDate; day++) {
    html += `<td>${day}</td>`;
    if ((day + firstDay) % 7 === 0) html += "</tr><tr>";
  }
  html += "</tr></table>";
  calendar.innerHTML = html;
}

generateCalendar(year, month);
