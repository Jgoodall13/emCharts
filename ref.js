    // $.ajax({
    //     method: 'GET',
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     dataType: 'json',
    //     success: function(res) {
    //        $.map(res, function(post, i){
    //            $('.result').append(`<h3>${post.title}</h3><p>${post.body}</p>`)
    //        })
    //     }
    // })

    // $('#submit').click(function(e){
    //     e.preventDefault();
    //     var first = $('#first').val();
    //     var last = $('#last').val();
    //     $.ajax({
    //         method: 'POST',
    //         url: 'https://jsonplaceholder.typicode.com/posts',
    //         data: {
    //             first,
    //             last
    //         },
    //         success: function(res) {
    //             console.log(res)
    //         }
    //     })
    // })