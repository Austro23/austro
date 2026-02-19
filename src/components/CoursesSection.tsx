import { Clock, BookOpen, GraduationCap } from "lucide-react";
import { webDevCourses } from "@/data/courses";
import { Badge } from "@/components/ui/badge";

const levelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
    case "Intermediate":
      return "bg-amber-500/10 text-amber-600 border-amber-500/20";
    case "Advanced":
      return "bg-rose-500/10 text-rose-600 border-rose-500/20";
    default:
      return "";
  }
};

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16">
      <div className="text-center mb-12 animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Web Development Courses
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Structured, project-based courses to take you from beginner to
          professional web developer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {webDevCourses.map((course, index) => (
          <div
            key={course.id}
            className={`group rounded-[2rem] overflow-hidden bg-card hover:bg-muted/60 transition-all duration-300 hover:scale-[1.02] animate-slide-up stagger-${Math.min(index + 1, 6)}`}
          >
            {/* Image */}
            <div className="relative aspect-[3/2] overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${levelColor(course.level)}`}
                >
                  {course.level}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  ${course.price}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold tracking-tight leading-tight">
                {course.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {course.description}
              </p>

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

              {/* CTA */}
              <button className="w-full mt-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
