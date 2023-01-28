<div id="description" class="sticky-top">
    <h1 id="areaindicator" class=" fas fa-chart-bar"></h1>
</div>

<div id="pop"></div>


<div id="allchartcontainer">

    <h4 id="chartcategoryName">Top 5 Most Streamed music Today:</h4>





    <div id="alldailycharts">


        <div class="d-flex flex-direction-row align-items-center" onmouseleave="backToChartNumber1()">
            <div id="displaytopchartdetails1" class="generaldisplaychartdetails">

            </div>
            <div class="dailycharts" id="dailycharts1">
                <img src="/practice1(music player)/images/number-1-made-from-neon-light.jpg" id="dailychartsimg1"
                    class="generaldailychartsimg" onclick="revealMusic1()" data-toggle="dailychartstoggle1"
                    title="Asiwaju : 245 million streams">
            </div>
        </div>




        <div class="d-flex flex-direction-row align-items-center" onmouseleave="backToChartNumber2()">

            <div id="displaytopchartdetails2" class="generaldisplaychartdetails">

            </div>
            <div class="dailycharts">
                <img src="/practice1(music player)/images/number-2-made-from-neon-light.jpg" id="dailychartsimg2" class="
                generaldailychartsimg" onclick="revealMusic2()" data-toggle="dailychartstoggle2"
                    title="Cough odo : 190 million streams">
            </div>

        </div>



        <div class="d-flex flex-direction-row align-items-center" onmouseleave="backToChartNumber3()">
            <div id="displaytopchartdetails3" class="generaldisplaychartdetails">

            </div>
            <div class="dailycharts">
                <img src="/practice1(music player)/images/number-3-made-from-neon-light.webp" id="dailychartsimg3"
                    class="
                generaldailychartsimg" onclick="revealMusic3()" data-toggle="dailychartstoggle3"
                    title=" Wondamo : 145 million streams">
            </div>

        </div>




        <div class="d-flex flex-direction-row align-items-center" onmouseleave="backToChartNumber4()">
            <div id="displaytopchartdetails4" class="generaldisplaychartdetails">

            </div>
            <div class="dailycharts">
                <img src="/practice1(music player)/images/number-4-made-from-neon-light.jpg" id="dailychartsimg4" class="
                generaldailychartsimg" onclick="revealMusic4()" data-toggle="dailychartstoggle4"
                    title=" Xtra Cool : 95 million streams">
            </div>
        </div>



        <div class="d-flex flex-direction-row align-items-center" onmouseleave="backToChartNumber5()">


            <div id="displaytopchartdetails5" class="generaldisplaychartdetails">

            </div>
            <div class="dailycharts">
                <img src="/practice1(music player)/images/number-5-made-from-neon-light.webp" id="dailychartsimg5"
                    class="
                generaldailychartsimg" onclick="revealMusic5()" data-toggle="dailychartstoggle5"
                    title=" Rush : 70 million streams">
            </div>
        </div>

    </div>










    <!--------------weekly charts-------------------->


    <div id="allweeklycharts">
        <h4 id="chartcategoryName">Top 10 Most Streamed music This Week:</h4>

        <table id="tablelist" class="table table-borderless">
            <thead>
                <tr id="musiclistheader">
                    <th>#Top No.&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Title</th>
                    <th> Artist</th>
                    <th>Streams</th>
                </tr>
            </thead>
            <tbody id="musiclistbody">

                <tr>
                    <td>1&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <img id="trendingimage" src="/practice1(music player)/images/ruger.jpg">
                        &nbsp; &nbsp;&nbsp;&nbsp;Snapchat
                    </td>

                    <td><small id="weeklychartartistname">Ruger </small></td>
                    <td><small id="weeklychartsnumberofviews"> 102.9+</small></td>

                    <td>
                        <div id="musiclistplaypauseanddownloadbtn">
                            <div id="musiclistpauseandplaybtncontainer">
                                <div class="musiclistplay fas fa-play" onclick="weeklyCharts1()"></div>


                            </div>

                            <div id="musicdownloadbtncontainer">
                                <a id="musiclistdownloadbutton"
                                    href="/practice1(music player)/allmusic/ruger/Ruger - Snapchat (Official).mp3"
                                    download>
                                    <p class="fas fa-download"></p>
                                </a>
                            </div>
                        </div>

                    </td>
                </tr>





                <tr>
                    <td>2&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;
                        <img id="trendingimage" src="/practice1(music player)/images/burna boy.jpg">
                        &nbsp; &nbsp;&nbsp;Alway Love You
                    </td>

                    <td><small id="weeklychartartistname"> Burna Boy</small></td>
                    <td><small id="weeklychartsnumberofviews"> 93.4 million+ </small></td>
                    <td>
                        <div id="musiclistplaypauseanddownloadbtn">
                            <div id="musiclistpauseandplaybtncontainer">
                                <div class="musiclistplay fas fa-play" onclick="weeklyCharts2()"></div>


                            </div>

                            <div id="musicdownloadbtncontainer">
                                <a id="musiclistdownloadbutton"
                                    href="/practice1(music player)/allmusic/burna Boy/Always Love You.mp3" download>
                                    <p class="fas fa-download"></p>
                                </a>
                            </div>
                        </div>

                    </td>
                </tr>



                <tr>
                    <td>3&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <img id="trendingimage" src="/practice1(music player)/images/johnny drille.jpg">
                        &nbsp; &nbsp;&nbsp;How Are You My Friend
                    </td>

                    <td><small id="weeklychartartistname">Johnny Drille</small></td>

                    <td><small id="weeklychartsnumberofviews"> 89.6 million+</small></td>
                    <td>
                        <div id="musiclistplaypauseanddownloadbtn">
                            <div id="musiclistpauseandplaybtncontainer">
                                <div class="musiclistplay fas fa-play" onclick="weeklyCharts3()"></div>


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
                    <td>4&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <img id="trendingimage" src="/practice1(music player)/images/young john.jpeg">
                        &nbsp; &nbsp;&nbsp;Xtra Cool
                    </td>

                    <td> <small id="weeklychartartistname">Young John </small></td>
                    <td><small id="weeklychartsnumberofviews">64.1 million+</small></td>
                    <td>
                        <div id="musiclistplaypauseanddownloadbtn">
                            <div id="musiclistpauseandplaybtncontainer">
                                <div  class="musiclistplay fas fa-play" onclick="weeklyCharts4()"></div>


                            </div>

                            <div id="musicdownloadbtncontainer">
                                <a id="musiclistdownloadbutton"
                                    href="/practice1(music player)/allmusic/young john/Young Jonn - Xtra Cool.mp3"
                                    download>
                                    <p class="fas fa-download"></p>
                                </a>
                            </div>
                        </div>

                    </td>
                </tr>




                <tr>
                    <td>5&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <img id="trendingimage" src="/practice1(music player)/images/boy spyce.jpg">
                        &nbsp; &nbsp;&nbsp;Destiny
                    </td>

                    <td> <small id="weeklychartartistname">Boy Spyce</small> </td>

                    <td><small id="weeklychartsnumberofviews"> 30 million+</small></td>
                    <td>
                        <div id="musiclistplaypauseanddownloadbtn">
                            <div id="musiclistpauseandplaybtncontainer">
                                <div  class="musiclistplay fas fa-play" onclick="weeklyCharts5()"></div>


                            </div>

                            <div id="musicdownloadbtncontainer">
                                <a id="musiclistdownloadbutton"
                                    href="/practice1(music player)/allmusic/boy spyce/Boy Spyce - Destiny (Official)-1.mp3"
                                    download>
                                    <p class="fas fa-download"></p>
                                </a>
                            </div>
                        </div>

                    </td>
                </tr>





                <tr>
                    <td>6&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <img id="trendingimage" src="/practice1(music player)/images/dax.jpg">
                        &nbsp; &nbsp;&nbsp;Child Of God
                    </td>
                    <td><small id="weeklychartartistname">Dax </small></td>
                    <td><small id="weeklychartsnumberofviews"> 13 million+ </small></td>
                    <td>
                        <div id="musiclistplaypauseanddownloadbtn">
                            <div id="musiclistpauseandplaybtncontainer">
                                <div  class="musiclistplay fas fa-play" onclick="weeklyCharts6()"></div>


                            </div>

                            <div id="musicdownloadbtncontainer">
                                <a id="musiclistdownloadbutton"
                                    href="/practice1(music player)/allmusic/dax/Dax - Child Of God (Official Music Video) (128  kbps) (mp3paw.tv).mp3"
                                    download>
                                    <p class="fas fa-download"></p>
                                </a>
                            </div>
                        </div>

                    </td>
                </tr>




                <tr>
                    <td>7&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <img id="trendingimage" src="/practice1(music player)/images/asake.jpeg">
                        &nbsp; &nbsp;&nbsp;Terminator
                    </td>

                    <td><small id="weeklychartartistname">Asake</small> </td>
                    <td><small id="weeklychartsnumberofviews"> 2 million+</small></td>
                    <td>
                        <div id="musiclistplaypauseanddownloadbtn">
                            <div id="musiclistpauseandplaybtncontainer">
                                <div class="musiclistplay fas fa-play" onclick="weeklyCharts7()"></div>


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




                <tr>
                    <td>8&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <img id="trendingimage" src="/practice1(music player)/images/nf.jpg">
                        &nbsp; &nbsp;&nbsp;Change
                    </td>

                    <td> <small id="weeklychartartistname">Nf </small></td>
                    <td><small id="weeklychartsnumberofviews">1.4 million+</small></td>
                    <td>
                        <div id="musiclistplaypauseanddownloadbtn">
                            <div id="musiclistpauseandplaybtncontainer">
                                <div class="musiclistplay fas fa-play" onclick="weeklyCharts8()"></div>


                            </div>

                            <div id="musicdownloadbtncontainer">
                                <a id="musiclistdownloadbutton"
                                    href="/practice1(music player)/allmusic/nf/NF - Change.mp3" download>
                                    <p class="fas fa-download"></p>
                                </a>
                            </div>
                        </div>

                    </td>
                </tr>


                <tr>
                    <td>9&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <img id="trendingimage" src="/practice1(music player)/images/wizkid.jpeg">
                        &nbsp; &nbsp;&nbsp;B.D'or
                    </td>

                    <td><small id="weeklychartartistname"> WizKid </small></td>
                    <td><small id="weeklychartsnumberofviews">1.1

                        </small></td>
                    <td>
                        <div id="musiclistplaypauseanddownloadbtn">
                            <div id="musiclistpauseandplaybtncontainer">
                                <div class="musiclistplay fas fa-play" onclick="weeklyCharts9()"></div>


                            </div>

                            <div id="musicdownloadbtncontainer">
                                <a id="musiclistdownloadbutton"
                                    href="/practice1(music player)/allmusic/wizkid/Burna Boy - B. D’Or ft. WizKid.mp3"
                                    download>
                                    <p class="fas fa-download"></p>
                                </a>
                            </div>
                        </div>

                    </td>
                </tr>



                <tr>
                    <td>10&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                        <img id="trendingimage" src="/practice1(music player)/images/blaxk sherif.jpeg">
                        &nbsp; &nbsp;&nbsp;Oil In My Head
                    </td>

                    <td><small id="weeklychartartistname"> Black Sherif </small></td>
                    <td><small id="weeklychartsnumberofviews">655,070 </small></td>
                    <td>
                        <div id="musiclistplaypauseanddownloadbtn">
                            <div id="musiclistpauseandplaybtncontainer">
                                <div class="musiclistplay fas fa-play" onclick="weeklyCharts10()"></div>


                            </div>

                            <div id="musicdownloadbtncontainer">
                                <a id="musiclistdownloadbutton"
                                    href="/practice1(music player)/allmusic/black sheriff/Black Sherif - Oil in my Head [Official].mp3"
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


</div>