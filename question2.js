// Write a Javascript program to swap two numbers without using a third variable.

const swapWithoutTemp = (var1 , var2) => {
    var1 = var1*var2;
    var2 = var1/var2;
    var1 = var1/var2;
    return var1, var2 ;
};