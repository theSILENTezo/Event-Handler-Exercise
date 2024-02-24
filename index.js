/* Task 2: Drop Down Menu */
  //Shows/Hides the elements in the menu when clicked
    function showHide() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

/* Task 3: Color Change */
  const boxIN = document.querySelector("box");

  function random(number){
    return Math.floor(Math.random() * (number + 1));
  }

  box.addEventListener("mouseenter", () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;

    document.body.style.backgroundColor = rndCol;
  });

/* Task 4: Form */
  function filledUp(){
      const nameADD = 
          document.forms.myForm.name.value; 
      const emailADD = 
          document.forms.myForm.email.value; 
      const what = 
          document.forms.myForm.meassage.value; 

    
      console.log(nameADD, emailADD, what); 
    
      if (nameADD === "") { 
          window.alert 
              ("Please enter your name."); 
          name.focus(); 
          return false; 
      } 
    
      if (emailADD === "") { 
          window.alert 
              ("Please enter your address."); 
          address.focus(); 
          return false; 
      } 
    
      if (emailADD === "" || !emailADD.includes('@')) { 
          window.alert 
              ("Please enter a valid e-mail address."); 
          email.focus(); 
          return false; 
      }
    
      if (what === "") { 
          alert("Please enter a message."); 
          what.focus(); 
          return false; 
      } 
    
      return true; 
  }