window.onload = function () {
    var aboutMe = document.getElementById('aboutMe');
    var ulDropdown = document.getElementById('ulDropdown');
    aboutMe.onmouseover = function () {
        ulDropdown.style.display = 'block';
    }
    aboutMe.onmouseout = function () {
        ulDropdown.style.display = 'none';
    }

    //导航条的 '首页'
    var aClass = document.getElementsByClassName('case'); 
    var divClass = document.getElementsByClassName('linkBorder');
    for (var i = 0; i < aClass.length; i++) {
        aClass[i].onmouseover = function(divStyle) {
            return function(){
                divStyle.display = 'block';
            };
        }(divClass[i].style);

        aClass[i].onmouseout = function(divStyle) {
            return function(){
                divStyle.display = 'none';
            };
        }(divClass[i].style);
    }
}