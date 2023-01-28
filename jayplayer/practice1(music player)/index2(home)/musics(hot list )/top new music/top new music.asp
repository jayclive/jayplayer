<div id="pop"></div>
<!---all in asake bio -->
<div id="asakecontainer">
    <div id="morenavbuttons">
        <div onclick="hotlistMenuReturn()" class="arrowbackward fas fa-arrow-left ml-4 mr-3"></div>

        <div id="arrowForward" class="fas fa-arrow-right mr-3"></div>
        <small id="greycolor" class="mr-2"> Artists</small>
        <small class="mr-2">/</small>
        <small> Top New Music</small>
    </div>


    <div id="homemorebiobackgroundimage">
        <div id="artistdetails">
            <div id="artistandname">
                <a><img src="/practice1(music player)/images/ruger.jpg" id="homemoreentranceimage" /></a>
                <p>Top New Music</p>
            </div>
            <div>
                <h1> Top New Music</h1><br><br>
                <p>Be the first to stream the latest released musics from all of you favourite celebrities<br><br>
                    jayplayer :Nigeria</p>
            </div>
        </div>

        <div id="songsandsearchbar">
            <div>
                <h4>Songs<span id="numberofsongs">(08)</span></h4>
            </div>
            <div>
                <input type="text" id="searchwithintracks" onkeyup="myFunction()"
                    placeholder="Search for music"></input>
            </div>
        </div>
    </div>

    <!---------------the music list--------------->

    <table id="tablelist" class="table table-borderless">
        <thead>
            <tr id="musiclistheader">
                <th>#no.&nbsp;&nbsp;&nbsp;Title</th>
                <th> Artist</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="musiclistbody">

            <tr>
                <td>1&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/wizkid.jpeg">
                    &nbsp; &nbsp;&nbsp;Call Me Every Day
                </td>
                <td> Wizkid </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div  class="musiclistplay fas fa-play" onclick="firstTopNew()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/wizkid/Chris-Brown-Ft-Wizkid-Call-Me-Every-Day-(TrendyBeatz.com).mp3" download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>

            <tr>
                <td>2&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/wizkid.jpeg">
                    &nbsp; &nbsp;&nbsp;Many Ways
                </td>
                <td> Wizkid </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div  class="musiclistplay fas fa-play" onclick="secondTopNew()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/wizkid/Bnxn-Ft-Wizkid-Many-Ways-(TrendyBeatz.com).mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>


            <tr>
                <td>3&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/ckay.jpeg">
                    &nbsp; &nbsp;&nbsp;Emiliana
                </td>
                <td> C-kay </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div  class="musiclistplay fas fa-play" onclick="thirdTopNew()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/ckay/CKay - Emiliana.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>


            <tr>
                <td>4&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/boy spyce.jpg">
                    &nbsp; &nbsp;&nbsp;Wayo
                </td>
                <td>Boy Spyce</td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div  class="musiclistplay fas fa-play" onclick="fourthTopNew()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/boy spyce/Boy Spyce - Wayo (Official Audio)-1.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>



            <tr>
                <td>5&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/ruger.jpg">
                    &nbsp; &nbsp;&nbsp;Red Flags
                </td>
                <td>Ruger</td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div  class="musiclistplay fas fa-play" onclick="fifthTopNew()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/ruger/Ruger - Red Flags.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>



            <tr>
                <td>6&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/burna boy.jpg">
                    &nbsp; &nbsp;&nbsp;Burnaboy
                </td>
                <td>Always Love You </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div  class="musiclistplay fas fa-play" onclick="sixthTopNew()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/burna Boy/Always Love You.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>


            <tr>
                <td>7&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/dax.jpg">
                    &nbsp; &nbsp;&nbsp;Eternity
                </td>
                <td> Dax</td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div class="musiclistplay fas fa-play" onclick="seventhTopNew()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/dax/Dax - Eternity (Official Audio).mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>




            <tr>
                <td>8&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/davido.jpg">
                    &nbsp; &nbsp;&nbsp;High
                </td>
                <td> Davido </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div   class="musiclistplay fas fa-play" onclick="eightTopNew()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/davido/Adekunle-Gold-Ft.-Davido-High.mp3" download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>






        </tbody>
    </table>



















</div>