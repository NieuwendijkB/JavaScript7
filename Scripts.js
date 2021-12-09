const paintWall = function (paintLocation, paintColor) {
  console.log("The " + paintLocation + " has been painted " + paintColor);
};

const paint_green = "green";
const paint_red = "red";
const north_wall = "north wall";

paintWall(north_wall, paint_green);

// calling the function without argument gives me a error..
// the order of the arguments matter because if they are switched the results are switched aswell: 'The green has been painted north wall'
