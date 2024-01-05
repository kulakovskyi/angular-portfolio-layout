export const codes = [
  {code: '@Injectable()\n' +
      '\n' +
      'export class EditArticleService{\n' +
      '    constructor(private http: HttpClient) {\n' +
      '    }\n' +
      '\n' +
      '    updateArticle(articleInput: ArticleInputInterface, slug: string): Observable<ArticleInterface>{\n' +
      '        const fullUrl = `${environment.apiUrl}/articles/${slug}`\n' +
      '        return this.http.put<SaveArticleResponseInterface>(fullUrl, articleInput).pipe(\n' +
      '            map((res: SaveArticleResponseInterface) => {\n' +
      '                return res.article\n' +
      '            })\n' +
      '        )\n' +
      '    }\n' +
      '}'
  },
  {code: '\n' +
      'function appInitializer(authService: AuthService) {\n' +
      '    return () => {\n' +
      '        return new Promise((resolve) => {\n' +
      '            authService.getCurrentUser().subscribe().add(resolve);\n' +
      '        });\n' +
      '    };\n' +
      '}\n' +
      '\n' +
      '\n' +
      '@NgModule({\n' +
      '    declarations: [\n' +
      '        AppComponent,\n' +
      '    ],\n' +
      '    imports: [\n' +
      '        BrowserModule,\n' +
      '        AppRoutingModule,\n' +
      '        BrowserAnimationsModule,\n' +
      '        HttpClientModule,\n' +
      '        StoreModule.forRoot(AppReducers),\n' +
      '        EffectsModule.forRoot(AppEffects),\n' +
      '        StoreDevtoolsModule.instrument({\n' +
      '            maxAge: 25,\n' +
      '            logOnly: environment.production,\n' +
      '            // autoPause: true,\n' +
      '            // trace: false,\n' +
      '            // traceLimit: 75,\n' +
      '            // connectInZone: true\n' +
      '        }),\n' +
      '    ],\n' +
      '\n' +
      '    providers: [\n' +
      '        {\n' +
      '            provide: APP_INITIALIZER,\n' +
      '            useFactory: appInitializer,\n' +
      '            multi: true,\n' +
      '            deps: [AuthService],\n' +
      '        },\n' +
      '        SnapshotService,\n' +
      '        AuthService,\n' +
      '        {\n' +
      '            provide: HTTP_INTERCEPTORS,\n' +
      '            useClass: AppInterceptor,\n' +
      '            multi: true\n' +
      '        },\n' +
      '\n' +
      '    ],\n' +
      '\n' +
      '\n' +
      '    bootstrap: [AppComponent]\n' +
      '})\n' +
      'export class AppModule { }\n'},
  {code: '@Injectable()\n' +
      '\n' +
      'export class LoginEffect{\n' +
      '    constructor(private actions$: Actions,\n' +
      '                private authService: AuthService,\n' +
      '                private persistanceService: PersistanceService,\n' +
      '                private router: Router) {\n' +
      '    }\n' +
      '\n' +
      '    login$ = createEffect(() =>\n' +
      '        this.actions$.pipe(\n' +
      '            ofType(loginAction),\n' +
      '            switchMap(({request}) => {\n' +
      '                return this.authService.login(request).pipe(\n' +
      '                    map((currentUser: CurrentUserInterface) => {\n' +
      '                        this.persistanceService.set(\'accessToken\', currentUser.token)\n' +
      '                        return loginSuccessAction({currentUser})\n' +
      '                    }),\n' +
      '                    catchError((errorResponse: HttpErrorResponse) => {\n' +
      '                        return of(\n' +
      '                            loginFailureAction({errors: errorResponse.error})\n' +
      '                        )\n' +
      '                    })\n' +
      '                )\n' +
      '            })\n' +
      '        )\n' +
      '    )\n' +
      '\n' +
      '    redirectAfterSubmit$ = createEffect(() =>\n' +
      '            this.actions$.pipe(\n' +
      '                ofType(loginSuccessAction),\n' +
      '                tap(() => {\n' +
      '                    this.router.navigate([\'/\'])\n' +
      '                })\n' +
      '            ),\n' +
      '        {dispatch: false}\n' +
      '    )\n' +
      '}'},
  {code: '\n' +
      '@Injectable({\n' +
      '    providedIn: \'root\',\n' +
      '})\n' +
      'export class RoleGuard implements CanActivate {\n' +
      '    constructor(private authService: AuthService,\n' +
      '                private store: Store,\n' +
      '                private router: Router) {}\n' +
      '\n' +
      '    canActivate(\n' +
      '        next: ActivatedRouteSnapshot,\n' +
      '        state: RouterStateSnapshot\n' +
      '    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {\n' +
      '        const requiredRoles = AccessConfig.find((config) => config.page === next.data.page)?.roles;\n' +
      '\n' +
      '        if (!requiredRoles) {\n' +
      '            return true;\n' +
      '        }\n' +
      '\n' +
      '        return this.store.pipe(\n' +
      '            select(currentUserSelector),\n' +
      '            switchMap((user) => {\n' +
      '                const userRoles = user.roles;\n' +
      '                if (!requiredRoles) {\n' +
      '                    return of(true);\n' +
      '                }\n' +
      '\n' +
      '                return of(userRoles.some((role: RolesEnum) => requiredRoles.includes(role)));\n' +
      '            }),\n' +
      '            take(1),\n' +
      '            map((hasAccess) => {\n' +
      '                if (!hasAccess) {\n' +
      '                    console.warn(\'Доступ запрещен. Недостаточно привилегий.\');\n' +
      '                    return this.router.parseUrl(\'/\');\n' +
      '                }\n' +
      '                return hasAccess;\n' +
      '            })\n' +
      '        );\n' +
      '    }\n' +
      '}\n'},
  {code: '\n' +
      '@Component({\n' +
      '    selector: \'app-user-profile\',\n' +
      '    templateUrl: \'./user-profile.component.html\',\n' +
      '    styleUrls: [\'./user-profile.component.scss\']\n' +
      '})\n' +
      'export class UserProfileComponent implements OnInit{\n' +
      '    slug!: string\n' +
      '    userProfile!: ProfileInterface | null\n' +
      '    userProfileSubscription$!: Subscription\n' +
      '    isLoading$!: Observable<boolean>\n' +
      '    isCurrentUserProfile$!: Observable<boolean>\n' +
      '    error$!: Observable<string| null>\n' +
      '    apiUrl!: string\n' +
      '\n' +
      '    constructor(private store: Store,\n' +
      '                private route: ActivatedRoute,\n' +
      '                private router: Router) {\n' +
      '    }\n' +
      '\n' +
      '    ngOnInit() {\n' +
      '        this.initialValue()\n' +
      '        this.initialListeners()\n' +
      '        this.fetchData()\n' +
      '    }\n' +
      '\n' +
      '    initialListeners(){\n' +
      '        this.userProfileSubscription$ = this.store.pipe(select(userProfileSelector))\n' +
      '            .subscribe((userProfile: ProfileInterface | null) => {\n' +
      '                this.userProfile = userProfile\n' +
      '            })\n' +
      '    }\n' +
      '\n' +
      '    fetchData(){\n' +
      '        this.store.dispatch(getUserProfileAction({slug: this.slug}))\n' +
      '    }\n' +
      '\n' +
      '    getApiUrl(): string {\n' +
      '        const isFavorites = this.router.url.includes(\'favorites\')\n' +
      '        return isFavorites\n' +
      '            ? `/articles?favorited=${this.slug}`\n' +
      '            : `/articles?author=${this.slug}`\n' +
      '    }\n' +
      '\n' +
      '    initialValue(){\n' +
      '        const isFavorites = this.router.url.includes(\'favorites\')\n' +
      '        this.slug = this.route.snapshot.paramMap.get(\'slug\') || \'{}\'\n' +
      '        this.isLoading$ = this.store.pipe(select(isLoadingSelector))\n' +
      '        this.error$ = this.store.pipe(select(errorSelector))\n' +
      '        this.apiUrl = isFavorites\n' +
      '            ? `/articles?favorited=${this.slug}`\n' +
      '            : `/articles?author=${this.slug}`;\n' +
      '\n' +
      '        this.isCurrentUserProfile$ = combineLatest(\n' +
      '            this.store.pipe(select(currentUserSelector), filter(Boolean)),\n' +
      '            this.store.pipe(select(userProfileSelector), filter(Boolean))\n' +
      '        ).pipe(\n' +
      '            map(([currentUser, userProfile] : [CurrentUserInterface, ProfileInterface]) => {\n' +
      '                return currentUser.username === userProfile.username\n' +
      '            })\n' +
      '\n' +
      '        )\n' +
      '    }\n' +
      '\n' +
      '}\n'},
  {code: '\n' +
      '@Component({\n' +
      '    selector: \'app-settings\',\n' +
      '    templateUrl: \'./settings.component.html\',\n' +
      '    styleUrls: [\'./settings.component.scss\']\n' +
      '})\n' +
      '\n' +
      'export class SettingsComponent implements OnInit, OnDestroy{\n' +
      '    form!: FormGroup\n' +
      '    currentUser!: CurrentUserInterface\n' +
      '    currentUserSubscription$!: Subscription\n' +
      '    isSubmitting$!: Observable<boolean>\n' +
      '    backendErrors$!: Observable<BackendErrorsInterface | null>\n' +
      '\n' +
      '    constructor(private store: Store) {}\n' +
      '\n' +
      '    ngOnInit() {\n' +
      '        this.initialForm()\n' +
      '        this.initialValues()\n' +
      '    }\n' +
      '\n' +
      '    ngOnDestroy() {\n' +
      '        this.currentUserSubscription$.unsubscribe()\n' +
      '    }\n' +
      '\n' +
      '    onSubmit() {\n' +
      '        if(this.form.invalid) return\n' +
      '        const currentUserInput: CurrentUserInputInterface = {\n' +
      '            ...this.currentUser,\n' +
      '            ...this.form.value\n' +
      '        }\n' +
      '        this.store.dispatch(updateCurrentUserAction({currentUserInput}))\n' +
      '    }\n' +
      '\n' +
      '    initialValues() {\n' +
      '\n' +
      '        this.isSubmitting$ = this.store.pipe(select(isSubmittedSelector))\n' +
      '        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))\n' +
      '\n' +
      '        this.currentUserSubscription$ = this.store.pipe(select(currentUserSelector), filter(Boolean))\n' +
      '            .subscribe((currentUser: CurrentUserInterface) => {\n' +
      '                this.currentUser = currentUser\n' +
      '                this.form.patchValue({\n' +
      '                    image: this.currentUser.image,\n' +
      '                    username: this.currentUser.username,\n' +
      '                    bio: this.currentUser.bio,\n' +
      '                    email: this.currentUser.username,\n' +
      '                })\n' +
      '            })\n' +
      '    }\n' +
      '\n' +
      '    initialForm(){\n' +
      '        this.form = new FormGroup({\n' +
      '            image: new FormControl(null,[\n' +
      '                Validators.required\n' +
      '            ]),\n' +
      '            username: new FormControl(null, [\n' +
      '                Validators.required\n' +
      '            ]),\n' +
      '            bio: new FormControl(null),\n' +
      '            email: new FormControl(null, [\n' +
      '                Validators.required\n' +
      '            ]),\n' +
      '            password: new FormControl(null)\n' +
      '        })\n' +
      '    }\n' +
      '\n' +
      '    logout() {\n' +
      '        this.store.dispatch(logoutAction())\n' +
      '    }\n' +
      '}\n'},
  {code: '@Component({\n' +
      '    selector: \'app-register\',\n' +
      '    templateUrl: \'./register.component.html\',\n' +
      '    styleUrls: [\'./register.component.scss\']\n' +
      '})\n' +
      'export class RegisterComponent  implements OnInit{\n' +
      '    form!: FormGroup\n' +
      '    isSubmitted$!: Observable<boolean>\n' +
      '    backendErrors$!: Observable<BackendErrorsInterface>\n' +
      '\n' +
      '    constructor(private store: Store) {\n' +
      '    }\n' +
      '\n' +
      '    ngOnInit() {\n' +
      '        this.initialForm()\n' +
      '        this.initialValues()\n' +
      '    }\n' +
      '\n' +
      '    initialValues(){\n' +
      '        this.isSubmitted$ = this.store.pipe(select(isSubmittedSelector))\n' +
      '        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))\n' +
      '    }\n' +
      '\n' +
      '    initialForm(){\n' +
      '        this.form = new FormGroup({\n' +
      '            username: new FormControl(null, [\n' +
      '                Validators.required\n' +
      '            ]),\n' +
      '            email: new FormControl(null, [\n' +
      '                Validators.required\n' +
      '            ]),\n' +
      '            password: new FormControl(null, [\n' +
      '                Validators.required\n' +
      '            ])\n' +
      '        })\n' +
      '    }\n' +
      '\n' +
      '    onSubmit() {\n' +
      '        const request: RegisterRequestInterface = {\n' +
      '            user: this.form.value\n' +
      '        }\n' +
      '        this.store.dispatch(registerAction({request}))\n' +
      '        console.log(request)\n' +
      '    }\n' +
      '}\n'},
  {code: '@Injectable({\n' +
      '    providedIn: \'root\',\n' +
      '})\n' +
      'export class DynamicLoaderService {\n' +
      '    constructor(private injector: Injector) {}\n' +
      '\n' +
      '    loadAuthModule() {\n' +
      '        return import(\'../pages/auth/auth.module\').then((module) => {\n' +
      '            return module.AuthModule;\n' +
      '        });\n' +
      '    }\n' +
      '\n' +
      '    loadNotAuthModule() {\n' +
      '        return import(\'../pages/not-auth/not-auth.module\').then((module) => {\n' +
      '            return module.NotAuthModule;\n' +
      '        });\n' +
      '    }\n' +
      '\n' +
      '\n' +
      '}\n'},
  {code: 'export enum ActionType {\n' +
      '    UPDATE_ARTICLE = \'[Edit article] Update article\',\n' +
      '    UPDATE_ARTICLE_SUCCESS = \'[Edit article] Update article success\',\n' +
      '    UPDATE_ARTICLE_FAILURE = \'[Edit article] Update article failure\',\n' +
      '\n' +
      '    GET_ARTICLE = \'[Edit article] Get article\',\n' +
      '    GET_ARTICLE_SUCCESS = \'[Edit article] Get article success\',\n' +
      '    GET_ARTICLE_FAILURE = \'[Edit article] Get article failure\',\n' +
      '}\n'},
]
