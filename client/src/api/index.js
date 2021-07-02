import axios from 'axios';

const URL = 'http://localhost:3001/';

export const createPost = (payload) => {

    const { creator, title, message, tags, selectedFile } = payload;

    axios.post(URL,
        {
            creator,
            title,
            message,
            tags,
            selectedFile
        }
    )
}