const xhr = new XMLHttpRequest();

xhr.open("POST", "users", false);

xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("accept", "application/json");
xhr.send(JSON.stringify({ id: 1, content: "HTML", completed: false }));

xhr.onreadystatechange = () => {
  // readyState 프로퍼티 값이 4(XMLHttpRequest.DONE)가 아니면 서버 응답이 완료되지 않은 상태다.
  if (xhr.readyState !== XMLHttpRequest.DONE) return;

  // status 프로퍼티 값이 200이면 response 프로퍼티에 서버의 응답 결과가 담겨 있다.

  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.response));
  } else {
    console.error("Error", xhr.status, xhr.statusText);
  }
};
