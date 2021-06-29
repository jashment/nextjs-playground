const axios = require('axios');

const dogImage = async () => {
    try {
        const result = await axios({
            method: 'GET',
            url: `https://dog.ceo/api/breeds/image/random`
        })
        return result.data.message;
    } catch (error) {
        console.error(error);
    }
}

export default dogImage;