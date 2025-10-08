
import { useState } from 'react';
import { Check, Infinity } from 'lucide-react';
import Button from '../Button';

interface PlanHeader {
  name: string;
  price: string;
  description: string;
  buttonVariant: 'primary' | 'secondary';
}

interface FeatureValue {
  free: string | boolean | null;
  business: string | boolean | null;
  enterprise: string | boolean | null;
}

interface FeatureRow {
  name: string;
  values: FeatureValue;
}

interface FeatureCategory {
  title: string;
  features: FeatureRow[];
}

interface PricingComparisonTableProps {
  plans: PlanHeader[];
  categories: FeatureCategory[];
}

export default function PricingComparisonTable({ plans, categories }: PricingComparisonTableProps) {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'business' | 'enterprise'>('business');

  const renderValue = (value: string | boolean | null) => {
    if (value === true) {
      return <Check className="w-4 h-4 text-neutral-800" />;
    }
    if (value === false || value === null) {
      return null;
    }
    return <div className="text-center text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">{value}</div>;
  };

  return (
    <div className="self-stretch flex flex-col justify-start items-start">
      {/* Mobile: Plan Selector Tabs */}
      <div className="lg:hidden w-full mb-8">
        <div className="flex gap-2 mb-6">
          {plans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlan(index === 0 ? 'free' : index === 1 ? 'business' : 'enterprise')}
              className={`flex-1 px-4 py-3 rounded-lg font-inter text-sm font-semibold transition-all ${
                (index === 0 && selectedPlan === 'free') ||
                (index === 1 && selectedPlan === 'business') ||
                (index === 2 && selectedPlan === 'enterprise')
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-200 text-neutral-800'
              }`}
            >
              {plan.name}
            </button>
          ))}
        </div>

        {/* Mobile: Selected Plan Card */}
        <div className="bg-neutral-50 rounded-lg p-6 space-y-6">
          {/* Plan Header */}
          <div className="text-center space-y-2">
            <div className="text-primary-600 text-xl font-bold font-inter">{plans[selectedPlan === 'free' ? 0 : selectedPlan === 'business' ? 1 : 2].name}</div>
            <div className="text-neutral-800 text-5xl font-medium font-inter">{plans[selectedPlan === 'free' ? 0 : selectedPlan === 'business' ? 1 : 2].price}</div>
            <div className="text-neutral-800 text-sm font-normal font-source-sans-pro">{plans[selectedPlan === 'free' ? 0 : selectedPlan === 'business' ? 1 : 2].description}</div>
          </div>

          {/* Features by Category */}
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-4">
              <div className="text-neutral-800 text-lg font-medium font-inter border-b border-neutral-300 pb-2">{category.title}</div>
              <div className="space-y-3">
                {category.features.map((feature, featureIndex) => {
                  const value = feature.values[selectedPlan];
                  if (value === false || value === null) return null;
                  
                  return (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {value === true ? (
                          <Check className="w-5 h-5 text-primary-600" />
                        ) : value === 'Unlimited' ? (
                          <Infinity className="w-5 h-5 text-primary-600" />
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                            <span className="text-primary-600 text-xs font-bold">{value}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-neutral-800 text-base font-normal font-source-sans-pro leading-relaxed">{feature.name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <Button
            variant={selectedPlan === 'business' ? 'filled' : 'filled-secondary'}
            size="lg"
            className="w-full"
          >
            Get started
          </Button>
        </div>
      </div>

      {/* Desktop: Traditional Table */}
      <div className="hidden lg:block w-full">
        {/* Table Header with Plans */}
        <div className="flex justify-start items-start mb-8">
          <div className="w-96 self-stretch" />
          {plans.map((plan, index) => (
            <div key={index} className="flex-1 px-4 flex flex-col justify-start items-center gap-8">
              <div className="self-stretch flex flex-col justify-start items-center gap-4">
                <div className="self-stretch text-center text-primary-600 text-xl font-bold font-inter leading-normal">{plan.name}</div>
                <div className="self-stretch text-center">
                  <span className="text-neutral-800 text-7xl font-medium font-inter leading-[88px]">{plan.price.split('/')[0]}</span>
                  <span className="text-neutral-800 text-2xl font-medium font-inter leading-loose">/{plan.price.split('/')[1] || 'mo'}</span>
                </div>
                <div className="self-stretch text-center text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">{plan.description}</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <Button
                  variant={plan.buttonVariant === 'primary' ? 'filled' : 'filled-secondary'}
                  size="md"
                  className="w-full"
                >
                  Get started
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Categories */}
        {categories.map((category, catIndex) => (
          <div key={catIndex} className="self-stretch flex flex-col justify-start items-start">
            {/* Category Title */}
            <div className="self-stretch pt-8 flex flex-col justify-start items-start">
              <div className="w-full py-5 flex justify-start items-start">
                <div className="flex-1 text-neutral-800 text-xl font-medium font-inter leading-loose">{category.title}</div>
              </div>
            </div>

            {/* Feature Rows */}
            <div className="self-stretch flex flex-col justify-start items-start">
              {category.features.map((feature, featureIndex) => (
                <div key={featureIndex} className={`self-stretch flex justify-start items-start ${featureIndex % 2 === 0 ? 'bg-neutral-200' : ''}`}>
                  <div className={`w-96 px-6 py-4 flex justify-start items-start gap-3 ${featureIndex % 2 === 0 ? 'bg-neutral-200' : ''}`}>
                    <div className="flex-1 text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">{feature.name}</div>
                  </div>
                  <div className={`flex-1 px-6 py-4 flex justify-center items-center gap-3 ${featureIndex % 2 === 0 ? 'bg-neutral-200' : ''}`}>
                    {renderValue(feature.values.free)}
                  </div>
                  <div className={`flex-1 px-6 py-4 flex justify-center items-center gap-3 ${featureIndex % 2 === 0 ? 'bg-neutral-200' : ''}`}>
                    {renderValue(feature.values.business)}
                  </div>
                  <div className={`flex-1 px-6 py-4 flex justify-center items-center gap-3 ${featureIndex % 2 === 0 ? 'bg-neutral-200' : ''}`}>
                    {renderValue(feature.values.enterprise)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA Buttons */}
        <div className="self-stretch pt-8 flex flex-col justify-start items-start">
          <div className="self-stretch flex justify-start items-start gap-8">
            <div className="w-96 self-stretch" />
            {plans.map((plan, index) => (
              <div key={index} className="flex-1 self-stretch flex flex-col justify-start items-center gap-8 overflow-hidden">
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <Button
                    variant={plan.buttonVariant === 'primary' ? 'filled' : 'filled-secondary'}
                    size="md"
                    className="w-full"
                  >
                    Get started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
