const menuData = [
  {
    id: 'pizza',
    name: 'Pizza',
    ingredients: 'pepperoni, mushroom, mozzarella',
    price: 14,
  },
  {
    id: 'hamburger',
    name: 'Hamburger',
    ingredients: 'beef, cheese, lettuce',
    price: 12,
  },
  {
    id: 'beer',
    name: 'Beer',
    ingredients: 'grain, hops, yeast, water',
    price: 3,
  },
];

let order = [];

document.addEventListener('click', (e) => {
  if (e.target.dataset.add) {
    const itemId = e.target.dataset.add;
    const item = menuData.find((item) => item.id === itemId);

    order.push(item);
    renderOrder();
  }

  if (e.target.dataset.remove) {
    const indexToRemove = parseInt(e.target.dataset.remove);

    order.splice(indexToRemove, 1);

    renderOrder();
  }
});

const renderOrder = () => {
  const orderItems = document.getElementById('order-items');
  const orderTotal = document.getElementById('order-total');

  orderItems.innerHTML = '';

  let total = 0;

  order.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('order-item');

    itemEl.innerHTML = `
      ${item.name} => $${item.price}
      <button data-remove="${index}">Remove</button>
    `;

    orderItems.appendChild(itemEl);

    total += item.price;
  });

  orderTotal.textContent = `Total: $${total}`;
};
