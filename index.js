const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

let imageCollection = ['data:image/jpeg;base64,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','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_wIM7JmtVUFzvji4am0g7FDcRK0aGcYR7w&usqp=CAU','https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/10/30/749441-yo-yo.jpg','https://www.filmibeat.com/img/popcorn/profile_photos/honey-singh-20140110100011-29570.jpg','data:image/jpeg;base64,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','https://image.winudf.com/v2/image/Y29tLm9ubGluZW1wM2t6LmJhZGJveXNoYWguYl9zY3JlZW5fMF8xNTI3OTA5Mzg1XzAyNA/screen-0.jpg?fakeurl=1&type=.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZpNDdXEsSS-voDDwi0KJ4S2GWAsSk2kFqQ&usqp=CAU','https://www.iwmbuzz.com/wp-content/uploads/2020/02/reasons-you-will-not-regret-following-tony-kakkar-on-instagram-920x518.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR42l-qZ_nxjjFmtInR8HCTO420TdmIQ5w71Zxcyo_BrnYHRJ8KoDvOWqH8llWVvUOn-KE&usqp=CAU','https://i1.wp.com/ringtonedownloadfree.com/wp-content/uploads/2020/02/Arijit-Singh-Sad-Love-Songs-Ringtones.jpeg?fit=1000%2C566&ssl=1']

const random = Math.random()*10>>0;
let image = imageCollection[random];


musicContainer.style.backgroundImage = `url(${image})`;
fetch("https://deezerdevs-deezer.p.rapidapi.com/infos", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "28e0357499msh970dd60c283213bp1bdecfjsn179eb3a22094"
	}
})
.then(response => {
	console.log(response.host.stream);
})
.catch(err => {
	console.error(err);
});
// // cover.src = image;

// const songs = [
//     'Husnn hai suhaana',
//     'jindagi ke talash mein hum  maut ke kitne pass',
//     'jugraafiya' ,
    
    
//     'the hook up song',
//     '__Tujhe Bhula Diya_ (Full Song) Anjaana Anjaani _ Ranbir Kapoor_ Priyanka Chopra(MP3_160K)_1',
//     '90_S Evergreen _ Best Of _AkshayKumar Superhit Hindi Songs _ Bollywood Gaane(MP3_128K)_1',
//     'Dil Kehta Hai Chal Unse - LYRICAL VIDEO _ Aamir Khan _ Manisha Koirala _ Akele Hum Akele Tum(MP3_128K)_1',
//     'Govinda -- Karishma Kapoor__90_s Block Buster Romantic----hit Songs Collection__ Govinda Hit Songs(MP3_128K)_1',
//     'Hamari Shaadi Mein _ Vivah _ Shahid Kapoor_ Amrita Rao _ Superhit Bollywood Song _ 90s Songs(MP3_160K)_1',
//     'Happy Birthday ( Official Video ) Shanky Goswami _ New Haryanvi Songs Haryanavi 2021 _ Vikram Pannu(MP3_128K)_1',
//     'Kali Kamli Wala Mera Yaar Hai - Chitra vichitra ji maharaj - Banke Bihari songs(MP3_160K)_1',
//     'Sajde kiya hai yara',
//     'Mera Shyam Aa Jata Mere Samne By Mayank Aggarwal(MP3_160K)_1',
//     'O Re Piya _ Full Song _ Aaja Nachle _ Madhuri Dixit _ Rahat Fateh Ali Khan _ Salim-Sulaiman_ Jaideep(MP3_160K)_1',
//     'Top 20 Sanam Puri Songs _ Sanam Puri Songs Collection 2020-- _ Jukebox 2020(MP3_128K)_1',
//     'Yeh Teri Aankhen Jhuki Jhuki - Fareb _ Abhijeet _ Faraaz Khan _ Suman Ranganathan(MP3_128K)',
//     '?????? ????????? ????????? ???????????? ??????????????? ????????? ????????? ?????? ??????????????? _ Sanwali Surat pe dil Mohan(MP3_128K)_1',
//     '??????????????? ???????????? ?????? ????????? ????????? ???????????? ??????????????? ???????????? ???????????? ????????? ???????????? ????????????????????? _ ???????????? ??????????????? ??? ???????????? ???????????? ??????????????? _ (MP3__1'
    
    
// ];





// let songIndex = 2;


// loadSong(songs[songIndex]);

// function loadSong(song) {
  // title.innerText = song;
  // audio.src = `music/${song}.mp3`;
  // cover.src = `images/${song}.jpg`;
// }


playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });



  function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
  
    audio.play();
  }


  function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
  
    audio.pause();
  }

  prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    // loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    // loadSong(songs[songIndex]);
  
    playSong();
  }

  audio.addEventListener('timeupdate', updateProgress);



  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  progressContainer.addEventListener('click', setProgress);

  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
  
    audio.currentTime = (clickX / width) * duration;
  }

  audio.addEventListener('ended', nextSong);