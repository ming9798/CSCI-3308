// Imports the server.js file to be tested.
let server = require("../server");
//Assertion (Test Driven Development) and Should, Expect(Behaviour driven development) library
let chai = require("chai");
// Chai HTTP provides an interface for live integration testing of the API's.
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp); 
const { expect } = chai;
var assert = chai.assert;




describe("Server!", () => {

    // Sample test case given to test / endpoint. 
    it("Returns the default welcome message", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.status).to.equals("success");
          assert.strictEqual(res.body.message, "Welcome!");
          done();
        });
    });

    // Please add your test cases here.
    

    it("Checks that the API response is of type array", done => {
    chai 
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.be.a('array');
        assert.type(res, array);

      });
    });


    it("Checks that the API returns details of operation based on ID", done => {
      chai 
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(res.params.id).to.equals("1");
          expect(res.body.name);
          expect(res.body.sign);
        });
    });

    it("Checks that the API adds a new operation", done => {
      chai 
        .request(server)
        .get("/")
        .end((err, res) => {
          expect(ops.length).to.equals("4");
          expect(res.body.name).to.equals("request.body.name");
          expect(res.body.sign).to.equals("request.body.sign");
        });
    });

   

  });