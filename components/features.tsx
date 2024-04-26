export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h3 mb-4">Powerful Tools for Airtable</h2>
            <p className="text-xl">Enhance your Airtable with custom extensions. From automating tasks to enriching data, our toolkit is designed to increase your productivity.</p>
          </div>

          {/* Items */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start" data-aos-id-blocks>

            {/* 1st item - Automation Tool */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-500">
                {/* Icon or image representing the feature */}
              </div>
              <h4 className="text-lg mb-2">Automate Repetitive Tasks</h4>
              <p className="text-center">Streamline your workflows by automating repetitive tasks with our easy-to-use automation tools.</p>
            </div>

            {/* 2nd item - Data Enrichment */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-500">
                {/* Icon or image representing the feature */}
              </div>
              <h4 className="text-lg mb-2">Data Enrichment</h4>
              <p className="text-center">Enrich your records with data from external sources, providing more context and insights.</p>
            </div>

            {/* 3rd item - Visualization Tools */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-purple-500">
                {/* Icon or image representing the feature */}
              </div>
              <h4 className="text-lg mb-2">Advanced Visualizations</h4>
              <p className="text-center">Turn your data into compelling visual stories with advanced charting and mapping tools.</p>
            </div>

            {/* 4th item - Custom Blocks */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-red-500">
                {/* Icon or image representing the feature */}
              </div>
              <h4 className="text-lg mb-2">Custom Blocks</h4>
              <p className="text-center">Create custom blocks for your specific needs, from tracking budgets to managing projects.</p>
            </div>

            {/* 5th item - Collaboration Features */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-yellow-500">
                {/* Icon or image representing the feature */}
              </div>
              <h4 className="text-lg mb-2">Seamless Collaboration</h4>
              <p className="text-center">Enhance team collaboration with tools that make sharing and communication seamless.</p>
            </div>

            {/* 6th item - Integration Extensions */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-orange-500">
                {/* Icon or image representing the feature */}
              </div>
              <h4 className="text-lg mb-2">Integration Extensions</h4>
              <p className="text-center">Connect Airtable with other apps and services to expand your workflow capabilities.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
