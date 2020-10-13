const expect = require('chai').expect;

const sinon = require('sinon');
const indexPage = require('../../controllers/app.controller');

const user = {
    addUser: (name) => {
        this.name = name;
    }
}

describe('AppController', function() {
    describe('getIndexPage', function() {
        // it('should send Hey', function() {
        //     let req = {};
        //     let res = {
        //         // send: function() {}
        //         send: sinon.spy()
        //     };
    
        //     indexPage.getIndexPage(req, res);
    
        //     expect(res.send.calledOnce).to.be.true;
        //  // expect to get argument `bla` on first call
        //     expect(res.send.firstCall.args[0]).to.equal('Hey');
        // });

        it('should send Hey when user is logged in', function() {
            let user = {
                isLoggedIn: function(){}
            };
            // Stub isLoggedIn function and make it return true always 
            const isLoggedInStub = sinon.stub(user, "isLoggedIn").returns(true);

            let req = {
                user: user
            };

            // let res = {
            //     // send: function() {}
            //     send: sinon.spy()
            // };
    
            // indexPage.getIndexPage(req, res);
    
            // expect(res.send.calledOnce).to.be.true;
            // // expect to get argument `bla` on first call
            // expect(res.send.firstCall.args[0]).to.equal('Hey');

            // // assert that the stub is logged in at least once
            // expect(isLoggedInStub.calledOnce).to.be.true;

            let res = {
                send: function(){}
            }

            // mock res
            const mock = sinon.mock(res);

            // build how we expect it t work
            mock.expects("send").once().withExactArgs("Hey");

            indexPage.getIndexPage(req, res);
            
            expect(isLoggedInStub.calledOnce).to.be.true;

            // verify that mock works as expected
            mock.verify();
        })
    })
})

describe("User", function() {
    describe("addUser", function() {
      it("should add a user", function() {
        // spy on an existing function
        sinon.spy(user, "addUser");
        user.addUser('John Doe');

        expect(user.addUser.calledOnce).to.be.true;

  
        // lets log `addUser` and see what we get
        // console.log(user.addUser);
      });
    });
  });
  