
@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit, OnDestroy{
    form!: FormGroup
    currentUser!: CurrentUserInterface
    currentUserSubscription$!: Subscription
    isSubmitting$!: Observable<boolean>
    backendErrors$!: Observable<BackendErrorsInterface | null>

    constructor(private store: Store) {}

    ngOnInit() {
        this.initialForm()
        this.initialValues()
    }

    ngOnDestroy() {
        this.currentUserSubscription$.unsubscribe()
    }

    onSubmit() {
        if(this.form.invalid) return
        const currentUserInput: CurrentUserInputInterface = {
            ...this.currentUser,
            ...this.form.value
        }
        this.store.dispatch(updateCurrentUserAction({currentUserInput}))
    }

    initialValues() {

        this.isSubmitting$ = this.store.pipe(select(isSubmittedSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))

        this.currentUserSubscription$ = this.store.pipe(select(currentUserSelector), filter(Boolean))
            .subscribe((currentUser: CurrentUserInterface) => {
                this.currentUser = currentUser
                this.form.patchValue({
                    image: this.currentUser.image,
                    username: this.currentUser.username,
                    bio: this.currentUser.bio,
                    email: this.currentUser.username,
                })
            })
    }

    initialForm(){
        this.form = new FormGroup({
            image: new FormControl(null,[
                Validators.required
            ]),
            username: new FormControl(null, [
                Validators.required
            ]),
            bio: new FormControl(null),
            email: new FormControl(null, [
                Validators.required
            ]),
            password: new FormControl(null)
        })
    }

    logout() {
        this.store.dispatch(logoutAction())
    }
}
