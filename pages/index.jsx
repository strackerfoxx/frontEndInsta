import { useState, useEffect } from "react"
import Layout from "@/components/Layout"
import Modal from "@/components/Modal"
import PostModal from "@/components/PostModal"
import Post from "@/components/Post"

export default function Home({
    modal, 
    setModal, 
    setPost, 
    post, 
    id, 
    setId, 
    discard, 
    setDiscard, 
    updated, 
    setUpdated
  }) {  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function request(){
      const respuesta = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`)
      setPosts(await respuesta.json())
    }
    request()
  }, [updated])

  return (
    <Layout
      setModal={setModal} 
      modal={modal} 
      post={post} 
      setPost={setPost} 
      id={id} 
      setId={setId} 
      discard={discard} 
      setDiscard={setDiscard} 
      updated={updated} 
      setUpdated={setUpdated}>

      {modal && Object.entries(post).length > 0 && <Modal 
        setModal={setModal} 
        setPost={setPost} 
        id={id} 
        setDiscard={setDiscard} 
      ><PostModal post={post}/> </Modal>}

      <div className="listado">
          {posts.map(post => (
            <div className="post" key={post._id}>
              <Post post={post} setModal={setModal} updated={updated} setUpdated={setUpdated} setPost={setPost} />
            </div>
          ))}
      </div>

    </Layout>
  )
}
