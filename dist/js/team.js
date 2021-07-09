const TEAM_DIRECTORES = [
    {
       name: 'Marco Villa',
       position: 'Socio fundador',
       img: 'colaborador-marco-villa.png',
    },
    {
       name: 'Brando Fernández',
       position: 'Socio fundador',
       img: 'colaborador-brando-fernandez.png',
    },
]

const TEAM_GERENTES = [
   {
        name: 'Ximena Mendoza',
        position: 'Gerente de Capital Humano',
        img: 'colaborador-ximena-mendoza.png',
    },
    {
        name: 'Fernanda Sánchez',
        position: 'Gerente de Operaciones y Administración ',
        img: 'colaborador-fernanda-sanchez.png',
    },
    {
        name: 'Karina González',
        position: 'Office Manager',
        img: 'colaborador-karina-gonzalez.png',
    },
    {
        name: 'Valeria Martínez',
        position: 'Community Manager',
        img: 'colaborador-valeria-martinez.png',
    },
]

const TEAM_ASESORES = [
    {
        name: 'Vladimir Vera',
        position: 'Asesor Patrimonial',
        img: 'colaborador-vladimir-vera.png',
        rank: 1,
    },
    {
        name: 'Wendy Figueroa',
        position: 'Asesor Patrimonial',
        img: 'colaborador-wendy-figueroa.png',
        rank: 2,
    },
    {
        name: 'César Mata',
        position: 'Asesor Patrimonial',
        img: 'colaborador-cesar-mata.png',
        rank: 3,
    },
    {
        name: 'Gerardo Patiño',
        position: 'Asesor Patrimonial',
        img: 'colaborador-gerardo-patino.png',
        rank: 4,
    },
    {
        name: 'Yessica Beamonte',
        position: 'Asesor Patrimonial',
        img: 'colaborador-yessica-beamonte.png',
        rank: 5,
    },
    {
        name: 'Marco Cisneros',
        position: 'Asesor Patrimonial',
        img: 'colaborador-marco-cisneros.png',
        rank: 6,
    },
    {
        name: 'Karina Fernández',
        position: 'Asesor Patrimonial',
        img: 'colaborador-karina-fernandez.png',
        rank: 7,
    },
    {
        name: 'Norma Monterrubio',
        position: 'Asesor Patrimonial',
        img: 'colaborador-norma-monterrubio.png',
        rank: 8,
    },
    {
        name: 'Elizabeth Huerta',
        position: 'Asesor Patrimonial',
        img: 'colaborador-elizabeth-huerta.png',
        rank: 9,
    },
    {
        name: 'Miriam Hoffman',
        position: 'Asesor Patrimonial',
        img: 'colaborador-miriam-hoffman.png',
        rank: 10,
    },
    {
        name: 'Karla Trillo',
        position: 'Asesor Patrimonial',
        img: 'colaborador-karla-trillo.png',
        rank: 11,
    },
    {
        name: 'Pamela Capilla',
        position: 'Asesor Patrimonial',
        img: 'colaborador-pamela-capilla.png',
        rank: 12,
    },
    {
        name: 'Alejandra Castro',
        position: 'Asesor Patrimonial',
        img: 'colaborador-alejandra-castro.png',
        rank: 13,
    },   
    {
        name: 'Iván Sanchez',
        position: 'Asesor Patrimonial',
        img: 'colaborador-ivan-sanchez.png',
        rank: 14,
    },
    {
        name: 'César Sepúlveda',
        position: 'Asesor Patrimonial',
        img: 'colaborador-cesar-sepulveda.png',
        rank: 15,
    },
    {
        name: 'Porfirio Rodriguez',
        position: 'Asesor Patrimonial',
        img: 'colaborador-porfirio-rodriguez.png',
        rank: 16,
    },
    {
        name: 'Jorge Gutiérrez',
        position: 'Asesor Patrimonial',
        img: 'colaborador-jorge-gutierrez.png',
        rank: 17,
    },
    {
        name: 'Luis Salazar',
        position: 'Asesor Patrimonial',
        img: 'colaborador-luis-salazar.png',
        rank: 18,
    },
    {
        name: 'Georgina Pérez',
        position: 'Asesor Patrimonial',
        img: 'colaborador-georgina-perez.png',
        rank: 19,
    },
    {
        name: 'Sharon Saules',
        position: 'Asesor Patrimonial',
        img: 'colaborador-sharon-saules.png',
        rank: 20,
    },
    {
        name: 'Liliana Campos',
        position: 'Asesor Patrimonial',
        img: 'colaborador-liliana-campos.png',
        rank: 21,
    },
    {
        name: 'Luis Cisneros',
        position: 'Asesor Patrimonial',
        img: 'colaborador-luis-cisneros.png',
        rank: 22,
    },
    {
        name: 'Juan Carlos Sabines',
        position: 'Asesor Patrimonial',
        img: 'colaborador-juan-carlos-sabines.png',
        rank: 23,
    },
    {
        name: 'Cinthya Córdova',
        position: 'Asesor Patrimonial',
        img: 'colaborador-cinthya-cordova.png',
        rank: 24,
    },
    {
        name: 'Yissel Rodríguez',
        position: 'Asesor Patrimonial',
        img: 'colaborador-yissel-rodriguez.png',
        rank: 25,
    },  
]

/**
 *
 * estructura html
 *  
 * ul.card-team
 *   li.card-team__item
 *     card-team__photo
 *       img.card-team__img
 *     card-team__data
 *       p.card-team__name
 *       p.button
 * 
 */


const team = (arrTeam, cardTeamId) => {
    
    // accedemos al elemento del dom
    const cardTeam = document.getElementById(cardTeamId)

    arrTeam.forEach( item => {

        // creamos elementos para estructura html en el dom
        const cardTeamItem = document.createElement('li')
        const cardTeamPhoto = document.createElement('div')
        const cardTeamImg = document.createElement('img')
        const cardTeamData = document.createElement('div')
        const cardTeamName = document.createElement('p')
        const cardTeamButton = document.createElement('p')

        // asignamos atributo class a los elementos creados
        cardTeamItem.setAttribute('class', 'card-team__item')
        cardTeamPhoto.setAttribute('class', 'card-team__photo')
        cardTeamImg.setAttribute('class', 'card-team__img')
        cardTeamData.setAttribute('class', 'card-team__data')
        cardTeamName.setAttribute('class', 'card-team__name')
        cardTeamButton.setAttribute('class', 'button button--ghost-alt')

        // asignamos atributo alt para el elemento img
        cardTeamImg.setAttribute('src', `${pathImg}${item.img}`)
        cardTeamImg.setAttribute('alt', item.name)

        // asignamos contenido al elemento
        cardTeamName.textContent = item.name
        cardTeamButton.textContent = item.position

        // creamos la estructura
        cardTeam.appendChild(cardTeamItem)
        cardTeamItem.appendChild(cardTeamPhoto)
        cardTeamPhoto.appendChild(cardTeamImg)
        cardTeamItem.appendChild(cardTeamData)
        cardTeamData.appendChild(cardTeamName)
        cardTeamData.appendChild(cardTeamButton)
    })
}

team(TEAM_DIRECTORES, 'directores')
team(TEAM_GERENTES, 'gerentes')
team(TEAM_ASESORES, 'asesores')