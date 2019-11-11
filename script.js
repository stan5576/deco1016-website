
function validation()                                    
{ 
  
    var firstname = document.forms["signup1"]["firstname"];            
    var lastname = document.forms["signup1"]["lastname"];               
    var email = document.forms["signup1"]["email"];    
    var phone = document.forms["signup1"]["telephone"]; 
    var password = document.forms["signup1"]["password"];  
    
    console.log(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)));
    
    if (firstname.value == "")                                  
    { 
        window.alert("Please enter your first name."); 
        firstname.focus(); 
        
    } 

    if (firstname.value.length < 3)
    {
      window.alert("The first name should have atleast 3 characters");
      firstname.focus();
      
    }

    if (lastname.value == "")                                  
    { 
        window.alert("Please enter your last name."); 
        lastname.focus(); 
        
    } 
    
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
        window.alert("Please enter a valid email."); 
        email.focus(); 
    }
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
    } 

    if (phone.value.length != 9)
    {
      window.alert("The telephone number should have 9 characters");
      phone.focus();
      
    }
   
    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
    } 

    if (password.value.length < 5)
    {
      window.alert("The password should have atleast 5 characters");
      password.focus();
      return false;
    }
    return true; 
  }


