var models=[
    {
        name:"Bmw 1.16d",
        image:"img/bmw.jpg",
        link:"https://www.bmw.com.tr/tr/index.html"
    },
    {
        name:"Honda 77",
        image:"img/honda.jpg",
        link:"https://honda.com.tr/"
    },
    {
        name:"Mazda 88",
        image:"img/mazda.jpg",
        link:"https://www.mazda.com.tr/"
    },
    {
        name:"Skoda 99",
        image:"img/skoda.jpg",
        link:"https://www.skoda.com.tr/"
    },
    {
        name:"Volvo 33",
        image:"img/volvo.jpg",
        link:"https://www.volvocars.com/tr"
    }
];

var index=2;
var slaytCount=models.length;
var interval;

var settings={
    duration:'2000',
    random:true
}


init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);

    });


});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    });

});


function init(settings){
    var prev;
    interval=setInterval(function(){
        if(settings.random){
            //random index
            do{
            index=Math.floor(Math.random()*slaytCount);
            }while(index==prev)
            prev=index;

        }else{
            //artan index->fakat burada yukarıdaki randomu false yapacaksın
            if(slaytCount==index+1){
                index=-1;
            }
            showSlide(index);
            index++;

        }
        


        showSlide(index);
    },settings.duration)
}



function showSlide(i){

    index=i;

    if(i<0){
        index= slaytCount-1;
        
    }
    if(i>=slaytCount){
        index=0;
    }

    document.querySelector('.card-title').textContent=models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);


}

