import App from '../lib/app';
import * as chai from 'chai';
import * as chaiHttp from 'chai-http';
import request from "supertest";
let should = chai.should();

chai.use(chaiHttp);

//test post signup req in user route






describe('POST /users', ()=> {
  it('it should post ToDo', (done)=> {
    jest.setTimeout(30000)
    let user = {
      name: 'name',
      email:'rana.naveed812@gmail.com',
      password:'124'
    }
    chai.request(App)
      .post('/user/signup')
      .send({
        name: 'name',
        email:'rana.naveed812@gmail.com',
        password:'124'
      })
      .end((err, res)=> {
        res.should.have.status(200);
        res.body.should.be.a("object");
        res.body.should.have.property("name");
        res.body.should.have.property("email");
        res.body.should.have.property("password");
        done();

      });
  });
});


//test /user route is working or not
// describe("GET /Api", () => {
//   it("should return 200 OK", () => {
//     return request(App).get("/user")
//       .expect(200);
//   });
// });


describe('/GET book', () => {
  it('it should GET all the books', (done) => {
    chai.request(App)
        .get('/user')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(0);
          done();
        });
  });
});


//test post Login req in user route

// describe('POST /users/login', function() {
//   it('responds with json', function(done) {
//     request(App)
//       .post('/user/login')
//       .send({email:'rana.naveed812@gmail.com',password:'124'})
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });

//test post Logout req in user route
// describe('POST logout test', function() {
//   it('responds with json', function(done) {
//     request(App)
//       .post('/user/logout')
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });



