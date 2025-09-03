const anchors = document.querySelectorAll('#slider-btns>a');
for(const a of anchors){
    a.addEventListener('click', () => {
    anchors.forEach((anc) => anc.classList.remove('on'));    
    a.classList.toggle('on');
   });
}









// console.log([1,2,3,4,5][1])
// const animals = ["owls", "haRpy", "sloTh", "pengUin"];
// function findSquare(n){
//     console.log(`The square of ${n} is ${n*n}.`)
// }
// findSquare(7)
// function logger(z, d){
//     console.log('I drink', z ,"every" ,d,'.')
//     // console.log(animals.at(-2))
// }
// logger('water',"saturday");
// console.log(animals.at(-1).toLowerCase())
// for(const i of animals){ 
//     if(i.toLowerCase() === animals [2].toLowerCase()) continue
//     console.log(i.toLowerCase())
// }



const int = [2,4,6];
int.push(8,10,12)
int.unshift(-2,-4);
int.pop();
int.shift();
int.includes(-2)
int.push(100,200)
// console.log(int.at(-4))

document.querySelectorAll('.img').forEach(img => {
    img.addEventListener('click', (e) => {
        document.querySelector('aside').classList.add('view');
    });
});
document.querySelector('button.close').addEventListener('click', (e) => {
    document.querySelector('aside').classList.remove('view');
})

const confetti = document.querySelector('.confetti');
window.addEventListener('mousemove', (e) => {
    confetti.style.top = e.offsetY + 'px';
    confetti.style.left = e.offsetX + 'px';
})