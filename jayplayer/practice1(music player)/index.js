/*----the filter search bar in the main navuigation bar-*/
/*
$(document).ready(function () {
  $("#myHeaderInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#maincontent").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

$(document).ready(function () {
  $("#myHeaderInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#maincontent").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
*/
/****jfndnd */
/*-----the logout button in the main navigation bar-----*/
const logout1 = () => {
  let text = "are you sure you want to log out";
  if (confirm(text) == true) {
    window.close();
    window.open("/practice1(music player)/index(entrance)/index.html");
  } else {
    text = "";
  }
  document.getElementsByTagName("body").innerHTML = text;
}
document.getElementById("logoutmain").addEventListener("click", logout1);

/********** javascript greetings at the navigation bar******** */
{
  let greetings;
  switch (new Date().getHours()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:

      greetings = `<span id="firstgreetingword">Hey Jay's</span><br>
     <span id="secondgreetingword">Good Morning</span> `;
      break;
    case 18:
    case 19:
    case 20:

      greetings = `<span id="firstgreetingword">Hey Jay's</span><br>
     <span id="secondgreetingword">Good Evening</span> `;
      break;
    case 21:
    case 22:
    case 23:

      greetings = `<span id="firstgreetingword">Hey Jay's</span><br>
     <span id="secondgreetingword">Good Night</span> `;
      break;

    default:
      greetings = `<span id="firstgreetingword">Hey Jays's</span><br>
     <span id="secondgreetingword">enjoy your day </span>`;
  }
  document.getElementById("greetings").innerHTML = greetings;
}
/**********javascript fot the greetings  at the navigation bar ends here********** */

/*---the login profile---- */
const appear = () => {
  document.getElementById("pop").style.display = `initial`;
  document.getElementById("pop").innerHTML = `
<div class="modal-dialog " id="mymodal" >
<div class="modal-dialog">
<div class=" modal-content border border-secondary rounded-lg"  style="background-color:black;">
<div class="modal-body  text-white" >

<div class="d-flex flex-row justify-content-end">
    <button type="button" class="close2 bg-dark text-white " onclick="disappear()" >&times;</button>
</div>

<ul class="nav nav-tabs " role="tablist" style="background-color:black;color:white">
 <li class="nav-item">
  <a class="nav-link active" data-toggle="tab" href="#login"> Log in </a>
  </li>

  <li class="nav-item">
  <a class="nav-link " data-toggle="tab" href="#signup"  style="background-color:black;color:white"> sign up </a>
  </li>
  </ul>

<div class="tab-content">
<div class="tab-pane container  active" id="login">
<form action="#" name="myForm" style="margin-top:10px">
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text mb-4">NG +234</span>
</div>
<input type="tel" class="form-control mb-4" placeholder="phone number" id="telephone" name="telephone">
</div>

<input type="password" class="form-control mb-4" placeholder="enter password" id ="pwd" name="password">
<button type="submit" onclick="return finallyLogIn()" class="btn btn-primary mb-4">Log in</button>
</form>
<div id="loginverificationdisplay" style="color:red;"></div>
<p>Note the login verification is a two step process,<br>
therefore you would required to input your details<br>
twice before we log you in </p>
</div>

<div class="tab-pane container" id="signup">
</div>
</div>

<div class="d-flex justify-content-end mt-4">
    <button type="button" class="btn btn-danger " id="close1" onclick="disappear()">close</button>
    </div>
    
</div>
</div>
</div>
</div>
`;
}
document.getElementById("profiletext").addEventListener("click", appear);

const disappear = () => {
  document.getElementById("pop").style.display = `none`;
}

var finallyLogIn = () => {

  let x = document.forms["myForm"]["telephone"].value;
  let y = document.forms["myForm"]["password"].value;

  if (x !== "08067585468" || y !== "mybossvictor") {
    document.getElementById("loginverificationdisplay").innerHTML = `
        <p class="redvalidation">incorrect Phone number or password</p>`;
    return false;
  } else {
    document.getElementById("loginverificationdisplay").innerHTML =
      `<p class="greenvalidation">you are now logged in</p>`;
    document.getElementById("profile").innerHTML =
      ` <img src = "/practice1(music player)/images/johnpaul.jpg" id = "profileimage">
  <span id="profiletext" onclick="appear()">_johnpaul104_</span>`
      ;
  }
}

/*******js for search within music **********/

const myFunction = () => {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchwithintracks");
  filter = input.value.toUpperCase();
  table = document.getElementById("tablelist");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


/*******bottom controller*****/

/*********default bottom musics ******** */

const next1 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "asp (bottom default music)/1defaultmusic.asp");
  xhttp.send();
}
const a = document.querySelector(`#bottomnextbtn1`);
a.addEventListener(`click`, next1);
const b = document.querySelector(`#defaultbuttomcontroller1`);
b.addEventListener(`ended`, next1);


const restartDefault = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/restartdefault.asp");
  xhttp.send();
}

const next2 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/2defaultmusic.asp");
  xhttp.send();
}

const next3 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/3defaultmusic.asp");
  xhttp.send();
}

const next4 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/4defaultmusic.asp");
  xhttp.send();
}

const next5 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/5defaultmusic.asp");
  xhttp.send();
}

const next6 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/6defaultmusic.asp");
  xhttp.send();
}

const next7 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/7defaultmusic.asp");
  xhttp.send();
}

const next8 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/8defaultmusic.asp");
  xhttp.send();
}

const next9 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/9defaultmusic.asp");
  xhttp.send();
}

const next10 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/10defaultmusic.asp");
  xhttp.send();
}

const next11 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/11defaultmusic.asp");
  xhttp.send();
}

const next12 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/12defaultmusic.asp");
  xhttp.send();
}

const next13 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/13defaultmusic.asp");
  xhttp.send();
}

const next14 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/14defaultmusic.asp");
  xhttp.send();
}

const next15 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/15defaultmusic.asp");
  xhttp.send();
}

const next16 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/16defaultmusic.asp");
  xhttp.send();
}

const next17 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/17defaultmusic.asp");
  xhttp.send();
}

const next18 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/18defaultmusic.asp");
  xhttp.send();
}

const next19 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/asp (bottom default music)/19defaultmusic.asp");
  xhttp.send();
}

/**********default bottom music ends here********* */

/************** javascript for (more).asp ******************************************************/
/*****load asp  for hotlist(more)********* */

const hotListMore = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "more hotlist(homepage)/hotlist(more).asp");
  xhttp.send();
}

const hotlistMenuReturn = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/more hotlist(homepage)/hotlist(more).asp");
  xhttp.send();
}

/*************** hotlist music page direct*************** */
/************daily trending********** */

const dailyTrending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/dailytrending(hotlist).asp");
  xhttp.send();
}

/*****daily trending musics *************/

const firstDailyTrending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/daily trending(bottom controller)/1daily trending music.asp");
  xhttp.send();
}

const secondDailyTrending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/daily trending(bottom controller)/2daily trending music.asp");
  xhttp.send();
}

const thirdDailyTrending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/daily trending(bottom controller)/3daily trending music.asp");
  xhttp.send();
}

const fourthDailyTrending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/daily trending(bottom controller)/4daily trending music.asp");
  xhttp.send();
}

const fifthDailyTrending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/daily trending(bottom controller)/5daily trending music.asp");
  xhttp.send();
}

const sixthtDailyTrending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/daily trending(bottom controller)/6daily trending music.asp");
  xhttp.send();
}

function seventhDailyTrending() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/daily trending(bottom controller)/7daily trending music.asp");
  xhttp.send();
}

const eightDailyTrending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/daily trending(bottom controller)/8daily trending music.asp");
  xhttp.send();
}

const nineDailyTrending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/daily trending(bottom controller)/9daily trending music.asp");
  xhttp.send();
}

const tenDailyTrending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/daily trending/daily trending(bottom controller)/10daily trending music.asp");
  xhttp.send();
}

/*********top new music********* */

const topNewMusic = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/top new music/top new music.asp");
  xhttp.send();
}

/******top new bottom music******** */

const firstTopNew = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/top new music/top new music(bottom controller)/1top new(hotlist).asp");
  xhttp.send();
}

const secondTopNew = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/top new music/top new music(bottom controller)/2top new(hotlist).asp");
  xhttp.send();
}

const thirdTopNew = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/top new music/top new music(bottom controller)/3top new(hotlist).asp");
  xhttp.send();
}

const fourthTopNew = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/top new music/top new music(bottom controller)/4top new(hotlist).asp");
  xhttp.send();
}

const fifthTopNew = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/top new music/top new music(bottom controller)/5top new(hotlist).asp");
  xhttp.send();
}

const sixthTopNew = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/top new music/top new music(bottom controller)/6top new(hotlist).asp");
  xhttp.send();
}

const seventhTopNew = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/top new music/top new music(bottom controller)/7top new(hotlist).asp");
  xhttp.send();
}

const eightTopNew = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/musics(hot list )/top new music/top new music(bottom controller)/8top new(hotlist).asp");
  xhttp.send();
}

/*****load asp  for recap(more).asp********* */

const recapMore = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "more monthly recap(homepage)/recap(more).asp");
  xhttp.send();
}

const topFreeSongs = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/music(recap)/top free songs/top free songs(recap).asp");
  xhttp.send();
}

const recapMenuReturn = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/more monthly recap(homepage)/recap(more).asp");
  xhttp.send();
}

/***** recap(more)  musics *************/

const firstRecap = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/music(recap)/top free songs/top free songs (bottom controller)/1top free songs.asp");
  xhttp.send();
}

const secondRecap = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/music(recap)/top free songs/top free songs (bottom controller)/2top free songs.asp");
  xhttp.send();
}

const thirdRecap = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/music(recap)/top free songs/top free songs (bottom controller)/3top free songs.asp");
  xhttp.send();
}

const fourthRecap = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/music(recap)/top free songs/top free songs (bottom controller)/4top free songs.asp");
  xhttp.send();
}

const fifthRecap = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/music(recap)/top free songs/top free songs (bottom controller)/5top free songs.asp");
  xhttp.send();
}

const sixthRecap = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/music(recap)/top free songs/top free songs (bottom controller)/6top free songs.asp");
  xhttp.send();
}

const seventhRecap = () => {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/music(recap)/top free songs/top free songs (bottom controller)/7top free songs.asp");
  xhttp.send();
}

/*****load asp  for bestnew(more).asp********* */

const bestnew = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "more best new(homepage)/bestnew(more).asp");
  xhttp.send();
}
/*************homepage return.asp******* */

const homeReturn = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index2(home)/homepage.asp");
  xhttp.send();
}
document.getElementById("homereturnpage").addEventListener("click", homeReturn);


/************trendinding.asp starts here******* */

/*********trending*********** */

const trending = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index3(trending)/trending.asp");
  xhttp.send();
}
document.getElementById("trendingpage").addEventListener("click", trending);
/*************trending musics************ */

const firstTrendingMusic = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index3(trending)/trending(bottom controller)/1trending music.asp");
  xhttp.send();
}

const secondTrendingMusic = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index3(trending)/trending(bottom controller)/2trending music.asp");
  xhttp.send();
}

const thirdTrendingMusic = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index3(trending)/trending(bottom controller)/3trending music.asp");
  xhttp.send();
}

const fourthTrendingMusic = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index3(trending)/trending(bottom controller)/4trending music.asp");
  xhttp.send();
}

const fifthTrendingMusic = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index3(trending)/trending(bottom controller)/5trending music.asp");
  xhttp.send();
}

const sixthTrendingMusic = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index3(trending)/trending(bottom controller)/6trending music.asp");
  xhttp.send();
}

const seventhTrendingMusic = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index3(trending)/trending(bottom controller)/7trending music.asp");
  xhttp.send();
}

const eightTrendingMusic = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index3(trending)/trending(bottom controller)/8trending music.asp");
  xhttp.send();
}

/**********Artists.asp starts here******** */

const Artists = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/artists.asp");
  xhttp.send();
}
document.getElementById("artistspage").addEventListener("click", Artists);

const artistReturn = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/artists.asp");
  xhttp.send();
}

/**********music page direct******* */

const asakeSongs = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asakesongs.asp");
  xhttp.send();
}

const blackSherifSongs = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherifsongs.asp");
  xhttp.send();
}

const boySpyceSongs = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/boy spyce(artists)/boyspycesongs.asp");
  xhttp.send();
}

/**Random musics for our bottom controller**** */

/************asake ************* */
const mrMoney = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/mr money.asp");
  xhttp.send();
}

const babaGod = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/baba God.asp");
  xhttp.send();
}

const asakeBody = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/asakebody.asp");
  xhttp.send();
}

const dull = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/dull.asp");
  xhttp.send();
}

const dupe = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/dupe.asp");
  xhttp.send();
}

const joha = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/joha.asp");
  xhttp.send();
}

const muse = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/muse.asp");
  xhttp.send();
}

const nzaza = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/nzaza.asp");
  xhttp.send();
}

const omoOpe = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/omo ope.asp");
  xhttp.send();
}

const ototo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/ototo.asp");
  xhttp.send();
}

const peaceBeUntoYou = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/peace be unto you.asp");
  xhttp.send();
}

const reason = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/reason.asp");
  xhttp.send();
}

function sungba() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/sungba.asp");
  xhttp.send();
}

const sungbaRemix = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/sungba(remix).asp");
  xhttp.send();
}

const terminator = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/terminator.asp");
  xhttp.send();
}

const trabaye = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/trabaye.asp");
  xhttp.send();
}

const yanYan = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/yan yan.asp");
  xhttp.send();
}

const sunmomi = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/sunmomi.asp");
  xhttp.send();
}

const kanipe = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/kanipe.asp");
  xhttp.send();
}

const yawa = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/asake(artists)/asake(bottom controller)/yawa.asp");
  xhttp.send();
}

/**********asake ends here********** */

/**********************black sherif ************* */

const fourtyFive = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/fourtyfive.asp");
  xhttp.send();
}

const adeAkye = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/ade akye.asp");
  xhttp.send();
}

const ankonam = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/ankonam.asp");
  xhttp.send();
}

const cryForMe = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/cry for me.asp");
  xhttp.send();
}

const destiny = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/destiny.asp");
  xhttp.send();
}

const dontForgetMe = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/dont forget me.asp");
  xhttp.send();
}

const firstSermon = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/first sermon.asp");
  xhttp.send();
}

const konongoZongo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/konongo zongo.asp");
  xhttp.send();
}

const kwakuTheTraveler = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/kwaku the traveler.asp");
  xhttp.send();
}

const money = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/money.asp");
  xhttp.send();
}

const ohParadise = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/oh paradise.asp");
  xhttp.send();
}

const oilInMyHead = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/oil in my head.asp");
  xhttp.send();
}

const preyDaYoungsta = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/prey da youngsta.asp");
  xhttp.send();
}

const run = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/run.asp");
  xhttp.send();
}

const sadBoysDontFold = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/sad boys don't fold.asp");
  xhttp.send();
}

const secondSermon = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/second sermon.asp");
  xhttp.send();
}

const soja = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/soja.asp");
  xhttp.send();
}

const theHomelessSong = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/the homeless song.asp");
  xhttp.send();
}

const toxicLoveCity = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/toxic love city.asp");
  xhttp.send();
}

const wasteman = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/wasteman.asp");
  xhttp.send();
}


const weUp = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/black sherif(artists)/blacksherif(bottom controller)/we up.asp");
  xhttp.send();
}

/******black sherif ends here *********** */

/************boy spyce********* */

const beggieBeggie = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/boy spyce(artists)/boy spyce(bottom controller)/beggie-beggie.asp");
  xhttp.send();
}

const destiny2 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/boy spyce(artists)/boy spyce(bottom controller)/destiny.asp");
  xhttp.send();
}

const dreams = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/boy spyce(artists)/boy spyce(bottom controller)/dreams.asp");
  xhttp.send();
}

const nobody = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/boy spyce(artists)/boy spyce(bottom controller)/nobody.asp");
  xhttp.send();
}

const overdose = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/boy spyce(artists)/boy spyce(bottom controller)/overdose.asp");
  xhttp.send();
}

const wayo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/boy spyce(artists)/boy spyce(bottom controller)/wayo.asp");
  xhttp.send();
}

const weatherForTwo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index4(artist)/boy spyce(artists)/boy spyce(bottom controller)/weather for two.asp");
  xhttp.send();
}

/*************videos starts here     ******************* */

const videos = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/vidoes.asp");
  xhttp.send();
}
document.getElementById("videopage").addEventListener("click", videos);
/******* first music video******** */

const firstMusicVideo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/music videos/1music video.asp");
  xhttp.send();
}

const secondMusicVideo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/music videos/2music video.asp");
  xhttp.send();
}

const thirdMusicVideo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/music videos/3music video.asp");
  xhttp.send();
}

const fourthMusicVideo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/music videos/4music video.asp");
  xhttp.send();
}

const FifthMusicVideo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/music videos/5music video.asp");
  xhttp.send();
}

const sixthMusicVideo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/music videos/6music video.asp");
  xhttp.send();
}

const seventhMusicVideo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/music videos/7music video.asp");
  xhttp.send();
}

const eigthMusicVideo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/music videos/8music video.asp");
  xhttp.send();
}

const ninthMusicVideo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/music videos/9music video.asp");
  xhttp.send();
}

const tenthMusicVideo = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/music videos/10music video.asp");
  xhttp.send();
}

/**************Short videos starts here************ */

const short = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index5(videos)/short.asp ");
  xhttp.send();
}

/********************************* playlist  ************************************ */

const playlist = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index6(playlist)/playlist.asp ");
  xhttp.send();
}
document.getElementById("Playlistpage").addEventListener("click", playlist);

/*********************  charts ************************************ */

const charts = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("maincontent").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/charts.asp");
  xhttp.send();
}
document.getElementById("chartspage").addEventListener("click", charts);

/********* javascript for top daily music  ***********/

const revealMusic1 = () => {
  document.getElementById("dailychartsimg1").src = "/practice1(music player)/images/ruger asiwaju 2.jpg";
  $(document).ready(function () {
    $('[data-toggle="dailychartstoggle1"]').tooltip();
  });
  document.getElementById("displaytopchartdetails1").innerHTML =
    `<h5 id="chartdetailssongname"> Asiwaju  <span id="chartdetailsartistname">by Ruger :</span></h5>
    <p id="chartdetailssongstreams"> Streams: 24.5 million+ </p>
    <p id="playchartlisticon" class="fas fa-play" onclick="dailyChart1()" ></p>
    <a  href="/practice1(music player)/allmusic/ruger/Ruger - Asiwaju.mp3"
       download><span class="fas fa-download" id="chartlistdownloadicon"></span>
    </a>`
}

const backToChartNumber1 = () => {
  document.getElementById("dailychartsimg1").src = "/practice1(music player)/images/number-1-made-from-neon-light.jpg";
  document.getElementById("displaytopchartdetails1").innerHTML = ``;
}

const revealMusic2 = () => {
  document.getElementById("dailychartsimg2").src = "/practice1(music player)/images/cough by kizz daniel.jpg";
  $(document).ready(function () {
    $('[data-toggle="dailychartstoggle2"]').tooltip();
  });
  document.getElementById("displaytopchartdetails2").innerHTML =
    `<h5 id="chartdetailssongname"> Cough  <span id="chartdetailsartistname">by Kizz Daniel :</span></h5>
    <p id="chartdetailssongstreams"> Streams: 19 million+ </p>
    <p id="playchartlisticon" class="fas fa-play" onclick="dailyChart2()"></p>
   <a  href="/practice1(music player)/allmusic/kizz daniel/Kizz Daniel, EMPIRE - Cough.mp3"
       download><span class="fas fa-download" id="chartlistdownloadicon"></span>
    </a>`
}

const backToChartNumber2 = () => {
  document.getElementById("dailychartsimg2").src = "/practice1(music player)/images/number-2-made-from-neon-light.jpg";
  document.getElementById("displaytopchartdetails2").innerHTML = ``;
}

const revealMusic3 = () => {
  document.getElementById("dailychartsimg3").src = "/practice1(music player)/images/wondamo by mavins.jpg";
  $(document).ready(function () {
    $('[data-toggle="dailychartstoggle3"]').tooltip();
  });
  document.getElementById("displaytopchartdetails3").innerHTML =
    `<h5 id="chartdetailssongname"> Wondamo  <span id="chartdetailsartistname">by  Mavins :</span></h5>
    <p id="chartdetailssongstreams">Streams: 14.5 million </p>
    <p id="playchartlisticon" class="fas fa-play" onclick="dailyChart3()" ></p>
    <a  href="/practice1(music player)/allmusic/mavins/Mavin All Stars - Won Da Mo (Official).mp3"
       download><span class="fas fa-download" id="chartlistdownloadicon"></span>
    </a>`
}

const backToChartNumber3 = () => {
  document.getElementById("dailychartsimg3").src = "/practice1(music player)/images/number-3-made-from-neon-light.webp";
  document.getElementById("displaytopchartdetails3").innerHTML = ``;
}

const revealMusic4 = () => {
  document.getElementById("dailychartsimg4").src = "/practice1(music player)/images/xtra cool by young john.png";
  $(document).ready(function () {
    $('[data-toggle="dailychartstoggle4"]').tooltip();
  });
  document.getElementById("displaytopchartdetails4").innerHTML =
    `<h5 id="chartdetailssongname"> Xtra Cool  <span id="chartdetailsartistname">by Young John :</span></h5>
<p id="chartdetailssongstreams">Streams: 9.5 million </p>
    <p id="playchartlisticon" class="fas fa-play"  onclick="dailyChart4()"></p>
   <a  href="/practice1(music player)/allmusic/young john/Young Jonn - Xtra Cool.mp3"
       download><span class="fas fa-download" id="chartlistdownloadicon"></span>
    </a>`
}

const backToChartNumber4 = () => {
  document.getElementById("dailychartsimg4").src = "/practice1(music player)/images/number-4-made-from-neon-light.jpg";
  document.getElementById("displaytopchartdetails4").innerHTML = ``;
}

const revealMusic5 = () => {
  document.getElementById("dailychartsimg5").src = "/practice1(music player)/images/rush by ayrastarr.jpeg";
  $(document).ready(function () {
    $('[data-toggle="dailychartstoggle5"]').tooltip();
  });
  document.getElementById("displaytopchartdetails5").innerHTML =
    `<h5 id="chartdetailssongname">  Rush  <span id="chartdetailsartistname">by  Ayra starr :</span></h5>
<p id="chartdetailssongstreams">7 million streams</p>
    <p id="playchartlisticon" class="fas fa-play"   onclick="dailyChart5()"></p>
   <a  href="/practice1(music player)/allmusic/ayra starr/Ayra Starr - Rush.mp3"
       download><span class="fas fa-download" id="chartlistdownloadicon"></span>
    </a>`
}

const backToChartNumber5 = () => {
  document.getElementById("dailychartsimg5").src = "/practice1(music player)/images/number-5-made-from-neon-light.webp";
  document.getElementById("displaytopchartdetails5").innerHTML = ``;
}

/******* daily charts bottom controller********* */

const dailyChart1 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/dailycharts(bottomcontroller)/dailychart1.asp");
  xhttp.send();
}

const dailyChart2 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/dailycharts(bottomcontroller)/dailychart2.asp");
  xhttp.send();
}

const dailyChart3 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/dailycharts(bottomcontroller)/dailychart3.asp");
  xhttp.send();
}

const dailyChart4 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/dailycharts(bottomcontroller)/dailychart4.asp");
  xhttp.send();
}

const dailyChart5 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/dailycharts(bottomcontroller)/dailychart5.asp");
  xhttp.send();
}

/************** weekly charts************** */

const weeklyCharts1 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/weeklycharts(bottomcontroller)/weeklycharts1.asp");
  xhttp.send();
}

const weeklyCharts2 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/weeklycharts(bottomcontroller)/weeklycharts2.asp");
  xhttp.send();
}

const weeklyCharts3 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/weeklycharts(bottomcontroller)/weeklycharts3.asp");
  xhttp.send();
}

const weeklyCharts4 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/weeklycharts(bottomcontroller)/weeklycharts4.asp");
  xhttp.send();
}

const weeklyCharts5 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/weeklycharts(bottomcontroller)/weeklycharts5.asp");
  xhttp.send();
}

const weeklyCharts6 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/weeklycharts(bottomcontroller)/weeklycharts6.asp");
  xhttp.send();
}

const weeklyCharts7 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/weeklycharts(bottomcontroller)/weeklycharts7.asp");
  xhttp.send();
}

const weeklyCharts8 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/weeklycharts(bottomcontroller)/weeklycharts8.asp");
  xhttp.send();
}

const weeklyCharts9 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/weeklycharts(bottomcontroller)/weeklycharts9.asp");
  xhttp.send();
}

const weeklyCharts10 = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("bottomcontroller").innerHTML = this.responseText;
  }
  xhttp.open("GET", "/practice1(music player)/index7(charts)/weeklycharts(bottomcontroller)/weeklycharts10.asp");
  xhttp.send();
}


/*********** while offline **************
function offliineMessage() {
  let x = `<div class = "d -flex  flex-direction-column justify-content-center" id="offlinespinner">
  <div class="spinner-border text-info"></div>  
  </div>`;

  let y = ` <div class = "d-flex  flex-direction-column justify-content-center">
  <h4>please check your network and try again</h4>
  </div>`;

  let z = `<div class = "d-flex  flex-direction-column justify-content-center">
  <button type="button" id = "offlineretrybutton" onclick ="retryme()">Retry</button>
  </div>`;

  document.getElementById("maincontent").innerHTML = x + y + z;
  document.getElementById("menubar").style = "display:none";
  document.getElementById("bottomcontroller").style = "display:none";
}



  function retryme() {
    window.open("/practice1(music player)/index2(home)/homepage.html");
  }

*/

