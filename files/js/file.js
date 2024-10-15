/*
Copyright amir javanmir
Released on: Oct 10, 2024
*/
function convertImagesAndVideosToBase64(){
    const images = document.querySelectorAll(".baseto64");
    const videos = document.querySelectorAll(".baseto64-video");

    images.forEach(function(img){
        convertToBase64(img,'src');
        const sources = img.closest("picture")?.querySelectorAll("source");
        if(sources){
            sources.forEach(function(source){
                convertToBase64(source,'srcset');
            })
        }
    })

    videos.forEach(function(video){
        convertToBase64(video,'src');
    })
}

function convertToBase64(tag,attr){
    const url = tag.getAttribute(attr);
    if(url){
        fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader();
            reader.onloadend = function(){
                tag.setAttribute(attr, reader.result);
            }
            reader.readAsDataURL(blob);
        })
        .catch(err => console.error('Error converting to base64:', err));
    }
}

function isFromSearchEngine(){
    const referrer = document.referrer;
    return (referrer.includes('google.com') || referrer.includes('bing.com') || referrer.includes('yahoo.com') || referrer.includes('duckduckgo.com') || referrer.includes('baidu.com'));
}

document.addEventListener("DOMContentLoaded",function(){
    if(isFromSearchEngine()){
        convertImagesAndVideosToBase64();
    }
})