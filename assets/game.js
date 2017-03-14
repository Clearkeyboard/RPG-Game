window.onload = function(){
$('#trueno').click(trueno.selectTrueno);
$('#rx7').click(rx7.selectRX7);
$('#rxfd').click(rx7fd.selectRX7FD);
$('#civic').click(civic.selectCivic);
}
var carAtk = new Audio('assets/sound/ATK.mp3');
var backgroundMusic = new Audio('assets/sound/background.mp3');
var gameOver = new Audio('assets/sound/dead.mp3');
backgroundMusic.play();
backgroundMusic.volume = 0.1;
var enemyLives = 3
    var trueno = {
        HP : 100,
        Atk : 3,
        counterHit : 25,
        selectTrueno : function() {
        $('#selectedCar').append($('#trueno'));
        $('#enemySpace').append($('#civic'));
        $('#enemySpace').append($('#rxfd'));
        $('#enemySpace').append($('#rx7'));
        $('#rx7').off('click', rx7.selectRX7);
        $('#rxfd').off('click', rx7fd.selectRX7FD);
        $('#civic').off('click', civic.selectCivic);
        $('#rx7').click(defenderCar.selectEnemyRX7);
        $('#rxfd').click(defenderCar.selectEnemyRXFD);
        $('#civic').click(defenderCar.selectEnemyCivic);
        var selected = true;
        if (selected = true){
                window.selectedCar = {HP: 100, Atk: 3}
                var t = document.getElementById('truenoHP');
                t.className += ' selCar';
                $('#trueno').prop('onclick',null);
                }
        }
    }
    var civic = {
        HP : 125,
        Atk : 10,
        counterHit : 10,
        selectCivic : function() {
        $('#selectedCar').append($('#civic'));
        $('#enemySpace').append($('#trueno'));
        $('#enemySpace').append($('#rxfd'));
        $('#enemySpace').append($('#rx7'));
        $('#rx7').off('click');
        $('#rxfd').off('click');
        $('#trueno').off('click');
        $('#rx7').click(defenderCar.selectEnemyRX7);
        $('#rxfd').click(defenderCar.selectEnemyRXFD);
        $('#trueno').click(defenderCar.selectEnemyTrueno);
        var selected = true;
        if (selected = true){
                window.selectedCar = {HP: 125, Atk: 10}
                var c = document.getElementById('civHP');
                c.className += ' selCar';
                $('#civic').prop('onclick',null);
                }
         }
    }
    var rx7fd = {
        HP: 180,
        Atk: 30,
        selectRX7FD : function() {
        $('#selectedCar').append($('#rxfd'));
        $('#enemySpace').append($('#civic'));
        $('#enemySpace').append($('#trueno'));
        $('#enemySpace').append($('#rx7'));
        $('#rx7').off('click');
        $('#trueno').off('click');
        $('#civic').off('click');
        $('#rx7').click(defenderCar.selectEnemyRX7);
        $('#trueno').click(defenderCar.selectEnemyTrueno);
        $('#civic').click(defenderCar.selectEnemyCivic);
        var selected = true;
        if (selected = true){
                window.selectedCar = {HP: 180, Atk: 30}
                var fd = document.getElementById('RXFDHP');
                fd.className += ' selCar';
                $('#rxfd').prop('onclick',null);
                }
        }
    }
    var rx7 = {
        selectRX7 : function() {
        $('#selectedCar').append($('#rx7'));
        $('#enemySpace').append($('#civic'));
        $('#enemySpace').append($('#rxfd'));
        $('#enemySpace').append($('#trueno'));
        $('#trueno').off('click');
        $('#rxfd').off('click');
        $('#civic').off('click');
        $('Trueno').click(defenderCar.selectEnemyTrueno);
        $('#rxfd').click(defenderCar.selectEnemyRXFD);
        $('#civic').click(defenderCar.selectEnemyCivic);
        var selected = true;
        if (selected = true){
                window.selectedCar = {HP: 150, Atk: 20}
                var rx7 = document.getElementById('rx7HP');
                rx7.className += ' selCar';
                $('#rx7').prop('onclick',null);
                }       
        }
    }
     var defenderCar ={
        selectEnemyCivic : function(){
        $('#defenderSpace').append($('#civic'));
        $('#rx7').off('click', defenderCar.selectEnemyRX7);
        $('#rxfd').off('click', defenderCar.selectEnemyRXFD);
        $('#trueno').off('click', defenderCar.selectEnemyTrueno);
        var selected = true;
        if (selected = true){
                window.defendingCar = {HP: 125, counterHit: 10}
                var c = document.getElementById('civHP');
                var d = document.getElementById('civic');
                c.className += ' defCar';
                d.className += ' defCarName';
         }
    },
        selectEnemyRXFD : function(){
        $('#defenderSpace').append($('#rxfd'));
        $('#rx7').off('click', defenderCar.selectEnemyRX7);
        $('#civic').off('click', defenderCar.selectEnemyCivic);
        $('#trueno').off('click', defenderCar.selectEnemyTrueno);
        var selected = true;
        if (selected = true){
                window.defendingCar = {HP: 180, counterHit: 20}
                var fd = document.getElementById('RXFDHP');
                var d = document.getElementById('rxfd');
                fd.className += ' defCar';
                d.className += ' defCarName';
         }
    },
        selectEnemyRX7 : function(){
        $('#defenderSpace').append($('#rx7'));
        $('#civic').off('click', defenderCar.selectEnemyCivic);
        $('#rxfd').off('click', defenderCar.selectEnemyRXFD);
        $('#trueno').off('click', defenderCar.selectEnemyTrueno);
        var selected = true;
        if (selected = true){
                window.defendingCar = {HP: 125, counterHit: 10}
                var rx = document.getElementById('rx7HP');
                var rx7 = document.getElementById('rx7');
                rx.className += ' defCar';
                rx7.className += ' defCarName';

         }
    },
        selectEnemyTrueno : function(){
        $('#defenderSpace').append($('#trueno'));
        $('#rx7').off('click', defenderCar.selectEnemyRX7);
        $('#rxfd').off('click', defenderCar.selectEnemyRXFD);
        $('#civic').off('click', defenderCar.selectEnemyCivic);
        var selected = true;
        if (selected = true){
                window.defendingCar = {HP: 125, counterHit: 10}
                var t = document.getElementById('truenoHP');
                var c = document.getElementById('trueno');
                t.className += ' defCar';
                c.className += ' defCarName';
         }        
    }
}
 $('#fight').click(function() {
    defendingCar.HP = defendingCar.HP-selectedCar.Atk;
    $('.defCar').html(defendingCar.HP);
    selectedCar.Atk = Math.round(selectedCar.Atk*2.25);
    $('#output').html('You Drifted and Dealt ' + selectedCar.Atk + ' Damage!');
    $('#counter').html( 'Drifts and Counters For ' + defendingCar.counterHit + ' Damage!');
    selectedCar.HP = selectedCar.HP-defendingCar.counterHit;
    $('.selCar').html(selectedCar.HP);
    carAtk.play();
    if (defendingCar.HP <= 0){
        $('.defCarName').remove();
        $('#counter').html('You have defeated an enemy!'); 
    $('#trueno').click(defenderCar.selectEnemyTrueno);
    $('#rx7').click(defenderCar.selectEnemyRX7);
    $('#rxfd').click(defenderCar.selectEnemyRXFD);
    $('#civic').click(defenderCar.selectEnemyCivic);
    enemyLives--;
    console.log(enemyLives);
    console.log(defendingCar.HP);
   }if (enemyLives <=0){
         $('#counter').html("Victory! You're king of the Mountain!");
    }

    if (selectedCar.HP <= 0){
    $('#counter').html('You Have Died!');
    $('#trueno').prop('onclick',null);
    $('#rx7').prop('onclick',null);
    $('#rxfd').prop('onclick',null);
    $('#civic').prop('onclick',null);
    $('#fight').prop('onclick',null);
    $('#fight').after('<div class="col-lg-12 text-center"><button  class="col-lg-2-offset-6 center" id="reset" name="reset" type="button">Reset</button></div>');
    $('#reset').click(function(){location.reload()});
    gameOver.play();
}
 });
