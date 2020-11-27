import {animate, keyframes, state, style, transition, trigger, AnimationTriggerMetadata} from '@angular/animations';
import {AnimationDurationEnum} from '../enum/animation-duration.enum';
import {AnimationCurvesEnum} from '../enum/animation-curves.enum';

export const slideMotion: AnimationTriggerMetadata = trigger('slideMotion', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'scaleY(0.8)'
    })
  ),
  state(
    'enter',
    style({
      opacity: 1,
      transform: 'scaleY(1)'
    })
  ),
  transition('void => *', [animate(`${AnimationDurationEnum.base} ${AnimationCurvesEnum.easeOutQuint}`)]),
  transition('* => void', [animate(`${AnimationDurationEnum.base} ${AnimationCurvesEnum.easeInQuint}`)])
]);
