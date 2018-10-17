let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3003';
        break;
    case 'ajc-my-poolchemclient.herokuapp.com':
        APIURL = 'https://ajc-my-poolchemapp.herokuapp.com'
}


export default APIURL;

