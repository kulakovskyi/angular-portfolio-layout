import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";


export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage <=> AboutPage, * <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0, // Устанавливаем начальную прозрачность
      }),
    ], { optional: true }), // Делаем запрос необязательным
    query(':enter', [style({ opacity: 0 })], { optional: true }), // Изменяем начальное состояние
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate(
          '300ms ease-out',
          style({ opacity: 0 })
        ),
      ], { optional: true }),
      query(':enter', [
        animate(
          '300ms ease-out',
          style({ opacity: 1 })
        ),
      ], { optional: true }),
    ]),
  ]),
]);
