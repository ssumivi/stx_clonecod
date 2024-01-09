// 전체 스크립트를 다 읽고 로드해라
window.onload = function () {
  const button = document.querySelector(".bt_scroll");
  // 비주얼 클릭했을 때 스크롤이 이동하는 함수를 실행
  // .은 ~에
  button.addEventListener("click", function () {
    // button클릭했을 때, 실행해라 . scrollToSection을
    // 영역으로 이동해라
    scrollToSection("#business");
  });
  function scrollToSection(sectionId) {
    // 괄호 안의 이름은 임의지정
    // sectionId로 지정된 요소를 찾아서 section 변수에 저장
    const section = document.querySelector(sectionId);
    if (section) {
      // scrollIntoView()method는 부드러운 스크롤 효과를 적용하도록 지정합니다.
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  //top button scroll
  const topBtn = document.getElementById("top_btn");
  topBtn.addEventListener("click", function (event) {
    // index.html a태그에 #링크 때문에 클릭했을 때 메인페이지로 이동하는 것을 막는 속성
    event.preventDefault();
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 2690,
        behavior: "smooth",
      });
    } 
    else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  //화살표 이미지 회전코드
  const topBtnImg = document.getElementById("top_btn_img");
  window.addEventListener("scroll", function (scrollTop) {
    scrollTop = window.document.documentElement.scrollTop;
    if (scrollTop > 0) {
      topBtnImg.classList.add("up");
    } 
    else topBtnImg.classList.remove("up");
  });
  //안내창 스크립트
  const body = document.querySelector("body")
  const modal = document.querySelector(".modal_wrap")
  modal.addEventListener("click", function(){
    modal.style.display = "none"
    fadeout(modal)
    
  })
};
