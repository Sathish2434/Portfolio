// <!-- mail send script -->
         
document.addEventListener("DOMContentLoaded", function () {
  (function () {
    emailjs.init({
      publicKey: "t8xctmY9go3F17RN1", // Replace with your EmailJS Public Key
      blockHeadless: true, // Helps with third-party cookie issues
      blockBrowserCookies: true, // Avoids using cookies
    });
  })();

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      emailjs.sendForm("sathish_2434", "template_vshpqkb", this).then(
        function () {
          alert("Message sent successfully!");
        },
        function (error) {
          alert("Failed to send message: " + JSON.stringify(error));
        }
      );
    });
});
