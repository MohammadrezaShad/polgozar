import { InMemoryCache, makeVar, gql } from '@apollo/client';
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

export const loggedInState = makeVar(!!defaultToken);
export const loginModalVisible = makeVar(false);
export const signupModalVisible = makeVar(false);
export const userRole = makeVar<UserRoleType>((defaultUser && defaultUser.role) || null);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        loggedInState: {
          read() {
            return loggedInState();
          },
        },
        loginModalVisible: {
          read() {
            return loginModalVisible();
          },
        },
        signupModalVisible: {
          read() {
            return signupModalVisible();
          },
        },
        userRole: {
          read() {
            return userRole();
          },
        },
      },
    },
  },
});

export const typeDefs = gql`
  extend type Query {
    loggedInState: Boolean!
    loginModalVisible: Boolean!
    signupModalVisible: Boolean!
    userRole: String!
  }
`;
