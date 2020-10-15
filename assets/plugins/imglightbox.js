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
      download: false
    },
    open: function (filename, download) {
      if (typeof download !== "boolean") {download = this.config.download;}

      var parentEls = document.getElementById("imgLightbox").style;
      var els = document.getElementById("imgLightbox-image-area").style;
      parentEls.display = "flex";
      els.backgroundImage = "url('" + filename + "')";
      els.backgroundRepeat = "no-repeat";
      els.backgroundSize = "contain";

      var dlbtn = document.getElementById("imgLightbox-button-download");
      if (download) {
        dlbtn.style.display = "inline-block";
        dlbtn.href = filename;
        dlbtn.download = filename;
      } else {
        dlbtn.style.display = "none";
      }
    },
    close: function () {
      document.getElementById("imgLightbox").style.display="none";
    }
  };
}());
