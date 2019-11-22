(function ($) {

    //your code goes here
    // get request to grab random post and append to DOM
    let lastPage = '';
    $('#new-quote-button').on('click', function (e) {
        e.preventDefault();

        lastPage = document.URL; //get the url of the current page
        // add a click event for the "SHOW ME ANOTHER" btn and then run the ajax code
        $.ajax({
            method: "GET",
            url: qod_vars.rest_url + 'wp/v2/posts/?filter[orderby]=rand&filter[posts_per_page]=1'
        })
            .done(function (data) {
                const post = data[0];
                history.pushState(null, null, post.slug)
                // 1st value is an object which manages state
                // 2nd value is the url title browser tab
                // 3rd value is the url in the browser
                $('.entry-content').html(post.content.rendered);
                $('.entry-title').html("&mdash; " + post.title.rendered);
            }).fail(function (error) {
                $('.entry-content').html('An error has occurred');
            });
        //update the page when we click the forward and back buttons
        $(window).on('popstate', function () {
            // update the url
            window.location.replace(lastPage);
        });
    });


    // post a new quote using the post method
    //getting value o all the input and textarea and using post method to wp
    const author = $('#quote-author');
    const content = $('#quote-content');
    const source = $('#quote-source');
    const url = $('#quote-source-url');

    $('#quote-submission-form').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            method: "POST",
            url: qod_vars.rest_url + 'wp/v2/posts/',
            data: {
                title: author.val(),
                content: content.val(),
                _qod_quote_source: source.val(),
                _qod_quote_source_url: url.val()
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader('X-WP-Nonce', qod_vars.wpapi_nonce);
            }
        }).done(function () {
            const submitMsg = $('.submit-success-message').css({ 'display': 'block' });

            $('.quote-submission-wrapper').html(submitMsg);
        }).fail(function () {
            $('.quote-submission-wrapper').append('<p>An error has occurred</p>')
        });
    })
    //using a form to submit a quote so a .submit event
})(jQuery);

//IIFE immediately Invoked Function Expression
// Invoked also means calling a function or just running a function