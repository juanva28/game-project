var cryptoName = $("#nameCurrency").val();


$('body').keypress(function (e) {
  console.log(cryptoName);
  cryptoName = $("#nameCurrency").val();
    if (e.keyCode == 13) {
        $(".intro").addClass("vanish");
        $(".gameIntro").addClass("game");
    }
});

$('#name').html(cryptoName);
