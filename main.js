function findOdd() {
    let a = document.getElementById('input1').value;
    let b = document.getElementById('input2').value;
    let c = document.getElementById('input3').value;
    let dis = document.getElementById('answer').value;
    let ji = 'нет корней';
    
    if (dis ) {
        let dis = document.getElementById('answer').value = (b**2)+(-4*a*c);
    }
    
    else {
        let dis = document.getElementById('answer').value = (b**2)-(-4*a*c);
    }

     
    let x1 = document.getElementById('x-1').value = (-b + Math.sqrt(dis)) / (2 * a);
    let x2 = document.getElementById('x-2').value = (-b - Math.sqrt(dis)) / (2 * a);

    console.log(-b + Math.sqrt(dis));
    console.log(-b - Math.sqrt(dis));
}



