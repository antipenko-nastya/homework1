var temp = {
Belarus: -14,
Russia: -17,
Korea: 1,
USA: 1,
}
console.log(temp);
var sum = 0;
var len = temp.length;
var sr = 0;
for (var key in temp){
    sum += temp[key];
    sr = Math.round(sum/len);
}
if (sr > 0)
console.log ("Среднее значение температур: +" + sr);
else
console.log ("Среднее значение температур: " + sr);
function maxzn(term){
var max = 0;
for (var key in term) {
    if (max < term[key]) max = term[key]
}
return max;
}
if (max > 0)
console.log ("Максимальная температура: +" + max);
else
console.log ("Максимальная температура: " + max);
