function validation3()                                    
{ 
 
    var dress =  document.forms["signup2"]["dresssize"];  
    var top =  document.forms["signup2"]["topsize"];  
    var pant =  document.forms["signup2"]["pantsize"];  

   
    if (dress.selectedIndex < 1)                  
    { 
        alert("Please choose a dress size."); 
        dress.focus(); 
    } 

    if (top.selectedIndex < 1)                  
    { 
        alert("Please choose a top size."); 
        top.focus(); 
    } 

    if (pant.selectedIndex < 1)                  
    { 
        alert("Please choose a pant size."); 
        pant.focus(); 
        return false;
    } 
   
    return true; 
  }


