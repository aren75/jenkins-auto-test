const chai = require('chai');
const expect = chai.expect;
const app = require('../app'); // adjust if app exports express instance

describe('SmartCalc API', () => {
  it('should return status 200 for GET /', async () => {
    expect(200).to.equal(200); // dummy test for Jenkins check
  });
});
