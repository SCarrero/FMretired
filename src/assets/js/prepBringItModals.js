function closestBlockParent(item) {
  $(item).parents().each(function(){
    if ($(this).css('display') == 'block') {
        return $(this);
    }
  });  
}
function triggerVideo(){
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
}
function preRevealVideo() {  
  $(".video-modal[data-src]").each(function(x){    
    var $lnk = $(this),
    $src = $lnk.attr('data-src'),
    i = 'videoModal' + x,
    svgClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 54 54"><g fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"><path d="M1 1l46 46M47 1L1 47"/></g></svg>',    
    $frameId = 'videoFrame' + x,
    $wrapperClass = $lnk.hasClass('widescreen-video') ?  'responsive-embed widescreen' : 'responsive-embed',
    $parent = closestBlockParent($lnk) || $('body'),
    btnClose = $("<button />",{
    "class": "close-button",
    "aria-label": "Close modal",
    "data-close": "",
    "id": 'close' + i,
    "type": "button",
    "html": "<span aria-hidden='true'>"+svgClose+"</span>"
    }),
    $frame = '<iframe id="'+ $frameId +'" frameborder="0" src="" allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>';
    modal = $("<div />",{
      "class": "reveal overlay-video fast",
      "data-reveal": "",
      "data-reset-on-close": true,
      "id": i,
      "data-animation-in" : "scale-in-down",
      "data-animation-out" : "scale-out-up",
      "html": '<div class="' + $wrapperClass + '">'+$frame+'</div>'
    });
    $parent.prepend(modal); 
    $('#'+i).find('.responsive-embed').append(btnClose);      
    $lnk.attr('data-open', i).attr('aria-controls', i);
    $('#'+i).on('open.zf.reveal',function(){
      $('#'+$frameId).attr('src',$src+'&autoplay=1');
    })
    .on('closed.zf.reveal', function(){
      $('#'+$frameId).replaceWith($frame); 
    });
    $('.reveal, #'+i).on("click",function(){
      $(this).foundation('close');
    });    
    $lnk.on("click",function(e){ 
    e.preventDefault(); 
    });   
  });
} 

if($(".video-modal").length) { preRevealVideo();}

 