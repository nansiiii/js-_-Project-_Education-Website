const $ = document;

const loaderElement = $.querySelector("#loader");
const loaderWrapperElement = $.querySelector("#loader-wrapper")
window.addEventListener("load",function(){
 
  loaderElement.classList += " hidden";
  
  if(loaderElement.classList === " hidden"){
  }
  loaderWrapperElement.style.display = 'none';
});


function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time =  h + ":" + m + ":" + s +  session;
  $.getElementById("MyClockDisplay").innerText = time;
  $.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

// -------------- For Dark & Light Mood ----------
const switchElem = $.querySelector("#switch");
switchElem.addEventListener("click", function () {
  $.body.classList.toggle("dark");
  if ($.body.className.includes("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
//----------------------
$.addEventListener("DOMContentLoaded", function () {
  showTime();

  fetch("../json/x.json")
    .then((res) => res.json())
    .then((res) => {
      // console.log(res);
      loadData(res);
    });

  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    $.body.classList.add("dark");
    console.log(theme);
  }
});
//---------------------------------------------------------
let courseWrapper = $.querySelector("#course-wraper");
let teachersWrapper = $.querySelector("#teachers-wrapper");
let studentsWrapper = $.querySelector("#students-wrapper");

let menuBtn = $.getElementById("menu-btn");
let navbar = $.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

//--------------------------------------------

function createCourses(jsData) {
  jsData.courses.forEach((course) => {
    courseWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="course-slide swiper-slide" >
      <img src="${course.course_image}" alt="">
      <h3><a href="pages/courses.html?course_title=${course.course_title}&id=${course.course_id}">${course.course_title}</a></h3>
      <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و </p>
    </div>`
    );
  });
}

function createTeachers(jsData) {
  jsData.teachers.forEach((teacher) => {
    teachersWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide slide">
        <img src="${teacher.teacher_image}" alt="">
        <div class="share">
          <a href="" class="fab fa-instagram"></a>
          <a href="" class="fab fa-telegram"></a>
          <a href="" class="fab fa-whatsapp"></a>
        </div>
        <h3>${teacher.teacher_name}</h3>
      </div>`
    );
  });
}

function createStudents(jsData) {
  jsData.students.forEach((student) => {
    studentsWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide slide">
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، 
            و با استفاده از طراحان گرافیک است، چاپگرها و 
        </p>
        <div class="user">
            <img src="${student.student_image}" alt="">
            <div class="user-info">
                <h3>${student.student_name}</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>
      </div>`
    );
  });
}

function loadData(res) {
  console.log("load...Data");
  createCourses(res);
  createTeachers(res);
  createStudents(res);

  // $.querySelectorAll('.swiper-pagination-bullet').forEach( item => {
  //   item.style.backgroundColor = 'white';
  // })
  // $.querySelectorAll('.swiper-pagination-bullet-active').forEach(item=>{
  //   item.style.backgroundColor = '#00E77F';
  // })
}

//----------------------------------------------------------
// swiper with link
var swiper = new Swiper(".course-slider", {
  // slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//

var swiper = new Swiper(".teachers-slider", {
  // slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".reviews-slider", {
  // slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//------------------------------
// window.onload = ()=>{
//   $.querySelectorAll('.swiper-pagination-bullet').forEach( item => {
//       item.style.backgroundColor = 'white';
//   })
//   $.querySelectorAll('.swiper-pagination-bullet-active').forEach(item=>{
//       item.style.backgroundColor = '#00E77F';
//   })
// }

//------------------------------

// export{switchElem}


