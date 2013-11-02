function main(){
  // SourceTree用のセクション追加
  $('.only-with-full-nav').append(
    $('<hr><h3><strong>SourceTree</strong></h3>')
  );

  // ボタン追加
  $('.clone-url').each( function(i, elm) {
    var proto = $(elm).attr('data-protocol-type');

    if( proto.match(/(http|ssh)/) ){
      var cloneUrl = $(elm).find('input.js-url-field').val();
      if ( typeof cloneUrl === "undefined" ) return;
      addCloneButton(elm, proto, cloneUrl);
    }
  });
}

function addCloneButton(elm, proto, cloneUrl) {
  var branch = $('.file-navigation').find('.js-menu-target').attr('data-ref');
  var stUri  = buildSourcetreeUri(branch, cloneUrl);

  $('.only-with-full-nav').append(
    $('<a>').attr({
      "href"     : stUri,
      "data-url" : stUri,
      "class"    : "minibutton sidebar-button js-conduit-rewrite-url",
    }).append(
      $('<span>').text('Clone(' + proto + ')')
    )
  );
}

function buildSourcetreeUri(branch, cloneUrl) {
  if ( typeof branch === "undefined" ) {
    branch = "master";
  }

  var kickSt = "sourcetree://checkoutRef?ref=__branch__&cloneUrl=__cloneUrl__&type=bitbucket";
  kickSt = kickSt.replace('__branch__', branch);
  kickSt = kickSt.replace('__cloneUrl__', cloneUrl);

  return kickSt;
}

main();
