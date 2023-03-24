let btn = document.getElementById("btn");

// Jquery ajax post request
setInterval(() => {
    $.post('./php/ajax_opdr1.php', {
        btnvalue: "clicked"
    }, (response) => {
        // response from PHP back-end
        console.log(response);
    });
}, 1000);
