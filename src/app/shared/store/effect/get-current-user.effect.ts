import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "../action/get-current-user.action";
import {EditService} from "../../../admin/services/edit.service";
import {UserDataInterface} from "../../../admin/types/user-data.interface";

@Injectable()

export class GetCurrentUserEffect{

  constructor(private actions$: Actions,
              private editService: EditService) {
  }

  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        return this.editService.getUserData().pipe(
          map((currentUser: UserDataInterface) => {
            return getCurrentUserSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCurrentUserFailureAction())
          })
        )
      })
    )
  )
}
