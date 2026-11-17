import { getAppName } from '../webConfig';

const logo = '/favicon.png';

export function showDesktopNotification(title, tag, message) {
  if (!('Notification' in window)) {
    return;
  }
  new Notification(title, { body: `${getAppName()}: ${message}`, icon: logo, tag: tag });
}

export function askDesktopNotificationPermission() {
  if (!('Notification' in window)) {
    return;
  }
  Notification.requestPermission(result => {});
}
