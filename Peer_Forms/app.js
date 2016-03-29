$(function() {
  var myObject = {};

  $("#myForm").on("submit", function(event) {
    event.preventDefault();
     var inputs = $("#myForm").serializeArray();
    // myObject = ($ ("#myForm").serializeArray() );
    $.each(inputs, function(i, input){
        myObject[input.name] = input.value;
    });
    console.log(myObject);
  $("#formData").append("<li>our info"+myObject+".</li>");
  });



});
