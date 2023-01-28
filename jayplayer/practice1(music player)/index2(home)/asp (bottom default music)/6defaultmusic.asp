<div class="row">
    <div class="col-sm-7">
        <div id="imgnameandcontroller">
            <img id="theimage" src="/practice1(music player)/images/hot10(asake).jpeg">
            <h5 id="thename">Joha <br> <small id="theartist" onclick="asakeSongs()">asake</small></h5>

            <span id="audio">
                <audio controls class="thecontroller" autoplay onended="next7()">
                    <source
                        src="/practice1(music player)/allmusic/asake/Asake - Joha (Official).mp3">
                </audio>
            </span>
        </div>
    </div>



    <div class="col-sm-1">
        <div id="prevandnextbtn">
            <div id="bottomprevbtn7" class="bottomprevbtn fas fa-step-backward" onclick="next5()"></div>
            <div id="bottomnextbtn7" class="bottomnextbtn fas fa-step-forward " onclick="next7()"></div>
        </div>
    </div>

    <div class="col-sm-4">
        <div id="downloadbuttonandicon">
            <a id="downloadbutton"
                href="/practice1(music player)/allmusic/asake/Asake - Joha (Official).mp3"
                download>
                <p class="fas fa-download"></p>
            </a>
            <span><img src="/practice1(music player)/images/logo3.jpg" id="bottomlogoimg">
            <span id="bottomlogoname">jayplayer</span></span>
        </div>
    </div>
</div>



</div>