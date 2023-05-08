import $ from "../core";

$.prototype.addAttribute = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }
    return this;
}

$.prototype.removeAttribute = function(name) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
    }
    return this;
}

$.prototype.toggleAttribute = function(name, force = true) {
    for (let i = 0; i < this.length; i++) {
        this[i].toggleAttribute(name, force);
    }
    return this;
}