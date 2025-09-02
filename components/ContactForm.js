"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mwpnqrrn");
  
  if (state.succeeded) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2">Thank You!</h3>
        <p className="text-green-700">
          Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
            />
            <ValidationError 
              prefix="First Name" 
              field="firstName"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
            />
            <ValidationError 
              prefix="Last Name" 
              field="lastName"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
            />
            <ValidationError 
              prefix="Phone" 
              field="phone"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
        </div>

                 {/* Project Information */}
         <div>
           <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
             Service Needed *
           </label>
           <select
             id="service"
             name="service"
             required
             className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
           >
             <option value="">Select a service...</option>
             <option value="concrete">Concrete Services</option>
             <option value="stone-pavers">Stone & Pavers</option>
             <option value="decks">Deck Construction</option>
             <option value="landscape-sod">Landscape & Sod</option>
             <option value="other">Other</option>
           </select>
           <ValidationError 
             prefix="Service" 
             field="service"
             errors={state.errors}
             className="text-red-500 text-sm mt-1"
           />
         </div>

        {/* Project Details */}
        <div>
          <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
            Project Details *
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            rows="4"
            required
            placeholder="Please describe your project in detail. Include dimensions, materials preferences, and any specific requirements..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
          ></textarea>
          <ValidationError 
            prefix="Project Details" 
            field="projectDetails"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        

        {/* Property Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
            Property Address
          </label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="Street address, city, province"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
          />
        </div>

        

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={state.submitting}
          className="w-full bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {state.submitting ? 'Sending...' : 'Request Quote'}
        </button>

        {/* General Validation Errors */}
        {state.errors && state.errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700 text-sm">
              Please check the form and try again.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
