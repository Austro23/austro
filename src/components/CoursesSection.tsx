import { Clock, BookOpen, GraduationCap, Star, Users, AlertTriangle, Award } from "lucide-react";
import { allCourses, Course } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const levelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
    case "Intermediate":
      return "bg-amber-500/10 text-amber-600 border-amber-500/20";
    case "Advanced":
      return "bg-rose-500/10 text-rose-600 border-rose-500/20";
    case "Premium":
      return "bg-violet-500/10 text-violet-600 border-violet-500/20";
    default:
      return "";
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
    <span className="text-xs text-muted-foreground">({reviews.toLocaleString()} reviews)</span>
  </div>
);

const handleEnroll = (course: Course) => {
  window.open(course.whopUrl, "_blank", "noopener,noreferrer");
};

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Web Development Courses
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Structured, project-based courses trusted by <strong>20,000+</strong> students worldwide.
          Invest in yourself — the ROI is unlimited.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.map((course, index) => (
          <div
            key={course.id}
            className={`group relative rounded-[2rem] overflow-hidden bg-card hover:bg-muted/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_12px_40px_-10px_hsl(var(--glow-primary)/0.2)] animate-slide-up stagger-${Math.min(index + 1, 7)} ${
              course.level === "Premium" ? "md:col-span-2 lg:col-span-3 border-2 border-primary/30 glow-border" : ""
            }`}
          >
            {/* Badge */}
            {course.badge && (
              <div className="absolute top-0 left-0 right-0 z-10 bg-primary text-primary-foreground text-center text-xs font-bold py-1.5 tracking-wide">
                {course.badge}
              </div>
            )}

            <div className={course.level === "Premium" ? "md:flex" : ""}>
              {/* Image */}
              <div className={`relative overflow-hidden ${course.level === "Premium" ? "md:w-1/2 aspect-[3/2] md:aspect-auto" : "aspect-[3/2]"}`}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute ${course.badge ? "top-10" : "top-4"} left-4`}>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${levelColor(course.level)}`}
                  >
                    {course.level}
                  </span>
                </div>
                <div className={`absolute ${course.badge ? "top-10" : "top-4"} right-4 flex flex-col items-end gap-1`}>
                  <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    ${course.price}
                  </span>
                  <span className="text-xs line-through text-muted-foreground bg-background/80 px-2 py-0.5 rounded-full">
                    ${course.originalPrice}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 space-y-4 ${course.level === "Premium" ? "md:w-1/2 md:flex md:flex-col md:justify-center" : ""}`}>
                <h3 className={`font-bold tracking-tight leading-tight ${course.level === "Premium" ? "text-2xl md:text-3xl" : "text-xl"}`}>
                  {course.title}
                </h3>

                <StarRating rating={course.rating} reviews={course.reviews} />

                <p className={`text-sm text-muted-foreground leading-relaxed ${course.level === "Premium" ? "" : "line-clamp-3"}`}>
                  {course.description}
                </p>

                      {/* Certification */}
                      <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-2 rounded-lg">
                        <Award className="w-3.5 h-3.5 shrink-0" />
                        🎓 {course.certification}
                      </div>

                      {/* Social proof */}
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users className="w-3.5 h-3.5" />
                        <span><strong>{course.enrolled.toLocaleString()}</strong> students enrolled</span>
                      </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    {course.lessons} lessons
                  </span>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>

                {/* Urgency */}
                {course.urgency && (
                  <div className="flex items-center gap-2 text-xs font-medium text-destructive bg-destructive/10 px-3 py-2 rounded-lg">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    {course.urgency}
                  </div>
                )}

                {/* Savings */}
                <p className="text-xs font-semibold text-emerald-600">
                  💰 You save ${course.originalPrice - course.price} ({Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% off)
                </p>

                {/* CTA */}
                {course.paymentType === "both" ? (
                  <div className="space-y-2 mt-2">
                    <button
                      onClick={() => handleEnroll(course)}
                      className="w-full px-6 py-4 rounded-full font-bold text-base hover:scale-[1.03] transition-all duration-500 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-[0_0_30px_-5px_hsl(var(--glow-primary)/0.4)]"
                    >
                      <GraduationCap className="w-4 h-4" />
                      Subscribe — ${course.subscriptionPrice}/month
                    </button>
                    <button
                      onClick={() => handleEnroll(course)}
                      className="w-full px-6 py-2.5 rounded-full font-medium text-sm hover:scale-[1.03] transition-all duration-500 flex items-center justify-center gap-2 bg-muted text-foreground hover:bg-muted/80"
                    >
                      Or pay once — ${course.price}
                    </button>
                    <p className="text-center text-[10px] text-muted-foreground">
                      Secure checkout via Whop • 30-day money-back guarantee
                    </p>
                  </div>
                ) : (
                  <>
                    <button
                      onClick={() => handleEnroll(course)}
                      className={`w-full mt-2 px-6 py-3 rounded-full font-medium text-sm hover:scale-[1.03] transition-all duration-500 flex items-center justify-center gap-2 ${
                        course.level === "Premium"
                          ? "bg-gradient-to-r from-primary to-accent text-primary-foreground py-4 text-base font-bold hover:shadow-[0_0_30px_-5px_hsl(var(--glow-primary)/0.4)]"
                          : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_hsl(var(--glow-primary)/0.3)]"
                      }`}
                    >
                      <GraduationCap className="w-4 h-4" />
                      {course.level === "Premium" ? "Enroll Now — Transform Your Business" : `Enroll Now — $${course.price}`}
                    </button>
                    <p className="text-center text-[10px] text-muted-foreground">
                      Secure checkout via Whop • 30-day money-back guarantee
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
