import PRODUCT from '../../data/dummydata';
const initialState = {
  availableProduct: PRODUCT,
  userProducts: PRODUCT.filter(p => p.ownerId === 'u1'),
};

export default (state = initialState, action) => {
  return state;
};
