import {UserDataInterface} from "../../admin/types/user-data.interface";

export interface AuthStateInterface {
  isSubmitting: boolean
  isLoading: boolean
  currentUser: UserDataInterface | null
  isLoggedIn: boolean | null
  validationErrors:  any
}
