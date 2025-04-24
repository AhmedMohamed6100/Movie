$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})
// //////////////
function playMovie(videoSrc) {
    const video = document.getElementById('video');
    const videoSource = document.getElementById('videoSource');
    const videoPlayer = document.getElementById('videoPlayer');

    videoSource.src = videoSrc;
    video.load();  // Load the new video source
    videoPlayer.style.display = 'block'; // Show the video overlay
    video.play(); // Play the video
}

function closeVideo() {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.style.display = 'none'; // Hide the video overlay
    const video = document.getElementById('video');
    video.pause(); // Pause the video
}
// ////////////////////////////
// بيانات الأفلام
// بيانات الأفلام
// بيانات الأفلام
  const movies = [
    {title: "الديزل", video: "video/dezil.mp4", image: "images/movies/desil.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "الفلوس", video: "video/floos.mp4", image: "images/movies/elfloos.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "مش انا", video: "video/mshana.mp4", image: "images/movies/mesh ana.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "ساعه رضا", video: "video/sa3treda.mp4", image: "images/movies/sa3areda.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "لص بغداد", video: "video/d6dad.mp4", image: "images/movies/lsb4dad.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "لف وارجع تاني", video: "video/lf&dwran.mp4", image: "images/movies/lf&Erg3.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "لف ودوران", video: "video/lf&dwran.mp4", image: "images/movies/lf&dwran.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"}
];

  // بيانات المسلسلات
  const series = [
    {title: "كامل العدد", video: "video/dezil.mp4", image: "images/series/kaml.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "جعفر العمده", video: "video2/g3fer.mp4", image: "images/series/ga3fer.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "العتاوله", video: "video2/3tawla.mp4", image: "images/series/El3ta3la.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "غرفه 207", video: "video2/207.mp4", image: "images/movies/oda7.jpeg", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "اشغال شقه", video: "video2/ashaalshqa.mp4", image: "images/series/ash4al.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "حق عرب", video: "video2/7q3rp.mp4", image: "images/series/iejEAijc9XiHQ0w9mQtW1r5zI9j.webp", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"},
    {title: "المداح", video: "video2/mda7.mp4", image: "images/series/banner2.jpg", rating: "9.5", duration: "120 mins", quality: "HD", age: "16+"}
  ];

  
  // دالة تشغيل الفيلم
 
  
  // عرض الأفلام
  const moviesContainer = document.getElementById('movies-container');
  movies.forEach(movie => {
    const movieItem = document.createElement('a');
    movieItem.href = '#';
    movieItem.classList.add('movie-item');
    movieItem.setAttribute('onclick', `playMovie('${movie.video}')`);
  
    movieItem.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="movie-item-content">
        <div class="movie-item-title">${movie.title}</div>
        <div class="movie-infos">
          <div class="movie-info"><i class="bx bxs-star"></i><span>${movie.rating}</span></div>
          <div class="movie-info"><i class="bx bxs-time"></i><span>${movie.duration}</span></div>
          <div class="movie-info"><span>${movie.quality}</span></div>
          <div class="movie-info"><span>${movie.age}</span></div>
        </div>
      </div>
    `;
  
    moviesContainer.appendChild(movieItem);
  });
  
  // عرض المسلسلات
  const seriesContainer = document.getElementById('series-container');
  series.forEach(serie => {
    const seriesItem = document.createElement('a');
    seriesItem.href = '#';
    seriesItem.classList.add('movie-item');
    seriesItem.setAttribute('onclick', `playMovie('${serie.video}')`);
  
    seriesItem.innerHTML = `
      <img src="${serie.image}" alt="${serie.title}">
      <div class="movie-item-content">
        <div class="movie-item-title">${serie.title}</div>
        <div class="movie-infos">
          <div class="movie-info"><i class="bx bxs-star"></i><span>${serie.rating}</span></div>
          <div class="movie-info"><i class="bx bxs-time"></i><span>${serie.duration}</span></div>
          <div class="movie-info"><span>${serie.quality}</span></div>
          <div class="movie-info"><span>${serie.age}</span></div>
        </div>
      </div>
    `;
  
    seriesContainer.appendChild(seriesItem);
  });
  
  // تفعيل الكاروسيل
  $(document).ready(function(){
    $('#movies-container').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots: false,
      responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:4 }
      }
    });
  
    $('#series-container').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots: false,
      responsive:{
        0:{ items:1 },
        600:{ items:2 },
        1000:{ items:4 }
      }
    });
  });
  