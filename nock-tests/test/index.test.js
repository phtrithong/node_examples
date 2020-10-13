const expect = require('chai').expect;
const nock = require('nock');

const getUser = require('../index').getUser;
const response = require('./response');

// describe('First test', () => {
//     it('Should assert true to be true', () => {
//         expect(true).to.be.true;
//     })
// })

// describe('Get User tests', () => {
//     it('Get a user by username', () => {
//         return getUser('phtrithong')
//         .then(res => {
//             // need to pass all expect()
//             expect(typeof res).to.equal('object');
//             expect(res.name).to.equal('phtrithong')
//             expect(res.location).to.equal('Viet Nam')
//         })
//     })
// })

describe('Get User tests', () => {
    beforeEach(() => {
        nock('https://api.github.com')
        .get('/users/octocat')
        .reply(200, response); // expected response
    });

    it('Get a user by usernmae', () => {
        return getUser('octocat')
        .then(response => {
            expect(typeof response).to.equal('object');
    
            expect(response.name).to.equal('The Octocat')
            expect(response.location).to.equal('San Francisco')
        });
    })
})