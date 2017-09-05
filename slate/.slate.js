/**
 * This config adds simple push operations to split the window
 * left/right/top/bottom or fullscreen it whilst keeping a
 * predefined margin around the windows.
 * 
 * Also allows to throw windows to the prev/next screen.
 */

var margin = 15;

// Create Operations
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

var throwNextLeft = slate.operation("throw", {
  "width": "screenSizeX/2-" + margin * 1.5,
  "height": "screenSizeY-" + margin * 2,
  "screen": "next"
});

var throwNextRight = slate.operation("throw", {
  "x": "screenOriginX+(screenSizeX)/2+" + margin,
  "y": "screenOriginY+" + margin,
  "width": "screenSizeX/2+" + margin * 1.5,
  "height": "screenSizeY+" + margin * 2,
  "screen": "next"
});

var throwNextFullscreen = slate.operation("throw", {
  "x": "screenOriginX",
  "y": "screenOriginY",
  "width": "screenSizeX",
  "height": "screenSizeY",
  "screen": "next"
});

var throwNext = function(win) {
  if (!win) {
    return;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  var newX = (winRect.x - screen.x)/screen.width+"*screenSizeX+screenOriginX";
  var newY = (winRect.y - screen.y)/screen.height+"*screenSizeY+screenOriginY";
  var newWidth = winRect.width/screen.width+"*screenSizeX";
  var newHeight = winRect.height/screen.height+"*screenSizeY";
  var throwNext = slate.operation("throw", {
    "x": newX,
    "y": newY,
    "width": newWidth,
    "height": newHeight,
    "screen": "next"
  });
  win.doOperation(throwNext);
};

var pushedLeft = function(win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  if (winRect.x === screen.x &&
      winRect.y === screen.y &&
      winRect.width === screen.width/2 &&
      winRect.height === screen.height
    ) {
    return true;
  }
  return false;
};

var pushedRight = function(win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();

  if (winRect.x === screen.x + screen.width/2 &&
      winRect.y === screen.y &&
      winRect.width === screen.width/2 &&
      winRect.height === screen.height
    ) {
    return true;
  }
  return false;
};

var isFullscreen = function(win) {
  if (!win) {
    return false;
  }
  var winRect = win.rect();
  var screen = win.screen().visibleRect();
  if (winRect.width === screen.width &&
      winRect.height === screen.height
    ) {
    return true;
  }
  return false;
};


slate.bind("left:ctrl,cmd", function(win) {
  if (!win) {
    return;
  }
  if (pushedLeft(win)) {
    win.doOperation(throwNextLeft);
  } else {
    win.doOperation(pushLeft);
  }
});

slate.bind("right:ctrl,cmd", function(win) {
  if (!win) {
    return;
  }

  if (pushedRight(win)) {
    win.doOperation(throwNextRight);
  } else {
    win.doOperation(pushRight);
  }
});

slate.bind("up:ctrl,cmd", function(win) {
  if (!win) {
    return;
  }

  if (isFullscreen(win)) {
    win.doOperation(throwNextFullscreen);
  } else {
    win.doOperation(fullscreen);
  }
});

slate.bind("down:ctrl,cmd", function(win) {
  if (!win) {
    return;
  }

  if (pushedLeft(win)) {
    win.doOperation(throwNextLeft);
  } else if (pushedRight(win)) {
    win.doOperation(throwNextRight);
  } else if (isFullscreen(win)) {
    win.doOperation(throwNextFullscreen);
  } else {
    throwNext(win);
  }
});

S.bind("right:shift;alt;cmd", throwNextRight);
S.bind("left:shift;alt;cmd", throwNextLeft);
S.bind("left:ctrl;alt;cmd", pushLeft);
S.bind("right:ctrl;alt;cmd", pushRight);
S.bind("down:ctrl;alt;cmd", pushBottom);
S.bind("up:ctrl;alt;cmd", pushTop);
S.bind("c:ctrl;alt;cmd", centered);
S.bind("m:ctrl;alt;cmd", fullscreen);
