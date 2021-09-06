export const getData = (url) => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (response.status === 404) {
        throw Error('404 error ("We looked but did not find anything in that spot") - Head back, and try again.')
      } else if (response.status === 500) {
        throw Error('500 error ("It\'s not you; it\'s me") -  Please try again soon.')
      } else {
      throw Error('Other error - Something miscellaneous went wrong.')
      }
    })
}