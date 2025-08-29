import { Card, CardContent } from "@/components/ui/card";
import { Heart, Clock, Baby, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Baby,
      title: "Neonatal Specialists",
      description: "Our team has specialized training in caring for newborn and very young animals who need intensive, round-the-clock care."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Care",
      description: "We're always ready to respond to emergency calls for orphaned or abandoned baby animals who need immediate intervention."
    },
    {
      icon: Heart,
      title: "Loving Foster Network",
      description: "Our dedicated foster families provide temporary homes where these tiny animals receive the individual attention they need to thrive."
    },
    {
      icon: Users,
      title: "Expert Veterinary Team",
      description: "We work closely with veterinarians who specialize in neonatal care to ensure the best possible outcomes for every animal."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Our Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Specialized Care for the
              <span className="block text-primary">Tiniest Lives</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              When baby animals are orphaned, abandoned, or born too premature for traditional shelters, 
              they need specialized neonatal care. That's where Orphan Annie's steps in - providing 
              the intensive, round-the-clock care these vulnerable creatures need to survive and thrive.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-sunset rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Story Section */}
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12 border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Annie's Story: Where It All Began
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our rescue was founded after Annie, a tiny orphaned kitten, was brought to us barely clinging to life. 
                  She was so small she fit in the palm of our founder's hand. Through weeks of intensive care, feeding 
                  every two hours, and unwavering dedication, Annie not only survived but thrived.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Annie's remarkable recovery inspired us to specialize in neonatal care - because every baby animal 
                  deserves the same chance Annie had. Today, she serves as our honorary mascot and reminder of why 
                  this work matters so much.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-secondary/50 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Heart className="w-16 h-16 text-heart mx-auto mb-4 animate-heartbeat" />
                    <p className="text-muted-foreground font-medium">Annie's Photo</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;