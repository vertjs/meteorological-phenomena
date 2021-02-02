const inputs = document.querySelectorAll('input')

function oper(inputs) {
  const arr = Array.from(inputs)
  
  arr.forEach(function(el) {
    el.addEventListener('click', changeData)
  })

  function changeData(event) {
    let id = event.currentTarget.id - 1
    let parent = document.querySelectorAll('.item')[id]
    
    
  if(event.currentTarget.checked) {
      parent.querySelector('img').src = active[id].img
      parent.querySelector('h3').textContent = active[id].title
      parent.querySelector('p').textContent = active[id].text
      parent.querySelector('.header').style.backgroundColor = '#7c002f'
    } else {
      parent.querySelector('img').src = inactive[id].img
      parent.querySelector('h3').textContent = inactive[id].title
      parent.querySelector('p').textContent = inactive[id].text
      parent.querySelector('.header').style.backgroundColor = '#a3a6ab'
    }
  }
}

if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    return function from(inputs/*, mapFn, thisArg */) {
      var C = this;
      var items = Object(inputs);
      if (inputs == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }
      
      var len = toLength(items.length);
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);
      var k = 0;
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      A.length = len;
      return A;
    };
  }());
}

oper(inputs);

const active = [
  {
    title: "Сильный ветер (шквалистый)",
    img: "../img/4XUh3o3.png",
    text: "Скорость порывов от 25м/c и более."
  },
    {
    title: "Сильный дождь (Ливень)",
    img: "../img/AEVefPS.png",
    text: "Кол-во осадков 100 мм и более, в период менее чем за 12 часов."
  },
    {
    title: "Сильный снег",
    img: "../img/gqMwsVV.png",
    text: "Кол-во осадков 20 мм и более, в период менее чем за 12 часов."
  },
    {
    title: "Сильная Метель",
    img: "../img/lCu780S.png",
    text: "При ветре 20 м/c в течение суток с выпадением снега."
  },
    {
    title: "Крупный Град",
    img: "../img/kHH4SdP.png",
    text: "Диаметр градин 20 мм и более."
  },
    {
    title: "Сильный Гололед",
    img: "../img/wAgV8bq.png",
    text: "Диаметр отложений на проводах 20 мм и более."
  },
    {
    title: "Сильный Мороз",
    img: "../img/e56UgEk.png",
    text: "Температура воздуха у поверхности земли - 30°C и ниже для Европейской части РФ."
  }
]

const inactive = [
  {
    title: "Ветер",
    img: "../img/wind.png",
    text: ""
  },
    {
    title: "Дождь",
    img: "./img/rains.png",
    text: ""
  },
    {
    title: "Снег",
    img: "./img/snow.png",
    text: ""
  },
    {
    title: "Метель",
    img: "./img/KRLdKjL.png",
    text: ""
  },
    {
    title: "Град",
    img: "./img/zaQBiTe.png",
    text: ""
  },
    {
    title: "Гололед",
    img: "./img/hh0e6au.png",
    text: ""
  },
    {
    title: "Мороз",
    img: "./img/KQbtVAi.png",
    text: ""
  }
]


var b = document.documentElement;
b.setAttribute('data-useragent',  navigator.userAgent);
b.setAttribute('data-platform', navigator.platform );