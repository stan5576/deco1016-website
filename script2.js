function validation2()                                    
{ 
  
    var addressline1 = document.forms["signup2"]["address1"];            
    var postcode = document.forms["signup2"]["postcode"];  
    var city = document.forms["signup2"]["city"];  
    var state = document.forms["signup2"]["state"];  
    var what =  document.forms["signup2"]["country"];  
    
    
  
    if (addressline1.value == "")                                  
    { 
        window.alert("Please enter your address."); 
        addressline1.focus();    
    } 
   
    if (postcode.value == "")                           
    { 
        window.alert("Please enter your postcode."); 
        postcode.focus(); 
    } 

    if (postcode.value.length != 4)
    {
      window.alert("The postcode should have 4 characters");
      postcode.focus();
      
    }
   
    if (city.value == "")                        
    { 
        window.alert("Please enter your city"); 
        city.focus(); 
    } 

    if (state.value == "")                        
    { 
        window.alert("Please enter your state"); 
        state.focus(); 
    } 

   
    if (what.selectedIndex < 1)                  
    { 
        alert("Please choose your country."); 
        country.focus(); 
        return false;
    } 
   
    return true; 
  }


