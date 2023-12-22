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
import {AlertServices} from "../../services/alert.service";

@Injectable()

export class UpdateCurrentUserEffect{
  constructor(private actions$: Actions,
              private editService: EditService,
              private alertService: AlertServices) {
  }

  updateCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCurrentUserAction),
      switchMap(({currentUserInput}) => {
        return this.editService.updateUserData(currentUserInput).pipe(
          map((currentUser: UserDataInterface) => {
            this.alertService.success('Success')
            return updateCurrentUserSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.alertService.danger('Failure')
            return of(
              updateCurrentUserFailureAction({errors: errorResponse.error})
            )
          })
        )
      })
    )
  )

}
