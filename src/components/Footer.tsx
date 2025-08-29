import { Heart, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Mission */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-sunset rounded-full">
                  <Heart className="w-6 h-6 text-primary-foreground animate-heartbeat" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Orphan Annie's</h3>
                  <p className="text-sm opacity-80">Neonatal Rescue</p>
                </div>
              </div>
              <p className="text-background/80 leading-relaxed mb-4">
                Dedicated to providing specialized neonatal care for the tiniest, most vulnerable animals. 
                Every baby animal deserves a chance at life, love, and happiness.
              </p>
              <div className="flex gap-4">
                <div className="text-sm">
                  <div className="font-medium">Emergency:</div>
                  <div className="opacity-80">(555) 123-HELP</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">General:</div>
                  <div className="opacity-80">(555) 123-CARE</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#about" className="block opacity-80 hover:opacity-100 transition-opacity">About Us</a>
                <a href="#stories" className="block opacity-80 hover:opacity-100 transition-opacity">Success Stories</a>
                <a href="#volunteer" className="block opacity-80 hover:opacity-100 transition-opacity">Volunteer</a>
                <a href="#contact" className="block opacity-80 hover:opacity-100 transition-opacity">Contact</a>
                <a href="#donate" className="block opacity-80 hover:opacity-100 transition-opacity">Donate</a>
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">Emergency Care</a>
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">Adoption Process</a>
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">Foster Program</a>
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">Monthly Giving</a>
                <a href="#" className="block opacity-80 hover:opacity-100 transition-opacity">Memorial Gifts</a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm opacity-80 mb-4 md:mb-0">
              © 2024 Orphan Annie's Neonatal Rescue. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Tax Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;