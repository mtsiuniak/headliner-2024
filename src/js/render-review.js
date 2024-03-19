
export function renderReviews(review) {
  return review
    .map(({ _id, avatar_url, author, review }) => {
      return `
      <li class="reviews-list-item swiper-slide" id="${_id}">
                            <img class="item-img "src="${avatar_url}" alt="${author}"
                            width="48"
                            height="48"
                            loading="lazy"
                            />
                            <div class="opinion">
                            <h3 class="author">${author}</h3>
                            <p class="review">${review}</p>
                                </div>
                        </li>`;
    })
    .join('');
}