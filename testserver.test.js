var server = require('./index.js');
var request = require('request');

describe('Server Test', function() {
    test("Testing getItems Endpoint", () => {
        request.get("http://localhost:8000/api/getItems", function(err, res, body) {
            expect(res.statusCode).toBe(200);
            var expected = {
                itemId: 1,
                itemName: "Coffee",
                price: 20
            }
            expect(JSON.parse(body)).toContainEqual(expected);
            server.close();
        })
    })
})