// STEP 1: Menu data
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

// STEP 2: Empty cart array
let order = [];

// STEP 3: Event listener for add & remove
document.addEventListener('click', (e) => {
  // STEP 4: Add to cart
  if (e.target.dataset.add) {
    const itemId = e.target.dataset.add;
    const item = menuData.find((item) => item.id === itemId);
    order.push(item);
    renderOrder();
  }

  // STEP 9 & 10: Remove from cart
  if (e.target.dataset.remove) {
    const indexToRemove = parseInt(e.target.dataset.remove);
    order.splice(indexToRemove, 1); // remove that index from array
    renderOrder();
  }
});

// STEP 6–8: Render order
const renderOrder = () => {
  const orderItems = document.getElementById('order-items');
  const orderTotal = document.getElementById('order-total');

  // clear before re-render
  orderItems.innerHTML = '';

  let total = 0;

  // loop through each item in cart
  order.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('order-item');

    // show item + price + remove button
    itemEl.innerHTML = `
      ${item.name} => $${item.price}
      <button data-remove="${index}">Remove</button>
    `;

    orderItems.appendChild(itemEl);

    // add to total price
    total += item.price;
  });

  // update total price in DOM
  orderTotal.textContent = `Total: $${total}`;
};
