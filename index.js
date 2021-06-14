const submitButton = document.getElementById("submitButton");
submitButton.onclick = handleSubmitButtonClicked;


function handleSubmitButtonClicked() {
	const input = document.getElementById("codeInput").value;
  const areParenthesisValid = validateParenthesis(input);
  alert(areParenthesisValid ? 'Parenthesis are valid!' : 'Parenthesis are invalid!');
}

function validateParenthesis(inputString) {
	let counter = 0;
  for (let character of inputString) {
  	if (character == '(') counter++;
    else if (character == ')') counter--;
    if (counter < 0) return false;
  }
  if (counter > 0) return false;
  return true;
}