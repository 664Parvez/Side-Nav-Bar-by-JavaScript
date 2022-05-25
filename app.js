let bar = document.querySelector('.barIcon');
bar.addEventListener('click', function() {
    let sideBar = document.querySelector('.sideBar');
    sideBar.style.marginLeft = '0px';
})

let cross = document.querySelector('.cross');
cross.addEventListener('click', function(e) {
    let sideBar = document.querySelector('.sideBar');
    sideBar.style.marginLeft = '-100px';

    e.preventDefault();
})