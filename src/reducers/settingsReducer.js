import { ALLOW_REGISTRATION } from '../actions/types';

const initialState = {allowRegistration: true}

export default function(state = initialState, action) {
  switch (action.type) {
    case ALLOW_REGISTRATION:
      return {
        ...state,
        allowRegistration: state.allowRegistration
      };
    default:
      return state;
  }
}
