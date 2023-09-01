const orderHistory = [
  {
    orderDate: 'August 4, 2020',
    deliveryDate: 'August 8, 2020',
    orderNumber: 'ORDER# 114-3941689-8772232',
    productType: 'Book',
    title: 'JavaScript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    price: '$31.55',
  },
  {
    orderDate: 'Jul 19, 2020',
    deliveryDate: 'July 20, 2020',
    orderNumber: 'ORDER# 113-9984268-1280257',
    productType: 'Book',
    title: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    price: '$41.33',
  },
  {
    orderDate: 'Jul 4, 2020',
    deliveryDate: 'July 7, 2020',
    orderNumber: 'ORDER# 114-2875557-9059409',
    productType: 'Adapter',
    title:
      'Gamecube Controller Adapter: Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    author: 'Not Available',
    price: '$15.98',
  },
  {
    orderDate: 'Jul 3, 2020',
    deliveryDate: 'Jul 5, 2020',
    orderNumber: 'ORDER# 113-2883177-2648248',
    productType: 'Controller & Book',
    title: 'The Art of Sql',
    author: 'Faroult, Stephane',
    price: '$94.95',
  },
];
const lastItem = orderHistory[3].productType;
console.log(lastItem);
