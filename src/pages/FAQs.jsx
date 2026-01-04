import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    category: "Selling Process",
    items: [
      {
        q: "How do I sell my old appliances on Selsmart?",
        a: `Selling your old appliances is simple with Selsmart. Select the appliance you want to sell and schedule a convenient doorstep pick-up. Our logistics partner will come to your location, pick up the product, and pay you instantly. It’s the easiest way to sell used or old appliances like ACs, refrigerators, washing machines, mobile phones, laptops, computers, and accessories like printers, CPUs, UPS units, monitors, and more.`,
      },
      {
        q: "What types of appliances does Selsmart accept?",
        a: `We buy a wide range of home appliances, including refrigerators, washing machines, air conditioners, microwaves, fans, geysers, and other large household items. If you have old electronics or used appliances you no longer use, you can sell them here.

We also accept mobile phones, laptops, printers, and computer accessories such as CPUs, UPS units, monitors, etc.`,
      },
      {
        q: "Can I sell non-working appliances to Selsmart?",
        a: `Absolutely! We accept both working and non-working appliances, whether they are in perfect condition or need repairs. Selsmart allows you to sell damaged appliances and electronics, including non-functional large home appliances, mobile phones, laptops, computers, and accessories like printers, CPUs, UPS units, and monitors, as long as all parts and accessories are included.`,
      },
      {
        q: "What if my product brand or category is not listed in the options?",
        a: `If your brand is not listed, you can select the “Others” option. For categories, we accept most used electronics, including older models. You can also reach out to us through the Contact Us form for support. We are continuously expanding and will be adding more products and categories soon.`,
      },
    ],
  },
  {
    category: "Payment and Fees",
    items: [
      {
        q: "Is there any fee for the doorstep pick-up service?",
        a: `Yes, a nominal service fee may apply for the doorstep pick-up. The fee is charged once per order, and you’ll receive payment on the spot once your used or old electronics are picked up.`,
      },
      {
        q: "How does the payment process work?",
        a: `We provide instant payment through an authorized and secure online payment gateway. Once the appliance is collected from your home, you will receive payment instantly. Please note that we prioritize secure transactions and do not offer cash payments.`,
      },
    ],
  },
  {
    category: "Scheduling and Pick-up",
    items: [
      {
        q: "Will I receive a confirmation for my appliance pick-up?",
        a: `Yes, you will receive a confirmation message via email, SMS, or WhatsApp after placing your order. Our customer executive will call you to schedule the pick-up and confirm all necessary details.`,
      },
      {
        q: "Do I need to uninstall my appliance before pickup?",
        a: `Yes, make sure your appliance is disconnected from any power or water source and uninstalled if needed (like ACs, geysers, fans, etc.). Clean the appliance and ensure that all parts and accessories are included, if applicable.`,
      },
      {
        q: "Can I reschedule or cancel a pick-up?",
        a: `Yes, you can reschedule or cancel your pick-up anytime before the confirmation. After the confirmation, you will need to contact our customer executive to update your pick-up details for selling old or used appliances.`,
      },
    ],
  },
  {
    category: "Service Location",
    items: [
      {
        q: "Where does Selsmart provide its services?",
        a: `We currently provide doorstep services across selected locations in India, including Delhi, Noida, Greater Noida, Ghaziabad, Gurugram, Faridabad, Ahmedabad, Lucknow, Roorkee, Dehradun, Nagpur, Mumbai, Navi Mumbai, Thane, Pune, Palghar, Raigad, Surat, Rajkot, Vadodara, Jamnagar, Hyderabad, Ranga Reddy, Sangareddy, Medchal Malkajgiri, Ernakulam, Kochi, Kollam, Palakkad, Bengaluru Urban, Bengaluru Rural, Chennai, Kanchipuram, Chengalpattu, Thiruvallur, Hapur, Nuh, and more.

Our corporate office is based in Noida, Uttar Pradesh.`,
      },
    ],
  },
  {
    category: "Post-Pick-Up Process",
    items: [
      {
        q: "What happens to the appliances after pick-up?",
        a: `After pick-up, appliances are transported to our warehouses for initial inspection. From there, they are sent to our Roorkee plant for responsible recycling, ensuring all materials are processed in an environmentally friendly way. You can sell old appliances confidently knowing they are recycled responsibly.`,
      },
    ],
  },
  {
    category: "Account Management",
    items: [
      {
        q: "How do I delete my Selsmart account?",
        a: `To delete your Selsmart account:

Go to the Account Settings section in your profile.

Select the option to delete your account.

Enter the OTP sent to your registered email or phone number to confirm the request.

Once deleted, all your account data will be securely removed from our system.`,
      },
      {
        q: "Can I recover my account after deleting it?",
        a: `No, once your account is deleted, all associated data is permanently removed and cannot be recovered. However, you can create a new account anytime.`,
      },
    ],
  },
];

const FaqPage = () => {
  const [openKey, setOpenKey] = useState(null);

  return (
    <section className="w-full bg-white py-20 px-4">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mt-3">
          Find answers to common questions about our services
        </p>
      </div>

      {/* FAQ Content */}
      <div className="max-w-5xl mx-auto space-y-14">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-xl font-semibold text-black mb-6">
              {section.category}
            </h2>

            <div className="space-y-4">
              {section.items.map((item, itemIndex) => {
                const key = `${sectionIndex}-${itemIndex}`;
                const isOpen = openKey === key;

                return (
                  <div key={key} className="border border-gray-200 rounded-xl">
                    <button
                      onClick={() => setOpenKey(isOpen ? null : key)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition"
                    >
                      <span className="font-medium text-black">{item.q}</span>
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <p className="text-gray-700 mb-4">
          Couldn't find what you are looking for?
        </p>
        <button className="bg-green-700 text-white px-8 py-3 rounded-xl font-medium hover:bg-green-800 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default FaqPage;
