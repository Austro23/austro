import { useState, useMemo } from "react";
import { Clock, BookOpen, GraduationCap, Star, Users, AlertTriangle, Search, SlidersHorizontal, Award } from "lucide-react";
import { allCourses, Course } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const levelColor = (level: string) => {
  switch (level) {
    case "Beginner": return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
    case "Intermediate": return "bg-amber-500/10 text-amber-600 border-amber-500/20";
    case "Advanced": return "bg-rose-500/10 text-rose-600 border-rose-500/20";
    case "Premium": return "bg-violet-500/10 text-violet-600 border-violet-500/20";
    default: return "";
  }
};

const StarRating = ({ rating, reviews }: { rating: number; reviews: number }) => (
  <div className="flex items-center gap-1.5">
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : star - 0.5 <= rating
              ? "fill-yellow-400/50 text-yellow-400"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
    <span className="text-sm font-semibold">{rating}</span>
    <span className="text-xs text-muted-foreground">({reviews.toLocaleString()})</span>
  </div>
);

const handlePayPal = (course: Course, type: "one-time" | "subscription" = "one-time") => {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "https://www.paypal.com/cgi-bin/webscr";
  form.target = "_blank";
  const fields: Record<string, string> = type === "subscription"
    ? {
        cmd: "_xclick-subscriptions",
        business: "gabaemeaobakwe@gmail.com",
        item_name: course.title + " (Monthly Subscription)",
        item_number: course.id,
        a3: (course.subscriptionPrice ?? 49).toString(),
        p3: "1",
        t3: "M",
        src: "1",
        currency_code: "USD",
        no_shipping: "1",
        return: window.location.href,
        cancel_return: window.location.href,
      }
    : {
        cmd: "_xclick",
        business: "gabaemeaobakwe@gmail.com",
        item_name: course.title,
        item_number: course.id,
        amount: course.price.toString(),
        currency_code: "USD",
        no_shipping: "1",
        return: window.location.href,
        cancel_return: window.location.href,
      };
  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

const categories = ["All", "Web Development", "Digital Marketing", "SaaS & Business", "AI & Automation", "Make Money Online"] as const;
const levels = ["All", "Beginner", "Intermediate", "Advanced", "Premium"] as const;
const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "rating", label: "Highest Rated" },
  { value: "price-low", label: "Price: Low → High" },
  { value: "price-high", label: "Price: High → Low" },
];

const Courses = () => {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    let results = allCourses.filter((c) => {
      const matchesLevel = level === "All" || c.level === level;
      const matchesCategory = category === "All" || c.category === category;
      const matchesSearch =
        !search ||
        c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase()) ||
        c.topics.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesLevel && matchesCategory && matchesSearch;
    });

    switch (sort) {
      case "rating": results.sort((a, b) => b.rating - a.rating); break;
      case "price-low": results.sort((a, b) => a.price - b.price); break;
      case "price-high": results.sort((a, b) => b.price - a.price); break;
      default: results.sort((a, b) => b.enrolled - a.enrolled);
    }
    return results;
  }, [search, level, category, sort]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-4 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            All Courses
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by <strong>20,000+</strong> students. Every course includes a <strong>recognized certification</strong> upon completion.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Award className="w-4 h-4" />
            All courses include an industry-recognized certification
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 pb-4">
        <div className="max-w-6xl mx-auto flex gap-2 flex-wrap justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                category === c
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search courses, topics…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  level === l
                    ? "bg-secondary text-secondary-foreground shadow-sm"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[180px] shrink-0">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((o) => (
                <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Results */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-muted-foreground mb-6">
            {filtered.length} course{filtered.length !== 1 ? "s" : ""} found
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">No courses match your filters</p>
              <p className="text-sm mt-1">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((course) => (
                <div
                  key={course.id}
                  className={`group relative rounded-2xl overflow-hidden bg-card hover:bg-muted/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_40px_-10px_hsl(var(--glow-primary)/0.2)] ${
                    course.level === "Premium" ? "md:col-span-2 lg:col-span-3 border-2 border-primary/30 glow-border" : ""
                  }`}
                >
                  {course.badge && (
                    <div className="absolute top-0 left-0 right-0 z-10 bg-primary text-primary-foreground text-center text-xs font-bold py-1.5 tracking-wide">
                      {course.badge}
                    </div>
                  )}

                  <div className={course.level === "Premium" ? "md:flex" : ""}>
                    <div className={`relative overflow-hidden ${course.level === "Premium" ? "md:w-1/2 aspect-[3/2] md:aspect-auto" : "aspect-[3/2]"}`}>
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                      <div className={`absolute ${course.badge ? "top-10" : "top-4"} left-4 flex flex-col gap-1.5`}>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${levelColor(course.level)}`}>{course.level}</span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-background/80 text-foreground backdrop-blur-sm">{course.category}</span>
                      </div>
                      <div className={`absolute ${course.badge ? "top-10" : "top-4"} right-4 flex flex-col items-end gap-1`}>
                        <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold">${course.price}</span>
                        <span className="text-xs line-through text-muted-foreground bg-background/80 px-2 py-0.5 rounded-full">${course.originalPrice}</span>
                      </div>
                    </div>

                    <div className={`p-6 space-y-4 ${course.level === "Premium" ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""}`}>
                      <h3 className={`font-bold tracking-tight leading-tight ${course.level === "Premium" ? "text-2xl md:text-3xl" : "text-xl"}`}>{course.title}</h3>
                      <StarRating rating={course.rating} reviews={course.reviews} />
                      <p className={`text-sm text-muted-foreground leading-relaxed ${course.level === "Premium" ? "" : "line-clamp-3"}`}>{course.description}</p>

                      {/* Certification badge */}
                      <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-2 rounded-lg">
                        <Award className="w-3.5 h-3.5 shrink-0" />
                        🎓 {course.certification}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users className="w-3.5 h-3.5" />
                        <span><strong>{course.enrolled.toLocaleString()}</strong> students enrolled</span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{course.duration}</span>
                        <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" />{course.lessons} lessons</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {course.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs font-normal">{topic}</Badge>
                        ))}
                      </div>

                      {course.urgency && (
                        <div className="flex items-center gap-2 text-xs font-medium text-destructive bg-destructive/10 px-3 py-2 rounded-lg">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0" />{course.urgency}
                        </div>
                      )}

                      <p className="text-xs font-semibold text-emerald-600">
                        💰 You save ${course.originalPrice - course.price} ({Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off)
                      </p>

                      {course.paymentType === "both" ? (
                        <div className="space-y-2 mt-2">
                          <button
                            onClick={() => handlePayPal(course, "subscription")}
                            className="w-full px-6 py-4 rounded-full font-bold text-base hover:scale-[1.03] transition-all duration-500 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_0_30px_-5px_hsl(var(--glow-primary)/0.4)]"
                          >
                            <GraduationCap className="w-4 h-4" />
                            Subscribe — ${course.subscriptionPrice}/month
                          </button>
                          <button
                            onClick={() => handlePayPal(course, "one-time")}
                            className="w-full px-6 py-2.5 rounded-full font-medium text-sm hover:scale-[1.03] transition-all duration-500 flex items-center justify-center gap-2 bg-muted text-foreground hover:bg-muted/80"
                          >
                            Or pay once — ${course.price}
                          </button>
                          <p className="text-center text-[10px] text-muted-foreground">Secure checkout via PayPal • 30-day money-back guarantee</p>
                        </div>
                      ) : (
                        <>
                          <button
                            onClick={() => handlePayPal(course)}
                            className={`w-full mt-2 px-6 py-3 rounded-full font-medium text-sm hover:scale-[1.03] transition-all duration-500 flex items-center justify-center gap-2 ${
                              course.level === "Premium"
                                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 text-base font-bold hover:shadow-[0_0_30px_-5px_hsl(var(--glow-primary)/0.4)]"
                                : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.3)]"
                            }`}
                          >
                            <GraduationCap className="w-4 h-4" />
                            {course.level === "Premium" ? "Enroll Now — Transform Your Business" : `Enroll Now — $${course.price}`}
                          </button>
                          <p className="text-center text-[10px] text-muted-foreground">Secure checkout via PayPal • 30-day money-back guarantee</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Courses;
