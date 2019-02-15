'use strict';

function List() {
    this.length = 0;
    this.data = [];
}
  
List.prototype.pushThis = function(value){
    
    this.data[this.length] = value;
    this.length++;
    };

List.prototype.popThis = function() {
    this.length--;
    delete this.data[this.length];
    return this.data;
};

List.prototype.shiftThis = function(){
    delete this.data[0];
    return this.data;
  }
  
List.prototype.unshiftThis = function(value){
    this.length++;
    this.data = [value, ...this.data];
    return this.data;
};

List.prototype.forEachThis = () => {
    return 'Moving Forward';
  };
  
List.prototype.mapThis = () => {
    return 'Stopping';
  };

  List.prototype.filterThis = () => {
    return 'Moving Forward';
  };
  
List.prototype.reduceThis = () => {
    return 'Stopping';
  };

module.exports = {List};