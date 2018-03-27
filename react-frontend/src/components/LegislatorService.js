import axios from 'axios';

export default class LegislatorService {

  get(states, callback) {
    axios.get('http://localhost:6200/'+states)
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(null);
    });
  }
}
