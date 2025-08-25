import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowUp, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { useAvgxIndex } from "@/hooks/use-avgx-index";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const Home = () => {
  const { indexData, isLoading } = useAvgxIndex();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-avgx-primary via-avgx-secondary to-avgx-primary dark:from-avgx-primary dark:via-avgx-secondary dark:to-avgx-primary light:from-gray-50 light:via-white light:to-gray-50">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-teal/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-accent-teal via-avgx-text-primary to-accent-purple bg-clip-text text-transparent animate-float">
              The Neutral Global Currency
            </h1>
            <p className="text-xl md:text-2xl text-avgx-text-secondary dark:text-avgx-text-secondary light:text-gray-600 mb-8 leading-relaxed">
              AVGX combines the stability of major fiat currencies with the innovation of cryptocurrencies, 
              creating a truly neutral global financial index accessible to everyone.
            </p>

            {/* Live AVGX Price Display */}
            <GlassCard className="p-8 mb-12 max-w-md mx-auto" neonBorder>
              <div className="text-sm text-avgx-text-secondary dark:text-avgx-text-secondary light:text-gray-600 mb-2">
                Current AVGX Index
              </div>
              <div className="text-4xl font-mono font-bold text-accent-teal mb-2">
                {isLoading ? (
                  <div className="animate-pulse">Loading...</div>
                ) : (
                  `$${indexData?.value.toFixed(4) || '0.0000'}`
                )}
              </div>
              <div className="text-sm">
                {indexData?.change24h && indexData.change24h > 0 ? (
                  <span className="text-green-400">
                    <ArrowUp className="inline w-4 h-4" /> +{indexData.change24h.toFixed(2)}% (24h)
                  </span>
                ) : (
                  <span className="text-red-400">
                    <ArrowUp className="inline w-4 h-4 rotate-180" /> {indexData?.change24h?.toFixed(2) || '0.00'}% (24h)
                  </span>
                )}
              </div>
            </GlassCard>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/avgx-index">
                <Button className="bg-gradient-to-r from-accent-teal to-emerald-500 px-8 py-4 text-lg hover:shadow-xl hover:shadow-accent-teal/30 transition-all transform hover:scale-105">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  View AVGX Index
                </Button>
              </Link>
              <Link href="/prices">
                <Button className="bg-gradient-to-r from-accent-purple to-purple-600 px-8 py-4 text-lg hover:shadow-xl hover:shadow-accent-purple/30 transition-all transform hover:scale-105">
                  <DollarSign className="mr-2 h-5 w-5" />
                  View All Prices
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-avgx-primary to-avgx-secondary dark:from-avgx-primary dark:to-avgx-secondary light:from-white light:to-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-avgx-text-primary dark:text-avgx-text-primary light:text-gray-900">
              Why Choose AVGX?
            </h2>
            <p className="text-xl text-avgx-text-secondary dark:text-avgx-text-secondary light:text-gray-600 max-w-3xl mx-auto">
              A revolutionary approach to global finance that bridges traditional and digital currencies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-accent-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-accent-teal" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-avgx-text-primary dark:text-avgx-text-primary light:text-gray-900">
                Stable & Neutral
              </h3>
              <p className="text-avgx-text-secondary dark:text-avgx-text-secondary light:text-gray-600">
                Combines 50 major fiat currencies with 10 leading cryptocurrencies for maximum stability and neutrality
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-accent-purple" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-avgx-text-primary dark:text-avgx-text-primary light:text-gray-900">
                Real-time Index
              </h3>
              <p className="text-avgx-text-secondary dark:text-avgx-text-secondary light:text-gray-600">
                Live updates every 60 seconds using real-time market data from global financial sources
              </p>
            </GlassCard>

            <GlassCard className="p-8 text-center">
              <div className="w-16 h-16 bg-accent-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-teal to-accent-purple rounded text-white flex items-center justify-center text-sm font-bold">
                  AX
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-avgx-text-primary dark:text-avgx-text-primary light:text-gray-900">
                Multi-chain Support
              </h3>
              <p className="text-avgx-text-secondary dark:text-avgx-text-secondary light:text-gray-600">
                Trade AVGX tokens on Ethereum and Polygon testnets with seamless wallet integration
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;