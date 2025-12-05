function firstChar(text) {
  // Trim leading spaces and return the first character if it exists
  text = text.trimStart();

  return text.length > 0 ? text[0] : "";
}

// Do not change the code below
// const text = prompt("Enter text:");
alert(firstChar(text));
