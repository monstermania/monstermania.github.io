           //const  horizontal = [0,1,2];
           
        var columnA = [
            document.getElementById('0'),
            document.getElementById('3'),
            document.getElementById('6')
        ]

        var columnB=[
            document.getElementById('1'),
            document.getElementById('4'),
            document.getElementById('7')
        ]
        var colomnC= [
            document.getElementById('2'),
            document.getElementById('5'),
            document.getElementById('8')
        ]
        var rowA = [
            document.getElementById('0'),
            document.getElementById('1'),
            document.getElementById('2')
        ]
        var rowB = [
            document.getElementById('3'),
            document.getElementById('4'),
            document.getElementById('5')
        ]
        var rowC = [
            document.getElementById('6'),
            document.getElementById('7'),
            document.getElementById('8')
        ]
        var diagnolA = [
            document.getElementById('0'),
            document.getElementById('4'),
            document.getElementById('8')
        ]

        var diagnolB = [
            document.getElementById('2'),
            document.getElementById('4'),
            document.getElementById('6')
        ]

      var TableId;
        var playerX = true;
        var testCheck = true;
        var X = 'X';
        var O = 'O';
        var xL = columnA.length;
//X

function zero(){
    TableId = 0 
    table0()
};

    function one(){
        TableId = 1
        table0()
    };
    function two(){
        TableId = 2
        table0()
    };
    function three(){
        TableId = 3
        table0()
    };

    function four(){
        TableId = 4
        table0()
    };
    function five(){
        TableId = 5
        table0()
    };
    function six(){
        TableId = 6
        table0()
    };
    function seven(){
        TableId = 7
        table0()
    };


    function eight(){
        TableId = 8
        table0()
    };

        function table0(){
     if(document.getElementById(TableId).innerHTML == ''){
         if(playerX === true) 
           {
             var i = document.getElementById(TableId).innerHTML = X;
            playerX = false;
                }
        else if(playerX === false){    
        var i = document.getElementById(TableId).innerHTML = O;
        playerX = true;
            }
        } 
    }

    function reset(){
        document.getElementById('resetBtn')
       var i = document.getElementById(0).innerHTML = "";
       var i = document.getElementById(1).innerHTML = "";
       var i = document.getElementById(2).innerHTML = "";
       var i = document.getElementById(3).innerHTML = "";
       var i = document.getElementById(4).innerHTML = "";
       var i = document.getElementById(5).innerHTML = "";
       var i = document.getElementById(6).innerHTML = "";
       var i = document.getElementById(7).innerHTML = "";
       var i = document.getElementById(8).innerHTML = "";

    }

    function XWin(){
            if(columnA[0].innerHTML == "X" && columnA[1].innerHTML == "X" && columnA[2].innerHTML == "X"){
                    alert('X Win');
            }
            else if(columnB[0].innerHTML == "X" && columnB[1].innerHTML == "X" && columnB[2].innerHTML == "X"){
                    alert('X win')
            }
            else if(colomnC[0].innerHTML == "X" && colomnC[1].innerHTML == "X" && colomnC[2].innerHTML == "X"){
                alert('X win')
            }
            else if(rowA[0].innerHTML == "X" && rowA[1].innerHTML == "X" && rowA[2].innerHTML == "X"){
                alert('X win')
            }
            else if(rowB[0].innerHTML == "X" && rowB[1].innerHTML == "X" && rowB[2].innerHTML == "X"){
                alert('X win')
            }
            else if(rowC[0].innerHTML == "X" && rowC[1].innerHTML == "X" && rowC[2].innerHTML == "X"){
                alert('X win')
            }
            else if(diagnolA[0].innerHTML == "X" && diagnolA[1].innerHTML == "X" && diagnolA[2].innerHTML == "X"){
                alert('X win')
            }
            else if(rowB[0].innerHTML == "X" && rowB[1].innerHTML == "X" && rowB[2].innerHTML == "X"){
                alert('X win')
            }      
            else if(columnA[0].innerHTML == "O" && columnA[1].innerHTML == "O" && columnA[2].innerHTML == "O"){
                    alert('O Win');
            }
            else if(columnB[0].innerHTML == "O" && columnB[1].innerHTML == "O" && columnB[2].innerHTML == "O"){
                    alert('O win')
            }
            else if(colomnC[0].innerHTML == "O" && colomnC[1].innerHTML == "O" && colomnC[2].innerHTML == "O"){
                alert('O win')
            }
            else if(rowA[0].innerHTML == "O" && rowA[1].innerHTML == "O" && rowA[2].innerHTML == "O"){
                alert('O win')
            }
            else if(rowB[0].innerHTML == "O" && rowB[1].innerHTML == "O" && rowB[2].innerHTML == "O"){
                alert('O win')
            }
            else if(rowC[0].innerHTML == "O" && rowC[1].innerHTML == "O" && rowC[2].innerHTML == "O"){
                alert('O win')
            }
            else if(diagnolA[0].innerHTML == "O" && diagnolA[1].innerHTML == "O" && diagnolA[2].innerHTML == "O"){
                alert('O win')
            }
            else if(rowB[0].innerHTML == "O" && rowB[1].innerHTML == "O" && rowB[2].innerHTML == "O"){
                alert('O win')
            }
        }

        