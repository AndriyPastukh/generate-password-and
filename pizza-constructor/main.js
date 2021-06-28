let speedHide = 0;
let speedShow = 0;


let summery = 30;

let currency = "грн"



$('.choseOpen').hide(0);

$('.item1').hide(0);

$('.total').html("Оплатити " + summery + currency);
doBounce($("#bounce"), 100, '10px', 500)



// open chese
$("#chease").click(function(){
    $("#chooseChease").slideToggle(speedShow);
    $("#chooseMeet").slideUp(speedShow);
    $("#chooseSous").slideUp(speedShow);
    $("#choseVeg").slideUp(speedShow);
    $("#choseAdd").slideUp (speedShow);

})
// open meat 
$("#meet").click(function(){
    $("#chooseMeet").slideToggle(speedShow);
    $("#chooseChease").slideUp(speedShow);
    $("#chooseSous").slideUp(speedShow);
    $("#choseVeg").slideUp(speedShow);
    $("#choseAdd").slideUp (speedShow);
    
})

//open sous
$("#sous").click(function(){
    $("#chooseSous").slideToggle(speedShow);
    $("#chooseChease").slideUp(speedShow);
    $("#chooseMeet").slideUp(speedShow);
    $("#choseVeg").slideUp(speedShow);
    $("#choseAdd").slideUp (speedShow);
    
    
})
// open veg
$("#veg").click(function(){
    $("#choseVeg").slideToggle(speedShow);
    $("#chooseChease").slideUp(speedShow);
    $("#chooseMeet").slideUp(speedShow);
    $("#chooseSous").slideUp(speedShow);
    $("#choseAdd").slideUp (speedShow);
    
})

// open add

$("#add").click(function(){
    $("#choseAdd").slideToggle(speedShow);
    $("#choseVeg").slideUp(speedShow);
    $("#chooseChease").slideUp(speedShow);
    $("#chooseMeet").slideUp(speedShow);
    $("#chooseSous").slideUp(speedShow);
    
})





// 
// onclick feta



$('#feta').click(function(){
    
    $('.fetaGroup').fadeToggle(speedHide)
    $('#fetaHide').fadeToggle(speedHide)
    summery += 25;
    $('.total').html("Оплатити " + summery + currency);
    
    
})
$('#fetaHide').click(function(){
    
    $('.fetaGroup').fadeToggle(speedHide)
    $('#fetaHide').fadeToggle(speedHide)
    summery -= 25;
    $('.total').html("Оплатити " + summery + currency);
    
})





// onclik blu
$('#blu').click(function(){
    
    $('.bluGroup').fadeToggle(speedHide)
    $('#bluHide').fadeToggle(speedHide)
    summery += 20;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#bluHide').click(function(){
    
    $('.bluGroup').fadeToggle(speedHide)
    $('#bluHide').fadeToggle(speedHide)
    summery -= 20;
    $('.total').html("Оплатити " + summery + currency);
})

//. on click moza
$('#moza').click(function(){
    
    $('.mozaGroup').fadeToggle(speedHide)
    $('#mozaHide').fadeToggle(speedHide)
    summery += 35;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#mozaHide').click(function(){
    
    $('.mozaGroup').fadeToggle(speedHide)
    $('#mozaHide').fadeToggle(speedHide)
    summery -= 35;
    $('.total').html("Оплатити " + summery + currency);
    
})

//. onclick cheder

$('#cheder').click(function(){
    
    $('.chederGroup').fadeToggle(speedHide)
    $('#chederHide').fadeToggle(speedHide)
    summery += 30;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#chederHide').click(function(){
    
    $('.chederGroup').fadeToggle(speedHide)
    $('#chederHide').fadeToggle(speedHide)
    summery -= 30;
    $('.total').html("Оплатити " + summery + currency);
    
})


//. onclick cheder

$('#parm').click(function(){
    
    $('.parmGroup').fadeToggle(speedHide)
    $('#parmHide').fadeToggle(speedHide)
    summery += 20;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#parmHide').click(function(){
    
    $('.parmGroup').fadeToggle(speedHide)
    $('#parmHide').fadeToggle(speedHide)
    summery -= 20;
    $('.total').html("Оплатити " + summery + currency);
    
})

// onclikc chicken

$('#chicken').click(function(){
    
    $('.chickenGroup').fadeToggle(speedHide)
    $('#chickenHide').fadeToggle(speedHide)
    summery += 50;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#chickenHide').click(function(){
    
    $('.chickenGroup').fadeToggle(speedHide)
    $('#chickenHide').fadeToggle(speedHide)
    summery -= 50;
    $('.total').html("Оплатити " + summery + currency);
    
})

//on lick bekon
$('#bekon').click(function(){
    
    $('.bekonGroup').fadeToggle(speedHide)
    $('#bekonHide').fadeToggle(speedHide)
    summery += 40;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#bekonHide').click(function(){
    
    $('.bekonGroup').fadeToggle(speedHide)
    $('#bekonHide').fadeToggle(speedHide)
    summery -= 40;
    $('.total').html("Оплатити " + summery + currency);
    
})

//on lick shynka
$('#shynka').click(function(){
    
    $('.shynkaGroup').fadeToggle(speedHide)
    $('#shynkaHide').fadeToggle(speedHide)
    summery += 50;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#shynkaHide').click(function(){
    
    $('.shynkaGroup').fadeToggle(speedHide)
    $('#shynkaHide').fadeToggle(speedHide)
    summery -= 50;
    $('.total').html("Оплатити " + summery + currency);
    
})

//on lick paperoni
$('#paperoni').click(function(){
    
    $('.paperoniGroup').fadeToggle(speedHide)
    $('#paperoniHide').fadeToggle(speedHide)
    summery += 60;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#paperoniHide').click(function(){
    
    $('.paperoniGroup').fadeToggle(speedHide)
    $('#paperoniHide').fadeToggle(speedHide)
    summery -= 60;
    $('.total').html("Оплатити " + summery + currency);
    
})
//on lick paperoni
$('#alfredo').click(function(){
    
    $('.alfredoGroup').fadeToggle(speedHide)
    $('#alfredoHide').fadeToggle(speedHide)
    summery += 40;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#alfredoHide').click(function(){
    
    $('.alfredoGroup').fadeToggle(speedHide)
    $('#alfredoHide').fadeToggle(speedHide)
    summery -= 40;
    $('.total').html("Оплатити " + summery + currency);
    
})

//on lick barbequ
$('#barbequ').click(function(){
    
    $('.barbequGroup').fadeToggle(speedHide)
    $('#barbequHide').fadeToggle(speedHide)
    summery += 35;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#barbequHide').click(function(){
    
    $('.barbequGroup').fadeToggle(speedHide)
    $('#barbequHide').fadeToggle(speedHide)
    summery -= 35;
    $('.total').html("Оплатити " + summery + currency);
    
})
//on lick chasnyk
$('#chasnyk').click(function(){
    
    $('.chasnykGroup').fadeToggle(speedHide)
    $('#chasnykHide').fadeToggle(speedHide)
    summery += 25;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#chasnykHide').click(function(){
    
    $('.chasnykGroup').fadeToggle(speedHide)
    $('#chasnykHide').fadeToggle(speedHide)
    summery -= 25;
    $('.total').html("Оплатити " + summery + currency);
    
})

//on lick kukurudza
$('#kukurudza').click(function(){
    
    $('.kukurudzaGroup').fadeToggle(speedHide)
    $('#kukurudzaHide').fadeToggle(speedHide)
    summery += 15;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#kukurudzaHide').click(function(){
    
    $('.kukurudzaGroup').fadeToggle(speedHide)
    $('#kukurudzaHide').fadeToggle(speedHide)
    summery -= 15;
    $('.total').html("Оплатити " + summery + currency);
    
})
//on lick ananas
$('#ananas').click(function(){
    
    $('.ananasGroup').fadeToggle(speedHide)
    $('#ananasHide').fadeToggle(speedHide)
    summery += 30;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#ananasHide').click(function(){
    
    $('.ananasGroup').fadeToggle(speedHide)
    $('#ananasHide').fadeToggle(speedHide)
    summery += 30;
    $('.total').html("Оплатити " + summery + currency);
    
})

//on lick tomato
$('#tomato').click(function(){
    
    $('.tomatoGroup').fadeToggle(speedHide)
    $('#tomatoHide').fadeToggle(speedHide)
    summery += 10;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#tomatoHide').click(function(){
    
    $('.tomatoGroup').fadeToggle(speedHide)
    $('#tomatoHide').fadeToggle(speedHide)
    summery -= 10;
    $('.total').html("Оплатити " + summery + currency);
    
})
//on lick grub
$('#grub').click(function(){
    
    $('.grubGroup').fadeToggle(speedHide)
    $('#grubHide').fadeToggle(speedHide)
    summery += 20;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#grubHide').click(function(){
    
    $('.grubGroup').fadeToggle(speedHide)
    $('#grubHide').fadeToggle(speedHide)
    summery -= 20;
    $('.total').html("Оплатити " + summery + currency);
    
})

//on lick shpunat
$('#shpunat').click(function(){
    
    $('.shpunatGroup').fadeToggle(speedHide)
    $('#shpunatHide').fadeToggle(speedHide)
    summery += 5;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#shpunatHide').click(function(){
    
    $('.shpunatGroup').fadeToggle(speedHide)
    $('#shpunatHide').fadeToggle(speedHide)
    summery -= 5;
    $('.total').html("Оплатити " + summery + currency);
    
})
//on lick perets
$('#perets').click(function(){
    
    $('.peretsGroup').fadeToggle(speedHide)
    $('#peretsHide').fadeToggle(speedHide)
    summery += 35;
    $('.total').html("Оплатити " + summery + currency);
    
})
$('#peretsHide').click(function(){
    
    $('.peretsGroup').fadeToggle(speedHide)
    $('#peretsHide').fadeToggle(speedHide)
    summery -= 35;
    $('.total').html("Оплатити " + summery + currency);
    
})



// button buy animation 


function doBounce(element, times, distance, speed){
    for(let i=0; i<times; i++){
        element.animate({
            marginTop: "-="+distance
            
        }, speed)
        element.animate({
            marginTop: "+="+distance
            
        }, speed)
    }
}















