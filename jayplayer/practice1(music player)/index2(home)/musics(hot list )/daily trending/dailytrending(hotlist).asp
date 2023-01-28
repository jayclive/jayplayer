<div id="pop"></div>
<!---all in asake bio -->
<div id="asakecontainer">
    <div id="morenavbuttons">
        <div onclick="hotlistMenuReturn()" class="arrowbackward fas fa-arrow-left ml-4 mr-3"></div>

        <div id="arrowForward" class="fas fa-arrow-right mr-3"></div>
        <small id="greycolor" class="mr-2"> Artists</small>
        <small class="mr-2">/</small>
        <small> Daily Trending</small>
    </div>


    <div id="homemorebiobackgroundimage">
        <div id="artistdetails">
            <div id="artistandname">
                <a><img src="/practice1(music player)/images/hot1(kizzdaniel).jpg" id="homemoreentranceimage" /></a>
                <p>Daily Trending</p>
            </div>
            <div>
                <h1> Daily Trending</h1><br><br>
                <p>Get updated list of the current trending musics ,we keep you updated daily<br><br>
                    jayplayer :Nigeria</p>
            </div>
        </div>

        <div id="songsandsearchbar">
            <div>
                <h4>Songs<span id="numberofsongs">(10)</span></h4>
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
                    <img id="trendingimage" src="/practice1(music player)/images/ruger.jpg">
                    &nbsp; &nbsp;&nbsp;Asiwaju
                </td>
                <td> Ruger </td>
                <td>
                    <div id="pauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div id="dailytrending1" class="musiclistplay fas fa-play" onclick="firstDailyTrending()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/ruger/Ruger - Asiwaju.mp3" download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>

            <tr>
                <td>2&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/mavins.jpg">
                    &nbsp; &nbsp;&nbsp;Wondamo
                </td>
                <td> Mavins </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div id="dailytrending2"  class="musiclistplay fas fa-play" onclick="secondDailyTrending()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/mavins/Mavin All Stars - Won Da Mo (Official).mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>


            <tr>
                <td>3&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/kizz daniel.jpeg">
                    &nbsp; &nbsp;&nbsp;Buga
                </td>
                <td> Kizz Daniel </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div id="dailytrending3" class="musiclistplay fas fa-play" onclick="thirdDailyTrending()"></div>
                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/kizz daniel/Buga - Kizz Daniel ft. Tekno.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>


            <tr>
                <td>4&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/johnny drille.jpg">
                    &nbsp; &nbsp;&nbsp;How Are You My Friend
                </td>
                <td>johny Drille</td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div id="dailytrending4" class="musiclistplay fas fa-play" onclick="fourthDailyTrending()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/johny drille/Johnny Drille - How are You My Friend (Official).mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>



            <tr>
                <td>5&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/seyi vibez.jpg">
                    &nbsp; &nbsp;&nbsp;Banks Of America
                </td>
                <td>Seyi Vibez</td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div id="dailytrending5" class="musiclistplay fas fa-play" onclick="fifthDailyTrending()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/seyi vibez/Seyi Vibez - Bank Of America (Official Audio).mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>



            <tr>
                <td>6&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/ajebo hustlers.jpeg">
                    &nbsp; &nbsp;&nbsp;No Peace
                </td>
                <td>Ajebo Hustlers </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div id="dailytrending6" class="musiclistplay fas fa-play" onclick="sixthtDailyTrending()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/ajebo hustler/Ajebo Hustlers - No Peace (Official).mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>


            <tr>
                <td>7&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/fireboy.jpg">
                    &nbsp; &nbsp;&nbsp;Peru
                </td>
                <td> Fireboy-ft-Edsheran </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div id="dailytrending7" class="musiclistplay fas fa-play" onclick="seventhDailyTrending()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/fireboy/Fireboy DML & Ed Sheeran - Peru-1.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>




            <tr>
                <td>8&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/Asake.jpeg">
                    &nbsp; &nbsp;&nbsp;Joha
                </td>
                <td> Asake </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div id="dailytrending8" class="musiclistplay fas fa-play" onclick="eightDailyTrending()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/asake/Asake - Joha (Official).mp3" download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>




            <tr>
                <td>9&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/victony.jpg">
                    &nbsp; &nbsp;&nbsp;Crying Alone
                <td> Victony </td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div id="dailytrending9" class="musiclistplay fas fa-play" onclick="nineDailyTrending()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/victony/Victony - Crying Alone Aux Sessions.mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>



            <tr>
                <td>10&nbsp;
                    <img id="trendingimage" src="/practice1(music player)/images/Asake.jpeg">
                    &nbsp; &nbsp;&nbsp;Terminator
                </td>
                <td>Asake</td>
                <td>
                    <div id="musiclistplaypauseanddownloadbtn">
                        <div id="musiclistpauseandplaybtncontainer">
                            <div id="dailytrending10" class="musiclistplay fas fa-play" onclick="tenDailyTrending()"></div>


                        </div>

                        <div id="musicdownloadbtncontainer">
                            <a id="musiclistdownloadbutton"
                                href="/practice1(music player)/allmusic/asake/Asake - Terminator (official).mp3"
                                download>
                                <p class="fas fa-download"></p>
                            </a>
                        </div>
                    </div>

                </td>
            </tr>




        </tbody>
    </table>



















</div>