document.addEventListener('DOMContentLoaded', function() {
  const modal = new bootstrap.Modal('#foodModal');
  const modalTitle = document.querySelector('.modal-title');
  const modalBody = document.querySelector('.modal-body');
  
  // Handle clicks on pizza cards
  document.querySelectorAll('.col').forEach(col => {
    col.addEventListener('click', () => {
      const title = col.getAttribute('data-modal-title');
      const content = JSON.parse(col.getAttribute('data-modal-content'));
      
      // Update modal
      modalTitle.textContent = title;
      modalBody.innerHTML = content.map(food => `
         <div class="card" > 
           <div class="img">
              <img src="${food.img}" class="modal-img rounded" alt="${food.type}">
           </div>
           <div class="desc">
             <h5>${food.type}</h5>
             <p>${food.desc}</p>
             <p class="text-success">LBP ${food.price}</p> 
           </div>
        </div>
      `).join('');
      
      modal.show();
    });
  });
});

