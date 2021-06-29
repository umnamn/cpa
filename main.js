<script>
if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav") != null) {
        getFav = localStorage.fav;
        $("#doneButton01").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside').on('click', function () {
        getFav = localStorage.fav;
        $(this).closest("#doneButton01").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton01").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav');
	}
        
    });
});

if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav2") != null) {
        getFav = localStorage.fav2;
        $("#doneButton02").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-02').on('click', function () {
        getFav = localStorage.fav2;
        $(this).closest("#doneButton02").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton02").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav2', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav2');
	}
        
    });
});

if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav3") != null) {
        getFav = localStorage.fav3;
        $("#doneButton03").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-03').on('click', function () {
        getFav = localStorage.fav3;
        $(this).closest("#doneButton03").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton03").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav3', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav3');
	}
        
    });
});


if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav4") != null) {
        getFav = localStorage.fav4;
        $("#doneButton04").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-04').on('click', function () {
        getFav = localStorage.fav4;
        $(this).closest("#doneButton04").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton04").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav4', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav4');
	}
        
    });
});


if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav5") != null) {
        getFav = localStorage.fav4;
        $("#doneButton05").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-05').on('click', function () {
        getFav = localStorage.fav5;
        $(this).closest("#doneButton05").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton05").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav5', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav5');
	}
        
    });
});


if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav6") != null) {
        getFav = localStorage.fav6;
        $("#doneButton06").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-06').on('click', function () {
        getFav = localStorage.fav6;
        $(this).closest("#doneButton06").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton06").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav6', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav6');
	}
        
    });
});


if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav7") != null) {
        getFav = localStorage.fav7;
        $("#doneButton07").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-07').on('click', function () {
        getFav = localStorage.fav7;
        $(this).closest("#doneButton07").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton07").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav7', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav7');
	}
        
    });
});


if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav8") != null) {
        getFav = localStorage.fav8;
        $("#doneButton08").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-08').on('click', function () {
        getFav = localStorage.fav8;
        $(this).closest("#doneButton08").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton08").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav8', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav8');
	}
        
    });
});


if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav9") != null) {
        getFav = localStorage.fav9;
        $("#doneButton09").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-09').on('click', function () {
        getFav = localStorage.fav9;
        $(this).closest("#doneButton09").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton09").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav9', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav9');
	}
        
    });
});


if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav10") != null) {
        getFav = localStorage.fav10;
        $("#doneButton10").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-10').on('click', function () {
        getFav = localStorage.fav10;
        $(this).closest("#doneButton10").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton10").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav10', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav10');
	}
        
    });
});

if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav11") != null) {
        getFav = localStorage.fav11;
        $("#doneButton11").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-11').on('click', function () {
        getFav = localStorage.fav11;
        $(this).closest("#doneButton11").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton11").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav11', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav11');
	}
        
    });
});

if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav12") != null) {
        getFav = localStorage.fav12;
        $("#doneButton12").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-12').on('click', function () {
        getFav = localStorage.fav12;
        $(this).closest("#doneButton12").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton12").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav12', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav12');
	}
        
    });
});



if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav13") != null) {
        getFav = localStorage.fav13;
        $("#doneButton13").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-13').on('click', function () {
        getFav = localStorage.fav13;
        $(this).closest("#doneButton13").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton13").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav13', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav13');
	}
        
    });
});

if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav14") != null) {
        getFav = localStorage.fav14;
        $("#doneButton14").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-14').on('click', function () {
        getFav = localStorage.fav14;
        $(this).closest("#doneButton14").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton14").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav14', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav14');
	}
        
    });
});

if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav15") != null) {
        getFav = localStorage.fav15;
        $("#doneButton15").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-15').on('click', function () {
        getFav = localStorage.fav15;
        $(this).closest("#doneButton15").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton15").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav15', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav15');
	}
        
    });
});


if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav16") != null) {
        getFav = localStorage.fav16;
        $("#doneButton16").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-16').on('click', function () {
        getFav = localStorage.fav16;
        $(this).closest("#doneButton16").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton16").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav16', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav16');
	}
        
    });
});

if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav17") != null) {
        getFav = localStorage.fav17;
        $("#doneButton17").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-17').on('click', function () {
        getFav = localStorage.fav17;
        $(this).closest("#doneButton17").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton17").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav17', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav17');
	}
        
    });
});

if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav18") != null) {
        getFav = localStorage.fav18;
        $("#doneButton18").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-18').on('click', function () {
        getFav = localStorage.fav18;
        $(this).closest("#doneButton18").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton18").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav18', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav18');
	}
        
    });
});


if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav19") != null) {
        getFav = localStorage.fav19;
        $("#doneButton19").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-19').on('click', function () {
        getFav = localStorage.fav19;
        $(this).closest("#doneButton19").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton19").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav19', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav19');
	}
        
    });
});

if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav20") != null) {
        getFav = localStorage.fav20;
        $("#doneButton20").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-20').on('click', function () {
        getFav = localStorage.fav20;
        $(this).closest("#doneButton20").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton20").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav20', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav20');
	}
        
    });
});

if (typeof (localStorage) == 'undefined') {
    document.getElementById("result").innerHTML = 
'Your browser does not support HTML5 localStorage. Try upgrading.';
} else {
    if (localStorage.getItem("fav21") != null) {
        getFav = localStorage.fav21;
        $("#doneButton21").addClass('practice-done-btn-active');
        
    }
}

$(document).ready(function () {
    $('.practice-done-btn-inside-21').on('click', function () {
        getFav = localStorage.fav21;
        $(this).closest("#doneButton21").toggleClass('practice-done-btn-active');
		if ($(this).closest("#doneButton21").hasClass('practice-done-btn-active')) {
        localStorage.setItem('fav21', 'practice-done-btn-active');
        
    }else{
		localStorage.removeItem('fav21');
	}
        
    });
});




</script>
