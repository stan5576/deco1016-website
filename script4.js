function validation4()                                    
{ 
 
    var email =  document.forms["signin"]["email"];  
    var password =  document.forms["signin"]["password"];  

   
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
        window.alert("Please enter a valid email."); 
        email.focus(); 
    }

    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false;
    } 
   
    return true; 
  }


