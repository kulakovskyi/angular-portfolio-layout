@Injectable()

export class LoginEffect{
    constructor(private actions$: Actions,
                private authService: AuthService,
                private persistanceService: PersistanceService,
                private router: Router) {
    }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginAction),
            switchMap(({request}) => {
                return this.authService.login(request).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        this.persistanceService.set('accessToken', currentUser.token)
                        return loginSuccessAction({currentUser})
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            loginFailureAction({errors: errorResponse.error})
                        )
                    })
                )
            })
        )
    )

    redirectAfterSubmit$ = createEffect(() =>
            this.actions$.pipe(
                ofType(loginSuccessAction),
                tap(() => {
                    this.router.navigate(['/'])
                })
            ),
        {dispatch: false}
    )
}