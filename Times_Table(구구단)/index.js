document.querySelector("#click").addEventListener('click', () => {
  const a = document.querySelector("#first").value;
  const b = document.querySelector("#second").value;
  const result = document.querySelector("#result");
  if (a) {
    if (b) {
      result.textContent = a * b;
    } else {
      result.textContent =
        "두번째 박스에 숫자를 입력해 주세요"; //두번쨰 박스에 input이 없는경우
    }
  } else {
    result.textContent =
      "첫번째 박스에 숫자를 입력해 주세요"; //첫번쨰 박스에 input이 없는경우
  }
});
