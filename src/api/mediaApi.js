import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY


export async function fetchPhotos(query,page=1,per_page=100) {
  const res = await axios.get('https://api.unsplash.com/search/photos',{
    params:{query,page,per_page},
    headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
  })
  
  return res.data
}

export async function fetchVideos(query,per_page=100) {
  const res = await axios.get('https://api.pexels.com/v1/videos/search',{
    params:{query,per_page},
    headers:{Authorization:PEXELS_KEY}
  })
  return res.data
}

export async function fetchGIF(query,limit=1000) {
  const res = await axios.get('https://tenor.googleapis.com/v2/search',{
    params:{q:query,key:TENOR_KEY,limit},
  })
  return res
}




// import axios from 'axios'

// const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
// const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
// const TENOR_KEY = import.meta.env.VITE_TENOR_KEY


// // ✅ Fetch N Photos
// export async function fetchPhotos(query, total = 50) {
//   const per_page = 30
//   const totalPages = Math.ceil(total / per_page)

//   let photos = []

//   for (let page = 1; page <= totalPages; page++) {
//     const res = await axios.get('https://api.unsplash.com/search/photos', {
//       params: { query, page, per_page },
//       headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` }
//     })

//     photos = [...photos, ...res.data.results]
//   }

//   return photos.slice(0, total) // return only N
// }


// // ✅ Fetch N Videos
// export async function fetchVideos(query, total = 40) {
//   const per_page = 20
//   const totalPages = Math.ceil(total / per_page)

//   let videos = []

//   for (let page = 1; page <= totalPages; page++) {
//     const res = await axios.get('https://api.pexels.com/videos/search', {
//       params: { query, per_page, page },
//       headers: { Authorization: PEXELS_KEY }
//     })

//     videos = [...videos, ...res.data.videos]
//   }

//   return videos.slice(0, total)
// }


// // ✅ Fetch N GIFs
// export async function fetchGIF(query, total = 50) {
//   const limit = 20
//   const totalPages = Math.ceil(total / limit)

//   let gifs = []

//   for (let pos = 0; pos < totalPages; pos++) {
//     const res = await axios.get('https://tenor.googleapis.com/v2/search', {
//       params: {
//         q: query,
//         key: TENOR_KEY,
//         limit,
//         pos // pagination offset
//       }
//     })

//     gifs = [...gifs, ...res.data.results]
//   }

//   return gifs.slice(0, total)
// }