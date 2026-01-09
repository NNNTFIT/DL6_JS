const display = document.getElementById("display");
let value = "";
function add(x) {
  value += x;
  if (display.innerText == "0") {
    display.innerText = value;
    return;
  }
  display.textContent = value;
  return;
}

function result() {
  if (value.length == 0) {
    display.innerText = "0";
    return;
  }
  const last = value.length - 1;
  if ("*/.".includes(value[0]) || "+-*/.".includes(value[last])) {
    display.innerText = "Error";
    value = "";
    return;
  }
  if (!check(value)) {
    display.innerText = "Error";
    value = "";
    return;
  }
  const res = eval(value);

  if (!isFinite(res)) {
    display.innerText = "Error";
    value = "";
    return;
  }

  display.innerText = res;
  value = res.toString();
}
function check(exp) {
  let lastType = "op";
  let dotUsed = false;
  for (let ch of exp) {
    if ("0123456789".includes(ch)) {
      lastType = "num";
      continue;
    }
    if (ch === ".") {
      if (dotUsed) return false; 
      dotUsed = true;
      lastType = "dot";
      continue;
    }
    if ("+-*/".includes(ch)) {
      if (lastType !== "num") return false; 
      lastType = "op";
      dotUsed = false;
      continue;
    }

    return false;
  }
  return lastType === "num";
}

function deleteAll() {
  value = "";
  display.innerText = "0";
}
function delete1() {
  value = value.slice(0, -1);
  if (value.length == 0) {
    display.innerText = "0";
    return;
  }
  display.textContent = value;
}
