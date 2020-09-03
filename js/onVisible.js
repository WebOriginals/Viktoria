var onVisible = {
    elements: [],

    add: function (query, offset, callback) {
        var elements = document.querySelectorAll(query);

        Array.prototype.forEach.call(elements, function (value) {
            this.elements.push([value, value.getBoundingClientRect().top + window.scrollY + offset, callback]);
        }, this);
    },

    clean: function () {
        this.elements.length = 0;
    }
};

var onScroll = function () {
    var scroll = window.scrollY + window.innerHeight;

    onVisible.elements.forEach(function (value) {
        if (value[1] !== false && scroll >= value[1]) {
            // console.log(value[1]);
            value[1] = false;
            value[2]();


            // console.log(scroll);  
        }
    });
};

window.addEventListener('DOMContentLoaded', onScroll);
window.addEventListener('scroll', onScroll);