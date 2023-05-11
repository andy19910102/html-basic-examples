let n = 0;

document.getElementById("alertBtn").addEventListener("click", function () {
    n += 1;
    alert(`Hello 這是你在網頁打開後，第 ${n} 次點擊這顆按鈕！`);
});