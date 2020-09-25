import AxiosInstance from "axios";

export const axios = AxiosInstance.create({
	baseURL: "http://www.omdbapi.com/",
	headers: {
		Accept: "application/json,utf-8"
	}
});