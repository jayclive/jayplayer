<div class="row">
    <div class="col-sm-7">
        <div id="imgnameandcontroller">
            <img id="theimage" src="/practice1(music player)/images/raystar1.jpg">
            <h5 id="thename">Call Me <br> <small id="theartist" onclick="">Rayster</small></h5>

            <span id="audio">
                <audio controls class="thecontroller" autoplay   onended="seventhRecap()">
                    <source src="/practice1(music player)/allmusic/rayster/Rayster__call_me.ogg">
                </audio>
            </span>
        </div>
    </div>



    <div class="col-sm-1">
        <div id="prevandnextbtn">
            <div id="bottomprevbtn" class="fas fa-step-backward" onclick="fifthRecap()"></div>
            <div id="bottomnextbtn" class=" fas fa-step-forward " onclick="seventhRecap()"></div>
        </div>
    </div>

    <div class="col-sm-4">
        <div id="downloadbuttonandicon">
            <a id="downloadbutton" href="/practice1(music player)/allmusic/rayster/Rayster__call_me.ogg"
                download>
                <p class="fas fa-download"></p>
            </a>
            <span><img src="/practice1(music player)/images/logo3.jpg" id="bottomlogoimg">
                <span id="bottomlogoname">jayplayer</span>
        </div>
    </div>
</div>



</div>