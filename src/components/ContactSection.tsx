import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title = "Contact Us",
  subtitle = "Get in touch with our design team",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="w-full py-16 bg-mediumGrey" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-darkGrey-800 mb-3">
            {title}
          </h2>
          <p className="text-darkGrey-700 text-center max-w-2xl">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto px-4 md:px-8 lg:px-16">
          {/* Google Maps Embed - Left Side */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.4309625483816!2d55.26230939678953!3d25.188685000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69cd8f669cbf%3A0x1086c324a5946077!2sThe%20Opus%20by%20OMNIYAT%20designed%20by%20Zaha%20Hadid!5e0!3m2!1sen!2sae!4v1752134753704!5m2!1sen!2sae"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px] rounded-lg"
            />
          </div>

          {/* Contact Form - Right Side */}
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-darkGrey-300 text-darkGrey-800 placeholder:text-darkGrey-500 focus:border-bronze focus:ring-bronze"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-darkGrey-300 text-darkGrey-800 placeholder:text-darkGrey-500 focus:border-bronze focus:ring-bronze"
                  />
                </div>
              </div>

              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white border-darkGrey-300 text-darkGrey-800 placeholder:text-darkGrey-500 focus:border-bronze focus:ring-bronze"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-white border-darkGrey-300 text-darkGrey-800 placeholder:text-darkGrey-500 focus:border-bronze focus:ring-bronze resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-bronze hover:bg-bronze-600 text-white font-semibold py-3 px-6 transition-colors duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
