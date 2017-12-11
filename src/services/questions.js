import 'whatwg-fetch';
import appVars from '../config/appVars';

class QuestionService {

  static get() {

    return new Promise((resolve, reject) => {
      fetch(`${appVars.api.base}${appVars.api.namespaces.wp}/questions/`)
        .then(res => res.json())
        .then(json => resolve(json));
    });
  }

  static answer(id, data, nonce, timestamp) {

    return new Promise((resolve, reject) => {
      fetch(`${appVars.api.base}${appVars.api.namespaces.survey}/answer/${id}`, {
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

export default QuestionService;