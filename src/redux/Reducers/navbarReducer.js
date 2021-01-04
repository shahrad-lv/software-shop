const NAVTOGGLE = "navtoggle";

export const navtoggle = () => ({
  type: NAVTOGGLE
});

const initialState = {
  top: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NAVTOGGLE:
      return { ...state, top: !state.top };
    default:
      return state;
  }
};

