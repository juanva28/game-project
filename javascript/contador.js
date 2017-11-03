var cryptoName = $("#nameCurrency").val();


$('body').keypress(function (e) {
  cryptoName = $("#nameCurrency").val();
    if (e.keyCode == 13) {
        $(".intro").addClass("vanish");
        $(".gameIntro").addClass("game");
        $('#name').html(cryptoName);
    }
});
