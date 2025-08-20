    const anchor = document.querySelectorAll('#slider-btns > a')
    for(const a of anchor){
        a.addEventListener('click', () => {
            anchor.forEach((anc) => anc.classList.remove('on'))
            a.classList.add('on')
            console.log(a.getAttribute('href'))
        })
    }

































// const animals = ["OwL", "hArPY", "slOTh", "pEGUin"]
// console.log(animals.at (-1))

// funct/ion FindSqaure(n){
    // console.log(`The square of ${n} is ${n*n}.`)
// }
// FindSqaure(7);
// for(const a of animals){ 
    // if(a.toLowerCase() === 'sloth') continue
    // console.log(a.toLowerCase())}