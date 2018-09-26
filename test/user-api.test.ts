import * as request from "supertest";
import App from '../lib/app';


//test post signup req in user route

describe('POST /users', function() {
  it('responds with json', function(done) {
    request(App)
      .post('/user/signup')
      .send({name: 'naveed',email:'rana.naveed812@gmail.com',password:'124'})
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});


//test /user route is working or not
describe("GET /Api", () => {
  it("should return 200 OK", () => {
    return request(App).get("/user")
      .expect(200);
  });
});



//test post Login req in user route

describe('POST /users/login', function() {
  it('responds with json', function(done) {
    request(App)
      .post('/user/login')
      .send({email:'rana.naveed812@gmail.com',password:'124'})
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

//test post Logout req in user route
describe('POST logout test', function() {
  it('responds with json', function(done) {
    request(App)
      .post('/user/logout')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});



