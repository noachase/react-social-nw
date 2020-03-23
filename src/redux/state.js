let state = {
    profilePage: {
        posts: [
            { id: '1', message: 'molodec', likesCount: 12 },
            { id: '2', message: 'I will learn React !', likesCount: 2 },
            { id: '3', message: 'Bodya molodec', likesCount: 112 },
            { id: '4', message: 'Vladik molodec', likesCount: 1 },
            { id: '5', message: 'Serega molodec', likesCount: 12 },
            { id: '6', message: 'Olya molodec', likesCount: 12 }
        ]
    },

    dialogsPage: {
        messages: [
            { id: 1, message: 'Dimich molodec' },
            { id: 2, message: 'Vanya molodec' },
            { id: 3, message: 'Bodya molodec' },
            { id: 4, message: 'Vladik molodec' },
            { id: 5, message: 'Serega molodec' },
            { id: 6, message: 'Olya molodec' }
        ],
        dialogs: [
            { id: 1, name: 'Dimich' },
            { id: 2, name: 'Vanya' },
            { id: 3, name: 'Bodya' },
            { id: 4, name: 'Vladik' },
            { id: 5, name: 'Serega' },
            { id: 6, name: 'Olya' }
        ]
    },

    sideBar: {
        friends : [
            {name: 'Vladik'},
            {name: 'Bodich'},
            {name: 'Sergei'}
        ]
    }
}

export default state;