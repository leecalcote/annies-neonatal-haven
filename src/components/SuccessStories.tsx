import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Tiny Tim",
      age: "2 days old when rescued",
      story: "Found abandoned under a porch, Tim weighed only 3 ounces. After 8 weeks of intensive care and tube feeding, he's now a healthy, playful cat living with his forever family.",
      status: "Adopted",
      image: "🐱"
    },
    {
      name: "The Magnificent Seven",
      age: "1 week old when rescued",
      story: "Seven orphaned puppies were brought to us after their mother was tragically lost. Through round-the-clock feeding and care, all seven survived and found loving homes.",
      status: "All Adopted",
      image: "🐕"
    },
    {
      name: "Luna & Star",
      age: "3 days old when rescued",
      story: "Twin kittens found in a storm drain needed immediate medical attention and intensive care. Both overcame early challenges and are now thriving in their adoptive homes.",
      status: "Adopted Together",
      image: "🌟"
    },
    {
      name: "Miracle Max",
      age: "Born premature",
      story: "Max was born 2 weeks early and needed incubator care and specialized feeding. Today he's a strong, healthy dog who loves to play fetch and swim.",
      status: "Adopted",
      image: "🏊"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Happy Endings
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Success Stories That
              <span className="block text-primary">Warm the Heart</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Every animal that comes through our doors has a story. Here are just a few of the 
              incredible transformations we've witnessed through dedicated neonatal care.
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {stories.map((story, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{story.image}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-foreground">{story.name}</h3>
                        <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full font-medium">
                          {story.status}
                        </span>
                      </div>
                      <p className="text-sm text-primary/80 font-medium mb-3">{story.age}</p>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {story.story}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats & CTA */}
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
                <div className="text-muted-foreground">Animals Rescued</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-heart mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div>
                <Button variant="hero" size="lg" className="w-full">
                  See More Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;