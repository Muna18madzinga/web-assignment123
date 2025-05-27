import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import md5 from "blueimp-md5";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import TestimonialForm from "../components/TestimonialForm";

function getGravatarUrl(email) {
  const hash = email ? md5(email.trim().toLowerCase()) : "";
  return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTestimonials = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />
        <div className="mb-10">
          <TestimonialForm onSubmitSuccess={fetchTestimonials} />
        </div>
        <hr className="my-8 border-gray-300" />
        {loading ? (
          <div className="text-center py-8">Loading testimonials...</div>
        ) : (
          <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
            {testimonials.map((testimonial, index) => (
              <GlowCard card={testimonial} key={testimonial.id || index} index={index}>
                <div className="flex items-center gap-3">
                  <div>
                    <img src={getGravatarUrl(testimonial.email)} alt={testimonial.name} />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-white-50">{testimonial.email}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
