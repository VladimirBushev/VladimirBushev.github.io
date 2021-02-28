let initialState = {
    users: [
        { name: 'Рыжик', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg', id: 'id2' },
        { name: 'Матроскин', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic', id: 'id3'},
        { name: 'Киса', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg', id: 'id4'},
        { name: 'Барсик', img: 'https://w-dog.ru/wallpapers/6/4/445936490088105/kotik-vzglyad-mechtaet.jpg', id: 'id5' },
        { name: 'Черный', img: 'http://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1Rk3xj3SNsykl6tc1aFKIVZ6aaKTM5SRkZCeTgDn6uOyic', id: 'id6'},
        { name: 'Василий', img: 'https://neskychno.com/wp-content/uploads/2019/12/wsi-imageoptim-4-35-samie-krasivie-koshki-mira-3-1.jpg', id: 'id7'},
    ]
}

const usersReducer = (state = initialState, action) => {
    return state;
}

export default usersReducer;