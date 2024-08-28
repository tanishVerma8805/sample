document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image img');
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('imgFull');
    const closeBtn = document.getElementsByClassName('close')[0];

    images.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
