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
        const expected_status_when_no_route = 500;
        it('responds with 500', async() => {
            const res = await server.inject({
                method: 'get',
                url: '/'
            });
            expect(res.statusCode).to.equal(expected_status_when_no_route);
        });
    })
});