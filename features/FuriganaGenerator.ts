import axios, { AxiosResponse } from 'axios';

const url = 'https://jotoba.de/api/search/words'

export const fetchData = async (query: string) => {

  try {
    const res: AxiosResponse = await axios.post(url, {
      "query": query,
      "language": "English",
      "no_english": false
    })

    let furiResponse: string = res.data.words[0].reading.furigana

    console.log(furiResponse)
    return furiResponse
  } catch (error) {
    console.log("Error")
    return "Error"
  }
}