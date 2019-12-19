import axios from 'axios';
import {url} from '../configs/config'

export const getPredict = async(endpoint, method="GET", data) => {
    let dataAPI = null;
	try {
		dataAPI = await axios({
			method,
			url: `${url}/${endpoint}`,
			data,
		});
	} catch (e) {
		console.log(e.response);
		dataAPI = e.response
	} finally {
		return dataAPI;
	}
}