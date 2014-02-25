describe('Contact', function() {
  describe('fullName', function() {
    it('combines the first and last name, separated by a space', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = 'Dolly';
      testContact.lastName = 'Parton';
      testContact.fullName().should.equal('Dolly Parton');
    });
  });
});

describe('Address', function() {
  describe('fullAddress', function() {
    it('returns the full address with nice formatting', function() {
      var testAddress = Object.create(Address);
      testAddress.street = "123 4th Ave";
      testAddress.city = "Portland";
      testAddress.state = "Oregon";
      testAddress.fullAddress().should.equal('123 4th Ave, Portland, Oregon');
    });
  });
  describe('valid', function () {
    it('returns false if the street doesn\'t start with a number', function() {
      var testAddress = Object.create(Address);
      testAddress.street = "Street St";
      testAddress.valid().should.equal(false);
    });
    it('returns false if the first letter of city is not a capital', function() {
      var testAddress = Object.create(Address);
      testAddress.city = "podunk";
      testAddress.valid().should.equal(false);
    });
  });
});

describe('Phone', function() {
  describe('phoneFormat', function() {
    it('returns a phone number in a standardized format', function(){
      var testPhone = Object.create(Phone);
      testPhone.number = '5035551234';
      testPhone.phoneFormat().should.equal('(503)-555-1234');
    });
  });

  describe('valid', function() {
    it('returns numbers only if regular expression or letter are entered', function() {
      var testPhone = Object.create(Phone);
      testPhone.number = '(503)-444-!#5555';
      testPhone.valid().should.equal("5034445555");
    });
    it('returns false if phone number input is not 10 digits long', function() {
      var testPhone = Object.create(Phone);
      testPhone.number = '12365859888';
      testPhone.valid().should.equal(false);
    });  
  });
});
