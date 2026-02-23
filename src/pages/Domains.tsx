import { useState } from "react";
import { Search, Globe, ShieldCheck, Clock, ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface DomainResult {
  domainName: string;
  purchasable: boolean;
  purchasePrice?: number;
  renewalPrice?: number;
  premium?: boolean;
  purchaseType?: string;
}

const popularTlds = [".com", ".net", ".org", ".io", ".dev", ".co", ".ai", ".tech", ".store", ".online"];

const Domains = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<DomainResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const { toast } = useToast();

  const searchDomains = async () => {
    if (!keyword.trim()) return;
    setLoading(true);
    setSearched(true);

    try {
      const { data, error } = await supabase.functions.invoke("domain-search", {
        body: { action: "search", keyword: keyword.trim() },
      });

      if (error) throw error;

      const domains: DomainResult[] = (data?.results || []).map((r: any) => ({
        domainName: r.domainName,
        purchasable: r.purchasable ?? false,
        purchasePrice: r.purchasePrice,
        renewalPrice: r.renewalPrice,
        premium: r.premium ?? false,
        purchaseType: r.purchaseType,
      }));

      setResults(domains);
    } catch (err: any) {
      console.error("Search error:", err);
      toast({
        title: "Search failed",
        description: err.message || "Could not search domains. Please try again.",
        variant: "destructive",
      });
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleContactToPurchase = (domain: string) => {
    window.location.href = `/contact?subject=Domain Purchase: ${encodeURIComponent(domain)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Globe className="w-4 h-4" />
            Domain Registration & Reselling
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Find Your Perfect Domain
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Search from hundreds of TLDs and register your dream domain. Powered by Name.com — one of the world's most trusted registrars.
          </p>

          {/* Search */}
          <div className="flex gap-3 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search domain names..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && searchDomains()}
                className="pl-12 h-14 text-lg rounded-full"
              />
            </div>
            <Button
              onClick={searchDomains}
              disabled={loading || !keyword.trim()}
              className="h-14 px-8 rounded-full text-base font-semibold"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Search"}
            </Button>
          </div>

          {/* Popular TLDs */}
          <div className="flex flex-wrap justify-center gap-2">
            {popularTlds.map((tld) => (
              <button
                key={tld}
                onClick={() => { setKeyword(keyword.split(".")[0] + tld); }}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
              >
                {tld}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      {searched && (
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground mb-6">
              {results.length} result{results.length !== 1 ? "s" : ""} found
            </p>

            {loading ? (
              <div className="text-center py-20">
                <Loader2 className="w-10 h-10 animate-spin mx-auto text-primary" />
                <p className="mt-4 text-muted-foreground">Searching available domains...</p>
              </div>
            ) : results.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <Globe className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg font-medium">No results found</p>
                <p className="text-sm mt-1">Try a different keyword or TLD.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {results.map((domain) => (
                  <div
                    key={domain.domainName}
                    className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${
                      domain.purchasable
                        ? "bg-card hover:bg-muted/60 hover:shadow-md border-border"
                        : "bg-muted/30 border-border/50 opacity-60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${domain.purchasable ? "bg-emerald-500" : "bg-destructive"}`} />
                      <div>
                        <p className="font-semibold text-lg">{domain.domainName}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {domain.purchasable ? (
                            <Badge variant="secondary" className="text-xs bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                              Available
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs">Taken</Badge>
                          )}
                          {domain.premium && (
                            <Badge variant="secondary" className="text-xs bg-amber-500/10 text-amber-600 border-amber-500/20">
                              Premium
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {domain.purchasePrice && (
                        <div className="text-right">
                          <p className="font-bold text-lg">${domain.purchasePrice.toFixed(2)}</p>
                          {domain.renewalPrice && (
                            <p className="text-xs text-muted-foreground">${domain.renewalPrice.toFixed(2)}/yr renewal</p>
                          )}
                        </div>
                      )}
                      {domain.purchasable && (
                        <Button
                          onClick={() => handleContactToPurchase(domain.domainName)}
                          className="rounded-full gap-2"
                        >
                          Get it <ArrowRight className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features */}
      {!searched && (
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "500+ TLDs", desc: "From .com to .ai — we have every extension you need." },
              { icon: ShieldCheck, title: "WHOIS Privacy", desc: "Free privacy protection to keep your personal info safe." },
              { icon: Clock, title: "Instant Setup", desc: "Your domain is live within minutes of registration." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-card border border-border text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Domains;
