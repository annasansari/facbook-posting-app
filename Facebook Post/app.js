
function bgNone() {
   var bgTrans = document.getElementById("input-word")
   bgTrans.style.background = 'transparent'
}

function bgImg1() {
   var bgImage1 = document.getElementById('input-word')
   bgImage1.style.backgroundImage = 'url(backgrounds/bg1.jpg)'
}
function bgImg2() {
   var bgImage1 = document.getElementById('input-word')
   bgImage1.style.backgroundImage = 'url(backgrounds/bg2.jpg)'
}
function bgImg3() {
   var bgImage1 = document.getElementById('input-word')
   bgImage1.style.backgroundImage = 'url(backgrounds/bg3.jpg)'
}
function bgImg4() {
   var bgImage1 = document.getElementById('input-word')
   bgImage1.style.backgroundImage = 'url(backgrounds/bg4.jpg)'
   bgImage1, style.bacckGrouneRepeat = 'none'
}
function bgImg5() {
   var bgImage1 = document.getElementById('input-word')
   bgImage1.style.backgroundImage = 'url(backgrounds/bg5.jpg)'
}
function bgImg6() {
   var bgImage1 = document.getElementById('input-word')
   bgImage1.style.backgroundImage = 'url(backgrounds/bg6.jpg)'
}
function bgImg7() {
   var bgImage1 = document.getElementById('input-word')
   bgImage1.style.backgroundImage = 'url(backgrounds/bg7.jpg)'
}

function hidePics() {
   var getHidePics = document.getElementById("align")
   if (getHidePics.style.display === "flex") {
      getHidePics.style.display = "none"
   }
   else {
      getHidePics.style.display = "flex"
   }
}
function noneBackGround() {
   var noneEffect = document.getElementById("noneBg")
   noneEffect.style.backgroundColor = '#fff'
}
function likeColor(){
   var like = document.getElementById("likeColor")

   if(like.style.color = 'red'){
      like.style.color = 'none'
   }
   else{
      like.style.color = 'red'
   }
}

function post() {
   var showPost = document.getElementById("showPost")
   showPost.innerHTML += `
   <div class='cont-js'>
<div class = 'post-box'>
   <div class="main-js">
    <img class="prof-js" src="img/profile-pic.jpg" alt="">
     <div class="icon-btn align-btn">
    <p class="myName">انس انصاری</p>
      <button class="frnd-btn"><i class="fa-solid fa-user-group frnd-icon"></i>Friend</button>
      ${moment(new Date(), "YYYYMMDD").fromNow()}
  </div>
  ${  document.getElementById('showPost').innerHTML = document.getElementById('input-word').value
}


   </div>
  </div>
  </div>
  <div class="like-portion">
        <div class="heart">
            <h6>Like</h6>
            <i onclick="likeColor()" id="likeColor" class="fa-regular fa-heart heart-align"></i>
        </div>
        <div class="comment">
            <h6>Comment</h6>
            <i class="fa-sharp fa-light fa-comments comment-align"></i>
        </div>
        <div class="share">
            <h6>Share</h6>
            <i class="fa-light fa-share-from-square share-align"></i>
        </div>
    </div>
`
}


   







