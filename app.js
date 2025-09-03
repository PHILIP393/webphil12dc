// document.querySelector('#nav2>span:nth-child(1)').onclick = 
// function(){
//     document.querySelector('output').textContent = String.fromCodePoint(0x2b50);
// }
document.querySelectorAll('#nav_filter span').forEach(span => {
    span.onclick = (e) => {
        document.getElementById('selected').id = '';
        e.target.id = 'selected';
        document.querySelector('output').textContent = String.fromCodePoint(  e.target.textContent)
    }
})
document.querySelectorAll('#nav2 span').forEach(span => {
    span.onclick = (e) => {
        document.getElementById('sltd').id = '';
        e.target.id = 'sltd';
        document.querySelector('output').textContent = String.fromCodePoint(  e.target.textContent)
    }
})