const axios = require('axios');

const agify = async (inputText) => {
    try {
        const result = await axios({
            method: 'GET',
            url: `https://api.agify.io/?name=${inputText}`
        })
        console.log('axiosResult', result)
        return result.data.age;
    } catch (error) {
        console.error(error);
    }
}

export default agify;