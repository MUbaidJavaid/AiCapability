"use client";

import React from "react"

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Shield,
  Clock,
  Users,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  BarChart3,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle2,
  Star,
  Play,
} from "lucide-react";

const testimonials = [
  { name: "Michael R.", profit: 15000, location: "New York, USA", image: "MR", days: 30 },
  { name: "Sarah K.", profit: 22500, location: "London, UK", image: "SK", days: 45 },
  { name: "James L.", profit: 18700, location: "Sydney, AU", image: "JL", days: 28 },
  { name: "Emma W.", profit: 31200, location: "Toronto, CA", image: "EW", days: 60 },
  { name: "David C.", profit: 27800, location: "Dubai, UAE", image: "DC", days: 42 },
  { name: "Lisa M.", profit: 19500, location: "Singapore", image: "LM", days: 35 },
  { name: "Robert T.", profit: 45000, location: "Berlin, DE", image: "RT", days: 90 },
  { name: "Anna P.", profit: 16800, location: "Paris, FR", image: "AP", days: 25 },
  { name: "Chris H.", profit: 38500, location: "Tokyo, JP", image: "CH", days: 75 },
  { name: "Maria G.", profit: 21300, location: "Madrid, ES", image: "MG", days: 40 },
  { name: "John D.", profit: 52000, location: "Chicago, USA", image: "JD", days: 120 },
  { name: "Sophie B.", profit: 17200, location: "Amsterdam, NL", image: "SB", days: 32 },
  { name: "Alex N.", profit: 29400, location: "Zurich, CH", image: "AN", days: 55 },
  { name: "Kate F.", profit: 24600, location: "Melbourne, AU", image: "KF", days: 48 },
  { name: "Tom W.", profit: 33800, location: "Hong Kong", image: "TW", days: 65 },
];

const countryPrefixes = [
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "AU" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
  { code: "+81", country: "JP" },
  { code: "+86", country: "CN" },
  { code: "+91", country: "IN" },
  { code: "+971", country: "UAE" },
  { code: "+65", country: "SG" },
];

export default function ForexLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonePrefix: "+1",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slidesPerView = 3;
  const maxSlide = testimonials.length - slidesPerView;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">

                <img
  src="https://biti-code.com/lander/the-biticodes---japan-funnel/media/670/conversions/45__655f0fae29d74_thebiticodes-logo.png"
  className="w-32 h-10"
  alt="The Biticodes Logo"
/>



            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                How It Works
              </a>
              <a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Success Stories
              </a>
              <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Features
              </a>
            </div>
            <Button variant="secondary" className="font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-primary-foreground/90">
                  Live Trading Active - 2,847 Users Online
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
                Smart Forex Trading for{" "}
                <span className="text-secondary">Maximum Profits</span>
              </h1>
              <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                Join thousands of successful investors who trust our expert trading team.
                Simply invest and let our professional traders do all the work. Consistent daily
                profits, minimal effort, maximum growth.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-primary-foreground/90">No Experience Needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-primary-foreground/90">24/7 Automated Trading</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-primary-foreground/90">Expert Traders</span>
                </div>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-primary-foreground">$127M+</p>
                  <p className="text-sm text-primary-foreground/70">Profits Generated</p>
                </div>
                <div className="w-px h-12 bg-primary-foreground/20" />
                <div>
                  <p className="text-3xl font-bold text-primary-foreground">50K+</p>
                  <p className="text-sm text-primary-foreground/70">Active Investors</p>
                </div>
                <div className="w-px h-12 bg-primary-foreground/20" />
                <div>
                  <p className="text-3xl font-bold text-primary-foreground">98%</p>
                  <p className="text-sm text-primary-foreground/70">Success Rate</p>
                </div>
              </div>
            </div>

            {/* Right - Registration Form */}
            <div className="lg:justify-self-end w-full max-w-md">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="bg-secondary p-4">
                  <h3 className="text-lg font-bold text-secondary-foreground text-center">
                    Start Your Investment Journey
                  </h3>
                  <p className="text-sm text-secondary-foreground/80 text-center mt-1">
                    Register now and get a free consultation
                  </p>
                </div>
                <CardContent className="p-6">
                  {submitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">Registration Successful!</h4>
                      <p className="text-muted-foreground">
                        Our team will contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-medium text-muted-foreground mb-1 block">
                            First Name
                          </label>
                          <Input
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({ ...formData, firstName: e.target.value })
                            }
                            required
                            className="h-10"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-muted-foreground mb-1 block">
                            Last Name
                          </label>
                          <Input
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({ ...formData, lastName: e.target.value })
                            }
                            required
                            className="h-10"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1 block">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="h-10"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1 block">
                          Phone Number
                        </label>
                        <div className="flex gap-2">
                          <select
                            value={formData.phonePrefix}
                            onChange={(e) =>
                              setFormData({ ...formData, phonePrefix: e.target.value })
                            }
                            className="h-10 px-2 rounded-md border border-input bg-background text-sm w-24"
                          >
                            {countryPrefixes.map((prefix) => (
                              <option key={prefix.code} value={prefix.code}>
                                {prefix.code} {prefix.country}
                              </option>
                            ))}
                          </select>
                          <Input
                            type="tel"
                            placeholder="123 456 7890"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            required
                            className="h-10 flex-1"
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 text-base font-semibold bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            Register Now
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        )}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        By registering, you agree to our Terms of Service and Privacy Policy
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-secondary py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-secondary-foreground/70" />
              <span className="text-secondary-foreground font-medium">Available in 120+ Countries</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-secondary-foreground/70" />
              <span className="text-secondary-foreground font-medium">Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-secondary-foreground/70" />
              <span className="text-secondary-foreground font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-secondary-foreground/70" />
              <span className="text-secondary-foreground font-medium">50,000+ Investors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Profits Rate Section */}
      <section className="py-16 bg-[#0f1419]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Performance Metrics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Daily Profits Rate
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Track our consistent performance with real-time trading data and success metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Daily Trading Volume Chart */}
            <div className="bg-[#1a2332] rounded-2xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Daily Trading Volume</h3>
                <p className="text-white/50 text-sm">Average weekly performance (in billions)</p>
              </div>
              <div className="h-56 flex items-end gap-3">
                {[
                  { day: "Mon", value: 48 },
                  { day: "Tue", value: 72 },
                  { day: "Wed", value: 56 },
                  { day: "Thu", value: 80 },
                  { day: "Fri", value: 96 },
                  { day: "Sat", value: 72 },
                  { day: "Sun", value: 84 },
                ].map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80"
                      style={{
                        height: `${item.value}%`,
                        background: "linear-gradient(to top, #3b82f6, #22d3ee)"
                      }}
                    />
                    <span className="text-xs text-white/50">{item.day}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm text-white/40">
                <span>0</span>
                <span>0.6</span>
                <span>1.2</span>
                <span>1.8</span>
                <span>2.4</span>
              </div>
              <p className="text-right text-xs text-white/30 mt-2">Volume ($B)</p>
            </div>

            {/* Trading Success Rate Chart */}
            <div className="bg-[#1a2332] rounded-2xl p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Trading Success Rate</h3>
                <p className="text-white/50 text-sm">Platform accuracy over 6 months (%)</p>
              </div>
              <div className="h-56 relative">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="successGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  <line x1="0" y1="160" x2="400" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                  {/* Area fill */}
                  <path
                    d="M 0 160 L 0 140 Q 40 130 80 120 T 160 90 T 240 70 T 320 60 T 400 50 L 400 160 Z"
                    fill="url(#successGradient)"
                  />
                  {/* Line */}
                  <path
                    d="M 0 140 Q 40 130 80 120 T 160 90 T 240 70 T 320 60 T 400 50"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Data points */}
                  <circle cx="0" cy="140" r="4" fill="#a855f7" />
                  <circle cx="80" cy="120" r="4" fill="#a855f7" />
                  <circle cx="160" cy="90" r="4" fill="#a855f7" />
                  <circle cx="240" cy="70" r="4" fill="#a855f7" />
                  <circle cx="320" cy="60" r="4" fill="#a855f7" />
                  <circle cx="400" cy="50" r="4" fill="#a855f7" />
                </svg>
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-white/40 py-2">
                  <span>95%</span>
                  <span>90%</span>
                  <span>85%</span>
                  <span>80%</span>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-white/50">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>
          </div>

          {/* Daily Profit Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Average Daily Profit", value: "3.2%", color: "text-emerald-400" },
              { label: "Best Day Return", value: "7.8%", color: "text-cyan-400" },
              { label: "Monthly Average", value: "42%", color: "text-purple-400" },
              { label: "Success Rate", value: "94%", color: "text-primary" },
            ].map((stat, index) => (
              <div key={index} className="bg-[#1a2332] rounded-xl p-5 text-center">
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary-foreground bg-primary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Simple Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              How Our System Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Just invest and the rest is our work. Our advanced AI-powered system handles
              everything for you while you enjoy the profits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: DollarSign,
                title: "Invest Your Capital",
                description:
                  "Simply deposit your investment amount securely. Start with as little as $250 and scale up as you see results coming in.",
              },
              {
                step: "02",
                icon: Users,
                title: "Experts Trade For You",
                description:
                  "Our team of professional forex traders with 10+ years experience manage your investment using proven strategies.",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Receive Your Profits",
                description:
                  "Sit back and relax while your money works for you. Receive consistent daily profits directly to your account.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
                  Why Trust Our Expert Traders?
                </h3>
                <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                  Our team of professional traders with over 10 years of experience
                  manages your investment using time-tested strategies. You simply invest
                  and our experts do all the work - analyzing markets, executing trades,
                  and maximizing your returns.
                </p>
                <ul className="space-y-3">
                  {[
                    "Professional traders with 10+ years experience",
                    "Daily profits deposited to your account",
                    "Transparent performance reports",
                    "Dedicated account manager for you",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span className="text-secondary-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">Daily Profit Rate</span>
                    <span className="text-sm font-bold text-emerald-500">2.5% - 5% Daily</span>
                  </div>
                  <div className="h-40 flex items-end gap-2">
                    {[40, 55, 45, 70, 60, 85, 75, 95, 88, 100, 92, 115].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-primary/80 rounded-t transition-all duration-500 hover:bg-primary"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Jan</span>
                    <span>Jun</span>
                    <span>Dec</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-emerald-500/10 text-emerald-500 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Real Profits from Real Investors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied investors who have transformed their financial future by trusting our expert team.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden" ref={carouselRef}>
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 flex-shrink-0 px-3"
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <div className="mb-4">
                          <p className="text-3xl font-bold text-emerald-500">
                            +${testimonial.profit.toLocaleString()}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Profit in {testimonial.days} days
                          </p>
                        </div>
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                          {"\"I just invested and their expert team took care of everything. The daily profits are consistent and I couldn't be happier!\""}
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t">
                          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                            {testimonial.image}
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-card shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-card shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(Math.ceil(testimonials.length / slidesPerView))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * slidesPerView > maxSlide ? maxSlide : index * slidesPerView)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentSlide / slidesPerView) === index
                    ? "bg-primary w-6"
                    : "bg-primary/30"
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
              Platform Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive trading platform provides all the tools and support you need for consistent profits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Instant Execution",
                description: "Lightning-fast trade execution with zero delays",
              },
              {
                icon: Shield,
                title: "Secure Platform",
                description: "256-bit encryption and 2FA protection",
              },
              {
                icon: BarChart3,
                title: "Live Analytics",
                description: "Real-time performance tracking and reports",
              },
              {
                icon: Clock,
                title: "24/7 Trading",
                description: "Automated trading around the clock",
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated account managers for guidance",
              },
              {
                icon: Globe,
                title: "Global Access",
                description: "Trade from anywhere in the world",
              },
              {
                icon: DollarSign,
                title: "Low Minimums",
                description: "Start investing with just $250",
              },
              {
                icon: TrendingUp,
                title: "Consistent Returns",
                description: "Proven track record of profitability",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 text-balance">
            Ready to Start Earning?
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join over 50,000 investors who have already discovered the power of expert-managed forex trading.
            Your financial freedom is just one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Play className="w-5 h-5 mr-2" />
              Start Investing Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 text-lg px-8 bg-transparent"
            >
              Learn More
            </Button>
          </div>
          <p className="mt-6 text-sm text-secondary-foreground/60">
            No hidden fees | Daily profits | 24/7 expert support
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-background">ForexPro</span>
              </div>
              <p className="text-background/60 text-sm">
                The trusted platform for automated forex trading. Making professional
                trading accessible to everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/60 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-background/60 hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="text-background/60 hover:text-primary transition-colors">Success Stories</a></li>
                <li><a href="#" className="text-background/60 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-background/60 hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-background/60 hover:text-primary transition-colors">Risk Disclosure</a></li>
                <li><a href="#" className="text-background/60 hover:text-primary transition-colors">AML Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-background mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li>support@forexpro.com</li>
                <li>+1 (888) 555-0123</li>
                <li>Mon-Fri: 9AM - 6PM EST</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/10 pt-8 text-center">
            <p className="text-sm text-background/40">
              2026 ForexPro Trading. All rights reserved. Trading involves risk.
              Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
