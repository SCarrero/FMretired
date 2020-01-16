
$('#hero-animate-bring').addClass('hero-animate-bring');
$('#hero-animate-it').addClass('hero-animate-it');
$('#hero-animate-home').addClass('hero-animate-home');
$('#hero-animate-blurb').addClass('hero-animate-blurb');
$('#hero-animate-play').addClass('hero-animate-play');
setTimeout(function(){$('#hero-animate-bring').removeClass("sheer")}, 50);
setTimeout(function(){$('#hero-animate-it').removeClass("sheer")}, 250);
setTimeout(function(){$('#hero-animate-home').removeClass("sheer")}, 450);
setTimeout(function(){$('#hero-animate-blurb').removeClass("sheer")}, 600);
setTimeout(function(){$('#hero-animate-play').removeClass("sheer")}, 750);
setTimeout(function(){$('[data-equalizer="hero"]').foundation();}, 850);

$(document).ready(function(){
 // init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  // .to('@target', @length, {@object})  
  var 
    tweenBlockA = new TweenMax.to('#animate-1', 0.75, {x: '0%', y: '0%', opacity: 1}),
    tweenBlockB = new TweenMax.to('#animate-2', 0.75, {x: '0%', y: '0%', opacity: 1}),
    tweenBlockC = new TweenMax.to('#animate-3', 1.5, {opacity: 1}),
    tweenBlockD = new TweenMax.to('#animate-4', 0.75, {x: '0%', y: '0%', opacity: 1}),
    tweenBlockE = new TweenMax.to('#animate-5', 0.75, {x: '0%', y: '0%', opacity: 1}),
    tweenBlockF = new TweenMax.to('#animate-6', 1.5, {opacity: 1}),
    tweenBlockG = new TweenMax.to('#animate-7', 0.75, {x: '0%', y: '0%', opacity: 1}),
    tweenBlockH = new TweenMax.to('#animate-8', 0.75, {x: '0%', y: '0%', opacity: 1}),
    tweenBlockI = new TweenMax.to('#animate-9', 1.5, {opacity: 1});

  
  var anim_blockA = new ScrollMagic.Scene({  // content text block 1
      triggerElement: '#animate-1',
      triggerHook: 1,
      reverse: true
    }).setTween(tweenBlockA),
    anim_blockB = new ScrollMagic.Scene({
      triggerElement: '#animate-2',
      triggerHook: 0.9,
      reverse: true
    }).setTween(tweenBlockB),
    anim_blockC = new ScrollMagic.Scene({
      triggerElement: '#animate-3',
      triggerHook: 0.8,
      reverse: true
    }).setTween(tweenBlockC),    
    anim_blockD = new ScrollMagic.Scene({ 
      triggerElement: '#animate-4',
      triggerHook: 1,
      reverse: true
    }).setTween(tweenBlockD),
    anim_blockE = new ScrollMagic.Scene({
      triggerElement: '#animate-5',
      triggerHook: 0.9,
      reverse: true
    }).setTween(tweenBlockE),
    anim_blockF = new ScrollMagic.Scene({
      triggerElement: '#animate-6',
      triggerHook: 0.8,
      reverse: true
    }).setTween(tweenBlockF),
    anim_blockG = new ScrollMagic.Scene({
      triggerElement: '#animate-7',
      triggerHook: 1,
      reverse: true
    }).setTween(tweenBlockG),
    anim_blockH = new ScrollMagic.Scene({
      triggerElement: '#animate-8',
      triggerHook: 0.9,
      reverse: true
    }).setTween(tweenBlockH),
    anim_blockI = new ScrollMagic.Scene({
      triggerElement: '#animate-9',
      triggerHook: 0.8,
      reverse: true
    }).setTween(tweenBlockI);

  controller.addScene([
    anim_blockA,
    anim_blockB,
    anim_blockC,
    anim_blockD,
    anim_blockE,
    anim_blockF,
    anim_blockG,
    anim_blockH,
    anim_blockI
  ]); 
  
  $('.house-break img').each(function(){
    // Create Scene 
    var scene = new ScrollMagic.Scene({
      triggerElement: '.house-break-wrapper',
      triggerHook: 0,
      reverse: true
    })
    .setClassToggle(this, 'broken') // add class to 1st animated item
    .addTo(controller);  
  });
  
  $('.house-build img').each(function(){
    // Create Scene 
    var scene = new ScrollMagic.Scene({
      triggerElement: '.house-build-wrapper',
      triggerHook: 0.9,
      reverse: true
    })
    .setClassToggle(this, 'complete') // add class to 1st animated item
    .addTo(controller);  
  });
  
  $('.animation-row > div').each(function(x){
    // Create Scene 
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.9,
      reverse: true
    })
    .setClassToggle(this.children[0], 'complete-delay-'+x) // add class to 1st animated item
    .addTo(controller);  
  });  

});  
