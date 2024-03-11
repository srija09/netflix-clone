import axios from "axios";

/*baseURl to make requests to the movie database*/
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});
export default instance;