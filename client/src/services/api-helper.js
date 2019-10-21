const axios = require('axios')

const source = `https://spreadsheets.google.com/feeds/list/17twVWu9ScVOpHX4WJeHssd2WVyRCZl0gBRif7OiYFbQ/od6/public/values?alt=json`

export const getCards = async () => {
  const resp = await axios.get(source)
  return resp.data.feed.entry;
}