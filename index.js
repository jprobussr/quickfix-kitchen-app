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
    const item = menuData.find(item => item.id === itemId);
    order.push(item);
    renderItems();
  }
});

const renderItems = () => {
  const orderItems = document.getElementById('order-items');
  orderItems.innerHTML = '';

  order.forEach(item => {
    const itemEL = document.createElement('div');
    itemEL.textContent = `${item.name} - $${item.price}`
    orderItems.appendChild(itemEL);
  })
}

