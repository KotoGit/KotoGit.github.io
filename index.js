"use strict";
var possibleEvents = new Set(["input", "onpropertychange", "keyup", "change", "paste"]);
window.onload = function () {
    var ticksInput = document.getElementById("ticks");
    possibleEvents.forEach(function (eventName) {
        ticksInput.addEventListener(eventName, function (ev) {
            var inputElement = ev.target;
            var handler = new TickInputHandler();
            handler.showResult(inputElement);
        });
    });
};
var TickInputHandler = /** @class */ (function () {
    function TickInputHandler() {
    }
    TickInputHandler.prototype.showResult = function (inputElement) {
        // Get value from the input and try to convert it to type Number
        var valueStr = inputElement.value;
        var ticks = Number(valueStr);
        var dateString = String();
        // If we were not able to parse input as a Number - show empty DateTimeString
        if (isNaN(ticks)) {
            dateString = "____-__-__T__:__:__.____Z";
        }
        // convert the ticks into something typescript understands
        var ticksSinceEpoch = ticks - TickInputHandler.epochTicks;
        var millisecondsSinceEpoch = ticksSinceEpoch / TickInputHandler.ticksPerMillisecond;
        // If the value of the input is more than max value - show special DateTime string for this case
        if (millisecondsSinceEpoch > TickInputHandler.maxDateMilliseconds) {
            dateString = "9999-99-99T99:99:99:9999Z";
        }
        // output the result in something the human understands
        var date = new Date(millisecondsSinceEpoch);
        return date.toISOString();
        var dateTimeOutput = document.getElementById("datetime");
        dateTimeOutput.innerHTML = dateString;
    };
    // Ticks value for date 01-01-1970
    TickInputHandler.epochTicks = 621355968000000000;
    TickInputHandler.ticksPerMillisecond = 10000;
    // http://ecma-international.org/ecma-262/5.1/#sec-15.9.1.1
    TickInputHandler.maxDateMilliseconds = 8640000000000000;
    return TickInputHandler;
}());
//# sourceMappingURL=index.js.map