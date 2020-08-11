//Internationalisation
	var arrLang = {
      'en': {
        'home': 'Home',
        'members': 'Members',
		'language': 'Language',
/* 		'undo' : 'Undo',
		'redo' : 'Redo',
		'cancel' : 'Cancel',
		'order' : 'Order', */
		 },
      'se': {
        'home': 'Hem',
        'members': 'Medlem',
		'language': 'Språk' 
/* 		'undo' : 'Ångra',
		'redo' : 'Återställ',
		'cancel' : 'Avbryt',
		'order' : 'Beställ',	 */	
      }
    };

    // Process translation
    $(function() {
      $('.translate').click(function() {
        var lang = $(this).attr('id');

        $('.lang').each(function(index, item) {
          $(this).text(arrLang[lang][$(this).attr('key')]);
        });
      });
    });	