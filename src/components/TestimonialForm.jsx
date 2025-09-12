import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const TestimonialForm = ({ onSubmitSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mentions, setMentions] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      await addDoc(collection(db, "testimonials"), {
        name,
        email,
        mentions,
      });
      setSuccess("Thank you for your testimonial!");
      setName("");
      setEmail("");
      setMentions("");
      if (onSubmitSuccess) onSubmitSuccess();
    } catch {
      setError("Failed to submit testimonial. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-center card-border rounded-xl p-10">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
        <h3 className="font-bold mb-2 text-xl">Add Your Testimonial</h3>
        <div>
          <label htmlFor="testimonial-name">Your Name</label>
          <input
            type="text"
            id="testimonial-name"
            placeholder="What’s your good name?"
            value={name}
            required
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="testimonial-email">Your Email</label>
          <input
            type="email"
            id="testimonial-email"
            placeholder="What’s your email address?"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="testimonial-mentions">Your Testimonial</label>
          <textarea
            id="testimonial-mentions"
            placeholder="Share your experience..."
            value={mentions}
            required
            rows={4}
            onChange={e => setMentions(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          <div className="cta-button group">
            <div className="bg-circle" />
            <p className="text">
              {loading ? "Submitting..." : "Submit Testimonial"}
            </p>
            <div className="arrow-wrapper">
              <img src="/images/arrow-down.svg" alt="arrow" />
            </div>
          </div>
        </button>
        {error && <div className="text-red-500 mt-2">{error}</div>}
        {success && <div className="text-green-500 mt-2">{success}</div>}
      </form>
    </div>
  );
};

export default TestimonialForm;
