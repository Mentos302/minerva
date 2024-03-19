$(document).ready(function () {
  $("#burger").click(function () {
    $("nav").toggleClass("burger-active");
    $("#burget-open-icon").toggleClass("hidden");
    $("#burget-close-icon").toggleClass("hidden");
    $("html").toggleClass("overflow-hidden");
  });
});
