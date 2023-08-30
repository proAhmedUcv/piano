
// alert("hi js             --------------") 

 
// var checkboxes = document.querySelectorAll('input[type="checkbox"]');

// checkboxes.forEach(function(checkbox) {
//     checkbox.addEventListener('click', function() {
//         if (this.checked) {
//             alert("تم التحقق من " + this.id);
//         } else {
//             alert("تم إلغاء التحقق من " + this.id);
//         }
//     });
// });

// function showAlert() {
//     var checkedCheckboxes = Array.from(checkboxes).filter(function(checkbox) {
//         return checkbox.checked;
//     });

//     if (checkedCheckboxes.length === 0) {
//         alert("لم يتم التحقق من أي صندوق");
//     } else {
//         var message = "تم التحقق من الصناديق التالية:\n";
//         checkedCheckboxes.forEach(function(checkbox) {
//             message += checkbox.id + "\n";
//         });
//         alert(message);
//     }
// }


// function changelink() {
//     var link = document.getElementById("myLink");
//     link.setAttribute("href", "https://www.facebook.com");
// }

// document.addEventListener("DOMContentLoaded", function() {
//     changelink();
// });


 const keys = document.querySelectorAll('.piano-key');
const sounds = {
    C: 'C.wav',
    'C#': 'note1.wav',
    D: 'note6.wav',
    'D#': 'note2.wav',
    E: 'note7.wav',
    F: 'note1.wav',
    'F#': 'note3.wav',
    G: 'note1.wav',
    'G#': 'note4.wav',
    A: 'A.wav',
    'A#': 'note5.wav',
    B: 'note2.wav'
};

// دالة لتشغيل الصوت
function playSound(note) {
    const audio = new Audio('sounds/' + sounds[note]);
    audio.play();
}

 keys.forEach(key => {
    key.addEventListener('click', function() {
        const note = this.dataset.note;
        playSound(note);
    });
});


