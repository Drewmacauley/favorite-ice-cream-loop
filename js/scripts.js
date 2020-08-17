$(document).ready(function () {
  $("form#flavors").submit(function (event) {
    event.preventDefault()
    // const flavorData = $("input.flavorinput").val();
    console.log($("input.flavorinput"))
    let flavorArray = [];
    $("input.flavorinput").each(function (flavor) {
      flavorArray.push($(this).val());

    })
    // console.log(flavorData);
    flavorArray.forEach(function (flavor) {

      $("ol").append("<li>" + flavor + "</li>")

    });

    $(".answer").show();
  });
});