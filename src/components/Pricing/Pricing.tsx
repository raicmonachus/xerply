import React from 'react';
import { Button, ToggleSwitch, PricingComparisonTable } from '../ui';

export default function Pricing() {
  return (
    <div className="self-stretch h-auto min-h-screen relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background decorative element */}
      <div className="w-[801.29px] h-[801.29px] left-[83.30px] top-[-272.29px] absolute origin-top-left rotate-[-15deg] bg-cyan-50 rounded-[236.46px]" />
      <div className='h-full flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-16 z-10 relative'>
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 py-32">
          <div className="w-full max-w-[974.90px] flex flex-col justify-start items-center gap-6 md:gap-8">
            <div className="flex flex-col justify-start items-center gap-4 md:gap-6">
              <div className="w-full text-center justify-start">
                <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">Ready to </span>
                <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">revolutionize</span>
                <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]"> your business management?</span>
              </div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                Choose the perfect plan to unlock powerful ERP capabilities that scale with your business and transform the way you work
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-3 md:gap-4 w-full sm:w-auto">
              <Button variant="filled" size="lg" className="w-full sm:w-auto">
                Try it free
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
      { /* Section - Pricing Plans */}
      <div className="self-stretch px-16 py-28 flex flex-col justify-start items-center gap-20 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-center gap-8">
          <div className="self-stretch flex flex-col justify-start items-center gap-4">
            <div className="self-stretch flex justify-between items-center">
              <div className="text-center justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-relaxed">Perfect for small businesses getting started with intelligent ERP</div>
              <ToggleSwitch
                label="Yearly discount (20%)"
                defaultChecked={false}
                onChange={(checked) => {
                  console.log('Toggle changed:', checked);
                  // Aquí puedes agregar la lógica para cambiar entre precios mensuales y anuales
                }}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col md:flex-row justify-start items-start gap-8">
            <div className="flex-1 self-stretch p-8 bg-neutral-200 rounded-lg outline outline-1 outline-offset-[-1px] outline-black-alpha-2/20 flex flex-col justify-start items-start gap-14">
              <div className="self-stretch flex flex-col justify-start items-center gap-8">
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <div className="self-stretch text-center justify-start text-primary-600 text-xl font-bold font-inter leading-normal">Free</div>
                  <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-7xl font-medium font-inter leading-[88px]">$0</span><span className="text-neutral-800 text-2xl font-medium font-inter leading-loose">/mo</span></div>
                  <div className="self-stretch text-center justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">or $0 yearly</div>
                </div>
                <div className="self-stretch px-6 py-3 bg-primary-50 rounded-lg flex justify-center items-center">
                  <div className="justify-start text-primary-600 text-sm font-semibold font-inter leading-tight">Get started</div>
                </div>
              </div>
              <ul className="self-stretch py-2 pl-4 list-disc list-inside flex flex-col justify-start items-start gap-2">
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Basic AI-powered automation tools</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Limited data integration support</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Standard reporting capabilities</li>
              </ul>
            </div>
            <div className="flex-1 self-stretch p-8 bg-primary-50 rounded-lg shadow-[0px_16px_32px_-12px_rgba(88,92,95,0.10)] outline outline-3 outline-offset-[-3px] outline-primary-600 flex flex-col justify-start items-start gap-14">
              <div className="self-stretch flex flex-col justify-start items-center gap-8">
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <div className="self-stretch text-center justify-start text-primary-600 text-xl font-bold font-inter leading-normal">Business</div>
                  <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-7xl font-medium font-inter leading-[88px]">$29</span><span className="text-neutral-800 text-2xl font-medium font-inter leading-loose">/mo</span></div>
                  <div className="self-stretch text-center justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">or $199 yearly</div>
                </div>
                <div className="self-stretch px-6 py-3 bg-primary-600 rounded-lg flex justify-center items-center">
                  <div className="justify-start text-white-alpha-10/95 text-sm font-semibold font-inter leading-tight">Get started</div>
                </div>
              </div>
              <ul className="self-stretch py-2 pl-4 list-disc list-inside flex flex-col justify-start items-start gap-2">
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Basic AI-powered automation tools</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Limited data integration support</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Standard reporting capabilities</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Advanced machine learning capabilities</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Robust API for seamless integrations</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Customizable dashboard for analytics</li>
              </ul>
            </div>
            <div className="flex-1 self-stretch p-8 bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-black-alpha-2/20 flex flex-col justify-start items-start gap-14">
              <div className="self-stretch flex flex-col justify-start items-center gap-8">
                <div className="self-stretch flex flex-col justify-start items-center gap-2">
                  <div className="self-stretch text-center justify-start text-primary-600 text-xl font-bold font-inter leading-normal">Enterprise</div>
                  <div className="self-stretch text-center justify-start"><span className="text-neutral-800 text-7xl font-medium font-inter leading-[88px]">$49</span><span className="text-neutral-800 text-2xl font-medium font-inter leading-loose">/mo</span></div>
                  <div className="self-stretch text-center justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">or $199 yearly</div>
                </div>
                <div className="self-stretch px-6 py-3 bg-primary-50 rounded-lg flex justify-center items-center">
                  <div className="justify-start text-primary-600 text-sm font-semibold font-inter leading-tight">Get started</div>
                </div>
              </div>
              <ul className="self-stretch py-2 pl-4 list-disc list-inside flex flex-col justify-start items-start gap-2">
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Basic AI-powered automation tools</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Limited data integration support</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Standard reporting capabilities</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Advanced machine learning capabilities</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Robust API for seamless integrations</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Customizable dashboard for analytics</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Real-time collaboration features</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">User-friendly interface with drag-and-drop functionality</li>
                <li className="text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">In-depth analytics and insights generation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      { /* Section - Additional Features */}
      <div className="self-stretch px-4 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 overflow-hidden">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20">
          <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-4">
            <div className="flex justify-start items-center">
              <div className="text-center text-neutral-800 text-sm md:text-base font-semibold font-source-sans-pro leading-normal">Compare</div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-center gap-4 md:gap-6">
              <div className="self-stretch text-center"><span className="text-neutral-800 text-3xl md:text-4xl lg:text-5xl font-medium font-inter leading-tight md:leading-snug lg:leading-[58px]">Plan </span><span className="text-neutral-800 text-3xl md:text-4xl lg:text-5xl font-bold font-inter leading-tight md:leading-snug lg:leading-[58px]">features</span></div>
              <div className="self-stretch text-center text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">Detailed comparison to help you choose the right solution</div>
            </div>
          </div>
          <PricingComparisonTable
            plans={[
              {
                name: 'Free',
                price: '$0/mo',
                description: 'Entry-level intelligent ERP',
                buttonVariant: 'secondary'
              },
              {
                name: 'Business',
                price: '$29/mo',
                description: 'Mid-tier business solution',
                buttonVariant: 'primary'
              },
              {
                name: 'Enterprise',
                price: '$49/mo',
                description: 'Full-featured intelligent ERP',
                buttonVariant: 'secondary'
              }
            ]}
            categories={[
              {
                title: 'Feature comparison',
                features: [
                  { name: 'User accounts', values: { free: '3', business: '10', enterprise: 'Unlimited' } },
                  { name: 'AI automation capabilities', values: { free: true, business: true, enterprise: true } },
                  { name: 'Data integration channels', values: { free: true, business: true, enterprise: true } },
                  { name: 'Reporting complexity', values: { free: null, business: true, enterprise: true } },
                  { name: 'Support level', values: { free: null, business: null, enterprise: true } }
                ]
              },
              {
                title: 'Feature Category',
                features: [
                  { name: 'Feature text goes here', values: { free: '10', business: '25', enterprise: 'Unlimited' } },
                  { name: 'Feature text goes here', values: { free: true, business: true, enterprise: true } },
                  { name: 'Feature text goes here', values: { free: true, business: true, enterprise: true } },
                  { name: 'Feature text goes here', values: { free: null, business: true, enterprise: true } },
                  { name: 'Feature text goes here', values: { free: null, business: null, enterprise: true } }
                ]
              },
              {
                title: 'Feature Category',
                features: [
                  { name: 'Feature text goes here', values: { free: '10', business: '25', enterprise: 'Unlimited' } },
                  { name: 'Feature text goes here', values: { free: true, business: true, enterprise: true } },
                  { name: 'Feature text goes here', values: { free: true, business: true, enterprise: true } },
                  { name: 'Feature text goes here', values: { free: null, business: true, enterprise: true } },
                  { name: 'Feature text goes here', values: { free: null, business: null, enterprise: true } }
                ]
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
