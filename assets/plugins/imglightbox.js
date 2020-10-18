/**
 * imglightbox
 * @version 1.0.4
 * @author Ferenc Czigler <serrin.salamander@gmail.com>
 * @see https://github.com/Serrin/
 *
 * <link href="imglightbox.css" rel="stylesheet" type="text/css">
 * <script src="imglightbox.js"></script>
 */

var imgLightbox = (function(){
  "use strict";
  return {
    config: {
      version: "1.0.4",
      download: false,
      externalOpen: false
    },
    open: function (filename, download, externalOpen) {
      if (typeof download !== "boolean") {download = this.config.download;}
      if (typeof externalOpen !== "boolean") {externalOpen = this.config.externalOpen;}

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
      if (download) {
        dlbtn.style.display = "inline-block";
        dlbtn.href = filename;
        dlbtn.download = filename;
      } else {
        dlbtn.style.display = "none";
      }

      var eobtn = document.getElementById("imgLightbox-button-external");
      if (externalOpen) {
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
