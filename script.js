// 버튼 선택
const themeButton = document.getElementById("theme-toggle");

// 클릭 이벤트 등록
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});
