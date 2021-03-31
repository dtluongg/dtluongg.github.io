// function([string1, string2],target id,[color1,color2])    
consoleText(['Welcome to Nguyen Manh Thang\'s CV.',
'I want to apply to front-end developer position of your company.'],
'text',
['white','white','white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])

  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)

  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;
    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}


// Active side-bar and scroll on top
var sidebarMenuItems = document.getElementsByClassName("sidebar-menu-item");
var currentItem = document.getElementsByClassName("active");
var scrollOnTop = document.querySelector(".scrollontop");

function activeClass(paramater) {
  currentItem[0].className = currentItem[0].className.replace("sidebar-menu-item active", "sidebar-menu-item");
  sidebarMenuItems[paramater].className = sidebarMenuItems[paramater].className.replace("sidebar-menu-item", "sidebar-menu-item active");
}

window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollOnTop.style.display = "block";
  } else {
    scrollOnTop.style.display = "none";
  }
})

// Mobile
var mobileMenuIcon = document.querySelector(".mobile_menu-icon");
var mobileMenuIcon2 = document.querySelector(".mobile_menu-icon2");
var mobileMenuWrapper = document.querySelector(".mobile_menu-wrapper");
var mobileMenuWrapperClose = document.querySelector(".mobile_menu-wrapper-close");
var mobileMenuItems = document.getElementsByClassName("mobile_menu-wrapper-menu-item");
var mobileMenuModal = document.querySelector(".mobile_menu-modal");

mobileMenuIcon.addEventListener("click", function() {
  mobileMenuModal.style.display = "block";
  mobileMenuWrapper.style.transform = "translateX(0)";
})

mobileMenuIcon2.addEventListener("click", function() {
  mobileMenuModal.style.display = "block";
  mobileMenuWrapper.style.transform = "translateX(0)";
})

mobileMenuWrapperClose.addEventListener("click", function() {
  mobileMenuModal.style.display = "none";
  mobileMenuWrapper.style.transform = "translateX(-800px)";
})

mobileMenuModal.addEventListener("click", function() {
  mobileMenuModal.style.display = "none";
  mobileMenuWrapper.style.transform = "translateX(-800px)";
})

function clickOnMobileItem () {
  mobileMenuModal.style.display = "none";
  mobileMenuWrapper.style.transform = "translateX(-800px)";
}

window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mobileMenuIcon.style.display = "none";
  } else {
    mobileMenuIcon.style.display = "block";
  }
})

window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mobileMenuIcon2.style.display = "block";
  } else {
    mobileMenuIcon2.style.display = "none";
  }
})
