// app/components/Hero.tsx (or directly in your page file)
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Paving the Bridge Between <span className="text-pink-600">Tech & Trust</span>
          </h1>
          <p className="text-lg text-gray-600">
            At Paves Technologies, we create Smart , Scalable, and Future -ready AI/ML solutions to build trust through innovation.
          </p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-pink-700 transition duration-300">
            Get in Touch
          </button>
        </div>

        {/* Image Content */}
        <div className="flex justify-center">
          <img
            src="/images/hero.png"
            alt="Hero illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
