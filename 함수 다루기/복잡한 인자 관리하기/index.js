function createCar({ name, brand, color, type }) {
  if (!name) {
    throw new Error('name is required');
  }

  if (!brand) {
    throw new Error('brand is required');
  }
}

createCar({ name: 'CAR', brand: 'Tesla', type: 'SUV' });
