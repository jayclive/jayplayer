<div class="row">
    <div class="col-sm-7">
        <div id="imgnameandcontroller">
            <img id="theimage" src="/practice1(music player)/images/burna boy.jpg">
            <h5 id="thename">Common Person <br> <small id="theartist" onclick="">Burnaboy</small></h5>

            <span id="audio">
                <audio controls class="thecontroller" autoplay  onended="fourthRecap()">
                    <source src="/practice1(music player)/allmusic/burna Boy/Burna Boy - Common Person.mp3">
                </audio>
            </span>
        </div>
    </div>



    <div class="col-sm-1">
        <div id="prevandnextbtn">
            <div id="bottomprevbtn" class="fas fa-step-backward" onclick="secondRecap()"></div>
            <div id="bottomnextbtn" class=" fas fa-step-forward " onclick="fourthRecap()"></div>
        </div>
    </div>

    <div class="col-sm-4">
        <div id="downloadbuttonandicon">
            <a id="downloadbutton" href="/practice1(music player)/allmusic/burna Boy/Burna Boy - Common Person.mp3"
                download>
                <p class="fas fa-download"></p>
            </a>
            <span><img src="/practice1(music player)/images/logo3.jpg" id="bottomlogoimg">
                <span id="bottomlogoname">jayplayer</span>
        </div>
    </div>
</div>



</div>