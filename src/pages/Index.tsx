import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Keyboard, Volume2, FileText, Users, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip Navigation Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <header className="border-b border-border bg-card" role="banner">
        <div className="container mx-auto px-4 py-6">
          <nav aria-label="Main navigation">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-3xl font-bold text-primary">
                AccessibleWeb
              </h1>
              <ul className="flex flex-wrap gap-4" role="list">
                <li>
                  <a 
                    href="#features" 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors focus:text-accent"
                    aria-label="Navigate to Features section"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#resources" 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors focus:text-accent"
                    aria-label="Navigate to Resources section"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-lg font-medium text-foreground hover:text-accent transition-colors focus:text-accent"
                    aria-label="Navigate to Contact section"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Hero Section */}
        <section 
          className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80"
          aria-labelledby="hero-heading"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <h2 
              id="hero-heading" 
              className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6"
            >
              Web Accessibility for Everyone
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Empowering blind and visually impaired users with accessible, intuitive web experiences designed for screen readers and keyboard navigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6"
                aria-label="Get started with accessible web resources"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90"
                aria-label="Learn more about web accessibility"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          id="features" 
          className="py-20 px-4"
          aria-labelledby="features-heading"
        >
          <div className="container mx-auto max-w-6xl">
            <h2 
              id="features-heading" 
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Accessibility Features
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Our platform is built with accessibility at its core, ensuring everyone can navigate and interact with ease.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
              <Card className="border-2 hover:border-accent transition-colors" role="listitem">
                <CardHeader>
                  <Volume2 className="w-12 h-12 text-accent mb-4" aria-hidden="true" />
                  <CardTitle className="text-2xl">Screen Reader Optimized</CardTitle>
                  <CardDescription className="text-lg">
                    Semantic HTML and ARIA labels ensure perfect compatibility with all major screen readers including JAWS, NVDA, and VoiceOver.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors" role="listitem">
                <CardHeader>
                  <Keyboard className="w-12 h-12 text-accent mb-4" aria-hidden="true" />
                  <CardTitle className="text-2xl">Keyboard Navigation</CardTitle>
                  <CardDescription className="text-lg">
                    Full keyboard support with visible focus indicators. Navigate through all content using Tab, Enter, and arrow keys.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors" role="listitem">
                <CardHeader>
                  <Eye className="w-12 h-12 text-accent mb-4" aria-hidden="true" />
                  <CardTitle className="text-2xl">High Contrast Design</CardTitle>
                  <CardDescription className="text-lg">
                    Carefully chosen color combinations meet WCAG AAA standards for maximum readability and visual clarity.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors" role="listitem">
                <CardHeader>
                  <FileText className="w-12 h-12 text-accent mb-4" aria-hidden="true" />
                  <CardTitle className="text-2xl">Clear Content Structure</CardTitle>
                  <CardDescription className="text-lg">
                    Logical heading hierarchy and semantic landmarks make content easy to navigate and understand.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors" role="listitem">
                <CardHeader>
                  <Users className="w-12 h-12 text-accent mb-4" aria-hidden="true" />
                  <CardTitle className="text-2xl">Inclusive Design</CardTitle>
                  <CardDescription className="text-lg">
                    Built following WCAG 2.1 Level AAA guidelines to ensure accessibility for all users, regardless of ability.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors" role="listitem">
                <CardHeader>
                  <Heart className="w-12 h-12 text-accent mb-4" aria-hidden="true" />
                  <CardTitle className="text-2xl">User-Centered</CardTitle>
                  <CardDescription className="text-lg">
                    Designed with input from blind and visually impaired users to ensure real-world usability and effectiveness.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section 
          id="resources" 
          className="py-20 px-4 bg-muted"
          aria-labelledby="resources-heading"
        >
          <div className="container mx-auto max-w-4xl">
            <h2 
              id="resources-heading" 
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Helpful Resources
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Learn more about web accessibility and assistive technologies.
            </p>

            <div className="space-y-6" role="list">
              <Card role="listitem">
                <CardHeader>
                  <CardTitle className="text-2xl">Getting Started with Screen Readers</CardTitle>
                  <CardDescription className="text-lg">
                    A comprehensive guide to using popular screen readers like JAWS, NVDA, and VoiceOver to navigate the web.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="default"
                    className="text-lg"
                    aria-label="Read guide about screen readers"
                  >
                    Read Guide
                  </Button>
                </CardContent>
              </Card>

              <Card role="listitem">
                <CardHeader>
                  <CardTitle className="text-2xl">Keyboard Shortcuts Reference</CardTitle>
                  <CardDescription className="text-lg">
                    Master keyboard navigation with this detailed reference of shortcuts for efficient web browsing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="default"
                    className="text-lg"
                    aria-label="View keyboard shortcuts reference"
                  >
                    View Shortcuts
                  </Button>
                </CardContent>
              </Card>

              <Card role="listitem">
                <CardHeader>
                  <CardTitle className="text-2xl">Accessibility Community Forum</CardTitle>
                  <CardDescription className="text-lg">
                    Connect with other users, share experiences, and get support from our inclusive community.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="default"
                    className="text-lg"
                    aria-label="Join accessibility community forum"
                  >
                    Join Forum
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className="py-20 px-4"
          aria-labelledby="contact-heading"
        >
          <div className="container mx-auto max-w-2xl text-center">
            <h2 
              id="contact-heading" 
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions or feedback? We'd love to hear from you.
            </p>
            <Button 
              size="lg"
              variant="default"
              className="text-lg px-8 py-6"
              aria-label="Contact us via email"
            >
              Contact Us
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12 px-4" role="contentinfo">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              © 2025 AccessibleWeb. Committed to digital accessibility for all.
            </p>
            <p className="text-lg text-muted-foreground">
              Built with accessibility standards: WCAG 2.1 Level AAA compliant
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
