// const cardHearts = document.getElementsByClassName('card-heart');

// for (const heart of cardHearts) {
//   heart.addEventListener('click', function () {
//     const heartCount = document.getElementById('heart-count').innerText;
//     const currentHeartCount = Number(heartCount) + 1;
//     document.getElementById('heart-count').innerText = currentHeartCount;
//   });
// }

//* For heart icon click count
document.getElementById('card-section').addEventListener('click', function (e) {
  if (e.target.className.includes('card-heart')) {
    const heartCount = document.getElementById('heart-count').innerText;
    const currentHeartCount = Number(heartCount) + 1;
    document.getElementById('heart-count').innerText = currentHeartCount;
  }
});

//*For call button click events
document.getElementById('card-section').addEventListener('click', function (e) {
  if (e.target.className.includes('call-button')) {
    const callBtn = e.target;
    const cardTitle =
      callBtn.parentNode.parentNode.children[1].children[1].innerText;
    const cardHotlineNumber =
      callBtn.parentNode.parentNode.children[1].children[2].innerText;
    const cardTitleBN =
      callBtn.parentNode.parentNode.children[1].children[0].innerText;
    const starCount = document.getElementById('star-count').innerText;
    const time = new Date().toLocaleTimeString();
    if (Number(starCount) < 20) {
      alert('❌ আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে');
      return;
    }
    const currenStarCount = Number(starCount) - 20;
    document.getElementById('star-count').innerText = currenStarCount;
    alert(`📞Calling ${cardTitle} ${cardHotlineNumber}`);

    const callHistory = document.getElementById('call-history-container');
    const newHistory = document.createElement('div');
    newHistory.innerHTML = `
        <div
            class="flex flex-col md:flex-row md:justify-between items-center p-2 shadow-md bg-gray-50 text-center md:text-left gap-3 mt-4"
          >
            <h2 class="font-medium">${cardTitleBN} <br />${cardHotlineNumber}</h2>
            <p>${time}</p>
        </div>
    `;
    callHistory.append(newHistory);
  }
});
// *For clear history button
document.getElementById('clear-button').addEventListener('click', function () {
  const callHistory = document.getElementById('call-history-container');
  callHistory.innerHTML = '';
});

// *For Copy button click events
document.getElementById('card-section').addEventListener('click', function (e) {
  if (e.target.className.includes('copy-button')) {
    const copyBtn = e.target;
    const cardHotlineNumber =
      copyBtn.parentNode.parentNode.children[1].children[2].innerText;
    alert(`নাম্বার কপি হয়েছে ${cardHotlineNumber}`);
    const copyCount = document.getElementById('copy-count').innerText;
    const currentCopyCount = Number(copyCount) + 1;
    document.getElementById('copy-count').innerText = currentCopyCount;
    navigator.clipboard.writeText(cardHotlineNumber);
  }
});
