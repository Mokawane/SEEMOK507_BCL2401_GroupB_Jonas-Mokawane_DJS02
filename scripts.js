const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
 
// Missing values validator
if (!dividend || !divider) {
  result.innerText = "Division not performed. Both values are required in inputs. Try again"; 
  return;
}

if (divider === "0") {
  result.innerText = "Division not performed. Invalid number provided. Try again";
  throw new Error (
    "Invalid division, cannot use 0"
  );
}

else if (isNaN(divider) || isNaN(dividend)) {
  const div = document.createElement('div');
  div.classList.add('critical-error');
  div.textContent = `Something critical went wrong. Please reload the page`;
  document.body.append(div)
  throw new Error ("Both inputs should be numbers");
  
}

});

