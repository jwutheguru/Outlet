/**
 *  Outlet
 *  =================================
 *  A Head Up Display plugin for print statements and console logs.
 *
 *  (c) 2015 J. "Eric" Wu
 *  Released under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

!function(global) {
    'use strict';

    var previousOutlet = global.Outlet;

    var Outlet = (function(window, document, undefined) {
        var outletPanel = document.getElementById('#js-outlet') || createOutletPanel();
        var panelOpen = false;
        var outletStopped = false;

        /**
         * Initializes and builds the debug panel output element on page.
         *
         * @returns {Object HTMLElement} The debug panel element.
         */
        function createOutletPanel() {
            var elem = document.createElement('div');

            elem.setAttribute('id', 'js-outlet');
            elem.style.position = 'fixed';
            elem.style.top = '0';
            elem.style.left = '0';
            elem.style.display = 'none';
            elem.style.margin = '15px';
            elem.style.padding = '8px 12px';
            elem.style.font = 'normal normal 300 14px/120% Helvetica, Arial, sans serif';
            elem.style.color = '#000';
            elem.style.backgroundColor = '#f2d33c';
            elem.style.border = '3px solid #f2780e';
            elem.style.borderRadius = '10px';
            elem.style.zIndex = '9001 !important';

            document.body.appendChild(elem);

            return elem;
        }

        /**
         * Display Outlet panel and appends text as new line.
         * If @param name is passed in, then subsequent print(text, name) calls
         * with the same @param name will update that particular line
         * (as opposed to appending new line)
         *
         * @param {String} text Text string to display
         * @param {String | optional} name Identifier of the print line. If exist, update line text instead of append new line
         */
        function print(text, name) {
            if (outletStopped)
                return;

            if (!panelOpen) {
                outletPanel.style.display = '';
                panelOpen = true;
            }

            if (name) {
                var outputLine = outletPanel.querySelector('div[name="' + name + '"]');
                if (outputLine) {
                    outputLine.innerHTML = text;
                    return;
                }
            }
            var newLine = document.createElement('div');
            if (name)
                newLine.setAttribute('name', name);

            outletPanel.appendChild(newLine);
            newLine.innerHTML = text;
        }

        /**
         * Stop Outlet print statements.
         */
        function stop() {
            outletStopped = true;
        }

        /**
         * Resume Outlet print statements.
         */
        function resume() {
            outletStopped = false;
        }

        /**
         * Clear Outlet panel.
         * @param {boolean} hide Whether to hide Outlet panel as well
         */
        function clear(hide) {
            while (outletPanel.firstChild)
                outletPanel.removeChild(outletPanel.firstChild);
            panelOpen = false;

            if (hide)
                hide();
        }

        /**
         * Hide Outlet panel. Messages are retained.
         */
        function hide() {
            outletPanel.style.display = 'none';
        }

        /**
         * Show Outlet panel.
         */
        function show() {
            outletPanel.style.display = '';
        }

        // Public methods
        return {
            print: print,
            stop: stop,
            resume: resume,
            clear: clear,
            hide: hide,
            show: show,
            noConflict: noConflict
        };

    })(window, document);

    Outlet.noConflict = function noConflict() {
        global.Outlet = previousOutlet;
        return Outlet;
    };

    global.Outlet = Outlet;

}(this);