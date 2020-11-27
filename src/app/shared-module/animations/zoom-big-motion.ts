import {animate, AnimationTriggerMetadata, style, transition, trigger} from '@angular/animations';
import {AnimationDurationEnum} from '../enum/animation-duration.enum';
import {AnimationCurvesEnum} from '../enum/animation-curves.enum';

export const zoomBigMotion: AnimationTriggerMetadata = trigger('zoomBigMotion', [
  transition('void => *', [
    style({opacity: 0, transform: 'scale(0.8)'}),
    animate(
      `${AnimationDurationEnum.base} ${AnimationCurvesEnum.easeOutCirc}`,
      style({
        opacity: 1,
        transform: 'scale(1)'
      })
    )
  ]),
  transition('* => void', [
    style({opacity: 1, transform: 'scale(1)'}),
    animate(
      `${AnimationDurationEnum.base} ${AnimationCurvesEnum.easeInOutCirc}`,
      style({
        opacity: 0,
        transform: 'scale(0.8)'
      })
    )
  ])
]);
