           //const  horizontal = [0,1,2];
        var Xpoints = 0;
        var Opoints = 0;
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
        var snorlax = true;
//X


function zero(){
    TableId = 0 
    table0()
    CheckWin();
};

    function one(){
        TableId = 1
        table0()
        CheckWin();
    };
    function two(){
        TableId = 2
        table0()
        CheckWin();
    };
    function three(){
        TableId = 3
        table0()
        CheckWin();
    };

    function four(){
        TableId = 4
        table0()
        CheckWin();
    };
    function five(){
        TableId = 5
        table0()
        CheckWin();
    };
    function six(){
        TableId = 6
        table0()
        CheckWin();
    };
    function seven(){
        TableId = 7
        table0()
        CheckWin();
    };


    function eight(){
        TableId = 8
        table0()
        CheckWin();
    };

        function table0(){
     if(document.getElementById(TableId).innerHTML == ''){
         if(playerX === true) 
           {
               
             var i = document.getElementById(TableId).innerHTML = X;
            playerX = false;
            document.getElementById('infoTurn').innerHTML = 'O';
                }
        else if(playerX === false){    
        var i = document.getElementById(TableId).innerHTML = O;
        playerX = true;
            document.getElementById('infoTurn').innerHTML = 'X';
            }
        } 
    }

   

    function reset(){
        document.getElementById('resetBtn')
       document.getElementById(0).innerHTML = "";
       document.getElementById(1).innerHTML = "";
       document.getElementById(2).innerHTML = "";
       document.getElementById(3).innerHTML = "";
       document.getElementById(4).innerHTML = "";
       document.getElementById(5).innerHTML = "";
       document.getElementById(6).innerHTML = "";
       document.getElementById(7).innerHTML = "";
       document.getElementById(8).innerHTML = "";
        document.getElementById('youWin').innerHTML = "";
    }
    function resetScores(){
        document.getElementById('XInformationText').innerHTML = 0;
        document.getElementById('OInformationText').innerHTML = 0;
    }

    function CheckWin(){

            if(columnA[0].innerHTML == "X" && columnA[1].innerHTML == "X" && columnA[2].innerHTML == "X"){   
                
                Xpoints++;
                document.getElementById("XInformationText").innerHTML = Xpoints;
                setTimeout(() => {
                XWon();
            }, 300);
        }
            else if(columnB[0].innerHTML == "X" && columnB[1].innerHTML == "X" && columnB[2].innerHTML == "X"){
                    
                    document.getElementById("XInformationText").innerHTML = Xpoints;
                    Xpoints++;
                    setTimeout(() => {
                    XWon();
                }, 300);
            }
            else if(colomnC[0].innerHTML == "X" && colomnC[1].innerHTML == "X" && colomnC[2].innerHTML == "X"){
                Xpoints++;
                document.getElementById("XInformationText").innerHTML = Xpoints;
                setTimeout(() => {
                    XWon();
                }, 300);
            }
            else if(rowA[0].innerHTML == "X" && rowA[1].innerHTML == "X" && rowA[2].innerHTML == "X"){
                Xpoints++;
                document.getElementById("XInformationText").innerHTML = Xpoints;
                setTimeout(() => {
                    XWon();
                }, 300);
            }
            else if(rowB[0].innerHTML == "X" && rowB[1].innerHTML == "X" && rowB[2].innerHTML == "X"){
                Xpoints++;
                document.getElementById("XInformationText").innerHTML = Xpoints;
                setTimeout(() => {
                    XWon();
                }, 300);
            }
            else if(rowC[0].innerHTML == "X" && rowC[1].innerHTML == "X" && rowC[2].innerHTML == "X"){
                Xpoints++;
                document.getElementById("XInformationText").innerHTML = Xpoints;
                setTimeout(() => {
                    XWon();
                }, 300);
            }
            else if(diagnolA[0].innerHTML == "X" && diagnolA[1].innerHTML == "X" && diagnolA[2].innerHTML == "X"){
                Xpoints++;
                document.getElementById("XInformationText").innerHTML = Xpoints;
                setTimeout(() => {
                    XWon();
                }, 300);
            }
            else if(diagnolB[0].innerHTML == "X" && diagnolB[1].innerHTML == "X" && diagnolB[2].innerHTML == "X"){
                Xpoints++;
                document.getElementById("XInformationText").innerHTML = Xpoints;
                setTimeout(() => {
                    XWon();
                }, 300);
            }      
            else if(columnA[0].innerHTML == "O" && columnA[1].innerHTML == "O" && columnA[2].innerHTML == "O"){

                    Opoints++;
                    document.getElementById("OInformationText").innerHTML = Opoints;
                    setTimeout(() => {
                    OWon();
                }, 300);
            }
            else if(columnB[0].innerHTML == "O" && columnB[1].innerHTML == "O" && columnB[2].innerHTML == "O"){

                    Opoints++;
                    document.getElementById("OInformationText").innerHTML = Opoints;
                    setTimeout(() => {
                    OWon();
                }, 300);
            }
            else if(colomnC[0].innerHTML == "O" && colomnC[1].innerHTML == "O" && colomnC[2].innerHTML == "O"){
                Opoints++;
                document.getElementById("OInformationText").innerHTML = Opoints;
                setTimeout(() => {
                    OWon();
                }, 300);
            }
            else if(rowA[0].innerHTML == "O" && rowA[1].innerHTML == "O" && rowA[2].innerHTML == "O"){
                Opoints++;
                document.getElementById("OInformationText").innerHTML = Opoints;
                setTimeout(() => {
                    OWon();
                }, 300);
            }
            else if(rowB[0].innerHTML == "O" && rowB[1].innerHTML == "O" && rowB[2].innerHTML == "O"){
                Opoints++;
                document.getElementById("OInformationText").innerHTML = Opoints;
                setTimeout(() => {
                    OWon();
                }, 300);
            }
            else if(rowC[0].innerHTML == "O" && rowC[1].innerHTML == "O" && rowC[2].innerHTML == "O"){
                Opoints++;
                document.getElementById("OInformationText").innerHTML = Opoints;
                setTimeout(() => {
                    OWon();
                }, 300);

            }
            else if(diagnolA[0].innerHTML == "O" && diagnolA[1].innerHTML == "O" && diagnolA[2].innerHTML == "O"){
                Opoints++;
                document.getElementById("OInformationText").innerHTML = Opoints;
                setTimeout(() => {
                    OWon();
                }, 300);
            }
            else if(diagnolB[0].innerHTML == "O" && diagnolB[1].innerHTML == "O" && diagnolB[2].innerHTML == "O"){
                Opoints++;
                document.getElementById("OInformationText").innerHTML = Opoints;
                setTimeout(() => {
                    OWon();
                }, 300);   

            }
        }
        
            function XWon()
            {

                alert('X WINS')
            //    document.getElementById('youWin').innerHTML = "X WINS!";         
                    reset();
                    
            }
        
            
              

            
                function OWon(){
                
                    alert('O WINS')
                   // document.getElementById('youWin').innerHTML = "O WINS!";
                    reset();
                }
            

        