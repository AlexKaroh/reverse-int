module.exports = function reverse_a_number(n)
{

var out = n<0?n*=-1:n;
	n = n + "";
 return 	n.split("").reverse().join("");
}
