function asyncExmple()
{
    for(var count=0; count< 10; count++)
    {
        window.setTimeout(function() { 
            console.log(count);
        },2000);
        
        
    } 
    asyncExmple();
}