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
      console.log('from Leg Service', response.data);
      callback(response.data);
    })
    .catch(function (error) {
      console.log('Error');
      callback(null);
    });
  }
  
    getLegislativeContributor(cid, callback) {
    axios.get('http://localhost:6200/legislativeContributor/' + cid)
    .then((response) => {
      console.log('from Leg Service', response.data);
      callback(response.data);
    })
    .catch(function (error) {
      console.log('Error');
      callback(null);
    });
  }
}
