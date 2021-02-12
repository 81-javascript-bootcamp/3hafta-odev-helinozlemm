const petsModule = (function(){
    const _data = [
        {
            image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
            name: "Sam",
            type: "Golden Retriever/St. Bernard Mix",
            sound: "bark",
            soundText: "Bark - type b"
        },
        {
            image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
            name: "Mellie",
            type: "Domestic Shorthair",
            sound: "meow",
            soundText: "Meow - type m"
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/571953d8f699bbe29b4d121d/1534831666855-PTGF9Q4VON4YT49LHHVV/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_1398.jpg?format=2500w",
            name: "Lexa",
            type: "Vulpes",
            sound: "fox",
            soundText: "Fox- type f"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Snowy_Owl_%28240866707%29.jpeg",
            name: "Hedwig",
            type: "Snow Owl",
            sound: "owl",
            soundText: "Owl -type o"
        }
    ];
    const $tbodyEl = document.querySelector("tbody");
    const $mainImageEl = document.querySelector(".main-image");
    

    const getButtons = function(){
        return document.querySelectorAll("button");
    }

    const createPetElement = function(pet){
        return "<tr class='pet-row'><td><img class='pet-image' src='"+pet.image+"' /></td><td>"+pet.name+"</td><td>"+pet.type+
        "</td><td><button class='btn btn-success' data-sound='"+pet.sound+"'>"+pet.soundText+"</button></td></tr>"
    };

    const addToTable = function(content){
        $tbodyEl.innerHTML += content;
    }

    const putPetsInHtml = function(){
        for(let i=0; i< _data.length; i++){
            addToTable(createPetElement(_data[i]));
        }
    }

    const bindEvents = function(){
        const buttons = getButtons();
        for(let i= 0; i< buttons.length; i++){
            buttons[i].addEventListener("click", function(event){
                event.stopPropagation();//diğerlerinin calısmaması icin eklendi.
                const soundId = this.dataset.sound;
                const soundElement = document.getElementById(soundId);
                if(soundElement){
                    soundElement.play();
                }
            });
        }
    }
      //ilgili harflere bastıgında seslere erişiliyor.
      document.addEventListener("keydown", function(e){
        if(e.keyCode === 66 ){
            console.log("b ye basıldı");
            document.getElementById('bark').play();

        }else if( e.keyCode === 77){
            console.log("m ye basıldı");
            document.getElementById('meow').play();
        } else if( e.keyCode === 70){
            console.log("f'ye basıldı");
            document.getElementById('fox').play();
        }else if( e.keyCode ===79){
            console.log("o 'ya basıldı");
            document.getElementById('owl').play();
        }
          
        else{
            console.log("Baska bir tusa basildi");
        }
    });



    const getRows = function(){
        return document.querySelectorAll(".pet-row");
    }
    //satıra tıklandıgında tıklanan satırın rengi değişiyor.Tekrar tıklandığında eski rengine dönüyor.Aynı zamanda yandaki resim ile değişiyor.
    const changeBackground = function(){
        const rows = getRows();
        rows.forEach((row,index) => {
            console.log({index}) 
            row.addEventListener("click", function(){
                $mainImageEl.setAttribute("src",_data[index].image); 
                row.classList.toggle("change-background");
            });
        })
    }

    const init = function(){
        putPetsInHtml();
        bindEvents();
        changeBackground();
    }

    return {
        init: init
    }
})();