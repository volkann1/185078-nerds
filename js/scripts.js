var link = document.querySelector(".contacts-btn")
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".close-popup");
var overlay = document.querySelector(".overlay");

link.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.add("pop-up-show");
  overlay.classList.add("pop-up-show");
});

close.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.remove("pop-up-show");
  overlay.classList.remove("pop-up-show");
});

overlay.addEventListener("click",function(event){
  event.preventDefault();
  popup.classList.remove("pop-up-show");
  overlay.classList.remove("pop-up-show");
});

    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.93970743, 30.31704635],
            zoom: 15
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark([59.938631,30.323055], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-point.png',
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -200]
        });

    myMap.geoObjects.add(myPlacemark);
});

