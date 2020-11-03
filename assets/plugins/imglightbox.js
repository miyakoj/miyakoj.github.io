/**
 * imglightbox
 * @version 1.1.0
 * @author Miyako Jones <mtj@miyako.io>
 * @see https://github.com/miyakoj/
 *
 * <link href="imglightbox.min.css" rel="stylesheet" type="text/css">
 * <script src="imglightbox.min.js"></script>
 */

var imgLightbox = (function(){
  "use strict";
  return {
    config: {
      version: "1.1.0",
      download: false,
      externalOpen: false
    },
    open: function (filename, config = {}) {
      if (typeof config.download !== "boolean") {config.download = this.config.download;}
      if (typeof config.externalOpen !== "boolean") {config.externalOpen = this.config.externalOpen;}

      var parentEls = document.getElementById("imgLightbox").style;
      parentEls.display = "flex";

      var imgArea = document.getElementById("imgLightbox-image-area");

      // remove an existing img element from a previous lightbox display
      var existingImg = imgArea.getElementsByTagName("img");
      if (existingImg.length != 0) {
        existingImg[0].remove();
      }

      // display images in an img element so that the image ratio is maintained
      var img = document.createElement("img");
      img.src = filename;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "contain";
      imgArea.appendChild(img);

      var dlbtn = document.getElementById("imgLightbox-button-download");
      if (config.download) {
        dlbtn.style.display = "inline-block";
        dlbtn.href = filename;
        dlbtn.download = filename;
      } else {
        dlbtn.style.display = "none";
      }

      var eobtn = document.getElementById("imgLightbox-button-external");
      if (config.externalOpen) {
        eobtn.style.display = "inline-block";
        eobtn.href = filename;
        eobtn.target = "_blank";
      } else {
        eobtn.style.display = "none";
      }
    },
    close: function () {
      document.getElementById("imgLightbox").style.display="none";
    }
  };
}());