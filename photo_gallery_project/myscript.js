var openExplain = () => {
    element = document.getElementById('content');
    element.style.display = 'block';
}

var closeExplain = () => {
    element = document.getElementById('content');
    element.style.display = 'none';
}

var doOver = (element) => document.getElementById('image').innerHTML=element.alt;

var doOut = () => document.getElementById('image').innerHTML="Hover over an image below to display here."