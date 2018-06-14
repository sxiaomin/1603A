require(['jquery', 'handlebars'], function($, handlebars) {
    $.ajax({
        url: '/api/list',
        dataType: 'json',
        success: function(data) {
            //console.log(data);
            var tpl = $('#box').html();
            var template = handlebars.compile(tpl);
            var html = template(data);
            $('#wrap').html(html);
        },
        error: function(error) {
            console.warn(error);
        }
    })
})