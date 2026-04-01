import { useEffect, useState } from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/pricing.json")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);

  return (
    <section className="py-20 bg-[#f8fafc] text-center">
      <h1 className="text-4xl font-bold mb-2">
        Simple, Transparent Pricing
      </h1>
      <p className="text-gray-500 mb-12 text-sm">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;