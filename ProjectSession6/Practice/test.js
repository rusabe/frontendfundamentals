function Apple(type){
    this.type = type;
    this.color = "red";
    this.getInfo2 = function(){
        return this.color + ' ' + this.type + ' apple 2';
    };
};

Apple.prototype.getInfo =  function () {
    return this.color + ' ' + this.type + ' apple';
};

var a = new Apple('Fuji');
console.log(a.getInfo());
console.log(a.getInfo2());