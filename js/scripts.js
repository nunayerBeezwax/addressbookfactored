var Contact =  {
  all: [],

  initialize: function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addresses = []; 
    this.phones = [];
  },
  fullName: function() {
    return this.firstName + " " + this.lastName; 
  },
  create: function(firstName, lastName) {
    var contact = Object.create(Contact);
    contact.initialize(firstName, lastName);
    Contact.all.push(contact);
    return contact;
  },
  createAddress: function(street, city, state) {
    var address = Object.create(Address);
    Address.create(street, city, state);
    this.addresses.push(address);
    return address;
  },
  createPhones: function(number) {
    var phone = Object.create(Phone);
    Phone.create(number);
    this.phones.push(phone);
    return phone;
  }
};

var Address = {
  initialize: function(street, city, state) {
    this.street = street
    this.city = city
    this.state = state
  },
  create: function(street, city, state) {
    var address = Object.create(Address);
    address.initialize(street, city, state);
    return address;
  },
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  },
  valid: function() {
    return (parseInt(this.street) > 0) && (this.city[0].toUpperCase() === this.city[0]);
  },
};

var Phone = {
  initialize: function(number) {
    this.number = number;
  },
  create: function(number) {
    var phone = Object.create(Phone);
    phone.initialize(number);
    return phone;
  },
  phoneFormat: function() {
    return "(" + this.number.slice(0, 3) + ")-" + this.number.slice(3, 6) + "-" + this.number.slice(6,10);
  },
  valid: function() {
    var numerizer = /\d/g;
    var cleanNumber = this.number.match(numerizer).toString().replace(/,/g, '');

    if (cleanNumber.length === 10) {
      return cleanNumber;
    } else {
      return false;
    }
  }
}
$(document).ready(function() {
  $('#add-address').click(function() {
    $('#new-addresses').append('<div class="new-address">' +
                              '<div class="form-group">' +
                                '<label for="new-street">Street</label>' +
                                '<input type="text" class="form-control new-street">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="new-city">City</label>' +
                                '<input type="text" class="form-control new-city">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="new-state">State</label>' +
                                '<input type="text" class="form-control new-state">' +
                              '</div>' +
                            '</div>');
  });

  $('#add-phone').click(function() {
    $('#new-phones').append('<div class="new-phone">' +
                            '<div class="form-group">' +
                              '<label for="new-number">Phone Number</label>' +
                              '<input type="text" class="form-control new-number">' +
                            '</div>' +
                            '</div>');
  });


  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $('input#new-first-name').val();
    var inputtedLastName = $('input#new-last-name').val();

    var newContact = Contact.create(inputtedFirstName, inputtedLastName);
    console.log(newContact)

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find('input.new-street').val();
      var inputtedCity = $(this).find('input.new-city').val();
      var inputtedState = $(this).find('input.new-state').val();
    
      var newAddress = Contact.createAddress(inputtedStreet, inputtedCity, inputtedState);
      
      if (newAddress.valid() !== false) {
        newContact.addresses.push(newAddress);
      } else {
        alert('Please enter a valid address.');
      }
    });

    $(".new-phone").each(function() {
      var inputtedNumber = $(this).find('input.new-number').val();

      var validatedNumber = newPhone.valid();

      var newPhone = Contact.createPhone(validatedNumber)


      if (newPhone.validatedNumber !== false){
        newContact.phones.push(newPhone);
      } else {
        alert('Please enter a ten digit phone number.');
      }
    });
        
    $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + '</span></li>');

    $(".contact").last().click(function(){
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $('ul#phones').text('');
      newContact.phones.forEach(function(phone) {
        $('ul#phones').append('<li>' + phone.phoneFormat() + '</li>');
      });


      $('ul#addresses').text('');
      newContact.addresses.forEach(function(address) {
        $('ul#addresses').append('<li>' + address.fullAddress() + '</li>');
      });

    });

    this.reset();
  });
});
