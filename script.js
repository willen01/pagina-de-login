let boxUser = document.getElementById('name');
let boxPsw = document.getElementById('password');
let btn = document.getElementById('btn')
let fm = document.getElementById('first_msg');
let sm = document.getElementById('second_msg');

btn.addEventListener('click', function() {


   
   if(boxUser.value == '' || boxPsw.value == ''){
      fm.style.display = 'block';
      sm.style.display = 'none'
   } else if (boxUser.value != '' || boxPsw.value != '') {
      
      fm.style.display = 'none';
      sm.style.display = 'block'

      boxUser.value = '';
      boxPsw.value = '';
   }
})
