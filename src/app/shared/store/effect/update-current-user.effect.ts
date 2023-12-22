import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {EditService} from "../../../admin/services/edit.service";
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction
} from "../action/update-current-user.action";
import {UserDataInterface} from "../../../admin/types/user-data.interface";

@Injectable()

export class UpdateCurrentUserEffect{
  constructor(private actions$: Actions,
              private editService: EditService) {
  }

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({currentUserInput}) => {
        return this.editService.updateUserData(currentUserInput).pipe(
          map((currentUser: UserDataInterface) => {
            return updateCurrentUserSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateCurrentUserFailureAction({errors: errorResponse.error})
            )
          })
        )
      })
    )
  )

}
