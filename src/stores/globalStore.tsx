import React, { createContext, useReducer, useContext } from 'react';

export interface StateType {
  loginModalVisible: boolean;
  signupModalVisible: boolean;
}

export enum ActionConstantType {
  SET_LOGIN_VISIBLE = 'setLoginVisible',
  SET_SIGNUP_VISIBLE = 'setSignupVisible',
}

export type ActionType =
  | { type: ActionConstantType.SET_LOGIN_VISIBLE; payload: boolean }
  | { type: ActionConstantType.SET_SIGNUP_VISIBLE; payload: boolean };

const initialState = {
  loginModalVisible: false,
  signupModalVisible: false,
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
