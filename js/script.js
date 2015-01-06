function main(){
    // SourceTree heading
    $('.only-with-full-nav').append(
        $('<hr /><h3>SourceTree</h3>')
    );

    // Create new buttons
    $('.clone-url').each(function(i, elm) {
        var proto = $(elm).attr('data-protocol-type');

        if( proto.match(/(http|ssh)/) ){
            var cloneUrl = $(elm).find('input.js-url-field').val();

            if ( typeof cloneUrl === "undefined" ) return;

            addCloneButton(elm, proto, cloneUrl);
        }
    });
}

function addCloneButton(elm, proto, cloneUrl) {
    var stUri  = buildSourcetreeUri(cloneUrl);

    $('.only-with-full-nav').append(
        $('<a>').attr({
            'href' : stUri,
            'data-url' : stUri,
            'class' : 'minibutton sidebar-button js-conduit-rewrite-url',
        }).append(
            $('<span>', {'class': 'octicon octicon-device-desktop'}),
            $('<span>').text(' Clone (' + proto + ')')
        )
    );
}

function buildSourcetreeUri(cloneUrl) {
    return 'sourcetree://cloneRepo/' + cloneUrl;
}

main();
