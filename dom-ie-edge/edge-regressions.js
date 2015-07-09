
var data = require("./consolidated.json").results
,   regressions = []
;

for (var file in data) {
    for (var subt in data[file].subtests) {
        var res = data[file].subtests[subt].byUA;
        // console.log(res);
        if (res.Ie11 === "PASS" && res.Ed01 === "FAIL") regressions.push({ file: file, subtest: subt });
        // console.log(res.Ie11 + " | " + res.Ed01);
    }
}

console.log(regressions);
