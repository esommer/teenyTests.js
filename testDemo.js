var Tester = require('./tester.js');
var Demo = require('./demo.js');

var tester = new Tester();
var demo = new Demo();

// test demo.initialize
tester.envs.push(function () {
    tester.set("initialize sets name and status", "initialize not working", {"name":"pig","status":"initialized!"}, demo.initialize, ['pig'], demo);
});

tester.displayOptions = {
    showDetails : true,
    showStacksOnError : true
};

tester.build();
console.log(tester.display());
