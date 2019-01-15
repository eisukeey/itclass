function judge(a) {
    if (a <= 10 && 0 <= a) {
        document.getElementById("kekka").innerHTML = "今日は江ノ島日和！レッツゴー！";
    } else {
        document.getElementById("kekka").innerHTML = "入力にミスがあります";
    }
}
