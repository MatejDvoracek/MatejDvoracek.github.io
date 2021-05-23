
let container = document.getElementById("ctn");
let but2 = document.getElementById("but2");
let but1 = document.getElementById("but1");
let but3 = document.getElementById("but3");
let hdr = document.getElementById("hdr");
let hborder = document.getElementById("hborder");
let main = document.getElementById("main");
let fb = document.getElementById("fb");
let ins = document.getElementById("ins");
let snp = document.getElementById("snp");
let str = document.getElementById("str");
let icn = document.getElementById("icn");
let btns = document.getElementById("btns");
let mtext = document.getElementById("mtext");
let starlight = false;



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

but2.addEventListener("click", function (event) {
    but1.style.backgroundColor = "#DED9D9";
    but1.style.color = "grey";
    but2.style.backgroundColor = "black";
    but2.style.color = "white";


    const widthChange = container.animate([
        {
            width: container.style.width,
            height: container.style.height
        },
        {
            width: "100%",
            height: "100%"
        }
    ], {
        duration: 1000,
        easing: "ease"
    });
    const hborderChange = hborder.animate([
        {
            width: hborder.width

        },
        {
            width: "100%"

        }
    ], {
        duration: 1000,
        easing: "ease"
    });

    hborderChange.addEventListener('finish', function () {
        container.style.width = "100%";
        container.style.height = "100%";
        hborder.style.width = "100%";

        location.href = "about.html";
    });





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
    if (but2.style.backgroundColor = "white") {
        const but2overanimation = but2.animate([
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
        but2overanimation.addEventListener('finish', function () {
            but2.style.backgroundColor = "black";
            but2.style.color = "white";
        });


    }

});
but2.addEventListener("mouseout", function (event) {
    document.body.style.cursor = "default";
    if (but2.style.backgroundColor = "black") {
        const but2outanimation = but2.animate([
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
                color: "grey"
            }
        ], {

            duration: 200,
            easing: "linear"


        });
        but2outanimation.addEventListener('finish', function () {
            but2.style.backgroundColor = "#DED9D9";
            but2.style.color = "grey";
        });

    }



});
but1.addEventListener("mouseover", function (event) {
    document.body.style.cursor = "pointer";

});
but1.addEventListener("mouseout", function (event) {
    document.body.style.cursor = "default";

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
str.addEventListener("mouseover", function (event) {
    
    if (starlight == false) {
        document.body.style.cursor = "pointer";
        const stargrow = str.animate([
            {
                color: "#000000"
            },
            {
                color: "#2A2923"
            },
            {
                color: "#464134"
            },
            {
                color: "#685D3E"
            }
        ], {
            duration: 300,
            easing: "linear"
        });
        stargrow.addEventListener('finish', function () {
            str.style.color = "#685D3E";
        });
    }


});

str.addEventListener("mouseout", function (event) {
    document.body.style.cursor = "default";
    if (starlight == false) {
        const stargrow2 = str.animate([
            {
                color: "#685D3E"
            },
            {
                color: "#464134"
            },
            {
                color: "#2A2923"
            },
            {
                color: "#000000"
            }
        ], {
            duration: 300,
            easing: "linear"
        });

        stargrow2.addEventListener('finish', function () {
            str.style.color = "#000000";
        });

    }




});
str.addEventListener("click", function (event) {
    if (starlight == false) {
        const starcolor = str.animate([
            {
                color: "#685D3E"
            },
            {
                color: "#88733C"
            },
            {
                color: "#BC9630"
            },
            {
                color: "#FFB900"
            }
        ], {
            duration: 300,
            easing: "linear"
        });
        starcolor.addEventListener('finish', function () {
            str.style.color = "#FFB900";
            starlight = true;
        });

    }

});