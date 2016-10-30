function read(){
  var first = document.getElementById("first").value;
  var second = document.getElementById("second").value;
  console.log(first); // X array
  console.log(second); // Y array
  var first_lenght = first.length; //Ar nereiks tik panaikint
  var second_lenght = second.length; //Ar nereiks tik panaikint
  console.log(first_lenght); //Ar nereiks tik panaikint
  console.log(second_lenght); //Ar nereiks tik panaikint
  var array = new Array(first.length+2);
  for (var i = 0; i < first.length+2; i++) {
    array[i] = new Array(second.length);
  }
  array[0][0]='X';
  var x = 0;
  var arrayX = 2;
  var arrayY = 0;
  while (x != first.length){
    array[arrayX][arrayY] = first.charAt(x);
    arrayX++;
    x++;
  }
  x = 0;
  var arrayX = 0;
  var arrayY = 2;
  while (x != second.length){
    // var res = first.charAt(x);
    array[arrayX][arrayY] = second.charAt(x);
    arrayY++;
    x++;
  }
  var laikinas_x = 0;
  var laikinas_y = 0;
  while (laikinas_y != second.length){
    while(laikinas_x != first.length){
      if (array[laikinas_x][laikinas_y] == null){
        console.log(0);
      }else{
        console.log(array[laikinas_x][laikinas_y]);
      }
      laikinas_x++;
    }
    laikinas_x=0;;
    laikinas_y++;
  }
  //console.log(array);
  for (var x = 0; x <= second.length; ++x){
    array[1][x+1] = x;
  }
  for (var x = 0; x <= first.length; ++x){
    array[x+1][1] = x;
  }
  //table
  var i = 0;
  var count_x = 0;
  var count_y = 0;
  var match;
  var r_1
  var c_1
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (var r = 0; r < first.length+2; ++r){
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0; c < second.length+2; ++c){

      var cell = tr.appendChild(document.createElement('td'));
      //cell.innerHTML = "x";
      if (array[r][c] == null){
        //skaiciavimai
        if (array[r][0] == array[0][c] ){
          match = 0;
          //cell.innerHTML = 1;
        }
        else{
          match = 2
        }
        console.log(array[1][2]);
        console.log(array[2][1]);
      }else{
        cell.innerHTML = array[r][c];
      }
      laikinas_x++;
    }
  }
  document.body.appendChild(grid);
}
