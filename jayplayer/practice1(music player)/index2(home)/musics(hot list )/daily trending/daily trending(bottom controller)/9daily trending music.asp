<div class="row">
    <div class="col-sm-7">
        <div id="imgnameandcontroller">
            <img id="theimage" src="/practice1(music player)/images/victony.jpg">
            <h5 id="thename">Crying Alone<br> <small id="theartist" onclick="">Victony</small></h5>

            <span id="audio">
                <audio controls class="thecontroller" autoplay onended="tenDailyTrending()">
                    <source src="/practice1(music player)/allmusic/victony/Victony - Crying Alone Aux Sessions.mp3">
                </audio>
            </span>
        </div>
    </div>



    <div class="col-sm-1">
        <div id="prevandnextbtn">
            <div id="prevdailytrending9" class="bottomprevbtn fas fa-step-backward" onclick="eightDailyTrending()"></div>
            <div id="nextdailytrending9" class="bottomnextbtn fas fa-step-forward " onclick="tenDailyTrending()"></div>
        </div>
    </div>

    <div class="col-sm-4">
        <div id="downloadbuttonandicon">
            <a id="downloadbutton"
                href="/practice1(music player)/allmusic/victony/Victony - Crying Alone Aux Sessions.mp3" download>
                <p class="fas fa-download"></p>
            </a>
            <span><img src="/practice1(music player)/images/logo3.jpg" id="bottomlogoimg">
            <span id="bottomlogoname">jayplayer</span>
        </div>
    </div>
</div>



</div>