import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Calendar, Weight, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Adoptions = () => {
  const availablePets = [
    {
      id: 1,
      name: "Luna",
      type: "Kitten",
      age: "8 weeks",
      weight: "1.2 lbs",
      location: "Foster Home",
      description: "Sweet kitten rescued at 2 weeks old. Bottle-fed and now ready for her forever home.",
      image: "/placeholder.svg",
      specialNeeds: false,
      vaccinated: true,
      spayedNeutered: false
    },
    {
      id: 2,
      name: "Oliver",
      type: "Puppy",
      age: "6 weeks",
      weight: "2.8 lbs",
      location: "Main Facility",
      description: "Orphaned puppy who's been hand-raised since birth. Very social and loves cuddles.",
      image: "/placeholder.svg",
      specialNeeds: false,
      vaccinated: false,
      spayedNeutered: false
    },
    {
      id: 3,
      name: "Rosie",
      type: "Piglet",
      age: "4 weeks",
      weight: "3.5 lbs",
      location: "Foster Home",
      description: "Micro pig rescued as a newborn. Requires experienced owner familiar with pig care.",
      image: "/placeholder.svg",
      specialNeeds: true,
      vaccinated: true,
      spayedNeutered: false
    },
    {
      id: 4,
      name: "Pepper",
      type: "Kitten",
      age: "10 weeks",
      weight: "1.8 lbs",
      location: "Main Facility",
      description: "Bottle baby who's now eating solid food and using the litter box perfectly.",
      image: "/placeholder.svg",
      specialNeeds: false,
      vaccinated: true,
      spayedNeutered: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-soft">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Available for Adoption
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            These precious babies have been lovingly cared for from their earliest days and are now ready to find their forever families.
          </p>
          <div className="flex items-center justify-center gap-2 text-primary">
            <Heart className="w-5 h-5 animate-heartbeat" />
            <span className="text-lg font-medium">Every adoption saves two lives</span>
            <Heart className="w-5 h-5 animate-heartbeat" />
          </div>
        </div>
      </section>

      {/* Available Pets Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availablePets.map((pet) => (
              <Card key={pet.id} className="overflow-hidden hover:shadow-elegant transition-shadow duration-300">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <img 
                    src={pet.image} 
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant={pet.specialNeeds ? "destructive" : "secondary"}>
                      {pet.specialNeeds ? "Special Needs" : "Ready for Home"}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {pet.name}
                    <Heart className="w-5 h-5 text-primary" />
                  </CardTitle>
                  <CardDescription>{pet.type}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{pet.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{pet.age}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Weight className="w-4 h-4 text-primary" />
                      <span>{pet.weight}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{pet.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {pet.vaccinated && <Badge variant="outline">Vaccinated</Badge>}
                    {pet.spayedNeutered && <Badge variant="outline">Spayed/Neutered</Badge>}
                    {!pet.vaccinated && <Badge variant="secondary">Vaccines Pending</Badge>}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2">
                  <Button className="flex-1" variant="default">
                    Apply to Adopt
                  </Button>
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Adoption Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Adoption Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our careful adoption process ensures the best match between pets and families.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Application",
                description: "Fill out our comprehensive adoption application form."
              },
              {
                step: "2",
                title: "Review",
                description: "Our team reviews your application and checks references."
              },
              {
                step: "3",
                title: "Meet & Greet",
                description: "Schedule a visit to meet your potential new family member."
              },
              {
                step: "4",
                title: "Home Visit",
                description: "Final home check to ensure a safe environment for your new pet."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-sunset rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Adoptions;