var student1 = {
    'id': 19,
    'name': 'karim',
    'age': 21,
    'adresse': {
        'city': 'tripoli',
        'road': 'main road'
    },
    'uni': 'LIU',

}
var student2 = {
    'id': 25,
    'name': 'mhmd',
    'age': 20,
    'adresse': {
        'city': 'tripoli',
        'road': 'second road'
    },
    'uni': 'BOU',

}
var student3 = {
    'id': 29,
    'name': 'kamal',
    'age': 13,
    'adresse': {
        'city': 'tripoli',
        'road': 'mina road'
    },
    'uni': 'LIU',

}
var student4 = {
    'id': 238,
    'name': 'abed',
    'age': 28,
    'adresse': {
        'city': 'tripoli',
        'road': 'maarad road'
    },
    'uni': 'NDU',

}
students = []
students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);
students.forEach((element) => {
    console.log('hi' + ' ' + element.name)
});
var numbers = [1, 3, 5, 7, 9]

var Filtredstudents = students.filter((fil) => {
    return fil.adresse.road == 'main road'
})
console.log(Filtredstudents)
var times2 = numbers.map((num) => {
    return num * 2
})
console.log(times2)

students.forEach((student) => {
    switch (student.uni) {
        case 'LIU':
            console.log('HI LIU student');
            break;
        case 'BOU':
            console.log('HI BOU student');
            break;
        default:
            console.log('HI');
            break;
    }
})
function ShowBoy() {
    document.getElementById('img1').src = ('https://cdn.pixabay.com/photo/2016/10/05/17/26/indian-1717192_960_720.jpg')
}
function ShowGirl() {
    document.getElementById('img1').src = ('https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_960_720.jpg')
}
var shown = true;
function Switch() {
    shown = !shown;
    if (shown == true) {
        document.getElementById('img1').src = ('https://cdn.pixabay.com/photo/2016/10/05/17/26/indian-1717192_960_720.jpg')
    }
    else {
        document.getElementById('img1').src = ('https://cdn.pixabay.com/photo/2017/08/01/08/29/woman-2563491_960_720.jpg')
    }
}
fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(json =>{
        var SelectCountry = document.getElementById('SelectCountry')
        var Ulist = document.getElementById('Ulist')
        json.forEach(ctr => {
            var option = document.createElement('option')
            option.innerHTML=ctr.name
            SelectCountry.appendChild(option)
            var Items = document.createElement('li')
            Items.innerHTML=ctr.name
            Ulist.appendChild(Items)
            var Flag = document.createElement('img')
            Flag.style.height='100px'
            Flag.style.width='100px'
            Flag.src=ctr.flags.png
            Items.appendChild(Flag)
        });
    })
