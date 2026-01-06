import { useState } from "react";

export default function ProductReviews({ product }) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const submitReview = () => {
    if (!rating || !comment) return;
    alert("Review submission API hook goes here");
  };

  return (
    <section className="mt-10 bg-[#020617] border border-gray-800 rounded-xl p-5">
      <h2 className="font-semibold mb-4">Customer Reviews</h2>

      {product.reviews?.length === 0 && (
        <p className="text-gray-400 text-sm">No reviews yet.</p>
      )}

      {product.reviews?.map((review) => (
        <div key={review._id} className="border-t border-gray-800 pt-3 mt-3">
          <div className="flex justify-between text-sm">
            <span className="font-semibold">{review.name}</span>
            <span className="text-gray-500">{review.createdAt}</span>
          </div>
          <div className="text-yellow-400 text-sm">
            {"★".repeat(review.rating)}
          </div>
          <p className="text-gray-400 text-sm mt-1">{review.comment}</p>
        </div>
      ))}

      {/* Review Form */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold mb-2">Write a review</h3>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full mb-2 bg-[#020617] border border-gray-700 rounded p-2 text-sm"
        >
          <option value="">Select rating</option>
          <option value="5">⭐ 5 - Excellent</option>
          <option value="4">⭐ 4 - Good</option>
          <option value="3">⭐ 3 - Average</option>
          <option value="2">⭐ 2 - Poor</option>
          <option value="1">⭐ 1 - Terrible</option>
        </select>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience…"
          className="w-full bg-[#020617] border border-gray-700 rounded p-2 text-sm"
        />

        <button
          onClick={submitReview}
          className="mt-2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold"
        >
          Submit Review
        </button>
      </div>
    </section>
  );
}
