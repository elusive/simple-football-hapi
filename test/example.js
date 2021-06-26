module.exports = {
    running: 0,
    plus: function(y) {
        running += y;
        console.log(running);
        return running;
    },
    minus: function minus(z) {
        running -= z;
        console.log(running);
        return running;
    },
    clear: function() {
        running = 0;
        console.log(running);
        return running;
    }
};