import React from 'react'
import Image from 'next/image'
import PostModal from './PostModal'
import Modal from './Modal'

export default function Profile({setPost, modal, setModal, data, post, id, setDiscard}) {
    const {user: {username, createdAt, name, profile}, posts} = data
    console.log(profile)
    console.log(posts)
  return (
    <>
      {modal && Object.entries(post).length > 0 && <Modal 
        setModal={setModal} 
        setPost={setPost} 
        id={id} 
        setDiscard={setDiscard} 

      ><PostModal post={post}/> </Modal>}
        <div id='profile'>
            <Image src={profile} width={70} height={70} style={{borderRadius: "10rem"}} alt={`imagen de usuario de ${username}`}/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <h1>{username}</h1>
            </div>
        </div>
        <div id='gridImages'>
            {posts.map(post => (
                    <div className="square" style={{backgroundImage: `url(${post.image})`, backgroundSize: "cover",backgroundPosition: "center"}} onClick={() => {
                    setModal(true)
                    setPost(post)
                }}></div>
            ))}
        </div>
    </>
  )
}
