import Aside from './Aside'
import AsideBottom from './AsideBottom'
import { useRouter } from 'next/router'

export default function Layout({
    modal, 
    setModal, 
    post, 
    setPost, 
    id, 
    setId, 
    discard, 
    setDiscard, 
    children,
    updated, 
    setUpdated
  }) {
  const router = useRouter()
  return (
    <>
      <main>
        <Aside 
          setModal={setModal} 
          modal={modal} 
          post={post} 
          setPost={setPost} 
          id={id} 
          setId={setId} 
          discard={discard} 
          setDiscard={setDiscard} 
          updated={updated} 
          setUpdated={setUpdated}
        />
        <article className={`${router.pathname !== "/" ? "noIndex" : ""}`}>
            {children}
        </article>
        <AsideBottom/>
      </main>
    </>
  )
}
