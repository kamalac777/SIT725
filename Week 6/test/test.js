const request = require('request');
const expect = require('chai').expect;

// Test for Posting a Contact
describe('POST /contact', function() {
    let url = 'http://localhost:5000/api/contact';

    // Test for valid contact
    it('should add a contact and return status 200', function(done) {
        request.post({
            url: url,
            json: {
                name: "sameer",
                email: "sameer@example.com",  
                phone: "1234567890"
            }
        }, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body.message).to.equal('Contact Added Successfully');
            done();
        });
    });

    it('should return status 400 for invalid email format', function(done) {
        request.post({
            url: url,
            json: {
                name: "sameer lama",
                email: "invalid-email",  
                phone: "9876543210"
            }
        }, function(error, response, body) {
            expect(response.statusCode).to.equal(400); 
            expect(body.message).to.include('Please enter a valid email address, e.g., user@example.com');  
            done();
        });
    });
});
