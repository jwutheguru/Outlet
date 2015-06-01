# Outlet

A Head Up Display plugin for print statements and console logs.

## Installation

Simply place quickerticker.js on your page.

    <script src="path/to/outlet.js" type="text/javascript"></script>

Outlet requires no dependencies.

## Usage

Outlet prints your statements and presents itself as a floating panel on the webpage. Outlet will print each statement as a new line in the floating panel. 

To use simply call:

    Outlet.print("Hello World!");

Outlet supports naming a particular print statement so subsequent calls will update that line instead of appending a new line:

    Outlet.print("Hello World!", "general-messages");

## Methods

 - print(text, name) - Display Outlet panel and appends text as new line. If "name" is passed in, then subsequent print() calls with the same "name" will update that particular line (as opposed to appending new line).
 - stop() - Stop Outlet print statements from appearing.
 - resume() - Resume Outlet print statements.
 - clear(hide) - Clear Outlet panel. Pass "true" into function to hide the Outlet panel as well.
 - hide() - Hide Outlet panel.
 - show() - Show Outlet panel.

## License

Licensed under the MIT License: [http://opensource.org/licenses/mit-license.php](http://opensource.org/licenses/mit-license.php)
