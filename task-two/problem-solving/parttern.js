// Task One: 
function generatePattern(N) {
  let patternHtml = "";
  for (let i = 1; i <= N; i++) {
    let charCode = 97 + ((i - 1) % 5); // 'a' + (i - 1) % 5 to cycle through 'a' to 'e'
    for (let j = 1; j <= N; j++) {
      if (i === 1 || i === N || j === 1 || j === N) {
        patternHtml += String.fromCharCode(charCode);
        charCode = ((charCode - 97 + 1) % 26) + 97; // increment the character code, wrapping around to 'a' after 'z'
        if (charCode > 101) {
          // if charCode is greater than 'e', reset it to 'a'
          charCode = 97;
        }
      } else {
        patternHtml += "&nbsp;";
      }
    }
    patternHtml += "<br>";
  }
  document.getElementById("pattern-div_one").innerHTML =
    '<pre class="pattern">' + patternHtml + "</pre>";
}

// Test the function
generatePattern(5);

// Task Two:
function generateHollowSquarePattern(N) {
    let patternHtml = "";
    for (let i = 1; i <= N; i++) {
      let num = 1;
      for (let j = 1; j <= N; j++) {
        if (i === 1 || i === N || j === 1 || j === N) {
          patternHtml += num;
          num = (num % 7) + 1; // increment the number, wrapping around to 1 after 7
        } else {
          patternHtml += "&nbsp;";
        }
      }
      patternHtml += "<br>";
    }
    document.getElementById("pattern-div_two").innerHTML =
      '<pre class="pattern">' + patternHtml + "</pre>";
  }
  
  // Test the function
  generateHollowSquarePattern(7);