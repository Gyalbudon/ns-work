import $ from "jquery";

function myPopup() {
    // Get the modal
    var modal = $("#myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = $(".myImg");
    var modalImg = $("#img01");

    img.click(function () {
        modal.show();
        $("body").css("overflow-y", "hidden");
        var src = $(this).attr("src");
        modalImg.attr("src", src);
    });

    // Get the <span> element that closes the modal
    var span = $(".close");

    // When the user clicks on <span> (x), close the modal
    span.click(function () {
        modal.hide();
        $("body").removeAttr("style", "");
    });
}
export { myPopup };
