let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

};

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl : ".swiper-button-prev", 
    },
});

// var swiper = new Swiper(".home-slider", {
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });



let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
    for(var i = currentItem ; i<currentItem+3 ; i++){
        boxes[i].style.display = 'inline-block';
    };
    currentItem+=3;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display= 'none';
    }
}









Lock
















// Uploading-1-image 2 MB  .........

const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})







function flag_user_main(flag_main) {
	let flag = flag_main;
	if(flag==1){
		document.getElementById("sign-in-btn").style.display=("none")
	}

	// Add event handler to the function
	this.addEventListener("click", function(event) {
		event.preventDefault();
		return false;
	  });
}






	



// 	// Get the element you want to change
// var element = document.getElementById("sign-in-btn");

// // Get the current value of the element
// var currentValue = element.textContent;

// // Store the current value in localStorage
// localStorage.setItem("myElementValue", currentValue);

// // Change the value of the element
// element.textContent = "none";

// // When the user returns to this page, restore the original value
// if (localStorage.getItem("myElementValue")) {
//   element.textContent = localStorage.getItem("myElementValue");
// }
// }