jQuery(document).ready(function( $ ) {

		// Menu settings
		$('#menuToggle, .menu-close').on('click', function(){
			$('#menuToggle').toggleClass('active');
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
		});

		// Smooth scroll for the menu and links with .scrollto classes
	  $('.smoothscroll').on('click', function(e) {
	    e.preventDefault();
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      if (target.length) {

	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500, 'easeInOutExpo');
	      }
	    }
			$('body').toggleClass('body-push-toleft');
			$('#theMenu').toggleClass('menu-open');
	  });

		$('.carousel').carousel({
      interval: 3500
    });

		// Вероятность прохождения на этапе подачи заявления
		if($('#work1').length) {

			var doughnutData = [{
	        value: 95,
	        color: "#ecf0f1"
	      },
	      {
	        value: 5,
	        color: "#191970"
	      }
	    ];
	    var myDoughnut = new Chart(document.getElementById("work1").getContext("2d")).Doughnut(doughnutData);
		};

		// Вероятность прохождения на этапе тестирования
		if($('#work2').length) {
			var doughnutData = [{
					value: 55,
					color: "#ecf0f1"
				},
				{
					value: 45,
					color: "#191970"
				}
			];
			var myDoughnut = new Chart(document.getElementById("work2").getContext("2d")).Doughnut(doughnutData);
		}

		// Вероятность прохождения на этапе собесодования
		if($('#work3').length) {
			var doughnutData = [{
					value: 35,
					color: "#ecf0f1"
				},
				{
					value: 65,
					color: "#191970"
                }
			];
			var myDoughnut = new Chart(document.getElementById("work3").getContext("2d")).Doughnut(doughnutData);
		}

});

function Registration() {
	var form = document.getElementsByClassName("Ractivity")[0];
	form.style="display: inline-block";
}

function show_hide_password(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') == 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}
