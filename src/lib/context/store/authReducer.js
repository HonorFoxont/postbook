export const initialState = () => ({
  email: 'suckit@gmail.com',
  id: 'lmao no id',
  name: 'Dipin Bhattarai',
});

// eslint-disable-next-line default-param-last
const authReducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'ADD-USER':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default authReducer;
