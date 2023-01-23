const request = require('request');

describe('calc', () => {
  it('should multiply 2 and 2', () => {
    expect(2 * 2).toBe(4);
  })
})

describe('get messages', () => {
  // the done parameter set the test as async.
  it('should return 200 ok', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
      expect(res.statusCode).toEqual(200);
      // we call done() when the async test finishes.
      done();
    })
  });

  it('should return 200 ok', (done) => {
    request.get('http://localhost:3000/messages', (err, res) => {
      expect(JSON.parse(res.body).length).toBeGreaterThan(0);
      done();
    })
  })
})