var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let manu= document.querySelector('#manu-icon');
  let navbar = document.querySelector('navbar');

  menubar.onclick = () => {
    menubar.classlist.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  window.onscroll = () => {
    menubar.classlist.remove('bx-x');
    // navbar.classList.remove('active');
  }

  window.onload = function() {
    // Fetch data from an API when the page loads
    fetch('http://localhost:8090/api/getVegetables') // Sample API
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
          console.log(data)
            // Display the fetched data
            const dataContainer = document.getElementById('VegeContainer');
            data.data.forEach(post => {
                console.log(post)
                const postElement = document.createElement('div');
                const card = document.createElement('div');
                postElement.classList.add('box');
                card.innerHTML=` <img src=${post['VegeImage']} alt="">
          <span>Fresh Items</span>
          <h2>Farm Fresh Organic<br>${post['VegeName']}</h2>
          <h3 class="price">${post['VegePrice']}</h3>
          <i class="bx bx-cart-alt"></i>
          <!--<box-icon name='cart-alt' ></box-icon>-->
          <i class="bx bx-heart"></i>
          <span class="discount">-25%</span>`
                postElement.appendChild(card)
                dataContainer.appendChild(postElement);
            });
            
        })
        .catch(error => console.log('Error fetching data:', error.toString()));
};