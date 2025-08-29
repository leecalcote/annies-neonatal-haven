import { Button } from "@/components/ui/button";
import { Heart, PawPrint } from "lucide-react";
import heroImage from "@/assets/hero-rescue.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Heart className="w-12 h-12 text-heart animate-float" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-20">
        <PawPrint className="w-16 h-16 text-paw animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute top-1/3 right-20 opacity-20">
        <Heart className="w-8 h-8 text-accent animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Saving lives, one tiny heartbeat at a time
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Every Baby Animal
            <span className="block text-primary">Deserves a Chance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Orphan Annie's Neonatal Rescue specializes in caring for the tiniest, most vulnerable animals. 
            When they're too young, too weak, or too small for traditional shelters, we step in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8 py-4">
              <PawPrint className="mr-2 h-5 w-5" />
              Learn Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">2,500+</div>
              <div className="text-sm text-muted-foreground">Lives Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Care</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;