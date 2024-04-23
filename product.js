
        // Get reference to the main image element and thumbnail container
        const mainImage = document.getElementById('mainImage').querySelector('img');
        const thumbnails = document.getElementById('thumbnailContainer').querySelectorAll('.pcol-s');
    
        // Add click event listeners to each thumbnail
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                // Set the src of the main image to the src of the clicked thumbnail
                const thumbnailImage = thumbnail.querySelector('img');
                mainImage.src = thumbnailImage.src;
            });
        });
