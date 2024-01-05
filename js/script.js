// 전체 스크립트를 다 읽고 로드해라
window.onload = function(){
    const button = document.querySelector(".bt_scroll")
    // 비주얼 클릭했을 때 스크롤이 이동하는 함수를 실행
    // .은 ~에
    button.addEventListener("click" , function(){
        // button클릭했을 때, 실행해라 . scrollToSection을
        // 영역으로 이동해라
        scrollToSection("#business")
    })
    function scrollToSection(sectionId){
    // 괄호 안의 이름은 임의지정
    // sectionId로 지정된 요소를 찾아서 section 변수에 저장
    const section = document.querySelector(sectionId);
        if(section){
            // scrollIntoView()method는 부드러운 스크롤 효과를 적용하도록 지정합니다.
            section.scrollIntoView({behavior:"smooth"})
        }
    }
    //top button scroll
}

