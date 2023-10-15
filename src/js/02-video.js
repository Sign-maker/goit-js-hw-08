import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { common } from './common';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const initialTime =
  Number(localStorage.getItem(common.VIDEOPLAYER_CURRENT_TIME)) ?? 0;

setCurrentPlayerTime(initialTime);
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function setCurrentPlayerTime(initialTime) {
  player
    .setCurrentTime(initialTime)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

function onTimeUpdate({ seconds }) {
  localStorage.setItem(common.VIDEOPLAYER_CURRENT_TIME, seconds);
}
