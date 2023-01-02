import faker from 'faker';

const cartText = `You have ${faker.random.number()} items in your cart`;

document.getElementById('cart-container').innerHTML = cartText;