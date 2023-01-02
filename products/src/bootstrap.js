import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('products-container-hash123');

  // assuming our container doens't have an element with id 'products-container
  if (el) {
    // probably running in isolation
    mount(el);
  } 
}

export { mount };
