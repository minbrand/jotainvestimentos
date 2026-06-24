// importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');
// OneSignal
var OneSignal = window.OneSignal || [];
OneSignal.push(["getNotificationPermission", function (permission) {
 console.log("Site Notification Permission:", permission);
 if (permission == 'default') {
 setTimeout(function () {
 OneSignal.showNativePrompt();
 dataLayer.push({ event: 'BotaoSininho', });
 }, `25000`);
 }
}]);
