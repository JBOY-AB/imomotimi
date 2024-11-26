<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>onePAGE website</title>
</head>
<link rel="stylesheet" href="./assets/css/index.css">
<link rel="icon" href="./assets/images/logo.png">
<link id="theme" rel="stylesheet" href="./assets/css/light.css">
<link rel="stylesheet" href="assets/fontawesome/css/all.css">
<link rel="stylesheet" href="assets/owlcarousel/assets/owl.carousel.min.css">
<link rel="stylesheet" href="assets/owlcarousel/assets/owl.theme.default.min.css">


<!-- <link rel="icon" href="assets/images/1.jpg" type="image/jpg."> -->

<body>
    <div class="owl-carousel">
        <div class="bg-bg1"><img src="/assets/images/1.jpg" alt="bgroung"></div>
        <div class="bg-bg1"><img src="/assets/images/2.jpg" alt="bgroung"></div>
        <div class="bg-bg1"><img src="/assets/images/3.jpg" alt="bgroung"></div>
    </div>
    <header class="headingsticking">
        <!-- first page -->
        <div class="alternate12">
            <nav>
                <img src="./assets/images/logo.png" alt="logo">
                <ul>
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#countdown">Countdown</a></li>
                    <li><a href="#notes">Notes</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="toggleswitch">
                    <i class="fa-solid fa-moon"></i>
                    <button class="toggle" onclick="toggleMode()"><i class="fa-solid fa-toggle-on toggleon"
                            id="toggle"></i></button>
                    <i class="fa-solid fa-sun"></i>
                </div>
                <div id="menu">
                    <i class="fa-solid fa-bars"></i>
                </div>

                <button id="button" class="btn1"><i class="fa-solid fa-phone-volume call"></i>Call us</button>
            </nav>
            <section id="intro" class="section1">
                <p><strong><i>IMOMOTIMI FOUNDATION PRESENTS</i></strong></p>
                <h3>Imomotimi Ijaw</h3>
                <h3>Dance Contest 2024</h3>
                <button class="btn2">Download Entry Form<i class="fa-solid fa-download download"></i></button>
                <p>All duly filled out form the entry fees should be brought along to the audition.</p>
                <div class="mouse-scroll">
                    <div class="mouse">
                        <div class="wheel"></div>
                    </div>
                    <div class="mouse-arrow">
                        <span></span>
                    </div>
                </div>
            </section>
            <img id="firstimg" src="assets/images/shape-top-white-80.png" alt=" topimage" class="image-top">
        </div>
    </header>

       <section class="coundown-section">
        <div class="container">
            <h1>Countdown to Audition</h1>
            <div class="countdown">
                <div class="time">
                    <span class="number" id="Days">02</span>
                    <div class="dash">___</div>
                    <span class="label">Days</span>
                </div>
                <div class="colon">:</div>
                <div class="time">
                    <span class="number" id="Hours">02</span>
                    <div class="dash">___</div>
                    <span class="label">Hours</span>
                </div>
                <div class="colon">:</div>
                <div class="time">
                    <span class="number" id="Minutes">08</span>
                    <div class="dash">___</div>
                    <span class="label">Minutes</span>
                </div>
                <div class="colon">:</div>
                <div class="time">
                    <span class="number" id="seconds">06</span>
                    <div class="dash">___</div>
                    <span class="label">seconds</span>
                </div>
            </div>
        </div>
        <div class="border-img"><img id="topgrey" src="./assets/images/shape-top-grey-80.png" height="100px"
                alt="topgerycolor">
        </div>
    </section>




    <section class="important-notes" id="notes">
        <div class="important_notes-container">
            <div class="notes-container">
                <div class="note-text">
                    <h3>important things to note...</h3>
                </div>
                <div class="notes">
                    <div class="note">
                        <i class="fa fa-money-bill-wave"></i>
                        <h4>Pricing</h4>
                        <p>audition forms are available <br> for ₦1000 for single contestants, <br> and ₦1500 for a
                            group of five
                        </p>
                    </div>
                    <div class="note">
                        <i class="fa fa-trophy"></i>
                        <h4>Prizes</h4>
                        <p>1st Prize:₦2,000,00 <br>2nd Prize:₦1,000,000<br> 3rd Prize:₦500,000</p>
                    </div>
                </div>
            </div>
    </section>
    <section id="section3">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.217862403855!2d3.3308180744810585!3d6.619835722037391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93e5b4e94d63%3A0x93aba540bfd71764!2sHoneyTreat%20Trade%20Academy!5e0!3m2!1sen!2sng!4v1727634805217!5m2!1sen!2sng"
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <img id="topgrey2" src="/assets/images/shape-top-grey-80.png">
    </section>
    <section class="section4" id="contactlink">
        <div id="sect4">
            <div class="info">
                <h2 class="h2">For More Information:</h2>
                <p class="p1"><strong>Hotlines: </strong>07035973706 & 08108112759</p>
                <p class="p2"><strong>Email: </strong> info@ijawdancecontest.ng</p>
                <p class="p3"><strong>Audition Location: </strong> Nitro Studio, Tamara Hall,<br>Otiotio Road, Yenagoa,
                    Bayelsa state.</p>
            </div>

            <form class="form">
                <div class="form1">
                    <div class="fdiv1">
                        <div class="border mg2">
                            <i class="fa-regular fa-user icons"></i>
                            <input type="text" name="f.name" placeholder="Name">
                        </div>
                        <div class="border mg2">
                            <i class="fa-regular fa-envelope icons"></i>
                            <input type="email" name="email" placeholder="Email Address">
                        </div>
                    </div>

                    <div class="fdiv2">
                        <div class="border mg mg2">
                            <i class="fa-solid fa-phone-volume icons"></i>
                            <input type="tel" name="number" placeholder="Phone">
                        </div>
                        <div class="border mg mg2">
                            <i class="fa-solid fa-circle-info icons"></i>
                            <input type="text" name="subject" placeholder="Subject">
                        </div>
                    </div>

                    <div class="border tarea mg2">
                        <i class="fa-solid fa-pencil icons"></i>
                        <textarea name="comment" id="comment"
                            placeholder="How can we help you? Feel free to get in touch!" rows="4"></textarea>
                    </div>
                </div>
            </form>
        </div>
        <button id="button2"><strong>Get in Touch</strong></button>
    </section>
    <footer>
        <div class="footer-content">
            <div class="social-media">
                <h3>We Are Social</h3>
                <div class="social-icons">
                    <a href="#"><span class="icon"><i class="fa-brands fa-facebook"></i></span></a>
                    <a href="#"><span class="icon"><i class="fa-brands fa-x-twitter"></i></span></a>
                    <a href="#"><span class="icon"><i class="fa-brands fa-instagram"></i></span></a>
                    <a href="#"><span class="icon"><i class="fa-brands fa-youtube"></i></span></a>
                </div>
            </div>
        </div>
        <hr>
        <p style="padding-top: 20px;">© 2024 Imomotimi Foundation. All right Reserved.</p>
        <a href="#" id="scroll" title="Go to top"><i class="fa-solid fa-arrow-up"></i></a>
    </footer> 
    <script src="assets/js/main.js"></script>


    <script>

        // Set the date we're counting down to
        var countDownDate = new Date("Nov 31, 2024 23:59:59").getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the countdown date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById("Days").innerHTML = days;
            document.getElementById("Hours").innerHTML = hours;
            document.getElementById("Minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;

            // If the count down is over, write some text 
            if (distance <= 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
    </script>

    <script src="assets/js/jquery-3.7.1.min.js"></script>
    <script src="assets/owlcarousel/owl.carousel.min.js"></script>
</body>
<script>

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            autoplaytimeout: 2000,
            autoplayoverpause: true,
            nav: false,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    })
</script>



</html>