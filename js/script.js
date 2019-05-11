const welcomeButton = document.querySelector('button');
welcomeButton.addEventListener('click', (e) => {
  e.preventDefault();
  alert('Welcome To My App');
});

const usersContainer = document.getElementById('users-container');

const renderTemplate = (data) => {
  const {
    street,
    suite,
    city,
    zipcode,
  } = data.address;
  return `
    <ul class="list-group">
    <li class="list-group-item list-group-item-primary"><strong>Name:</strong> ${data.name}</li>
    <li class="list-group-item"><strong>Username:</strong> ${data.username}</li>
    <li class="list-group-item"><strong>Email:</strong> ${data.email}</li>
    <li class="list-group-item"><strong>Address:</strong> ${street} ${suite}, ${city}, ${zipcode}</li>
    </ul>
  `;
};

// Fetch list of users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((users) => {
    users.forEach((user) => {
      const li = document.createElement('li');
      li.innerHTML = renderTemplate(user);
      usersContainer.appendChild(li);
    });
  });
