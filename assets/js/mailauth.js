// auth call
const CLIENT_ID = "670645219148-5f7edl6705d4lmaro7h01oucuh24rsv2.apps.googleusercontent.com";
const REDIRECT_URI = "https://wincisky.github.io/opentrust/test.html";

const uriEnc = encodeURIComponent(REDIRECT_URI);
const scopeEnc = encodeURIComponent("https://mail.google.com/ https://www.googleapis.com/auth/userinfo.email");

const response = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${uriEnc}&prompt=consent&response_type=code&client_id=${CLIENT_ID}&scope=${scopeEnc}&access_type=offline`;

function startGoogleAuth(){
    window.location.href = response;
}