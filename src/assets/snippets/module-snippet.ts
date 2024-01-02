
function appInitializer(authService: AuthService) {
    return () => {
        return new Promise((resolve) => {
            authService.getCurrentUser().subscribe().add(resolve);
        });
    };
}


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot(AppReducers),
        EffectsModule.forRoot(AppEffects),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
            // autoPause: true,
            // trace: false,
            // traceLimit: 75,
            // connectInZone: true
        }),
    ],

    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializer,
            multi: true,
            deps: [AuthService],
        },
        SnapshotService,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppInterceptor,
            multi: true
        },

    ],


    bootstrap: [AppComponent]
})
export class AppModule { }
