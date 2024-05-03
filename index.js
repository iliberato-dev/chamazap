const myForm = document.querySelector("form");
const myNumber = myForm.querySelector("input");

const handleSetContact = () => {

  window.open(`https://api.whatsapp.com/send?phone=${myNumber.value}&text=Olá! boa tarde.`,'_blank')
};

const handleSubmit = (event) => {
  event.preventDefault();

  if(!myNumber.value) return alert("Adicione um número!");

  handleSetContact();

};

const main = () => {
  myForm.addEventListener('submit', handleSubmit);
};

main()