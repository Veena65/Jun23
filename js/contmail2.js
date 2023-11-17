function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("phone").value,
      city: document.getElementById("city").value,
      message: document.getElementById("message").value,
    
    };
  
    const serviceID = "service_sm8kqcu";//service ID
    const templateID = "template_u6y2aac";// template ID
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          document.getElementById("phone").value = "";
          document.getElementById("city").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }