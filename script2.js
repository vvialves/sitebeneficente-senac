document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    
    const name = document.getElementById("name").value.trim();
    const userPhone = document.getElementById("userPhone").value.trim();
    const message = document.getElementById("message").value.trim();

    
    const ownerPhone = "5511975402514"; 

   
    const text = encodeURIComponent(
      `${message}`
    );

    
    const url = `https://wa.me/${ownerPhone}?text=${text}`;

  
    window.open(url, "_blank");
  });

  
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
