const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

// 먼저 함수 호출해주기(setInterval 때문에 1초 뒤에 실행되기 때문에)
getClock();
setInterval(getClock, 1000);


// +) setInterval : 설정한 시간마다 반복
// ex) setInterval(getClock, 2000) => 2초마다 getClock 함수 반복
// +) setTimeout : 설정한 시간 이후에 실행(한번만)
// ex) setTimeout(getClock, 2000) => 2초 후에 getClock 함수 실행