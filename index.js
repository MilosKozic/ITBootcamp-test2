let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]
const select = document.querySelector('#select-dino')
const form = document.querySelector('#forma')
const divForm = document.querySelector('.form-style-2')


dinos.forEach(dino => {
    // const opt= document.createElement('option')   / mozda bez ovog
    // select.textContent=`${dino.name}`
    // select.value=`${dino.id}`
    // select.appendChild(opt)  / i ovog..ali nemam vremena da testiram

})  // ne znam zasto ne funkcionise..pa se nisam zadrzavao

const divNar = document.querySelector("#item-container")

let arr = []

inputKupac = document.querySelector("#kupac")
txtArea = document.querySelector(".textarea-field")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const divItem = document.createElement('div')
    divItem.className = "item"
    divItem.innerHTML = `  <p><span>Купац:</span>${inputKupac.value}</p>
    <p><span>Напомена:</span> ${txtArea.value}</p>
    <p><span>Диносаурус: </span> ${select.value}</p>
    <p><span>Цена: </span> 199</p>  
    <p><button id="del">Обриши</button></p>`  //nemam vremena, trebao bih da izvadim dugme odavde..napravim ga posebno preko create element. i onda njega koristim za brisanje
                                               //ovako brise samo zadnji delete :(
    let niz = {
        izabraniDIno: select.value,
        Kupac: inputKupac.value,
        Napomena: txtArea.value,
        Cena: "199" //za sad ako imam vremena vraticu se//treba koristiti dinos [dinos.indexof(select.value)].cena
    }
    arr.push(niz)
    console.log(arr)

    divNar.appendChild(divItem)

    if (inputKupac.value.length == 0) {
        window.alert("Nisu sva polja popunjena")
        return
    }
    if (select.value.length == 0) {
        window.alert("Nisu sva polja popunjena")
        return
    }
    if (inputKupac.value.length <= 4) {
        window.alert("Unos kupac mora imati vise od 4 slova")
        return
    }

    const btn = document.querySelector('#del')
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.remove() 

        // brisanje iz niza bih radio, arr.splice(arr.indexOd(niz).1)
    })


})

const btnIspis = document.querySelector("#btn-all")

btnIspis.addEventListener('click', () => {
    console.log(arr)
})

