import { useState } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: "", stylist: "", date: "", time: "", notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll confirm your appointment shortly.");
  };

  return (
    <main className="pt-16">
      {/* Header */}
      <section className="section-dark py-20 section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-heading font-semibold tracking-[0.2em] uppercase text-primary mb-2">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-4">Book Your Visit</h1>
          <p className="text-dark-foreground/60 max-w-lg">
            Request an appointment online or give us a call. Walk-ins are also welcome based on availability.
          </p>
        </div>
      </section>

      <section className="py-20 section-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <ScrollReveal className="lg:col-span-3">
            <h2 className="text-2xl font-heading font-bold tracking-tight mb-8">Request an Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-heading font-semibold tracking-wide uppercase text-muted-foreground block mb-2">Name *</label>
                  <input
                    name="name" required value={form.name} onChange={handleChange}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-xs font-heading font-semibold tracking-wide uppercase text-muted-foreground block mb-2">Phone *</label>
                  <input
                    name="phone" type="tel" required value={form.phone} onChange={handleChange}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-heading font-semibold tracking-wide uppercase text-muted-foreground block mb-2">Email</label>
                <input
                  name="email" type="email" value={form.email} onChange={handleChange}
                  className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-heading font-semibold tracking-wide uppercase text-muted-foreground block mb-2">Service Interest</label>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  >
                    <option value="">Select a service</option>
                    <option>Haircut</option>
                    <option>Color & Highlights</option>
                    <option>Styling & Blowout</option>
                    <option>Beard & Shave</option>
                    <option>Treatment</option>
                    <option>Bridal & Events</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-heading font-semibold tracking-wide uppercase text-muted-foreground block mb-2">Preferred Stylist</label>
                  <select
                    name="stylist" value={form.stylist} onChange={handleChange}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  >
                    <option value="">No preference</option>
                    <option>Maya Chen</option>
                    <option>Theo Rivera</option>
                    <option>Priya Nakamura</option>
                    <option>Leo Moretti</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-heading font-semibold tracking-wide uppercase text-muted-foreground block mb-2">Preferred Date</label>
                  <input
                    name="date" type="date" value={form.date} onChange={handleChange}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>
                <div>
                  <label className="text-xs font-heading font-semibold tracking-wide uppercase text-muted-foreground block mb-2">Preferred Time</label>
                  <input
                    name="time" type="time" value={form.time} onChange={handleChange}
                    className="w-full h-11 px-4 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-heading font-semibold tracking-wide uppercase text-muted-foreground block mb-2">Notes</label>
                <textarea
                  name="notes" rows={3} value={form.notes} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  placeholder="Anything we should know?"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                Request Appointment
              </Button>
            </form>
          </ScrollReveal>

          {/* Sidebar Info */}
          <ScrollReveal delay={200} className="lg:col-span-2">
            <div className="space-y-10">
              <div>
                <h3 className="font-heading font-bold text-lg mb-4">Walk-In Policy</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Walk-ins are welcome based on availability. For the best experience, we recommend booking ahead —
                  especially for color services and weekends.
                </p>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg mb-4">Find Us</h3>
                <div className="space-y-3 text-sm text-foreground/70">
                  <p className="flex items-start gap-3">
                    <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                    123 Style Avenue<br />Brooklyn, NY 11201
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone size={16} className="text-primary shrink-0" />
                    (718) 555-0142
                  </p>
                  <a href="https://instagram.com" target="_blank" rel="noopener" className="flex items-center gap-3 hover:text-primary transition-colors">
                    <Instagram size={16} className="text-primary shrink-0" />
                    @luxe.salon
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg mb-4">Hours</h3>
                <div className="space-y-1.5 text-sm text-foreground/70">
                  <p className="flex items-center gap-3">
                    <Clock size={16} className="text-primary shrink-0" />
                    Mon–Fri: 9am – 8pm
                  </p>
                  <p className="ml-[28px]">Saturday: 9am – 6pm</p>
                  <p className="ml-[28px]">Sunday: 10am – 5pm</p>
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg mb-4">Parking</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Street parking available on Style Ave and adjacent blocks. The Atlantic Terminal garage is a 5-minute walk.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
