import 'whatwg-fetch';
import appVars from '../config/appVars';

class EmailService {

  static get() {

    return new Promise((resolve, reject) => {
      fetch(`${appVars.api.base}${appVars.api.namespaces.survey}/subscribe/`)
        .then(res => res.json())
        .then(json => resolve(json));
    });
  }

  static subscribe(data, nonce, timestamp) {

    return new Promise((resolve, reject) => {
      fetch(`${appVars.api.base}${appVars.api.namespaces.survey}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Nonce': nonce,
          'X-Timestamp': timestamp,
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(json => resolve(json));
    });
  }
}

export default EmailService;