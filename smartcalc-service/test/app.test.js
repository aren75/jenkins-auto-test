const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

describe('SmartCalc Add API', () => {
  it('should return correct sum', (done) => {
    chai.request(app)
      .get('/add?a=5&b=7')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.result).to.equal(12);
        done();
      });
  });
});
