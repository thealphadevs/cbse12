$(document).ready(function(){
 
    // Initialize select2
    $("#selSchool").select2();
  
    // Read selected option
    $('#but_read').click(function(){
      var schoolname = $('#selSchool option:selected').text();
      var schoolid = $('#selSchool').val();
  
      //$('#result').html("id : " + schoolid + ", name : " + schoolname);
  
    });
  });

  function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }