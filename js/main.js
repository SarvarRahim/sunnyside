elOpenNavigation = document.querySelector('.sitenav');
elOpenToggle = document.querySelector('.js-site-header__toggler');

elOpenToggle.addEventListener('click', function(){
  elOpenNavigation.classList.toggle('sitenav--open');
});