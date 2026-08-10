import heroImage from '../assets/image.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-2 lg:pt-3 pb-4 lg:pb-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#BA66FF]/12 via-[#7C65F8]/8 to-transparent blur-[120px]" />
        <div className="absolute top-[5%] -right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#EC3F62]/12 via-[#7C65F8]/10 to-transparent blur-[130px]" />
      </div>

      <div className="relative max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-4.5 items-center">

          <div className="col-span-4 sm:col-span-6 lg:col-span-7 flex flex-col gap-1.5 sm:gap-2 lg:gap-2.5 max-w-none">
            <h1 className="font-bold text-[40px] sm:text-[48px] lg:text-[72px] leading-[1.2] sm:leading-[1.22] tracking-[-0.02em]">
              <span className="text-[#111836] block">
                Engineering the
              </span>
              <span className="text-[#BA66FF] block">
                Intelligent Enterprise
              </span>
            </h1>

            <h2 className="font-medium text-[20px] lg:text-[26px] leading-[28px] lg:leading-[31px] text-[#111836] tracking-tight">
              Secure, scalable AI solutions for measurable impact
            </h2>

            <p className="font-normal text-[14px] lg:text-[16px] leading-[22px] lg:leading-[26px] text-[#475467] mt-0.5">
              From modern data platforms and machine learning systems to AI-powered products and intelligent automation, our teams help organizations move from AI strategy to production-grade deployment faster and with confidence.
            </p>

            <div className="hidden lg:block pt-1">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[16px] font-medium text-white shadow-md hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 bg-gradient-to-r from-[#7C65F8] to-[#EC3F62] hover:from-[#7C65F8] hover:to-[#7C65F8]"
              >
                <span className="flex items-center gap-3">
                  Contact Now
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 17h15L12 9" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="col-span-4 sm:col-span-6 lg:col-span-5 relative flex flex-col justify-center lg:justify-end items-center gap-6">
            <div className="relative w-full max-w-full group">
              <img
                src={heroImage}
                alt="HashAgile Intelligent Enterprise AI Mosaic"
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>

            <div className="block lg:hidden w-full text-center pt-2">
              <a
                href="#contact"
                className="group w-full inline-flex items-center justify-center h-[54px] px-8 rounded-full text-[17px] font-medium text-white shadow-md active:scale-[0.98] transition-all duration-300 bg-gradient-to-r from-[#7C65F8] via-[#BA66FF] to-[#EC3F62]"
              >
                <span className="flex items-center gap-2.5">
                  Contact Now
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H9M17 7V15" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
