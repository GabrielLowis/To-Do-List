//MUDAR TEMA

const chk = document.getElementById('chk')
let numeroDark = 0;


chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})


chk.addEventListener('change', () => {
  // function mudarNavDark(){
  if (nav.classList.contains('nav') || nav.classList.contains('minimizado') && numeroDark === 0) {

    if (nav.classList.contains('minimizado')) {
      document.getElementById("id-nav").classList.remove("minimizado");
      document.getElementById("id-nav").classList.add("navDarkMinimizado");
      numeroDark += 1;
      console.log("d" + numeroDark)
    }

    if (nav.classList.contains('nav')) {
      document.getElementById("id-nav").classList.remove("nav");
      document.getElementById("id-nav").classList.add("navDark");
      numeroDark += 1;
      console.log("d" + numeroDark)
    }
    } else {
      if (nav.classList.contains('navDarkMinimizado')) {
        document.getElementById("id-nav").classList.remove("navDarkMinimizado");
        document.getElementById("id-nav").classList.add("minimizado");
        numeroDark = 0;
        console.log("d" + numeroDark)
      }
      if(nav.classList.contains('navDark')){
      document.getElementById("id-nav").classList.remove("navDark");
      document.getElementById("id-nav").classList.add("nav");
      numeroDark = 0;
      console.log("d" + numeroDark);
    }
  }
});

// chk.addEventListener('click', mudarNavDark) 

