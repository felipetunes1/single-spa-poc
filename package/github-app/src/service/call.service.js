import ajax from '@fdaciuk/ajax'

const Call = (url, callback) => {
   ajax().get(url).then(callback)
}


export default Call