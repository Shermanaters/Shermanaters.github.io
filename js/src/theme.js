(function() {
  'use strict';

  var Theme = {};

  Theme.toggleStyle = {
    register: function() {
      var style = localStorage.getItem('hexo-polarbear'),
        isDark = style === 'dark',
        $themeStyle = $('#theme-style'),
        $html = $('html');

      $themeStyle.click(function() {
        isDark = !isDark;
        if (isDark) localStorage.setItem('hexo-polarbear', 'dark');
        else localStorage.removeItem('hexo-polarbear');
        $html.toggleClass('dark-theme', isDark);
      });

      $html.toggleClass('dark-theme', isDark);
    }
  };

  Theme.backToTop = {
    register: function() {
      var $backToTop = $('#back-to-top');

      $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
          $backToTop.fadeIn(1000);
        } else {
          $backToTop.fadeOut(1000);
        }
      });

      $backToTop.click(function() {
        $('body,html').animate({ scrollTop: 0 });
      });
    }
  };

  Theme.fancybox = {
    register: function() {
      if ($.fancybox) {
        $('.post').each(function() {
          $(this)
            .find('img')
            .each(function() {
              $(this).wrap('<a class="fancybox" href="' + this.src + '" title="' + this.alt + '"></a>');
            });
        });

        $('.fancybox').fancybox({
          openEffect: 'elastic',
          closeEffect: 'elastic'
        });
      }
    }
  };

  this.Theme = Theme;
}.call(this));
