var images = [];
var currentIndex = 0;

window.onload = function() {
    // Fetch JSON content from a file
    fetch('https://raw.githubusercontent.com/M-A-Monaem-Khan/WebVisibilityProject/refs/heads/main/DataFile/ImageList.json')
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            console.log(data); // Log the data            
            images = data;            
            checkBtnVisibility();
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
    console.log("cureent index - "+currentIndex);
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