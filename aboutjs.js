
    let container = document.getElementById("ctn");
    let but2 = document.getElementById("but2");
    let but1 = document.getElementById("but1");
    let hdr = document.getElementById("hdr");
    let hborder = document.getElementById("hborder");
    let main = document.getElementById("main");
    let fb = document.getElementById("fb");
    let ins = document.getElementById("ins");
    let snp = document.getElementById("snp");
    let str = document.getElementById("str");
    let arw = document.getElementById("arw");
    let arw2 = document.getElementById("arw2");
    let pg1 = document.getElementById("pg1");
    let pg2 = document.getElementById("pg2");
    const staranimation = str.animate([
        {
            transform: "scale(0) rotate(360deg)"
        },
        {
            transform: "scale(0.5 rotate(180deg))"
        },
        {
            transform: "scale(0.75 rotate(90deg))"
        },
        {
            transform: "scale(1 rotate(0deg))"
        }
    ], {
        duration: 1000,
        easing: "ease-out"

    });


    but1.addEventListener("click", function (event) {

        
location.href="index.html";
       


    });
    ins.addEventListener("click", function (event) {
        window.open("https://www.instagram.com/matej.dvoracekk/?hl=cs");
    });
    fb.addEventListener("click", function (event) {
        window.open("https://www.facebook.com/matejpastika.dvoracek/");
    });
    snp.addEventListener("click", function (event) {
        window.open("https://www.snapchat.com/add/prdka1?fbclid=IwAR21X10C4f5uEYADthlxdHBWs5rULd-ltCzYRxdsGO4_4VOM8lp70TKDVf8");
    });
    but2.addEventListener("mouseover", function (event) {
        document.body.style.cursor = "pointer";


    });
    but2.addEventListener("mouseout", function (event) {
        document.body.style.cursor = "default";




    });
    but1.addEventListener("mouseover", function (event) {
        document.body.style.cursor = "pointer";
        if (but1.style.backgroundColor = "white") {
            const but1overanimation = but1.animate([
                {
                    backgroundColor: "#DED9D9",
                    color: "#808080"

                },
                {
                    backgroundColor: "#B8B8B8",
                    color: "#9F9F9F"
                },
                {
                    backgroundColor: "#747474",
                    color: "#CCCCCC"
                },
                {
                    backgroundColor: "#000000",
                    color: "#FFFFFF"
                }
            ], {

                duration: 200,
                easing: "linear"


            });
            but1overanimation.addEventListener('finish', function () {
                but1.style.backgroundColor = "black";
                but1.style.color = "white";
            });

        }
    });
    but1.addEventListener("mouseout", function (event) {
        document.body.style.cursor = "default";
        if (but1.style.backgroundColor = "black") {
            const but1outanimation = but1.animate([
                {
                    backgroundColor: "#000000",
                    color: "#FFFFFF"

                },
                {
                    backgroundColor: "#747474",
                    color: "#CCCCCC"
                },
                {
                    backgroundColor: "#B8B8B8",
                    color: "#9F9F9F"
                },
                {
                    backgroundColor: "#DED9D9",
                    color: "#grey"
                }
            ], {

                duration: 200,
                easing: "linear"


            });
            but1outanimation.addEventListener('finish', function () {
                but1.style.backgroundColor = "#DED9D9";
                but1.style.color = "grey";
            });
        }
    });
    
    ins.addEventListener("mouseover", function (event) {
        document.body.style.cursor = "pointer";
        const insAnimation = ins.animate([
            {
                textShadow: "0 0 0px red"
            },
            {
                textShadow: "0 0 1.5px red"
            },
            {
                textShadow: "0 0 3px red"
            }
        ], {
            duration: 300,
            easing: "linear"
        });
        insAnimation.addEventListener('finish', function () {
            ins.style.textShadow = "0 0 3px red";
        });
    });
    ins.addEventListener("mouseout", function (event) {
        document.body.style.cursor = "default";
        const insAnimation = ins.animate([
            {
                textShadow: "0 0 3px red"
            },
            {
                textShadow: "0 0 1.5px red"
            },
            {
                textShadow: "0 0 0px red"
            }
        ], {
            duration: 300,
            easing: "linear"
        });
        insAnimation.addEventListener('finish', function () {
            ins.style.textShadow = "0 0 0px red";
        });
    });
    fb.addEventListener("mouseover", function (event) {
        document.body.style.cursor = "pointer";
        const fbAnimation = fb.animate([
            {
                textShadow: "0 0 0px blue"
            },
            {
                textShadow: "0 0 1.5px blue"
            },
            {
                textShadow: "0 0 3px blue"
            }
        ], {
            duration: 300,
            easing: "linear"
        });
        fbAnimation.addEventListener('finish', function () {
            fb.style.textShadow = "0 0 3px blue";
        });
    });
    fb.addEventListener("mouseout", function (event) {
        document.body.style.cursor = "default";
        const fbAnimation = fb.animate([
            {
                textShadow: "0 0 3px blue"
            },
            {
                textShadow: "0 0 1.5px blue"
            },
            {
                textShadow: "0 0 0px blue"
            }
        ], {
            duration: 300,
            easing: "linear"
        });
        fbAnimation.addEventListener('finish', function () {
            fb.style.textShadow = "0 0 0px blue";
        });
    });
    snp.addEventListener("mouseover", function (event) {
        document.body.style.cursor = "pointer";
        const snpAnimation = snp.animate([
            {
                textShadow: "0 0 0px yellow"
            },
            {
                textShadow: "0 0 1.5px yellow"
            },
            {
                textShadow: "0 0 3px yellow"
            }
        ], {
            duration: 300,
            easing: "linear"
        });
        snpAnimation.addEventListener('finish', function () {
            snp.style.textShadow = "0 0 3px yellow";
        });
    });
    snp.addEventListener("mouseout", function (event) {
        document.body.style.cursor = "default";
        const snpAnimation = snp.animate([
            {
                textShadow: "0 0 3px yellow"
            },
            {
                textShadow: "0 0 1.5px yellow"
            },
            {
                textShadow: "0 0 0px yellow"
            }
        ], {
            duration: 300,
            easing: "linear"
        });
        snpAnimation.addEventListener('finish', function () {
            snp.style.textShadow = "0 0 0px yellow";
        });
    });
