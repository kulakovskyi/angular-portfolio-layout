@Injectable({
    providedIn: 'root',
})
export class DynamicLoaderService {
    constructor(private injector: Injector) {}

    loadAuthModule() {
        return import('../pages/auth/auth.module').then((module) => {
            return module.AuthModule;
        });
    }

    loadNotAuthModule() {
        return import('../pages/not-auth/not-auth.module').then((module) => {
            return module.NotAuthModule;
        });
    }


}
