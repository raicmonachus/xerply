'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button, Input, Select, RadioGroup, Textarea, Checkbox } from '../ui';
import type { SelectOption } from '../ui/Select/Select';
import type { RadioOption } from '../ui/RadioGroup/RadioGroup';
import { Mail, Phone, MapPin } from 'lucide-react';

const reasonOptions: SelectOption[] = [
  { value: 'demo', label: 'Request a demo' },
  { value: 'pricing', label: 'Pricing information' },
  { value: 'support', label: 'Technical support' },
  { value: 'partnership', label: 'Partnership opportunities' },
  { value: 'other', label: 'Other inquiries' }
];

const whoAreYouOptions: RadioOption[] = [
  { value: 'small-business', label: 'Small business' },
  { value: 'medium-enterprise', label: 'Medium enterprise' },
  { value: 'startup', label: 'Startup founder' },
  { value: 'it-manager', label: 'IT manager' },
  { value: 'consultant', label: 'Consultant' },
  { value: 'other', label: 'Other' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: '',
    whoAreYou: '',
    message: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí iría la lógica de envío del formulario
  };

  return (
    <div className="self-stretch h-auto min-h-screen relative overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background decorative element */}
      <div className="w-[801.29px] h-[801.29px] left-[83.30px] top-[-360.29px] absolute origin-top-left rotate-[-15deg] bg-cyan-50 rounded-[236.46px]" />
      <div className='h-full flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-16 z-10 relative'>
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-12 md:gap-16 lg:gap-20 py-32">
          <div className="w-full max-w-[974.90px] flex flex-col justify-start items-center gap-6 md:gap-8">
            <div className="flex flex-col justify-start items-center gap-4 md:gap-6">
              <div className="w-full text-center justify-start">
                <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">Connect with </span>
                <span className="text-neutral-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-inter leading-tight sm:leading-snug md:leading-[72px] lg:leading-[88px]">Xerply</span>
              </div>
              <div className="self-stretch text-center justify-start text-neutral-800 text-base md:text-lg font-normal font-source-sans-pro leading-6 md:leading-7">
                Reach out and transform your business with intelligent ERP solutions that drive growth and efficiency
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
      { /* Section - Contact Information */}
      <div className="self-stretch px-16 py-28 flex flex-col justify-start items-center gap-20 overflow-hidden">
        <div className="w-full max-w-[1280px] flex flex-col justify-start items-start gap-20">
          <div className="self-stretch flex justify-start items-start gap-20">
            <div className="flex-1 flex flex-col justify-start items-start gap-8">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center">
                  <div className="text-center justify-start text-neutral-800 text-base font-semibold font-source-sans-pro leading-normal">Talk</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-neutral-800 text-5xl font-medium font-inter leading-[58px]">Contact us</div>
                  <div className="self-stretch justify-start text-neutral-800 text-lg font-normal font-source-sans-pro leading-7">Let us help you streamline your business operations</div>
                </div>
              </div>
              <div className="py-2 flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-start gap-4">
                  <Mail className="w-6 h-6 text-neutral-800" />
                  <div className="justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">support@xerply.com</div>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <Phone className="w-6 h-6 text-neutral-800" />
                  <div className="justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">+54 11 4567 8901</div>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <MapPin className="w-6 h-6 text-neutral-800" />
                  <div className="justify-start text-neutral-800 text-base font-normal font-source-sans-pro leading-normal">Tampa, USA</div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex justify-start items-start gap-6">
                <Input
                  label="First name"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="John"
                  fullWidth
                  required
                />
                <Input
                  label="Last name"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Doe"
                  fullWidth
                  required
                />
              </div>

              <div className="self-stretch flex justify-start items-start gap-6">
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  fullWidth
                  required
                />
                <Input
                  label="Phone number"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  fullWidth
                />
              </div>

              <Select
                label="Reason for contact"
                options={reasonOptions}
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                placeholder="Select one"
                required
              />

              <RadioGroup
                label="Who are you"
                name="whoAreYou"
                options={whoAreYouOptions}
                value={formData.whoAreYou}
                onChange={(value) => setFormData({ ...formData, whoAreYou: value })}
                columns={2}
              />

              <Textarea
                label="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us your needs"
                rows={7}
                required
              />

              <Checkbox
                label="I accept the terms"
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                required
              />

              <Button
                variant="filled"
                size="lg"
                type="submit"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
      { /* Section - CTA */}
      <div className="w-full self-stretch flex flex-col justify-start items-center relative">
        <div className="w-[1255.49px] h-[1255.49px] -left-[1000px] top-[700px] absolute origin-top-left rotate-[-57.78deg] bg-primary-50 rounded-[236.46px]" />
        <div className="self-stretch px-14 py-28 flex flex-col justify-start items-center gap-20 z-10">
          <div className="w-full max-w-[1280px] flex flex-col justify-start items-center gap-20">
            <div className="w-full max-w-[768px] flex flex-col justify-start items-center gap-8">
              <div className="self-stretch flex flex-col justify-start items-center gap-6">
                <div className="self-stretch text-center justify-start text-Color-Scheme-1-Text text-5xl font-medium font-inter leading-[58px]">Ready to transform your business?</div>
                <div className="self-stretch text-center justify-start text-Color-Scheme-1-Text text-lg font-normal font-source-sans-pro leading-7">Experience the power of autonomous AI-driven ERP with a personalized demonstration tailored to your business needs.</div>
              </div>
              <div className="flex justify-start items-start gap-4">
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
        <Image
          alt="Decorative Element"
          src="/assets/images/confident-image.png"
          width={940}
          height={700}
          className="rounded-tl-[40px] rounded-tr-[120px] rounded-bl-[120px] rounded-br-[40px] z-10"
        />
      </div>
    </div>
  );
}
