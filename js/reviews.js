// ограничить длину комментария
const reviews = document.querySelectorAll('.reviews-list__comment')
reviews.forEach(review => {
  if (review.textContent.length > 200 && document.documentElement.clientWidth > 1200) {
    review.textContent = review.textContent.trim().slice(0, 200) + '...'
  } else if (review.textContent.length > 120 && document.documentElement.clientWidth >= 800) {
    review.textContent = review.textContent.trim().slice(0, 120) + '...'
  }
})