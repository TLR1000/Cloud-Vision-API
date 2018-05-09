// 1. Use this Callback Url with your Google Project
function getGoogleCallbackURL(silent) {
  var url = ScriptApp.getService().getUrl();
  var callbackUrl = (url.indexOf('/exec') >= 0 ? url.slice(0, -4) : url.slice(0, -3)) + 'usercallback';
  if (!silent) Logger.log(callbackUrl);
  return callbackUrl;
}