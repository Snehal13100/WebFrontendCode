let time = 1000;

let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let showDate = document.querySelector(".mainBox .date");

let showWeak = document.querySelectorAll(".weak span");
setInterval(function () {
  let date = new Date();

  // console.log(date.getSeconds);

  //Normally we can call like this
  //   hr.innerText = date.getHours();
  //   min.innerText = date.getMinutes();
  //   sec.innerText = date.getSeconds();

  //But we want data always in two digit so we can apply some condition.
  //This code is used to add a leading zero when time is less than 10.

  let modifyHr = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let modifyMin =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let modifySec =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  hr.innerText = modifyHr;
  min.innerText = modifyMin;
  sec.innerText = modifySec;
  //here we can add both way name and num of month.
  //   let months = [
  //     "01",
  //     "02",
  //     "03",
  //     "04",
  //     "05",
  //     "06",
  //     "07",
  //     "08",
  //     "09",
  //     "10",
  //     "11",
  //     "12",
  //   ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let calDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let calMonth = months[date.getMonth()];
  let calFullYear = date.getFullYear();
  showDate.innerHTML = `<span>${calDate} / ${calMonth} / ${calFullYear}
  </span> `;
  showWeak[date.getDay()].setAttribute("class", "active");
}, time);
