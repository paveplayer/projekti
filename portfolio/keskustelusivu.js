console.log("keskustelusivu avattu");
function send() {
  const birthdayField = document.getElementById('birthdayField');
  const emailField = document.getElementById('emailField');
  const typeField = document.getElementById('typeField');
  const commentField = document.getElementById('commentField');


  const birthday = birthdayField.value;
  const email = emailField.value;
  const type = typeField.value;
  const comment = commentField.value;

  console.log("Syntymäpäivä:", birthday);
  console.log("Sähköposti:", email);
  console.log("Tyyppi:", type);
  console.log("Kommentti osio:", comment);

  const dialog = document.getElementById('messageDialog');
}
