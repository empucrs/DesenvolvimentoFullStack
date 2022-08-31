//02c_let.js
function testVar(){
    let let01="let 01"
    {
        console.log("01a."+let01)
        let let01="let 02"
        console.log("02a."+let01)
    }
    console.log("03a."+let01)
}

testVar()

