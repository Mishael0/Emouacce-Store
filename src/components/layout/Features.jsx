import { features } from "../../data/feature";

function Features() {
  return (
     <section className="py-10 px-6 bg-white">
      
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {features.map((feature) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-gray-50"
              >
                
                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
