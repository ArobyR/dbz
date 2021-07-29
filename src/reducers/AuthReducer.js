import { authType } from "../types/authTypes";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case authType.login:
      return { log: true };

    case authType.logout:
      return { log: false };

    default:
      return state;
  }
};
