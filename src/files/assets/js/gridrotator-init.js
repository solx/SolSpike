jQuery(document).ready(function() {
			
    $( '#ri-grid' ).gridrotator({
        rows : 6,
        columns : 8,
        maxStep : 2,
        interval : 2000,
        w1024 : {
            rows : 6,
            columns : 6
        },
        w768 : {
            rows : 8,
            columns : 5
        },
        w480 : {
            rows : 9,
            columns : 4
        },
        w320 : {
            rows : 8,
            columns : 2
        },
        w240 : {
            rows : 5,
            columns : 1
        },
    });
			
});
