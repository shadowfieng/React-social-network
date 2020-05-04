import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        dialogs:
            [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Viktor' },
                { id: 5, name: 'Fedor' },
                { id: 6, name: 'Vadim' }
            ],
        postMessage: '',
        posts:
            [
                { id: 1, message: 'Hi', likesCount: 5 },
                { id: 2, message: 'How is your IT-kamasutra?', likesCount: 11 }
            ],

    },
    messagesPage: {
        messages:
            [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your IT-kamasutra?' },
                { id: 3, message: 'Yo' }
            ],
    },
}

export let onChangePostMessage = (postMessage) => {
    state.profilePage.postMessage = postMessage;
    console.log(state.profilePage.postMessage);
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost); 
    rerenderEntireTree(state);
}


export default state;