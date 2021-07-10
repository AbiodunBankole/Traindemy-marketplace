
// //watch demo video

// window.document.onkeydown = function(e) {
//   if (!e) {
//     e = event;
//   }
//   if (e.keyCode == 27) {
//     lightbox_close();
//   }
// }

// function lightbox_open() {
//   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
//   window.scrollTo(0, 0);
//   document.getElementById('light').style.display = 'block';
//   document.getElementById('fade').style.display = 'block';
//   lightBoxVideo.play();
// }

// function lightbox_close() {
//   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
//   document.getElementById('light').style.display = 'none';
//   document.getElementById('fade').style.display = 'none';
//   lightBoxVideo.pauseVideo();
// }



// //video for the features section

// window.document.onkeydown = function(e) {
//   if (!e) {
//     e = event;
//   }
//   if (e.keyCode == 27) {
//     video_close();
//   }
// }

// function video_open() {
//   var boxVideo = document.getElementById("FeatureVideo");
//   window.scrollTo(0, 0);
//   document.getElementById('f-video').style.display = 'block';
//   document.getElementById('close').style.display = 'block';
//   boxVideo.play();
// }

// function video_close() {
//   var boxVideo = document.getElementById("FeatureVideo");
//   document.getElementById('f-video').style.display = 'none';
//   document.getElementById('close').style.display = 'none';
//   boxVideo.pause();
// }



// For file upload

const fileBtn = document.querySelector("#file-button");
const customBtn = document.querySelector("#custom-button")

function fileBtnActive() {
  fileBtn.click();
}


// Video player 
var video_app = document.querySelector('.custom-video');
var bar = document.querySelector('.bar-color');
var btn = document.getElementById('play-pause-btn');

function togglePlayPause() {
  if (video_app.paused) {
    btn.className = 'pause';
    video_app.play();
  } else {
    btn.className = 'play';
    video_app.pause();
  }
}

btn.onclick = function () {
  togglePlayPause();
};

video_app.addEventListener('timeupdate', function () {
  var videoDuration = video_app.currentTime / video_app.duration;
  bar.style.width = videoDuration * 100 + "%";
  if (video_app.ended) {
    btn.className = 'play';
  }
});


// Mobile Menu

$('document').ready(function(){
  $('button.navbar-toggle').click(function(){
    var navbar_obj = $($(this).data("target"));
    navbar_obj.toggleClass("open");
  });
});

// Dashboard sidemenu

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
  if (phoneSize.matches) {
    document.getElementById("mySidenav").style.width = "100px";
  }
  if (iphoneSize.matches) {
    document.getElementById("mySidenav").style.width = "100px";
  }
  if (tabletPhoneSize.matches) {
    document.getElementById("mySidenav").style.width = "400px";
  }
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};

var phoneSize = window.matchMedia("(max-width: 375px)");
var iphoneSize = window.matchMedia("(max-width: 414px)");
var tabletPhoneSize = window.matchMedia("(max-width: 800px)");
var mediaSize = window.matchMedia("(max-width: 1280px)");

  if (mediaSize.matches) {
    document.getElementById("mySidenav").style.width = "400px";
  }

  

closeNav();


