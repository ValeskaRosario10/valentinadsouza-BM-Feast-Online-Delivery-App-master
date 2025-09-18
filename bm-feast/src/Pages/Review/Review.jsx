import React from 'react';
import './Review.css';

// Cartoon avatar URLs
const femaleAvatar = 'https://cdn-icons-png.flaticon.com/512/4140/4140047.png';   // Cartoon boy
const maleAvatar = 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png'; // Cartoon girl

const reviews = [
  {
    name: "Swati Pepati",
    role: "Marketing Manager",
    gender: "female",
    comment: "The site looks awesome. Login, creating account, seeing options and adding to cart, payment and all the processes are easy to use.",
    rating: 5,
  },
  {
    name: "Ansh Mahajan",
    role: "MERN Stack Developer",
    gender: "male",
    comment: "Great App! Smooth performance and works perfectly. Well done!",
    rating: 4,
  },
  {
    name: "Arti Giram",
    role: "Full-Stack Developer",
    gender: "female",
    comment: "The UI of Tomato is responsive and visually appealing. I love how clean the design is, and the food listing feels smooth and interactive.",
    rating: 4,
  },
  {
    name: "Paranv Nalawade",
    role: "Freelancer",
    gender: "male",
    comment: "Highly impressive UI/UX & responsive design. Recommended!",
    rating: 5,
  },

];

const Reviews = () => {
  return (
    <div className="reviews-section" id="customer-reviews">
      <h2>What Our Customers Say</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img
              src={review.gender === 'male' ? maleAvatar : femaleAvatar}
              alt={review.name}
              className="review-avatar"
            />
            <h3>{review.name}</h3>
            <p className="review-role">{review.role}</p>
            <p className="review-comment">“{review.comment}”</p>
            <div className="review-rating">{'⭐'.repeat(review.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;