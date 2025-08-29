import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Heart, AlertTriangle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Need Our Help?
              <span className="block text-primary">We're Here for You</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you've found an orphaned animal, want to volunteer, or have questions 
              about our rescue, we're here to help. Every minute counts in neonatal care.
            </p>
          </div>

          {/* Emergency Alert */}
          <div className="bg-warning/10 border border-warning/30 rounded-2xl p-6 mb-12 text-center">
            <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Emergency Animal Rescue</h3>
            <p className="text-muted-foreground mb-4">
              Found an orphaned or injured baby animal? Time is critical. Call our emergency line immediately.
            </p>
            <Button variant="donate" size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: (555) 123-HELP
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Emergency Line</div>
                        <div className="text-muted-foreground">(555) 123-HELP</div>
                        <div className="text-sm text-warning">24/7 for animal emergencies</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">General Inquiries</div>
                        <div className="text-muted-foreground">(555) 123-CARE</div>
                        <div className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <div className="text-muted-foreground">info@orphanannies.org</div>
                        <div className="text-sm text-muted-foreground">We respond within 24 hours</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Location</div>
                        <div className="text-muted-foreground">123 Rescue Lane<br />Compassion City, CC 12345</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Visiting Hours</div>
                        <div className="text-muted-foreground">
                          Mon-Fri: 10 AM - 4 PM<br />
                          Sat: 10 AM - 2 PM<br />
                          Sun: By appointment
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">How Can We Help?</h3>
                  
                  <div className="space-y-4">
                    <Button variant="default" size="lg" className="w-full justify-start">
                      <AlertTriangle className="mr-3 h-5 w-5" />
                      Report an Emergency
                    </Button>
                    
                    <Button variant="warm" size="lg" className="w-full justify-start">
                      <Heart className="mr-3 h-5 w-5" />
                      Volunteer with Us
                    </Button>
                    
                    <Button variant="warm" size="lg" className="w-full justify-start">
                      <Mail className="mr-3 h-5 w-5" />
                      Adoption Inquiries
                    </Button>
                    
                    <Button variant="warm" size="lg" className="w-full justify-start">
                      <Phone className="mr-3 h-5 w-5" />
                      General Questions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Follow Our Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    Stay updated on our latest rescues, success stories, and ways to help.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="warm" size="sm">Facebook</Button>
                    <Button variant="warm" size="sm">Instagram</Button>
                    <Button variant="warm" size="sm">Newsletter</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;