const backButton = document.getElementById('back');
const forwardButton = document.getElementById('forward');
const img = document.querySelector('img');
const imgUrls = [
    "https://plus.unsplash.com/premium_photo-1681400745727-c69f8e47f524?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    "https://images.unsplash.com/photo-1491466424936-e304919aada7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
    
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hYyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hYyUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    
    "https://plus.unsplash.com/premium_photo-1688645554172-d3aef5f837ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFjJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww"
];
let index = 0;

img.setAttribute('src', imgUrls[0]);

backButton.addEventListener('click', () => {
    if (index == 0) {
        index = imgUrls.length - 1
        img.setAttribute('src', imgUrls[index]);
    } else {
        index -= 1
        img.setAttribute('src', imgUrls[index]);
    }
});

forwardButton.addEventListener('click', () => {
    index += 1
    if(index == imgUrls.length){
        index = 0
        img.setAttribute('src', imgUrls[0])
    }else{
        img.setAttribute('src', imgUrls[index])
    }
});