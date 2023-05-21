function numberOneTriangle() {
  // DOM
  const count = Number(document.getElementById("count").value);
  const result = document.getElementById("result");

  let resultContent = "";
  for (let i = 1; i <= count; i++) {
    resultContent += "* ".repeat(i);
    resultContent += "<br/>";
  }

  result.innerHTML = resultContent;
}
