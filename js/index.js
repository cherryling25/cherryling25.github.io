window.onload = function () {
    var aboutMe = document.getElementById('aboutMe');
    var ulDropdown = document.getElementById('ulDropdown');
    aboutMe.onmouseover = function () {
        ulDropdown.style.display = 'block';
    }
    aboutMe.onmouseout = function () {
        ulDropdown.style.display = 'none';
    }

    

    function Show_Hidden(obj){
        if(obj.style.display=="block"){
            obj.style.display='none';
        }else{
            obj.style.display='block';
        }
    }
    
    var btnAboutMe = document.getElementById('btnAboutMe');
    var btnUlDropdown = document.getElementById('btnUlDropdown');
    btnAboutMe.onclick = function () {
        Show_Hidden(btnUlDropdown);
    }

    
    var navBtn = document.getElementsByClassName('nav-button')[0];
    var btnDropdown = document.getElementsByClassName('btnDropdown')[0];
    navBtn.onclick = function () {
        Show_Hidden(btnDropdown);
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


    var w = document.documentElement.clientWidth;
}