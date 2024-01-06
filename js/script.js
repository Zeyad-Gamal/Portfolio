let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

};





// Email send start:


// Email validation part
function emailValidation() {
	var subjectEmail = document.getElementById("subjectInput").value.trim();
	var bodyEmail = document.getElementById("bodyInput").value.trim();
	var nameEmail = document.getElementById("nameInput").value.trim();
	var phoneEmail = document.getElementById("phoneInput").value.trim();

	if (!subjectEmail || !bodyEmail || !nameEmail) {
		alert("Please fill out all fields before sending the email.");
		return;
	}

	sendEmail(subjectEmail,bodyEmail,nameEmail,phoneEmail);
}




// send mail
function sendEmail(subjectEmail,bodyEmail,nameEmail,phoneEmail) {

	var encodedsubjectEmail = encodeURIComponent(subjectEmail);
	var encodedbodyEmail = encodeURIComponent(bodyEmail);
	var encodednameEmail = encodeURIComponent(nameEmail);
	var encodedphoneEmail = encodeURIComponent(phoneEmail);

	var personalEmail = "zeyadabosetta2@gmail.com";
	
	console.log(encodedbodyEmail);
	console.log(encodednameEmail);
	console.log(encodedphoneEmail);
	console.log(encodedsubjectEmail);

	var defaultMessage = "This email is from my portfolio website:\n\n";
	var detailsMessage = "Name: "+encodednameEmail+"\nPhone: "+encodedphoneEmail+"\nSubject: "+document.getElementById("subjectInput").value+"\n\n";

	var sendmsg = document.getElementById("sendmsg");
	sendmsg.href = "mailto:" + personalEmail + "?subject=" + encodedsubjectEmail + "&body=" + defaultMessage + detailsMessage + encodedbodyEmail;

	document.getElementById("reviewForm").reset();
}


// Email send end:







// Handle buttons of portfolio projects Start:

      var portf_boxs;
      var portf_boxs2;
      var frontend_box = document.querySelectorAll('.portfolio .packages .box-container .frontend');
      var backend_box = document.querySelectorAll('.portfolio .packages .box-container .backend');
      var portf_menu = document.querySelectorAll('.portfolio-button-menu  a');
      
      function portfolio_buttons(chi) {
        portf_boxs = document.querySelectorAll('.portfolio .packages .box-container .box');
      console.log(portf_boxs.length);

        for (var i = 0; i < portf_boxs.length; i++) {
          if(i<=4){
          portf_menu[i].style.backgroundColor =
            "#fff";
          }
             portf_boxs[i].style.display="none";
        }

        portf_boxs2=document.querySelectorAll('.portfolio .packages .box-container .'+chi);
        for (var j = 0; j < portf_boxs2.length; j++) {
             portf_boxs2[j].style.display="inline-block";
        }
        document.getElementById("portfolio-btn"+chi).style.backgroundColor = "rgb(255, 238, 55)";


          
      }





// Handle selector of portfolio projects


	  function portfolio_buttons_selector(chi) {
        // console.log(chi.value);

        portf_boxs = document.querySelectorAll('.portfolio .packages .box-container .box');
        // console.log(chi.value);
  
        for (var i = 0; i < portf_boxs.length; i++) {
          
             portf_boxs[i].style.display="none";
        }

        portf_boxs2=document.querySelectorAll('.portfolio .packages .box-container .'+chi.value);
        for (var j = 0; j < portf_boxs2.length; j++) {
             portf_boxs2[j].style.display="inline-block";
        }
 
      }






// Handle buttons of portfolio projects End:






	

window.addEventListener('scroll', function() {
	if (window.scrollY >= 1152) {
	  var progressbars= document.querySelectorAll('.packages .review .box-container .box .progress .progress-bar');
	  
	  progressbars.forEach(function(element) {
		element.style.animation = "typing 0.7s steps(200, end)";
	  });
  
	}
	
	
  });
