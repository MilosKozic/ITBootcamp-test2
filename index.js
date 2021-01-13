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
    const opt= document.createElement('option') 
    opt.textContent=`${dino.name}`
    opt.value=`${dino.name}`
    select.appendChild(opt)  

})  

const divNar = document.querySelector("#item-container")

let arr = []

inputKupac = document.querySelector("#kupac")
txtArea = document.querySelector(".textarea-field")

form.addEventListener('submit', (e) => {
    
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
    e.preventDefault()
   let x = dinos.findIndex(el=> el.name == select.value)

    const divItem = document.createElement('div')
    divItem.className = "item"
    divItem.innerHTML = `  <p><span>Купац:</span>${inputKupac.value}</p>
    <p><span>Напомена:</span> ${txtArea.value}</p>
    <p><span>Диносаурус: </span> ${select.value}</p>
    <p><span>Цена: </span> ${dinos[x].cena}</p>  
    `  
    let niz = {
        izabraniDIno: select.value,
        Kupac: inputKupac.value,
        Napomena: txtArea.value,
        Cena: dinos[x].cena
    }
    arr.push(niz)
    console.log(arr)

    divNar.appendChild(divItem)

    const p = document.createElement('p')
    const btn = document.createElement('button')
    divItem.appendChild(p)
    p.appendChild(btn)
   btn.textContent="obrisi"
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.remove() 

        arr.splice(arr.indexOf(niz),1)
    })
    inputKupac.value=""
    txtArea.value=""

})

const btnIspis = document.querySelector("#btn-all")

btnIspis.addEventListener('click', () => {
    console.log(arr)
})
console.log(dinos.indexOf("Efraasia"))

