export const getData = (url) => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (response.status === 404) {
        throw Error('404 Error aka "We looked but did not find anything in that spot"')
      } else if (response.status === 500) {
        throw Error('500 Error aka "It\s not you it\s me -  try again soon!"')
      } else {
      throw Error('Other Error - Something miscellaneous went wrong')
      }
    })
}