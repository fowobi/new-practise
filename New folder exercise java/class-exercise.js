function test(){
    let a = 1;
    console.log(a);
    console.log(foo());
    // let a = 1;
    function foo(){
        return 2;
    }
}
test();