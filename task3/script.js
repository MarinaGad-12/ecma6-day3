let obj={
    name:"marina",
    age:22,
    address:"suez"
}
let handler={
    set:function(target,prop,value){
        if (prop === "name") {
            if (value.length >7)
                throw "max length is 7"
            target[prop] = value;
        }
        if( prop === "age"){
            if (!Number.isInteger(value)) {
                throw 'The age is not an integer';
              }
            if (value < 25 || value > 60 ) {
                throw 'The age seems invalid';
              }
            target[prop] = value;
        }
        if(prop === "address"){
            if(!/^[A-z]+$/.test(value)) {
                throw ' accepts only string'
               
           }
    
        }
        
    },
    get: function (target,prop) {
        return target[prop]
    }
}
let objj=new Proxy(obj,handler);