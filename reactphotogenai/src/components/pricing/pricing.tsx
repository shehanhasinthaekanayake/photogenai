
const pricingPlans = [
  {
    title: 'Basic Plan (Starter)',
    price: '$9.99/month',
    features: [
      'Automatic room layout suggestions',
      'Furniture placement optimization',
      'Space utilization analysis',
    ],
  },
  {
    title: 'Standard Plan',
    price: '$19.99/month',
    features: [
      'All Basic Plan features',
      'Theme-based design recommendations',
      'Customizable style presets',
      'Room color palette suggestions',
    ],
  },
  {
    title: 'Premium Plan',
    price: '$39.99/month',
    features: [
      'All Standard Plan features',
      'AI-driven decor matching',
      'Accessibility and ergonomic design tips',
      'Lighting arrangement recommendations',
    ],
  },
  {
    title: 'Elite Plan (Custom Solution)',
    price: '$59.99/month',
    features: [
      'All Premium Plan features',
      'Personalized design preferences tracking',
      'Custom enterprise pricing available based on requirements',
    ],
  },
];

export const Pricing = () => {
  return (
    <div className="flex flex-wrap bg-[#121212] max-h-fit justify-center">
      {pricingPlans.map((plan) => (
        <div className="bg-gray-800 text-white rounded-lg flex flex-col h-auto shadow-lg p-6 m-4 w-80">
          <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
          <p className="text-lg font-semibold mb-4">{plan.price}</p>
          <h3 className="font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside space-y-1 mb-4 h-full">
            {plan.features.map((feature) => (
              <li>{feature}</li>
            ))}
          </ul>
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold hover:from-orange-500 hover:to-orange-700 transition duration-300 rounded-lg px-4 py-2 w-full">
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}; 