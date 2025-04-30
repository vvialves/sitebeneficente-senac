$(document).ready(function () {
    
    const $mobileBtn = $('#mobile_btn');
    const $mobileMenu = $('#mobile_menu');

    if ($mobileBtn.length && $mobileMenu.length) {
        $mobileBtn.on('click', function () {
            $mobileMenu.toggleClass('active');
            $(this).find('i').toggleClass('fa-x');
        });
    }

    
    const $sections = $('section');
    const $navItems = $('.nav-item a');
    const $header = $('header');

    $(window).on('scroll', function () {
        const scrollPosition = $(window).scrollTop();

        $header.css('box-shadow', scrollPosition > 0 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none');

       
        let activeSectionIndex = 0;

        $sections.each(function (i) {
            const sectionTop = $(this).offset().top - 120;
            const sectionBottom = sectionTop + $(this).outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        
        $navItems.removeClass('active');
        $($navItems[activeSectionIndex]).addClass('active');
    });

    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('#cta, .dish', {
            origin: 'left',
            duration: 2000,
            distance: '20%',
        });
    }

    
    $('.dish').hover(
        function () {
            $(this).css({
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease',
                zIndex: 10
            });
        },
        function () {
            $(this).css({
                transform: 'scale(1)',
                transition: 'transform 0.3s ease',
                zIndex: 1
            });
        }
    );

});

function setCookie(nome, valor, dias) {
    const data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expira = "expires=" + data.toUTCString();
    document.cookie = nome + "=" + valor + ";" + expira + ";path=/";
}

function getCookie(nome) {
    const nomeBusca = nome + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nomeBusca) === 0) {
            return c.substring(nomeBusca.length, c.length);
        }
    }
    return "";
}


$(document).ready(function () {
    const consentimento = getCookie("cookies_consentido");

    if (!consentimento) {
        $("#cookie-banner").fadeIn();
    }

    $("#accept-cookies").on("click", function () {
        setCookie("cookies_consentido", "sim", 365);
        $("#cookie-banner").fadeOut();
    });

    $("#deny-cookies").on("click", function () {
        setCookie("cookies_consentido", "nao", 365);
        $("#cookie-banner").fadeOut();
    });
});

function setCookie(nome, valor, dias) {
    const data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = nome + "=" + valor + ";expires=" + data.toUTCString() + ";path=/";
}

function getCookie(nome) {
    const nomeBusca = nome + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nomeBusca) === 0) {
            return c.substring(nomeBusca.length, c.length);
        }
    }
    return "";
}
