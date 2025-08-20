import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How do I place an order?", a: "Simply choose your fabric, add it to cart, and proceed to checkout." },
    { q: "Do you provide international shipping?", a: "Yes, we ship worldwide with reliable courier partners." },
    { q: "Can I return a fabric?", a: "Yes, you can return within 7 days if unused and in original condition." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-2xl shadow-md cursor-pointer transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{item.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
