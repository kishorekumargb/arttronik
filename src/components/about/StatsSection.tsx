
import AnimatedCounter from '@/components/ui/AnimatedCounter';

const StatsSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-8 text-center">
            <AnimatedCounter end={5} suffix="+" delay={0} />
            <p className="mt-4 text-gray-700 font-medium">Years of Experience</p>
          </div>
          <div className="glass-card p-8 text-center">
            <AnimatedCounter end={500} suffix="+" delay={0.2} />
            <p className="mt-4 text-gray-700 font-medium">Clients</p>
          </div>
          <div className="glass-card p-8 text-center">
            <AnimatedCounter end={1000} suffix="+" delay={0.4} />
            <p className="mt-4 text-gray-700 font-medium">Equipment Installed</p>
          </div>
          <div className="glass-card p-8 text-center">
            <AnimatedCounter end={24} suffix="/7" delay={0.6} />
            <p className="mt-4 text-gray-700 font-medium">Technical Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
