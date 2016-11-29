function read(){
  var first = document.getElementById("first").value;
  var second = document.getElementById("second").value;
  var array = new Array(first.length+2);
  for (var i = 0; i < first.length+2; i++) {
    array[i] = new Array(second.length);
  }
  var div = document.getElementById('math');
    div.innerHTML = div.innerHTML + "<br>";
  array[0][0]='X';
  array[1][0]='X';
  array[0][1]='X';
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
  for (var x = 0; x <= second.length; ++x){
    array[1][x+1] = x;
  }
  for (var x = 0; x <= first.length; ++x){
    array[x+1][1] = x;
  }
  var i = 0;
  var count_x = 0;
  var count_y = 0;
  var match;
  var minimum;
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (var r = 0; r < first.length+2; ++r){
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c = 0; c < second.length+2; ++c){

      var cell = tr.appendChild(document.createElement('td'));
      if(r == 0 || c == 0){
        cell.className = "green";
      }
      else{
        cell.className = "black";
      }
      if (array[r][c] == null){
        if (array[r][0] == array[0][c] ){
          match = 0;
        }
        else{
          match = 2
        }
        minimum = Math.min(array[r-1][c]+1,array[r][c-1]+1,array[r-1][c-1]+match);
        array[r][c] = minimum;
        cell.innerHTML = array[r][c];


        div.innerHTML = div.innerHTML + "<strong>";
        div.innerHTML = div.innerHTML + array[0][c];
        div.innerHTML = div.innerHTML + ",";
        div.innerHTML = div.innerHTML + array[r][0];

        div.innerHTML = div.innerHTML + "</strong> = ";
        div.innerHTML = div.innerHTML + array[r][c];
        div.innerHTML = div.innerHTML + " (";
          div.innerHTML = div.innerHTML + (array[r-1][c]+1);
        div.innerHTML = div.innerHTML + ",";
          div.innerHTML = div.innerHTML + (array[r][c-1]+1);
          div.innerHTML = div.innerHTML + ",";
            div.innerHTML = div.innerHTML + (array[r-1][c-1]+match);
        div.innerHTML = div.innerHTML + ")";
        div.innerHTML = div.innerHTML + "<br>";

      }else{
        cell.innerHTML = array[r][c];
      }
    }
  }
  document.body.appendChild(grid);
}
