const Lab = require('@hapi/lab');
const { expect } = require('@hapi/code');
const { afterEach, beforeEach, describe, it } = exports.lab = Lab.script();
const { init } = require('../server');

describe('Server instance testing...', () => {
    let server;
    beforeEach(async() => {
        server = await init();
    });
    afterEach(async() => {
        await server.stop();
    });

    describe('GET /', () => {
        it('responds with 200', async() => {
            const res = await server.inject({
                method: 'get',
                url: '/'
            });
            expect(res.statusCode).to.equal(200);
        });
    })
});