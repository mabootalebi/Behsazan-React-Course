const rootNode = document.querySelector('#root');

const input_div = document.createElement('div');
input_div.setAttribute('id','inputSection');

const input_desc = document.createElement('span');
input_desc.innerText = 'Number of Photos: ';

const number_input = document.createElement('input');
number_input.type = 'number';
number_input.setAttribute('id', 'photosNumber');

const receive_button = document.createElement('button');
receive_button.innerHTML = 'Receive';

input_div.appendChild(input_desc);
input_div.appendChild(number_input);
input_div.appendChild(receive_button);

const displayPhotosNode = document.createElement('div');
displayPhotosNode.setAttribute('id', 'diplayPhotosDiv');

rootNode.appendChild(input_div);
rootNode.appendChild(displayPhotosNode);


receive_button.onclick = () => {

    const num = document.querySelector('#photosNumber').value;
    displayPhotosNode.textContent = '';
    displayPhotosNode.className = 'photosBackGround';

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(json => {
        for (let i = 0 ; i< num ; i++){
            let { thumbnailUrl, title } = json[i];

            const child_div = document.createElement('div');
            child_div.className = 'photos_div';
            
            const child_img = document.createElement('img');
            child_img.className = 'photos';            
            child_img.src = `${thumbnailUrl}`;
            child_img.title = `${title}`;
            child_img.alt = `${title}`;

            const child_title = document.createElement('span');
            child_title.className = 'photos_title';
            child_title.innerText = `${title}`;

            child_div.appendChild(child_img);
            child_div.appendChild(child_title);

            displayPhotosNode.appendChild(child_div);
        }        
    })
}