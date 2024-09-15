let searchI=document.getElementById('searchInput');
let iphoneBtn=document.getElementById('iphoneBtn');
let galaxyBtn=document.getElementById('galaxyBtn');
let ipadBtn=document.getElementById('ipadBtn');
let macBtn=document.getElementById('macBtn');
let url;

searchI.addEventListener('input', function(){
    url=searchI.value;
})

ipadBtn.addEventListener('click',function(){

    window.open(url,'mywindow','width=1024,height=1366')
    
})

iphoneBtn.addEventListener('click',function(){

    window.open(url,'mywindow','width=375,height=812')
    
})

galaxyBtn.addEventListener('click',function(){

    window.open(url,'mywindow','width=412px,height=869px')
    
})

macBtn.addEventListener('click',function(){

    window.open(url,'mywindow','width=1920,height=1080')
    
})