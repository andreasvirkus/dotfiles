var margin = 15;

// Create Operations
var topLeft = S.operation("move", {
  "x" : "screenOriginX+" + margin,
  "y" : "screenOriginY+" + margin,
  "width" : "screenSizeX/2-" + margin * 1.5,
  "height" : "screenSizeY/2-" + margin * 1.5
});

var topRight = S.operation("move", {
  "x" : "screenOriginX+screenSizeX/2+" + margin / 2,
  "y" : "screenOriginY+" + margin,
  "width" : "screenSizeX/2-" + margin * 1.5,
  "height" : "screenSizeY/2-" + margin * 1.5
});

var bottomRight = S.operation("move", {
  "x" : "screenOriginX+screenSizeX/2+" + margin / 2,
  "y" : "screenOriginY+screenSizeY/2+" + margin / 2,
  "width" : "screenSizeX/2-" + margin * 1.5,
  "height" : "screenSizeY/2-" + margin * 1.5
});

var bottomLeft = S.operation("move", {
  "x" : "screenOriginX+" + margin,
  "y" : "screenOriginY+screenSizeY/2+" + margin / 2,
  "width" : "screenSizeX/2-" + margin * 1.5,
  "height" : "screenSizeY/2-" + margin * 1.5
});

var pushRight = S.operation("move", {
  "x" : "screenOriginX+screenSizeX/2+" + margin / 2,
  "y" : "screenOriginY+" + margin,
  "width" : "screenSizeX/2-" + margin * 1.5,
  "height" : "screenSizeY-" + margin * 2
});

var pushLeft = S.operation("move", {
  "x" : "screenOriginX+" + margin,
  "y" : "screenOriginY+" + margin,
  "width" : "screenSizeX/2-" + margin * 1.5,
  "height" : "screenSizeY-" + margin * 2
});

var pushTop = S.operation("move", {
  "x" : "screenOriginX+" + margin,
  "y" : "screenOriginY+" + margin,
  "width" : "screenSizeX-" + margin * 2,
  "height" : "screenSizeY/2-" + margin * 1.5
});

var pushBottom = S.operation("move", {
  "x" : "screenOriginX+" + margin,
  "y" : "screenOriginY+screenSizeY/2+" + margin / 2,
  "width" : "screenSizeX-" + margin * 2,
  "height" : "screenSizeY/2-" + margin * 1.5
});

var fullscreen = S.operation("move", {
  "x" : "screenOriginX+" + margin,
  "y" : "screenOriginY+" + margin,
  "width" : "screenSizeX-" + margin * 2,
  "height" : "screenSizeY-" + margin * 2
});

var centered = S.operation("move", {
  "x": "screenOriginX+150",
  "y": "screenOriginY+80",
  "width": "screenSizeX-300",
  "height": "screenSizeY-180"
});

S.bind("down:shift;alt;cmd", bottomLeft);
S.bind("right:shift;alt;cmd", bottomRight);
S.bind("left:shift;alt;cmd", topLeft);
S.bind("up:shift;alt;cmd", topRight);
S.bind("left:ctrl;alt;cmd", pushLeft);
S.bind("right:ctrl;alt;cmd", pushRight);
S.bind("down:ctrl;alt;cmd", pushBottom);
S.bind("up:ctrl;alt;cmd", pushTop);
S.bind("c:ctrl;alt;cmd", centered);
S.bind("m:ctrl;alt;cmd", fullscreen);
