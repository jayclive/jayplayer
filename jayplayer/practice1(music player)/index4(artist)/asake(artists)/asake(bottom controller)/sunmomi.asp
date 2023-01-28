<div class="row">
    <div class="col-sm-7">
        <div id="imgnameandcontroller">
            <img id="theimage" src="/practice1(music player)/images/Asake.jpeg">
            <h5 id="thename">Sunmomi <br> <small id="theartist" onclick="">Asake</small></h5>

            <span id="audio">
                <audio controls class="thecontroller" autoplay onended="terminator()">
                    <source src="/practice1(music player)/allmusic/asake/Asake Sunmomi Video.mp3">
                </audio>
            </span>
        </div>
    </div>



    <div class="col-sm-1">
        <div id="prevandnextbtn">
            <div id="bottomprevbtn" class="fas fa-step-backward" onclick="sungbaRemix()"></div>
            <div id="bottomnextbtn" class=" fas fa-step-forward " onclick="terminator()"></div>
        </div>
    </div>

    <div class="col-sm-4">
        <div id="downloadbuttonandicon">
            <a id="downloadbutton" href="/practice1(music player)/allmusic/asake/Asake Sunmomi Video.mp3" download>
                <p class="fas fa-download"></p>
            </a>
            <span><img src="/practice1(music player)/images/logo3.jpg" id="bottomlogoimg">
                <span id="bottomlogoname">jayplayer</span>
        </div>
    </div>
</div>



</div>