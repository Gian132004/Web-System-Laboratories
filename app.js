
const title = document.getElementById('song-title');
const artist = document.getElementById('artist-name');
const addbutton = document.getElementById('add-button');
const ul = document.getElementById('songList')

addbutton.addEventListener('click', ()=>{
    const newTitle = title.value;
    const newArtist = artist.value;

    //create element
    const p = document.createElement('p');
    const small = document.createElement('small');
    const div = document.createElement('div');
    const li = document.createElement('li');
    const button = document.createElement('button')
    li.append(p);
    li.append(small);
    ul.append(li);
    li.append(button);

    console.log(li);
    

    


    //set value to the element
    p.innerHTML = newTitle;
    small.innerHTML = newArtist;


    button.innerHTML = "Delete";
    //add class to element
    p.classList.add('song-title');
    small.classList.add('artist-name');


    //create container



})

console.log(title, artist, addbutton)