const PricingCard = ({ plan }) => {
  return (
    <div
      className={`rounded-xl p-6 text-left transition-all duration-300
      ${
        plan.popular
          ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white scale-105 shadow-xl"
          : "bg-white border border-gray-200 shadow-sm"
      }`}
    >
      {/* Badge */}
      {plan.popular && (
        <div className="text-center mb-2">
          <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
            Most Popular
          </span>
        </div>
      )}

      {/* Title */}
      <h2 className="text-lg font-semibold">{plan.name}</h2>
      <p className="text-xs text-gray-500 mb-4">
        {plan.description}
      </p>

      {/* Price */}
      <h1 className="text-3xl font-bold mb-4">
        {plan.price}
      </h1>

      {/* Features */}
      <ul className="space-y-2 mb-6 text-sm">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span>✔</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        className={`w-full py-2 rounded-full font-medium transition
        ${
          plan.popular
            ? "bg-white text-purple-600 hover:bg-gray-200"
            : "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;