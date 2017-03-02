jQuery(function($) {

	$('.pop dt').click(function() {
		$(this).toggleClass('opened').next().slideToggle('slow');
		return false;
	});
	$('.departments .dep-close').click(function() {
		$(this).parent().parent().slideToggle('slow').prev().toggleClass('opened');
		return false;
	});
	$('.closeme a').click(function() {
		$(this).parent().parent().slideToggle('slow').prev().toggleClass('opened');
		return false;
	});

	$('.a-settings, .closepopped').click(function() {
		$('.popped').slideToggle('slow');
		return false;
	});

	$('.default').click(function() {
		$('body').removeClass().addClass('fontsize-normal color1 imageson spacing-small serif');
		$.cookie('blind-font-size', 'fontsize-normal', {path: '/'});
		$.cookie('blind-colors', 'color1', {path: '/'});
		$.cookie('blind-font', 'serif', {path: '/'});
		$.cookie('blind-spacing', 'spacing-small', {path: '/'});

		set_font_size();
    set_colors();
    set_font_family();
    set_letter_spacing();
		return false;
	});

	function set_font_size() {
	  $('body').removeClass('fontsize-small fontsize-normal fontsize-big').addClass($.cookie('blind-font-size'));
	}

	$('.a-fontsize a').click(function() {
		fontsize = $(this).attr('rel');
		$.cookie('blind-font-size', fontsize, {path: '/'});
		set_font_size();
		return false;
	});

	function set_colors() {
	  $('body').removeClass('color1 color2 color3 color4 color5').addClass($.cookie('blind-colors'));
	}

	$('.a-colors a, .choose-colors a').click(function() {
		colors = $(this).attr('rel');
		$.cookie('blind-colors', colors, {path: '/'});
		set_colors();
		return false;
	});

	function set_font_family() {
	  $('body').removeClass('serif sans-serif').addClass($.cookie('blind-font'));
	}

	$('.font-family').click(function() {
		font = $(this).attr('rel');
		$.cookie('blind-font', font, {path: '/'});
		set_font_family();
		return false;
	});

	function set_letter_spacing() {
	  $('body').removeClass('spacing-normal spacing-big spacing-small').addClass($.cookie('blind-spacing'));
	}

	$('.letter-spacing').click(function() {
		spacing = $(this).attr('rel');
		$.cookie('blind-spacing', spacing, {path: '/'});
		set_letter_spacing();
		return false;
	});

	$('.a-images a').click(function() {
		images = $(this).attr('rel');
		$('body').toggleClass('imageson').toggleClass('imagesoff');
		return false;
	});

	$('input[title!=""],textarea[title!=""]').hint();

	if (! $.cookie('blind-font-size')) {
	  $.cookie('blind-font-size', 'fontsize-normal', {path: '/'});
	}

	if (! $.cookie('blind-colors')) {
    $.cookie('blind-colors', 'color1', {path: '/'});
	}

	if (! $.cookie('blind-font')) {
    $.cookie('blind-font', 'sans-serif', {path: '/'});
	}

	if (! $.cookie('blind-spacing')) {
    $.cookie('blind-spacing', 'spacing-small', {path: '/'});
	}

  set_font_size();
  set_colors();
  set_font_family();
  set_letter_spacing();

    $(document).ready(function () {
        /**
         * Инициализация синтеза речи
         */
        $('body').ttsYa({
            apikey: ''
        });

        /**
         * Инициализация синтеза речи SpeechSynthesisUtterance Интерфейс Web Speech API
         */
        $('body').speechSynthesis({});
    });
});


jQuery.fn.hint = function() {
  return this.each(function() {
    var t = jQuery(this);
    var title = t.attr('title');
    if (title) {
      t.blur(function() {
        if (t.val() == '') {
          t.val(title);
          t.addClass('blur');
        }
      });
      t.focus(function() {
        if (t.val() == title) {
          t.val('');
          t.removeClass('blur');
        }
      });
      t.blur();
    }
  });
};

jQuery(function($) {

	$('#blind_alltime').click(function() {
		$('#since').val('');
		$('#mainsearch').submit();
		return false;
		});
	$('#blind_7days').click(function() {
		$('#since').val(__dates__.d7.day + '.' + __dates__.d7.month + '.' + __dates__.d7.year);
		$('#mainsearch').submit();
		return false;
		});
	$('#blind_30days').click(function() {
		$('#since').val(__dates__.d30.day + '.' + __dates__.d30.month + '.' + __dates__.d30.year);
		$('#mainsearch').submit();
		return false;
		});
	$('#blind_365days').click(function() {
		$('#since').val(__dates__.d365.day + '.' + __dates__.d365.month + '.' + __dates__.d365.year);
		$('#mainsearch').submit();
		return false;
		});
	$('#s-submit').click(function() {
	   $('#mainsearch').submit();
	   return false;
	});

	$('#id-recieve_by_post-2').change(function() {
	    if ($(this).is(':checked')) {
      $('#user_adress').show();
	    } else {
	        $('#user_adress').hide();
	    }
	});
	$('#id-recieve_by_post-1').change(function() {
	    if ($(this).is(':checked')) {
      $('#user_adress').hide();
	    } else {
	        $('#user_adress').show();
	    }
	});


});


jQuery(function($) {

  var _audio_id = 0;

  $('a[rel=audio]').each(function() {
    var self = $(this);
    self.attr('id', 'small-audio-' + (++ _audio_id));
    embedswf({
      ver: '10.0.0',
      el: self.attr('id'),
      url: _js_cfg.audio_player_special,
      express: _js_cfg.express_install,
      width: 920,
      height: 40,
      params: {
        mp3_url: self.attr('href')
      }
    });
  });
}); 


