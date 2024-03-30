let isOrtu = true;

window.onload = function() {
    // Nama file yang ingin Anda baca
    var fileName = 'tes file.txt';
    
    // Jalankan fungsi untuk membaca file
    readFile(fileName, function(content) {
      // Memisahkan konten menjadi baris-baris
      var lines = content.split('\n');
  
      // Membuat array untuk menyimpan kata pertama, kedua, dan ketiga dari setiap baris
      var kitab = [];
      var ayat = [];
      var isi = [];
  
      // Memisahkan setiap baris menjadi tiga kata dan memasukkan ke dalam array yang sesuai
      lines.forEach(function(line) {
        var words = line.trim().split('|');
        kitab.push(words[0]); // Memasukkan kata pertama ke dalam array pertama
        ayat.push(words[1]); // Memasukkan kata kedua ke dalam array kedua
  
        // Memasukkan kata ketiga hingga akhir baris ke dalam array ketiga
        var lastElementIndex = words.length - 1;
        var lastElement = words[lastElementIndex];
        isi.push(lastElement);
      });
  
      i = Math.floor(Math.random() * kitab.length);
      if(i!==1){
        isOrtu=false;
      }
      randomImage(i);
      // Menampilkan hasilnya di HTML
      displayBook(kitab, ayat);
      displayQuote(isi);
    });
  };
  
  function readFile(fileName, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileName, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(xhr.responseText);
      }
    };
    xhr.send();
  }
  
  function displayBook(kitab, ayat) {
    var fileContent = document.getElementById('book');
  
    // Menampilkan setiap data dari array di HTML
  
    var div = document.createElement('div');
    div.innerHTML = kitab[i] + ' ' + ayat[i];
    fileContent.appendChild(div);
  
  }
  function displayQuote(isi) {
    var fileContent = document.getElementById('newQuote');
  
    // Menampilkan setiap data dari array di HTML
  
    var div = document.createElement('div');
    div.innerHTML = '"' + isi[i] + '"';
    fileContent.appendChild(div);
  
  }
  
  const imgEl = document.getElementById('random-image');
  
  const srcArray = ['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg', 'assets/img4.jpg', 'assets/img5.jpg', 'assets/img6.jpg', 'assets/img7.jpg', 'assets/img8.jpg', 'assets/img9.jpg', 'assets/img10.jpg', 'assets/img11.jpg', 'assets/img12.jpg', 'assets/img13.jpg', 'assets/img14.jpg', 'assets/img15.jpg', 'assets/img16.jpg', 'assets/img17.jpg', 'assets/img18.jpg'];
  const ortu = 'assets/imgOrtu.jpg';
  // Stores path to images in an array

  let index;
  // Current image index
  // imgEl.addEventListener('click', () => {
  //   if (isOrtu==true) {
  //     imgEl.src = 'assets/imgOrtu.jpg';
  //   } else {
  //     randomImage();
  //     // Runs randomImage function when user clicks on image
  //   }
  // });
  // randomImage();
  function randomImage(i) {
    
      if(i===1||i===17){
        imgEl.src = ortu;
      }else{
        const randomIndex = Math.floor(Math.random() * srcArray.length);
        
            imgEl.src = srcArray[randomIndex];
            index = randomIndex;
        
      }
  }

    $(document).ready(function () {
      // Fungsi untuk menampilkan popup setelah beberapa detik
      function showPopupWithDelay() {
        $('.popup-wrap').fadeIn(500);
        $('.popup-box').removeClass('transform-out').addClass('transform-in');
      }

      // Tambahkan penundaan 5000 milidetik (2 detik) sebelum menampilkan popup secara otomatis
      setTimeout(showPopupWithDelay, 5050);

      // Tanggapi klik pada tombol popup


      // Tanggapi klik pada tombol tutup popup
      $('.popup-close').click(function (e) {
        $('.popup-wrap').fadeOut(500);
        $('.popup-box').removeClass('transform-in').addClass('transform-out');
        e.preventDefault();
      });
    });
