// const cardHearts = document.getElementsByClassName('card-heart');

// for (const heart of cardHearts) {
//   heart.addEventListener('click', function () {
//     const heartCount = document.getElementById('heart-count').innerText;
//     const currentHeartCount = Number(heartCount) + 1;
//     document.getElementById('heart-count').innerText = currentHeartCount;
//   });
// }

document.getElementById('card-section').addEventListener('click', function (e) {
  if (e.target.className.includes('card-heart')) {
    const heartCount = document.getElementById('heart-count').innerText;
    const currentHeartCount = Number(heartCount) + 1;
    document.getElementById('heart-count').innerText = currentHeartCount;
  }
});
document.getElementById('card-section').addEventListener('click', function (e) {
  if (e.target.className.includes('call-button')) {
    const callBtn = e.target;
    const cardTitle =
      callBtn.parentNode.parentNode.children[1].children[1].innerText;
    const cardSubTitle =
      callBtn.parentNode.parentNode.children[1].children[2].innerText;
    const starCount = document.getElementById('star-count').innerText;
    if (starCount < 20) {
      alert('❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে');
      return;
    }
    const currenStarCount = Number(starCount) - 20;
    document.getElementById('star-count').innerText = currenStarCount;
    alert(`📞Calling ${cardTitle} ${cardSubTitle}`);
  }
});
