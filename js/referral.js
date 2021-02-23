function copyToClipboard() {
    /* Get the text field */
    let copyText = document.getElementById("referral__input");
    let explainText = document.getElementById("referral__explain");

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Show information about copied text */
    explainText.innerHTML = "<small>Посилання скопійовано!</small>";
}

$("#referral__button").on('click', function () {
    $("#referral__popup").addClass('model-open');
});

$(".close-btn, .bg-overlay").click(function () {
    $("#referral__popup").removeClass('model-open');
});