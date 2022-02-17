const modalCall = () => {
    const wboxModalBtn = document.querySelector('#WboxModal')
    const headerModal = document.querySelector('.header-modal')
    const closeModal = document.querySelector('.header-modal__close')
    const overlay = document.querySelector('.overlay')

    wboxModalBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        headerModal.style.display = 'block'
        overlay.style.display = 'block'
    })

    closeModal.addEventListener('click', (e) =>{
        
        headerModal.style.display = 'none'
        overlay.style.display = 'none'
    })

    
   
}
export default modalCall