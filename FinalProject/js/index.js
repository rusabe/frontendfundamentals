$(document).ready(function(){
    $("#btnSearch").click(function(){
        search();
    });

    $("#keyword").change((function(){
        if($("#keyword").val().length > 2)
        {
            search();
        }
    }))
    function search(){
        var url = 
        $.ajax(
            {
                url : 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $("#keyword").val(),
                dataType: 'jsonp',
                success:  
                function(data, status, xhr){
                    var html = '<li><a href="'+ data[3][0] +'">' + data[1][0] +'</a></li>';
                    html += '<li><a href="'+ data[3][1] +'">' + data[1][1] +'</a></li>';
                    html += '<li><a href="'+ data[3][2] +'">' + data[1][2] +'</a></li>';
                    html += '<li><a href="'+ data[3][3] +'">' + data[1][3] +'</a></li>';
                    html += '<li><a href="'+ data[3][4] +'">' + data[1][4] +'</a></li>';
                    html += '<li><a href="'+ data[3][5] +'">' + data[1][5] +'</a></li>';
                    html += '<li><a href="'+ data[3][6] +'">' + data[1][6] +'</a></li>';
                    html += '<li><a href="'+ data[3][7] +'">' + data[1][7] +'</a></li>';
                    html += '<li><a href="'+ data[3][8] +'">' + data[1][8] +'</a></li>';
                    html += '<li><a href="'+ data[3][9] +'">' + data[1][9] +'</a></li>';

                    
                    $("#list").html(html);
                }
            });
    }
});
