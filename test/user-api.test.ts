import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';
import App from '../lib/app';


//test post signup req in user route


chai.use(chaiHttp);
const should = chai.should();

let login = {

  email: "asif@asif",
  password: "asif"
}

let signup = {
  name: "asif",
  email: "asif@mail",
  password: "asif"
}





describe('/POST login', () => {
  it('it should Login, and check token', (done) => {
    chai.request(App)
      .post('/user/login')
      .send(login)
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        res.should.have.status(200);
        should.exist(res.body);
        res.body.should.be.a('object');
        res.body.should.have.property('email');
        res.body.should.have.property('password');
        done();
      })

  })
})



describe('/POST login', () => {
  it('if the user is unAuthorized', (done) => {
    let user = {
      email: "something",
      password: "something"
    }
    chai.request(App)
      .post('/user/login')
      .send(user)
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        res.should.have.status(401);

        done();
      })

  })
})

describe('/POST login', () => {
  it('if the user send less details', (done) => {
    let user = {
      email: "something",

    }
    chai.request(App)
      .post('/user/login')
      .send(user)
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        res.should.have.status(400);
        done();
      })

  })
})

describe('/POST login', () => {
  it('if the user send empty fields', (done) => {
    let user = {
      email: "",
      password: "asif"

    }
    chai.request(App)
      .post('/user/login')
      .send(user)
      .end((err, res) => {
        if (err) {
          console.log(err)
        }
        res.should.have.status(400);
        done();
      })

  })
})









describe("Add a new User", () => {
  it("should post a todo", (done) => {

    chai.request(App)
      .post('/user/login')
      .send(signup)
      .end((err, res) => {
        if (err) {
          console.log(err);

        }
        res.should.have.status(200);
        done();
      })
  })
})






