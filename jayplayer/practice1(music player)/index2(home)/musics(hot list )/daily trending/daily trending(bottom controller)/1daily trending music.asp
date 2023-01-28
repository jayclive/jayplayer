<div class="row">
    <div class="col-sm-7">
        <div id="imgnameandcontroller">
            <img id="theimage" src="/practice1(music player)/images/ruger.jpg">
            <h5 id="thename">Asiwaju <br> <small id="theartist" onclick="">Ruger</small></h5>

            <span id="audio">
                <audio controls class="thecontroller" onended="secondDailyTrending()" autoplay>
                    <source
                        src="/practice1(music player)/allmusic/ruger/Ruger - Asiwaju.mp3">
                </audio>
            </span>
        </div>
    </div>



    <div class="col-sm-1">
        <div id="prevandnextbtn">
            <div id="prevdailytrending1" class="bottomprevbtn fas fa-step-backward" onclick="tenDailyTrending()"></div>
            <div id="nextdailytrending1" class="bottomnextbtn fas fa-step-forward " onclick="secondDailyTrending()"></div>
        </div>
    </div>

    <div class="col-sm-4">
        <div id="downloadbuttonandicon">
            <a id="downloadbutton"
                href="/practice1(music player)/allmusic/ruger/Ruger - Asiwaju.mp3"
                download>
                <p class="fas fa-download"></p>
            </a>
            <span><img src="/practice1(music player)/images/logo3.jpg" id="bottomlogoimg">
            <span id="bottomlogoname">jayplayer</span>
        </div>
    </div>
</div>



</div>