
@Injectable({
    providedIn: 'root',
})
export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService,
                private store: Store,
                private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const requiredRoles = AccessConfig.find((config) => config.page === next.data.page)?.roles;

        if (!requiredRoles) {
            return true;
        }

        return this.store.pipe(
            select(currentUserSelector),
            switchMap((user) => {
                const userRoles = user.roles;
                if (!requiredRoles) {
                    return of(true);
                }

                return of(userRoles.some((role: RolesEnum) => requiredRoles.includes(role)));
            }),
            take(1),
            map((hasAccess) => {
                if (!hasAccess) {
                    console.warn('Доступ запрещен. Недостаточно привилегий.');
                    return this.router.parseUrl('/');
                }
                return hasAccess;
            })
        );
    }
}
