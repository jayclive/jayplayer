<div id="pop"></div>
<!---all in asake bio -->
<div id="asakecontainer">
    <div id="morenavbuttons">
        <div onclick="recapMenuReturn()"  class="arrowbackward fas fa-arrow-left ml-4 mr-3"></div>

        <div id="arrowForward" class="fas fa-arrow-right mr-3"></div>
        <small id="greycolor" class="mr-2"> Artists</small>
        <small class="mr-2">/</small>
        <small> Top Free Songs</small>
    </div>


    <div id="homemorebiobackgroundimage">
        <div id="artistdetails">
            <div id="artistandname">
                <a><img src="/practice1(music player)/images/recap2(ayrastarr).jpeg" id="homemoreentranceimage" /></a>
                <p>Top Free Songs <br>October 2022</p>
            </div>
            <div>
                <h1>Top Free Songs &nbsp; October 2022</h1><br><br>
                <p>Get the top 7 best musics so far from the previous month,<br>
                    this list gets updated once every month <br><br>
                </p>
            </div>
        </div>

        <div id="songsandsearchbar">
            <div>
                <h4>Songs<span id="numberofsongs">(7)</span></h4>
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
                    <img id="trendingimage" src="/practice1(music player)/images/davido.jpg">
                    &nbsp; &nbsp;&nbsp;Electricity
                </td>
                <td> Davido </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div class="musiclistplay fas fa-play" onclick="firstRecap()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/davido/Pheelz_Ft_Davido_-_Electricity.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>

            <tr>
                <td>2&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/Asake.jpeg">
                    &nbsp; &nbsp;&nbsp;Bandana
                </td>
                <td> Fireboy-ft-Asake </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div class="musiclistplay fas fa-play" onclick="secondRecap()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/fireboy/Fireboy DML - Bandana Ft Asake.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>


            <tr>
                <td>3&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/burna boy.jpg">
                    &nbsp; &nbsp;&nbsp;Common Person
                </td>
                <td> Burna Boy</td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div  class="musiclistplay fas fa-play" onclick="thirdRecap()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/burna Boy/Burna Boy - Common Person.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>


            <tr>
                <td>4&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/ruger.jpg">
                    &nbsp; &nbsp;&nbsp;Girlfriend
                </td>
                <td>Ruger</td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div  class="musiclistplay  fas fa-play" onclick="fourthRecap()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/ruger/Ruger - Girlfriend (Official).mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>



            <tr>
                <td>5&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/boy spyce.jpg">
                    &nbsp; &nbsp;&nbsp;Dreams
                </td>
                <td>Boy Spyce </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div  class="fas fa-play" onclick="fifthRecap()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/boy spyce/Boy Spyce - Dreams (Official Audio)-1.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>



            <tr>
            <td>6&nbsp;
                <img id="trendingimage" src="/practice1(music player)/images/raystar2.jpg">
                &nbsp; &nbsp;&nbsp;Call Me
            </td>
                <td>Rayster</td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div class="musiclistplay fas fa-play" onclick="sixthRecap()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/rayster/Rayster__call_me.ogg" download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>


            <tr>
            <td>7&nbsp;
                <img id="trendingimage" src="/practice1(music player)/images/rema.jpg">
                &nbsp; &nbsp;&nbsp;Call Down
            </td>
                <td>Rema </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div  class="musiclistplay  fas fa-play" onclick="seventhRecap()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/rema/Rema_-_Calm_Down.mp3" download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>





        </tbody>
    </table>



















</div>