import '../styles/globals.css'
import '../styles/main.css'
import '../styles/sign.css'
import '../styles/post.css'
import '../styles/modal.css'
import '../styles/spinner.css'
import '../styles/profile.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [modal, setModal] = useState(false)
  const [post, setPost] = useState({})
  const [id, setId] = useState("")
  const [discard, setDiscard] = useState(false)
  const [updated, setUpdated] = useState(false)

  return <Component 
    {...pageProps}
    modal={modal} setModal={setModal}
    post={post} setPost={setPost}
    id={id} setId={setId}
    discard={discard} setDiscard={setDiscard}
    updated={updated} setUpdated={setUpdated}
  />
}
