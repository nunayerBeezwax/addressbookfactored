beforeEach(function() {
  Contact.all = [];
  Contact.addresses = [];
});

describe('Contact', function() {
  describe('fullName', function() {
    it('combines the first and last name, separated by a space', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = 'Dolly';
      testContact.lastName = 'Parton';
      testContact.fullName().should.equal('Dolly Parton');
    });
  });
  describe("initialize", function() {
    it('sets the first and last name', function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.firstName.should.equal("Mary");
      testContact.lastName.should.equal("Jane");
    });
    it("sets up an empty array for the addresses property", function() {
      var testContact = Object.create(Contact);
      testContact.initialize("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });
  });
  describe('create', function() {
    it('creates a new instance of a Contact', function(){
      var testContact = Contact.create();
      Contact.isPrototypeOf(testContact).should.equal(true);
    });
    it("initializes the contact", function() {
      var testContact = Contact.create("Mary", "Jane");
      testContact.addresses.should.eql([]);
    });
    it("adds the contact to the .all property", function() {
      var testContact = Contact.create();
      Contact.all.should.eql([testContact]);
    });
  });
  describe("createAddress", function() {
    it("creates an address object",function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      Address.isPrototypeOf(testAddress).should.equal(true);
    });
    it('adds the address to the addresses property of the contact', function() {
      var testContact = Contact.create();
      var testAddress = testContact.createAddress();
      testContact.addresses.should.eql([testAddress]);
    });
  });
  describe('createPhones', function() {
    it('creates a phone number object', function() {
      var testContact = Contact.create();
      var testPhone = testContact.createPhones();
      Phone.isPrototypeOf(testPhone).should.equal(true);
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
  describe("initialize", function() {
    it('sets the address', function() {
      var testAddress = Object.create(Address);
      testAddress.initialize('123 Main', 'Portland', 'OR');
      testAddress.street.should.equal('123 Main');
      testAddress.city.should.equal('Portland');
      testAddress.state.should.equal('OR');
    });
  });
  describe("create", function() {
    it("creates an address", function() {
      var testAddress = Address.create(Address);
      Address.isPrototypeOf(testAddress).should.equal(true);
   });
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
