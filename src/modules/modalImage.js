const sertificate = () => {
    const sertificateImages = document.querySelectorAll('.sertificate-document')
    const overlay = document.querySelector('.overlay')
    const hideImages = document.querySelector('#myImg')

    sertificateImages.forEach(sertificateImage => sertificateImage.addEventListener('click', (e) => {
        e.preventDefault()
        hideImages.style.display = 'block'
        overlay.style.display = 'block'
        
    }))
    overlay.addEventListener('click', () => {
        hideImages.style.display = 'none'
        overlay.style.display = 'none'
    })
}

export default sertificate
