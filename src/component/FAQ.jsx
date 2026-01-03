import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I sell my old appliances on Trash2Cash?",
    answer:
      "Selling your old appliances is simple with Trash2Cash. Select the appliance you want to sell and schedule a convenient doorstep pick-up. Our logistics partner will come to your location, pick up the product, and pay you instantly. It’s the easiest way to sell used or old appliances like ACs, refrigerators, washing machines, mobile phones, laptops, computers, and accessories like printers, CPUs, UPS units, monitors, and more.",
  },
  {
    question: "What types of appliances does Trash2Cash accept?",
    answer:
      "We buy a wide range of home appliances, including refrigerators, washing machines, air conditioners, microwaves, fans, geysers, and other large household items. We also accept mobile phones, laptops, printers, and computer accessories such as CPUs, UPS units, monitors, etc.",
  },
  {
    question: "Can I sell non-working appliances to Trash2Cash?",
    answer:
      "Absolutely! We accept both working and non-working appliances, whether they are in perfect condition or need repairs. You can sell damaged appliances and electronics, including non-functional large home appliances, mobile phones, laptops, computers, and accessories like printers, CPUs, UPS units, and monitors, as long as all parts and accessories are included.",
  },
  {
    question:
      "What if my product brand or category is not listed in the options?",
    answer:
      "If your brand is not listed, you can select the “Others” option. For categories, we accept most used electronics, including older models. You can also reach out to us through the Contact Us form for support. We are continuously expanding and will be adding more products and categories soon.",
  },
  {
    question: "Is there any fee for the doorstep pick-up service?",
    answer:
      "Yes, a nominal service fee may apply for the doorstep pick-up. The fee is charged once per order, and you’ll receive payment on the spot once your used or old electronics are picked up.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20 px-4">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-3">
          Everything you need to know about selling with Trash2Cash
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50 transition"
            >
              <span className="font-medium text-black">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
