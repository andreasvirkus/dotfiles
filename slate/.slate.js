/**
 * This config adds simple push operations to split the window
 * left/right/top/bottom or fullscreen it whilst keeping a
 * predefined margin around the windows.
 *
 * Also allows to throw windows to the prev/next screen.
 */

const margin = 15

// Create Operations
const pushRight = S.operation('move', {
  'x' : 'screenOriginX+screenSizeX/2+' + margin / 2,
  'y' : 'screenOriginY+' + margin,
  'width' : 'screenSizeX/2-' + margin * 1.5,
  'height' : 'screenSizeY-' + margin * 2
})
const pushRightThird = S.operation('move', {
  'x' : 'screenOriginX+screenSizeX/3+' + margin / 2,
  'y' : 'screenOriginY+' + margin,
  'width' : 'screenSizeX/3-' + margin * 1.5,
  'height' : 'screenSizeY-' + margin * 2
})
const pushRightTwoThirds = S.operation('move', {
  'x' : 'screenOriginX+screenSizeX/3*2+' + margin / 2,
  'y' : 'screenOriginY+' + margin,
  'width' : 'screenSizeX/3-' + margin * 1.5,
  'height' : 'screenSizeY-' + margin * 2
})

const pushLeft = S.operation('move', {
  'x' : 'screenOriginX+' + margin,
  'y' : 'screenOriginY+' + margin,
  'width' : 'screenSizeX/2-' + margin * 1.5,
  'height' : 'screenSizeY-' + margin * 2
})
const pushLeftThird = S.operation('move', {
  'x' : 'screenOriginX+' + margin,
  'y' : 'screenOriginY+' + margin,
  'width' : 'screenSizeX/3-' + margin * 1.5,
  'height' : 'screenSizeY-' + margin * 2
})

const pushTop = S.operation('move', {
  'x' : 'screenOriginX+' + margin,
  'y' : 'screenOriginY+' + margin,
  'width' : 'screenSizeX-' + margin * 2,
  'height' : 'screenSizeY/2-' + margin * 1.5
})

const pushBottom = S.operation('move', {
  'x' : 'screenOriginX+' + margin,
  'y' : 'screenOriginY+screenSizeY/2+' + margin / 2,
  'width' : 'screenSizeX-' + margin * 2,
  'height' : 'screenSizeY/2-' + margin * 1.5
})

const fullscreen = S.operation('move', {
  'x' : 'screenOriginX+' + margin,
  'y' : 'screenOriginY+' + margin,
  'width' : 'screenSizeX-' + margin * 2,
  'height' : 'screenSizeY-' + margin * 2
})

const centered = S.operation('move', {
  'x': 'screenOriginX+150',
  'y': 'screenOriginY+80',
  'width': 'screenSizeX-300',
  'height': 'screenSizeY-180'
})
const centeredThird = S.operation('move', {
  'x' : 'screenOriginX+screenSizeX/3+' + margin / 2,
  'y' : 'screenOriginY+' + margin,
  'width' : 'screenSizeX/3-' + margin * 1.5,
  'height' : 'screenSizeY-' + margin * 2
})

const throwNextLeft = slate.operation('throw', {
  'width': 'screenSizeX/2-' + margin * 1.5,
  'height': 'screenSizeY-' + margin * 2,
  'screen': 'next'
})

const throwNextRight = slate.operation('throw', {
  'x': 'screenOriginX+(screenSizeX)/2+' + margin,
  'y': 'screenOriginY+' + margin,
  'width': 'screenSizeX/2+' + margin * 1.5,
  'height': 'screenSizeY+' + margin * 2,
  'screen': 'next'
})

const throwNextFullscreen = slate.operation('throw', {
  'x': 'screenOriginX',
  'y': 'screenOriginY',
  'width': 'screenSizeX',
  'height': 'screenSizeY',
  'screen': 'next'
});

const throwNext = function(win) {
  if (!win) return
  const winRect = win.rect()
  const screen = win.screen().visibleRect()

  const newX = (winRect.x - screen.x)/screen.width+'*screenSizeX+screenOriginX'
  const newY = (winRect.y - screen.y)/screen.height+'*screenSizeY+screenOriginY'
  const newWidth = winRect.width/screen.width+'*screenSizeX'
  const newHeight = winRect.height/screen.height+'*screenSizeY'
  const throwNext = slate.operation('throw', {
    'x': newX,
    'y': newY,
    'width': newWidth,
    'height': newHeight,
    'screen': 'next'
  })
  win.doOperation(throwNext)
}

const pushedLeft = function(win) {
  if (!win) return false
  const winRect = win.rect()
  const screen = win.screen().visibleRect()

  return winRect.x === screen.x
    && winRect.y === screen.y
    && winRect.width === screen.width / 2
    && winRect.height === screen.height
}

const pushedRight = function(win) {
  if (!win) return false
  const winRect = win.rect()
  const screen = win.screen().visibleRect()

  return winRect.x === screen.x + screen.width / 2
    && winRect.y === screen.y
    && winRect.width === screen.width / 2
    && winRect.height === screen.height
}

const isFullscreen = function(win) {
  if (!win) return false
  const winRect = win.rect()
  const screen = win.screen().visibleRect()
  return winRect.width === screen.width && winRect.height === screen.height
}


slate.bind('left:ctrl,cmd', function(win) {
  if (!win) return

  win.doOperation(pushLeftThird);
})

slate.bind('right:ctrl,cmd', function(win) {
  if (!win) return

  win.doOperation(pushRightTwoThirds);
})

S.bind('right:shift;alt;cmd', throwNextRight)
S.bind('left:shift;alt;cmd', throwNextLeft)
S.bind('left:ctrl;alt;cmd', pushLeft)
S.bind('right:ctrl;alt;cmd', pushRight)
S.bind('down:ctrl;alt;cmd', pushBottom)
S.bind('up:ctrl;alt;cmd', pushTop)
S.bind('c:ctrl;alt;cmd', centered)
S.bind('c:ctrl;cmd', centeredThird)
S.bind('m:ctrl;alt;cmd', fullscreen)
