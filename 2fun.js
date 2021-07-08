//Q4. Consider the two functions below. Will they both return the same thing? Why or why not?
//function foo1()
//{
//return {
//bar: "hello"
//};
//}
//function foo2()
//{

function foo1()
{
    return{
        bar:"hello"
    };
}

function foo2()
{
    return
    {
        bar:"hello"
    };
}

    
console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());



//foo1 returns:
//Object {bar: "hello"}
//foo2 returns:
//undefined 