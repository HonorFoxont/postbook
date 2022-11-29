const initState = {};

const authReducer = (action, state = initState) => {
  switch (action.type) {
    case 'ADD-USER':
      return initState = action.payload;
  }
};

export default authReducer;
