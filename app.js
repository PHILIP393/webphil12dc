// document.querySelector('#nav2>span:nth-child(1)').onclick =
// function(){
//     document.querySelector('output').textContent =
//      String.fromCodePoint(0xef498);
// }
document.querySelectorAll('#nav_filter span').forEach(span => {
    span.onclick = (e) => {
        document.getElementById('selected').id = '';
        e.target.id = 'selected'
        e.target.id = 'selected';
        document.querySelector('output').textContent = 
        String.fromCodePoint(e.target.textContent)
    }
})
document.querySelectorAll('#nav2 span').forEach(span => {
    span.onclick = (e) => {
        document.getElementById('NEWEST').id = '';
        e.target.id = 'NEWEST'
        e.target.id = 'NEWEST'
        document.querySelector('output').textContent = 
        String.fromCodePoint(e.target.textContent)
    }
})
