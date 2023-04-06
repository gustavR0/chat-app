const base = import.meta.env.VITE_API_URL

export const fetchSinToken = async (endpoint, data, method = 'GET') => {
  const url = `${base}/${endpoint}`

  if (method === 'GET') {
    const resp = await fetch(url)
    return await resp.json()
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    return await resp.json()
  }
}

export const fetchConToken = async (endpoint, data, method = 'GET') => {
  const url = `${base}/${endpoint}`
  const token = window.localStorage.getItem('token') || ''
  if (method === 'GET') {
    const resp = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return await resp.json()
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
    return await resp.json()
  }
}
