import axios from "axios";
import { SwalMixin } from "../components/SweetAlerts/Swal";

const auth0APItoken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlVyRF9LdHljVHlQYUZTZFhPQ2h5bCJ9.eyJpc3MiOiJodHRwczovL2Zvb2Rib290LmV1LmF1dGgwLmNvbS8iLCJzdWIiOiJxeVRpVWZnYmNtQ3BJanBrZ1NaZEtUOUNXTmZSTVVBV0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9mb29kYm9vdC5ldS5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY1MDM5NjQxNSwiZXhwIjoxNjUyOTg4NDE1LCJhenAiOiJxeVRpVWZnYmNtQ3BJanBrZ1NaZEtUOUNXTmZSTVVBVyIsInNjb3BlIjoicmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.qyILpP1ht0dWWwiL_MNOLj3tRSc9diYFsVd3tTpojHmv9Ok9YsH6tnrKsgRo2Ph_UPDYmGeVlHx67oLXpgDUQHV9nAsrsIHdEXSPdhGSlg9qCjHKXzIm7jtZ_OQtBJIxsX9wbEZDFklO8TkbAd9Rok9fjvUWxNwDxGUM_4-D4c5ml7jc4QlnRbK2CcoWBWg7d0xbz2oHs8M3H89JOITml0faklfktL-7ldfvDuMR-xUgnIv9zB5MY1EWaEUyx-NEEHeyIuoKdnpwcbp03ULbvBd1cjYt3VyU7-ZibTIqY7nTjJspK_4sgRiqZf-XOOcb9D8fjsUly8xYKvVUk5iIFw';

export async function auth0ApiCall(method, url, params, atomic) {
  var data = "";

  var options = {
    method: method,
    url: url,
    params: { params },
    headers: { authorization: 'Bearer ' + auth0APItoken }
  };

  await axios.request(options).then((response) => {
    console.log((atomic) ? response.data[0] : response.data)
    data = ((atomic) ? response.data[0] : response.data);
    return data;
  }).catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      SwalMixin('error', error.response.data.error);
    } else if (error.request) {
      console.log(error.request);
      SwalMixin('error', error);
    }
    console.log(error);
  });
  return data;
}
