let store = {
    _state: {
        profilePage: {
            posts: [
                { id: '1', message: 'molodec', likesCount: 12 },
                { id: '2', message: 'I will learn React !', likesCount: 2 },
                { id: '3', message: 'Bodya molodec', likesCount: 112 },
                { id: '4', message: 'Vladik molodec', likesCount: 1 },
                { id: '5', message: 'Serega molodec', likesCount: 12 },
                { id: '6', message: 'Olya molodec', likesCount: 12 }
            ],
            newPostText: 'kamasutra',
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
            newDialogMsg: 'hi',

            dialogs: [
                { id: 1, name: 'Dimich', ava: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg' },
                { id: 2, name: 'Vanya', ava: 'https://i.pinimg.com/236x/07/c7/e0/07c7e0e30aa496b3f9ee416ded4428fa.jpg' },
                { id: 3, name: 'Bodya', ava: 'https://avatarfiles.alphacoders.com/165/thumb-165762.jpg' },
                { id: 4, name: 'Vladik', ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS886vwrHl0kGBrIpd7ohcv2s3CQMoQQaG9wZMk2b90nlxbF_d_' },
                { id: 5, name: 'Serega', ava: 'https://2.bp.blogspot.com/-Nluqr5JsqIc/Vk1p5T38BzI/AAAAAAAAE7g/NwVhT3ZMPLA/s1600/CuteAvatar2.png' },
                { id: 6, name: 'Olya', ava: 'https://cf.ltkcdn.net/socialnetworking/images/std/168646-425x425-Cat-Avatar-Primary.jpg' }
            ]
        },

        sideBar: {
            friends: [
                { name: 'Vladik' },
                { name: 'Bodich' },
                { name: 'Sergei' },
                { name: 'Sergei' }
            ]
        },
    },
    _callSubscriber() {
        console.log('state has been changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) { //{}type: 'ADD-POST'
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-MSG-TEXT') {
            this._state.dialogsPage.newDialogMsg = action.newMsg;
            this._callSubscriber(this._state);
        }
    }
}

// window.state = state;


export default store;
window.store = store;