window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
  })

  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
  })

  const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
  })
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })

    const btn = document.querySelector('#m_btn'),
          modalBg = document.querySelector('.modal-bg'),
          close = document.querySelector('.close');

    btn.addEventListener('click',function(){
      modalBg.style.display = 'flex';
    });

    close.addEventListener('click',function(){
      modalBg.style.display = 'none';
    });

    function submit({token,chatId,data}){
      fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${data}`)
    }
    document.querySelector('.modal-bg').addEventListener('submit',(e)=>{
      e.preventDefault();
      const name = document.querySelector("[name=name]").value;
      const phone = document.querySelector("[name=phone]").value;
      const msg = document.querySelector("[name=msg]").value;

      
      submit({
        token:"5553811862:AAGxheOswAirDSj0DM45cjqumTrGIAplUng",
        chatId:"-698075851",
        data:`name:${name} %0A phonenumber:${phone}%0A message: ${msg}`
      });
    

   });

   const OtpClose = document.querySelector('#otp');

   OtpClose.addEventListener('click',() =>{
     modalBg.style.display = 'none';
      
   })
    
})