function send(){
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
     var Snam = $("[name='Your_Name']").val();
     var Smail = $("[name='Your_Mail']").val();
     var Rmail = $("[name='Reciever_Mail']").val();
     var Spass = $("[name='Your_Mail_Password']").val();
     var Sub = $("[name='Mail_Sub']").val();
     var Mbody = $("[name='Mail_Body']").val();
     console.log(Snam,Smail,Rmail,Spass,Sub,Mbody);
    function sendEmail() { 
      Email.send({ 
        Host: "smtp.gmail.com", 
        Username: Smail, 
        Password: Spass, 
        To: Rmail, 
        From: Smail, 
        Subject: Sub, 
        Body: Mbody, 
      }) 
        .then(function (message) { 
          alert("mail sent successfully") 
        }); 
    }
    sendEmail(); 
    } 