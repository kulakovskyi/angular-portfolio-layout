import {animate, state, style, transition, trigger} from "@angular/animations";

export const fadeInOutLoader = trigger('fadeInOutLoader', [
  state('hidden', style({
    opacity: 0
  })),
  state('visible', style({
    opacity: 1,

  })),
  transition('hidden => visible', animate('100ms ease-in')),
  transition('visible => hidden', animate('700ms ease-out')),
]);
