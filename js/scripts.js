var Contact =  {
  fullName: function() {
    return this.firstName + " " + this.lastName; 
  }
};

var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  }
};

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

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $('input#new-first-name').val();
    var inputtedLastName = $('input#new-last-name').val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName; 
    newContact.lastName = inputtedLastName;

    newContact.addresses = [];

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find('input.new-street').val();
      var inputtedCity = $(this).find('input.new-city').val();
      var inputtedState = $(this).find('input.new-state').val();
    
      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;

      newContact.addresses.push(newAddress);

    });

    $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + '</span></li>')


    $(".contact").last().click(function(){
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      
      $('ul#addresses').text('');
      newContact.addresses.forEach(function(address) {
        $('ul#addresses').append('<li>' + address.fullAddress() + '</li>');
      });
    });

    // $('#show-contact').click(function() {
    //   $('#show-contact').hide();
    //   $('.edit').show();
    // })

  // $('form#edit-new-contact').submit(function(event) {
  //   event.preventDefault();

  //   newContact.firstName = $('input#edit-new-first-name').val();
  //   newContact.lastName = $('input#edit-new-last-name').val();
  //   newContact.address = $('input#edit-new-address').val();

  //   $('ul#contacts').append('<li><span class="contact">' + newContact.fullName() + '</span></li>')

  // })

    this.reset();
  });
});
