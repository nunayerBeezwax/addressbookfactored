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
});
