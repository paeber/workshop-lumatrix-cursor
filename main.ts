lumaMatrix.joystickChangedThread(function (direction) {
    if (lumaMatrix.compareJoystick(direction, lumaMatrix.eJoystickDirection.Center)) {
    	
    } else if (lumaMatrix.compareJoystick(direction, lumaMatrix.eJoystickDirection.Up)) {
    	
    } else if (lumaMatrix.compareJoystick(direction, lumaMatrix.eJoystickDirection.Down)) {
    	
    } else if (lumaMatrix.compareJoystick(direction, lumaMatrix.eJoystickDirection.Left)) {
    	
    } else if (lumaMatrix.compareJoystick(direction, lumaMatrix.eJoystickDirection.Right)) {
    	
    } else {
    	
    }
    if (!(lumaMatrix.compareJoystick(direction, lumaMatrix.eJoystickDirection.NotPressed))) {
        // Aktualisiere den Cursor nur dann, wenn eine Richtungsaktion ausgeführt wird
        lumaMatrix.setOnePixel(cursor_x, cursor_y, 0xffffff)
    }
})
let cursor_y = 0
let cursor_x = 0
lumaMatrix.initializeMatrix(127)
cursor_x = 0
cursor_y = 0
lumaMatrix.setOnePixel(cursor_x, cursor_y, 0xffffff)
