let chai = require("chai");
let chaiHttp = require("chai-http");
const dotenv = require('dotenv');
dotenv.config();
//Assertion Style
chai.should();

chai.use(chaiHttp);
// const PORT = process.env.PORT || 8000;
// const IP =  process.env.IP || 'localhost';
const address =  'https://web-post-api.herokuapp.com';
describe('Test GET posts', () => {
    describe("GET /api/v1/post", () => {
        it("GET posts", (done) => {
            // chai.request(`http://${IP}:${PORT}`)
            chai.request(address)
                .get("/api/v1/post")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    // response.body.should.be.a('array');
                    done();
                });
        });
    });

});