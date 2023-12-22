import {AuthStateInterface} from "../types/auth-state.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "./action/get-current-user.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: false,
  validationErrors: null
}

const authReducer = createReducer(
  initialState,
  on(
    getCurrentUserAction,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state) => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null
    })
  ),
  // on(
  //   updateCurrentUserSuccessAction,
  //   (state, action) =>({
  //     ...state,
  //     isLoading: false,
  //     currentUser: action.currentUser
  //   })
  // ),

)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
