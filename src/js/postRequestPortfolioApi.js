import axios from "axios"


let postRequestPortfolioApi = async set => {
    return await axios.post('https://portfolio-js.b.goit.study/api/requests', set).then(res => {
    return res.data;

  });
};
export default postRequestPortfolioApi
