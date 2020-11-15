import React, { createContext, useReducer, useContext } from 'react';
import { AUTH_TOKEN } from 'constant';
import jwt from 'jwt-decode';
import LocalStore from 'helpers/localStore';

export type UserRoleType = null | 'user' | 'admin';
export type UserTokenType = { role: UserRoleType };

const defaultToken = LocalStore.get(AUTH_TOKEN);
let defaultUser;
try {
  defaultUser = jwt(defaultToken || '') as UserTokenType;
} catch (err) {
  //
}

export interface StateType {
  loginModalVisible: boolean;
  signupModalVisible: boolean;
  isLoggedIn: boolean;
  userRole: UserRoleType;
}

export enum ActionConstantType {
  SET_LOGIN_VISIBLE = 'setLoginVisible',
  SET_SIGNUP_VISIBLE = 'setSignupVisible',
  SET_USER_DATA = 'setUserData',
}

export type ActionType =
  | { type: ActionConstantType.SET_LOGIN_VISIBLE; payload: boolean }
  | { type: ActionConstantType.SET_SIGNUP_VISIBLE; payload: boolean }
  | { type: ActionConstantType.SET_USER_DATA; payload: { role: UserRoleType; loggedIn: boolean } };

const initialState = {
  loginModalVisible: false,
  signupModalVisible: false,
  isLoggedIn: !!defaultToken,
  userRole: (defaultUser && defaultUser.role) || null,
};

type Store = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

const Reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case ActionConstantType.SET_LOGIN_VISIBLE:
      return {
        ...state,
        loginModalVisible: action.payload,
      };
    case ActionConstantType.SET_SIGNUP_VISIBLE:
      return {
        ...state,
        signupModalVisible: action.payload,
      };
    case ActionConstantType.SET_USER_DATA:
      return {
        ...state,
        isLoggedIn: action.payload.loggedIn,
        userRole: action.payload.role,
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext<Store>({ state: initialState, dispatch: () => initialState });

export const GlobalStore = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export const useGlobalStore = () => useContext(GlobalContext);
