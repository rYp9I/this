
// 1. вывести одной строкой минимальное значние массива array с помощью деструктуризации и Math
const array = [105,2,3,4,6,710,34013,13];
  console.log(Math.min(...array)); //2

// 2.функция multiply не принимает явно никаких параметров
const multiply = (...number) => {
  const result = number.reduce((tot, carr) => tot * carr);
  console.log(result);
}; // В результате фукнции должно вернутся число, которое является результатом умножения всех аргументов переданых в функцию

// 3. У нас есть фукниця totalPrice, с помощью деструктуризации объекта сделать так, что б функция работала.
const product = {
  productName: 'Water',
  price: 20,
  count: 3
}
function totalPrice({price, count}) {
   return price * count;
}
console.log(totalPrice(product));
//4. написать объект в котором будет свойство items (изначально пустой массив), 
// метод объекта setItems который принимает массив значений и устанавливает этот массив как значение свойста items
// метод объекта sum котроый возвращает сумму всех элементов массива items 
// метод maxValue который возвращает максимальное значение из массива items с использованием деструктуризации массива.
const mat = {
  items : [],
  setItems (arr) {
    this.items = arr;
  },
  sum() {
    return items.reduce((acc, curr) => acc + curr);
  },
  maxValue() {
    return Math.max(...this.items);
  }
};

// 5. Написать функционал что б при вызове showPrediction выводилась случайная фраза из массива predictsArr1 для predictions1 и predictsArr2 для predictions2

const predictsArr1 = [
   'Удача придет откуда не ждете.',
    'Давние долги будут возвращены вам.',
    'Вас ожидает неожиданное денежное поступление.',
    'Все неоконченные дела будут завершены.',
    'Яркое приключение уже поджидает вас.',
    'Планирование времени поможет вам не опоздать на встречу.',  
    'Интуиция на этот раз не подведет вас. Используйте это.',
    'Прислушайтесь к себе и ответ на вопрос будет найден.',
    'Появится возможность отправиться в дорогу.',
    'Ваш ценный опыт сможет кому-то помочь, если перестанете его прятать в себе.',
    'Вам не удастся понравиться абсолютно всем, не тратьте на это энергию.',
    'Одежда, которая вас старит, не достанется вам.'
  ]
  
const obj = {
   predictions: [],
   setPredictions(arr) {
    this.predictions = arr;
        },
   showPrediction() {
console.log(showPrediction);
        },
   takeNumber() {
          return Math.floor(Math.random()*predictsArr1.length)
        },
}
const predictions = obj;
predictions.setPredictions(predictsArr);