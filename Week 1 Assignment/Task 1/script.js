let none=document.getElementById("none");
let opt=document.querySelectorAll('.work-option');
none.addEventListener('change',function(){
    if(this.checked)
        {
 opt.forEach(c=>c.checked=false);
 none=true;
        }
})
 opt.forEach(cb => {
    cb.addEventListener('change', function () {
      if (this.checked) {
        none.checked = false;
        
      }
    });
  });