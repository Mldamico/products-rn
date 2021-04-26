import {Usuario} from '../interfaces/appInterfaces';

export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  token: string | null;
  errorMessage: string;
  user: Usuario | null;
}

type AuthAction =
  | {type: 'signUp'; payload: {token: string; user: Usuario}}
  | {type: 'addError'; payload: string}
  | {type: 'removeError'}
  | {type: 'notAuthenticated'}
  | {type: 'logout'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signUp':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        status: 'authenticated',
        errorMessage: '',
      };
    case 'addError':
      return {
        ...state,
        errorMessage: action.payload,
        user: null,
        status: 'not-authenticated',
        token: null,
      };
    case 'removeError': {
      return {
        ...state,
        errorMessage: '',
      };
    }
    case 'logout':
    case 'notAuthenticated': {
      return {
        ...state,
        status: 'not-authenticated',
        token: null,
        user: null,
      };
    }
    default:
      return state;
  }
};
