(function ($) {

    //your code goes here
    // get request to grab random post and append to DOM
    $('#new-quote-button').on('click', function (e) {
        e.preventDefault();

        // add a click event for the "SHOW ME ANOTHER" btn and then run the ajax code
        $.ajax({
            method: "GET",
            url: qod_vars.rest_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1'
        })
            .done(function (data) {

                console.log(data[0].content.rendered);
                // console.log(data[0].content.rendered);

                $('.entry-content').html("<h2>" + data[0].content.rendered + "</h2>");
                // data.title.rendere
                $('.entry-title').html("<p> &mdash;" + data[0].title.rendered + "</p>");
            }).fail(function (error) {
                console.log("an error occurred", error)
            });
    });

    // post a new quote using the post method
    //using a form to submit a quote so a .submit event
})(jQuery);

//IIFE immediately Invoked Function Expression
// Invoked also means calling a function or just running a function