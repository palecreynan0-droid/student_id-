window.addEventListener('DOMContentLoaded', () => {
  const user = sessionStorage.getItem('username');
  if (!user) {
    window.location.href = 'index.html';
  } else {
    document.getElementById('userName').textContent = user;
  }

  // Set greeting
  const hour = new Date().getHours();
  const greetingEl = document.getElementById('greeting');
  if (hour < 12) greetingEl.textContent = 'Good Morning!';
  else if (hour < 18) greetingEl.textContent = 'Good Afternoon!';
  else greetingEl.textContent = 'Good Evening!';

  // Populate key metrics
  const stats = [
    { title: 'Orders', value: '120' },
    { title: 'Revenue', value: '$5,430' },  
    { title: 'Tables', value: '15' },
    { title: 'Popular Dish', value: 'Pasta Carbonara' }
  ];

  stats.forEach((stat, i) => {
    document.getElementById(`stat${i + 1}-title`).textContent = stat.title;
    document.getElementById(`stat${i + 1}-value`).textContent = stat.value;
  });

  // Populate recent orders
  const activities = [
    { date: '2024-04-20', orderId: 'ORD1234', name: 'Sarbida', status: 'Completed' },
    { date: '2024-04-19', orderId: 'ORD1235', name: 'Reydan', status: 'Pending' },
    { date: '2024-04-18', orderId: 'ORD1236', name:'Esmiringhoy', status: 'Cancelled' },
    { date: '2024-04-17', orderId: 'ORD1237', name: 'Tia', status: 'Completed' }
  ];

  const tbody = document.querySelector('#activityTable tbody');
  activities.forEach(act => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${act.date}</td>
      <td>${act.orderId}</td>
      <td>${act.name}</td>
      <td>${act.status}</td>
    `;
    tbody.appendChild(row);
  });

  // Logout
  document.getElementById('logoutBtn').addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'index.html';
  });
});