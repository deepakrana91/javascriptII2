var num = [23,45,76];

greatest()
function greatest()
{
    var great=num[0];
    for(i=0;i<=num.length;i++)
    {
        if(num[i]>great)
        great=num[i];
    }
    console.log(great);
}