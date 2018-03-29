import axios from 'axios';

export default class LegislatorService {

  getLegislatorsFromState(states, callback) {
    axios.get('http://localhost:6200/' + states)
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(null);
    });
  }
  
  getLegislator(cid, callback) {
    axios.get('http://localhost:6200/legislator/' + cid)
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(null);
    });
  }
}
