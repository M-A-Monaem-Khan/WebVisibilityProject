var images = [];
var card = [];
var currentIndex = 0;

window.onload = function() {
    // Fetch JSON content from a file
    fetch('https://raw.githubusercontent.com/M-A-Monaem-Khan/WebVisibilityProject/refs/heads/main/DataFile/ImageList.json')
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            images = data;            
            checkBtnVisibility();
        })
        .catch(error => {
            console.error('Error reading the JSON file:', error);
        });

        fetch('https://raw.githubusercontent.com/M-A-Monaem-Khan/WebVisibilityProject/refs/heads/main/DataFile/cardData.json')
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {           
            card = data;
            CardView();
        })
        .catch(error => {
            console.error('Error reading the JSON file:', error);
        });
};

function changeImage() {    
    checkBtnVisibility();
    var img = document.getElementById('myImage');
    img.src = './Images/'+images[currentIndex].imageName;
    if(currentIndex == images.length-1){
        currentIndex = -1;
    }
    currentIndex = (currentIndex + 1);
    
}

setInterval(changeImage, 5000);

function checkBtnVisibility(){
    if(currentIndex == 0){
        var d = document.getElementById('prevbtn');
        d.style.display = 'none';
    }
    else{
        var d = document.getElementById('prevbtn');
        d.style.display = 'block';
    }

    if(currentIndex == images.length-1){
        var d = document.getElementById('nextbtn');
        d.style.display = 'none';
    }
    else{
        var d = document.getElementById('nextbtn');
        d.style.display = 'block';
    }
}

function nextClick() {
    currentIndex = (currentIndex + 1);
    checkBtnVisibility();
    var img = document.getElementById('myImage');
    img.src = './Images/'+images[currentIndex].imageName;
}

function prevClick() {
    currentIndex = (currentIndex - 1);
    checkBtnVisibility();
    var img = document.getElementById('myImage');
    img.src = './Images/'+images[currentIndex].imageName;
}

function CardView(){
    if(card.length > 0){
        document.getElementById('cardId').style.display = '';
    }
    var text = '';
    card.forEach(v=>{
        text = text + `<div class="card-body">
                <h2 class="card-title">${v.cardTitle}</h2>
                <p class="card-text">${v.cardHead}</p>
                <button onclick="learnMoreClick('${v.cardTitle}','${v.cardBody}')" class="card-btn">Read More</button>
            </div>`;
    })

    document.getElementById('cardId').innerHTML = text;
}

function closePopupClick(){
    document.getElementById('popupTitle').innerText = '';
    document.getElementById('popupBody').innerText = '';
    document.getElementById('overlay').style.display = 'none';
}

function learnMoreClick(title,text){
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupBody').innerText = text;
    document.getElementById('overlay').style.display = 'block';
}