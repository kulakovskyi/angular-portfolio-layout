import {createAction, props} from "@ngrx/store";
import {ActionType} from "../action-type";
import {UserDataInterface} from "../../../admin/types/user-data.interface";


export const updateCurrentUserAction =
  createAction(ActionType.UPDATE_CURRENT_USER, props<{ currentUserInput: UserDataInterface }>()
  )

export const updateCurrentUserSuccessAction =
  createAction(ActionType.UPDATE_CURRENT_USER_SUCCESS, props<{ currentUser: UserDataInterface }>()
  )

export const updateCurrentUserFailureAction =
  createAction(ActionType.UPDATE_CURRENT_USER_FAILURE, props<{ errors: any }>()
  )
