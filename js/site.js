$(document).ready(function () {
  if (
    document.body.scrollTop <= 500 &&
    document.documentElement.scrollTop <= 500
  ) {
    $("#backToTop").css("display", "none");
  }

  window.onscroll = function() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      $("#backToTop").css("display", "block");
    } else {
      $("#backToTop").css("display", "none");
    }
  }

  $("#backToTop").on("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For everything else
  });

  const lightbox = GLightbox({
    loop: false,
    autoplayVideos: false,
    draggable: false
  });
});