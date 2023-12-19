// var studiesContainer;
// var position = 0;

// const studiesData = [
//     { title: "Bachillerato en Informatica Empresarial", descr: "Informacion de la carrera", img: "./assets/images/ucr-logo.png", link: "https://www.sa.ucr.ac.cr/web/oe-informatica-empresarial/" },
//     { title: "Scrum Fundamentals Certified", descr: "Certificado", img: "./assets/images/ScrumStudy.png", link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LuisValverdeRios-1002619.pdf" },
//     { title: "Scrum Fundamentals Certified", descr: "Certificado", img: "./assets/images/ScrumStudy.png", link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LuisValverdeRios-1002619.pdf" },
//     { title: "Bachillerato en Informatica Empresarial", descr: "Informacion de la carrera", img: "./assets/images/ucr-logo.png", link: "https://www.sa.ucr.ac.cr/web/oe-informatica-empresarial/" },
//     { title: "Scrum Fundamentals Certified", descr: "Certificado", img: "./assets/images/ScrumStudy.png", link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LuisValverdeRios-1002619.pdf" },
//     { title: "CASI FINAL", descr: "Certificado", img: "./assets/images/ScrumStudy.png", link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LuisValverdeRios-1002619.pdf" },
//     { title: "FINALL", descr: "Certificado", img: "./assets/images/ScrumStudy.png", link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-LuisValverdeRios-1002619.pdf" }        
// ];

// function generateTempList(data, position){
//     var list = [];
//     var size = data.length;
//     var cont = 0;

//     for (let i = position; i < (position + 3); i++) {
//         if(i < size)
//             list.push(data[i]);
//         else{
//             list.push(data[cont]);
//             cont++;
//         }
//     }

//     return list;
// }

// function generateStudies(data){
//     studiesContainer.innerHTML = '';

//     var tempList = generateTempList(data, position)

//     tempList.forEach((studiesData) => {
//         const studyCard = document.createElement('div');
//         studyCard.innerHTML = `
//         <div class="card">
//             <figure>
//                 <img src="${studiesData.img}">
//             </figure>
//             <div class="contenido-card">
//                 <h3>${studiesData.title}</h3>
//                 <p>${studiesData.descr}</p>
//                 <a href="${studiesData.link}">Leer Más</a>
//             </div>
//         </div>
//         `;
//         studiesContainer.appendChild(studyCard);
//     });
// }

// function nextStudy() {
//     if(((position + 1)+ 3) <= studiesData.length){
//         position++;
//         generateStudies(studiesData);
//     }
// }

// function previousStudy() {
//     if(position-1 >= 0){
//         position--;
//         generateStudies(studiesData);
//     }
// }

var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });