(function ($) {
    $().append('hello world');
    //your code goes here

    // get request to grab random post and append to DOM

    // add a click event for the "SHOW ME ANOTHER" btn and then run the ajax code
    $.ajax({
        method: "GET",
        url: // qod_vars.rest_url + wp-json/wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1
})
        .done(function () {
            console.log(data)
        }).fail(function (error) {
            console.log("an error occurred", error)
        });
    // post a new quote using the post method
    //using a form to submit a quote so a .submit event
})(jQuery)

//IIFE immediately Invoked Function Expression
// Invoked also means calling a function or just running a function