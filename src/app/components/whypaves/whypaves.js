
export default function Whypaves(){
    return <>

   <div className="min-h-screen bg-white py-30 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Why <span className="text-pink-600">Paves Technologies</span>?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div
          className="group relative bg-cover bg-center rounded-2xl shadow-xl transition-all duration-500 hover:shadow-slate-700 hover:scale-105 h-90 overflow-hidden"
          style={{ backgroundImage: "url('/images/pexels-goumbik-653429.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 group-hover:bg-white/90 transition-all duration-700 rounded-2xl flex justify-center items-center p-6">
            <h3 className="text-2xl text-white font-bold text-center group-hover:opacity-0 transition-opacity duration-700">
              Always Ahead of the Curve
            </h3>
            <p className="absolute text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-base leading-relaxed text-center max-w-[250px]">
              Our AI-first solutions are revolutionizing the financial services landscape, empowering institutions to operate faster, smarter, and more efficiently.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="group relative bg-cover bg-center rounded-2xl shadow-xl transition-all duration-500 hover:shadow-slate-700 hover:scale-105 h-90 overflow-hidden"
          style={{ backgroundImage: "url('/images/pexels-mart-production-7709212.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 group-hover:bg-white/90 transition-all duration-700 rounded-2xl flex justify-center items-center p-6">
            <h3 className="text-2xl text-white font-bold text-center group-hover:opacity-0 transition-opacity duration-700">
              A Culture Built to Innovate
            </h3>
            <p className="absolute text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-base leading-relaxed text-center max-w-[250px]">
              The financial world thrives on trust and innovation. We've built a culture that embraces both, ensuring every solution is secure, scalable, and impactful.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="group relative bg-cover bg-center rounded-2xl shadow-xl transition-all duration-500 hover:shadow-slate-700 hover:scale-105 h-90 overflow-hidden"
          style={{ backgroundImage: "url('/images/pexels-polina-zimmerman-3746957.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 group-hover:bg-white/90 transition-all duration-700 rounded-2xl flex justify-center items-center p-6">
            <h3 className="text-2xl text-white font-bold text-center group-hover:opacity-0 transition-opacity duration-700">
              Transformative Financial Solutions
            </h3>
            <p className="absolute text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-base leading-relaxed text-center max-w-[250px]">
              From instant payments to GenAI-driven market strategies, Paves delivers next-gen financial tech that transforms industries.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="group relative bg-cover bg-center rounded-2xl shadow-xl transition-all duration-500 hover:shadow-slate-700 hover:scale-105 h-90 overflow-hidden"
          style={{ backgroundImage: "url('/images/pexels-yankrukov-8866798.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 group-hover:bg-white/90 transition-all duration-700 rounded-2xl flex justify-center items-center p-6">
            <h3 className="text-2xl text-white font-bold text-center group-hover:opacity-0 transition-opacity duration-700">
              Human-Centric AI Impact
            </h3>
            <p className="absolute text-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-base leading-relaxed text-center max-w-[250px]">
              Paves builds AI that augments human decisions, enhances user experiences, and deepens client relationships.
            </p>
          </div>
        </div>

      </div>
    </div>

  





    </>
}