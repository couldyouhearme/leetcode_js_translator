// Start Pattern
//https://www.tutorialstonight.com/js/javascript-star-pattern.php#right-triangle-star-pattern
// give an input number like 6, output a triangle  like:

//   space*5        #
//   space*4    ##
//       ###
//     ####
//   #####
// space 0 ###### line 6

// Three loops:
// 1 Outer: control line print
// 2 Inner: one for print ‘space’ and one for print ‘#’
// Use ‘\n’ to change lines
// Use string to join patterns

function printTri(n) { // n: numLine, num of maxSharp
    let str = ''
    for (i = 1; i <= n; i++) { //i = numLine, print line by line
        for (k = n - i; k >= 0; k--) { //numSpace + numLine = n
            str += ' '
        }
        for (j = 1; j <= i; j++) { //numSharp = numLine
            str += '#'
        }
        str += '\n'
    }
    console.log(str)
    //return str
}
printTri(6)