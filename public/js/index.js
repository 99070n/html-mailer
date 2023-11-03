document.addEventListener('DOMContentLoaded',()=> {
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('closeModalButton');
    const successModal = document.getElementById('successModal');
    const inputEmail =document.getElementById('inputEmail');
    
    closeModalButton.addEventListener('click', () => {
        successModal.classList.add('hidden');
    });
    inputEmail.addEventListener('input',()=>{
        if(inputEmail.value ===''){
            successModal.classList.add('hidden');

        }else{
            openModalButton.addEventListener('click', () => {
                successModal.classList.remove('hidden');
            });

        }
    })
});