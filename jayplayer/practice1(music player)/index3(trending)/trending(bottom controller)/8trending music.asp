<div class="row">
    <div class="col-sm-7">
        <div id="imgnameandcontroller">
            <img id="theimage" src="/practice1(music player)/images/nf.jpg">
            <h5 id="thename">Change<br> <small id="theartist" onclick="">NF</small></h5>

            <span id="audio">
                <audio controls class="thecontroller" autoplay onended="firstTrendingMusic()">
                    <source
                        src="/practice1(music player)/allmusic/nf/NF - Change.mp3">
                </audio>
            </span>
        </div>
    </div>



    <div class="col-sm-1">
        <div id="prevandnextbtn">
            <div  id="prevtrendingmusic8" class="bottomprevbtn fas fa-step-backward" onclick="seventhTrendingMusic()"></div>
            <div id="nexttrendingmusic1" class="bottomnextbtn fas fa-step-forward " onclick="firstTrendingMusic()"></div>
        </div>
    </div>

    <div class="col-sm-4">
        <div id="downloadbuttonandicon">
            <a id="downloadbutton"
                href="/practice1(music player)/allmusic/nf/NF - Change.mp3"
                download>
                <p class="fas fa-download"></p>
            </a>
            <span><img src="/practice1(music player)/images/logo3.jpg" id="bottomlogoimg">
                <span id="bottomlogoname">jayplayer</span>
        </div>
    </div>
</div>



</div>