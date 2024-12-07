// app/page.tsx
import {
  ArrowRight,
  ChevronRight,
  Globe,
  HelpingHand,
  Search,
  Phone,
  Star,
  LayoutDashboard,
  Settings2,
  BarChart2,
  Briefcase,
  Paintbrush,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Logo from "@/components/logo";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 mx-auto">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Logo />
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://wa.me/254726299179"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <Badge className="mb-4" variant="secondary">
              Coming Soon
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
              Build Your Professional Online Presence
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
              Create beautiful service pages, manage your business, and grow
              your online presence - all without coding or hiring expensive
              developers.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="https://forms.gle/ch8VP5ZnUehxNQvR6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button size="lg">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://wa.me/254726299179"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button size="lg" variant="outline">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Why Service Providers Choose Us
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  No Technical Skills Needed
                </CardTitle>
                <CardDescription>
                  Build and manage your professional website without any coding
                  knowledge. Say goodbye to expensive web developers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  SEO Optimized
                </CardTitle>
                <CardDescription>
                  Get found online easily with our SEO-optimized pages. Reach
                  more clients through better search visibility.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Paintbrush className="h-5 w-5 text-primary" />
                  Professional Templates
                </CardTitle>
                <CardDescription>
                  Choose from beautiful, industry-specific templates designed to
                  showcase your services effectively.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Everything You Need to Succeed Online
            </h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Powerful tools to help you showcase your services and manage your
              business efficiently
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature Cards */}
            <Card>
              <CardHeader>
                <LayoutDashboard className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Easy Page Builder</CardTitle>
                <CardDescription>
                  Create and customize your service pages with our intuitive
                  drag-and-drop builder
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Service Management</CardTitle>
                <CardDescription>
                  Organize and showcase your services with detailed
                  descriptions, pricing, and portfolios
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-primary mb-2" />
                <CardTitle>SEO Tools</CardTitle>
                <CardDescription>
                  Built-in SEO optimization tools to help your services rank
                  better in search results
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BarChart2 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Business Analytics</CardTitle>
                <CardDescription>
                  Track page views, inquiries, and performance with detailed
                  analytics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Reviews & Testimonials</CardTitle>
                <CardDescription>
                  Build trust with integrated reviews and testimonials from your
                  clients
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <HelpingHand className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Client Management</CardTitle>
                <CardDescription>
                  Manage client interactions and inquiries all in one place
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50">
        <div className="container px-4 mx-auto py-12 md:py-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              Get Early Access
            </h2>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Join the waitlist to be among the first service providers to
              create their professional online presence with mtandao.xyz
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link
                href="https://forms.gle/ch8VP5ZnUehxNQvR6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button size="lg">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link
                href="https://wa.me/254726299179"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button size="lg" variant="outline">
                  Contact Us
                  <Phone className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container px-4 mx-auto py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <span className="font-semibold">mtandao.xyz</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://wa.me/254726299179"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                WhatsApp: +254 726 299 179
              </Link>
              <span className="text-sm text-muted-foreground">
                © 2024 mtandao.xyz. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
