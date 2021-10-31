const schemeSvg =document.querySelector(".scheme-svg");
const totalPriceTag=document.querySelector(".price-total");
const menuButton=document.querySelector(".m-menu");
const menu=document.querySelector(".menu");
let cost=800;
let totalPrice=0;
schemeSvg.addEventListener("click", (event) => {
    if(!event.target.classList.contains('booked')) {
        event.target.classList.toggle("active");
        let totalSeats=schemeSvg.querySelectorAll(".active").length;
        totalPrice=totalSeats*cost;
        totalPriceTag.textContent=totalPrice;
    }

});
menuButton.addEventListener("click", ()=> {
    console.log("Кликнули по меню");
    menu.classList.toggle("is-open");
});

Fancybox.bind('[data-fancybox="gallery"]', {
    animated: false,
    showClass: false,
    hideClass: false,
  
    Toolbar: false,
  
    closeButton: "top",
    click: false,
    dragToClose: false,
  
    Carousel: {
      // Disable content slide animation
      friction: 0,
  
      // Disable touch guestures
      Panzoom: {
        touch: false,
      },
  
      Navigation: false,
    },
  
    Image: {
      // Disable animation from/to thumbnail on start/close
      zoom: false,
  
      // Disable zoom on scroll event
      wheel: false,
  
      // Disable zoom on image click
      click: false,
  
      // Fit image horizontally only
      fit: "contain-w",
    },
  
    // Center thumbnails only if draggable
    Thumbs: {
      minScreenHeight: 0,
      Carousel: {
        center: function () {
          return this.elemDimWidth > this.wrapDimWidth;
        },
      },
    },
  });