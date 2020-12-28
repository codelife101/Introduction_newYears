const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
let audio = new Audio('tune.mp3');



// $('#begin').click(function() {
//     // let audio = new Audio('tune.mp3');
//             audio.play();
//     tl.to(".contentContainer", {opacity:0, duration:1}) ;
//     tl.to(".contentContainer", {display:'none'}) ;
//     tl.to(".instructions", {display:'block'}), "-=2" ;
//     tl.to(".instructions", {opacity:1, duration:0.5}) ;
// });

$('#begin').touch(function(){ 
    audio.play();
    tl.to(".contentContainer", {opacity:0, duration:1}) ;
    tl.to(".contentContainer", {display:'none'}) ;
    tl.to(".instructions", {display:'block'}), "-=2" ;
    tl.to(".instructions", {opacity:1, duration:0.5}) ; 
});

$('#next').click(function() {
    tl.to(".instructions", {opacity:0, duration:1}) ;
    tl.to(".instructions", {display:'none'}) ;
    tl.to(".starterKit", {display:'block'}), "-=2" ;
    tl.to(".starterKit", {opacity:1, duration:1}) ;
});
$('#backOne').click(function() {
    tl.to(".starterKit", {opacity:0, duration:1}) ;
    tl.to(".starterKit", {display:'none'}) ;
    tl.to(".instructions", {display:'block'}) ;
    tl.to(".instructions", {opacity:1, duration:1}) ;
});
$('#nextOne').click(function() {
    tl.to(".starterKit", {opacity:0, duration:1}) ;
    tl.to(".starterKit", {display:'none'}) ;
    tl.to(".dollarChallenge", {display:'block'}) ;
    tl.to(".dollarChallenge", {opacity:1, duration:1}) ;
});
$('#backTwo').click(function() {
    tl.to(".dollarChallenge", {opacity:0, duration:1}) ;
    tl.to(".dollarChallenge", {display:'none'}) ;
    tl.to(".starterKit", {display:'block'}) ;
    tl.to(".starterKit", {opacity:1, duration:1}) ;
});
$('#nextTwo').click(function() {
    tl.to(".dollarChallenge", {opacity:0, duration:1}) ;
    tl.to(".dollarChallenge", {display:'none'}) ;
    tl.to(".clipboard", {display:'block'}) ;
    tl.to(".clipboard", {opacity:1, duration:1}) ;
});
$('#backThree').click(function() {
    tl.to(".clipboard", {opacity:0, duration:1}) ;
    tl.to(".clipboard", {display:'none'}) ;
    tl.to(".dollarChallenge", {display:'block'}) ;
    tl.to(".dollarChallenge", {opacity:1, duration:1}) ;
});
$('#nextThree').click(function() {
    tl.to(".clipboard", {opacity:0, duration:1}) ;
    tl.to(".clipboard", {display:'none'}) ;
    tl.to(".pong", {display:'block'}) ;
    tl.to(".pong", {opacity:1, duration:1}) ;
});
$('#nextFour').click(function() {
    tl.to(".pong", {opacity:0, duration:1}) ;
    tl.to(".pong", {display:'none'}) ;
    tl.to(".goodluck", {display:'flex'}) ;
    tl.to(".dontBlink", {display:'block', duration:2}) ;
    tl.to(".dontBlink", {display:'none'}) ;
    tl.to(".goodluckImg", {display:'block', duration:20}) ;
    tl.to(".goodluckImg", {display:'none'}) ;
    tl.to("#thatsAll", {display:'block'}) ; 

    if($('#thatsAll').css('display') == 'block')
    {
        audio.stop();
    }

});

function pauseMusic(){
    if($('#thatsAll').css('display') == 'block')
    {
        audio.stop();
    }
}
pauseMusic();