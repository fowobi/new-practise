let salaries = {
    ross: 30000,
    monica:55000,
    rachel: 90000,

};

for(const name in salaries){
    const salary = salaries[name];
    console.log(name,salaries[name]);
}
console.table(salaries);