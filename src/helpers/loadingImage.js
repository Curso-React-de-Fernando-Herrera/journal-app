export const loadingImage = (file) => {
  const bodyData = new FormData()
  bodyData.append('file', file)
  bodyData.append('upload_preset', 'journaly-app')

  return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: 'POST',
    body: bodyData,
  })
    .then((data) => data.json())
    .then(({ secure_url }) => secure_url)
    .catch((err) => console.log({ err }))
}
