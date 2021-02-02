import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger
} from '@angular/animations';

export const fadeAnimation =
  trigger('fadeAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({opacity: 0}),
        stagger('300ms', animate('1000ms ease-out', style({opacity: 1})))
      ],
      {optional: true}
    )
  ])
]);
