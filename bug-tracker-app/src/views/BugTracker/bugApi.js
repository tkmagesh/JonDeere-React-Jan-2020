import axios from 'axios';

export function getAll(){
    return axios.get('http://localhost:3030/bugs')
        .then(response => response.data);      
}

export function addNew(newBugName){
    const newBugData = {
        id: 0,
        name: newBugName,
        createdAt: new Date(),
        desc: 'Excepteur enim fugiat laboris sit anim. Consectetur excepteur officia labore incididunt cupidatat cillum ex veniam reprehenderit sit velit. Labore nisi fugiat anim non ut elit id. Labore commodo officia esse excepteur enim commodo aliquip. Et ea laboris veniam anim pariatur nostrud ex reprehenderit dolor. Aliqua Lorem voluptate in exercitation ipsum commodo velit eiusmod velit deserunt sunt do dolor sunt. Irure laborum minim anim occaecat proident exercitation nisi aute id Lorem.'
    };
    return axios.post('http://localhost:3030/bugs', newBugData)
        .then(response => response.data);
}