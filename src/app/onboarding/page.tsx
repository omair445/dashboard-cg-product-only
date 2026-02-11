'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/molecules/Button';
import { Icon } from '@/components/atoms/Icon';

export default function OnboardingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Password requirements validation
  const passwordRequirements = {
    minLength: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    numbers: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Continue with:', { email, password });
  };

  const handleSocialLogin = (provider: string) => {
    console.log('Login with:', provider);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8E7FF] via-[#F5F5FF] to-[#E1E0FF] flex flex-col">
      {/* Header */}
      <header className="w-full px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1L2 4L8 7L14 4L8 1Z" fill="white"/>
              <path d="M2 10L8 13L14 10V4L8 7L2 4V10Z" fill="white" opacity="0.7"/>
            </svg>
          </div>
          <span className="text-lg font-semibold text-t-base-blue">ClickGuard</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-t-secondary">Already have an account?</span>
          <Link href="/login" className="text-sm font-medium text-t-base-blue hover:text-primary-600 transition-colors">
            Login
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-3xl border border-card-border shadow-sm p-8">
            {/* Title */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-t-heading mb-2">Create an account</h1>
              <p className="text-sm text-t-secondary">Start with ClickGuard for free</p>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3 mb-6">
              <button
                type="button"
                onClick={() => handleSocialLogin('google')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-card-border rounded-xl text-sm font-medium text-t-base-blue bg-white hover:bg-gray-50 transition-colors"
              >
                <Icon name="brand-google" size="md" className="text-[#4285F4]" />
                Continue with Google
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin('linkedin')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-card-border rounded-xl text-sm font-medium text-t-base-blue bg-white hover:bg-gray-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Continue with LinkedIn
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin('facebook')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-card-border rounded-xl text-sm font-medium text-t-base-blue bg-white hover:bg-gray-50 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-card-border"></div>
              </div>
              <div className="relative bg-white px-4">
                <span className="text-xs text-t-secondary">Or</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleContinue} className="space-y-5">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-t-base-blue mb-2">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@company.com"
                  required
                  className="w-full px-4 py-3 border border-input-border rounded-xl text-sm text-t-base-blue placeholder:text-t-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-t-base-blue mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-3 pr-12 border border-input-border rounded-xl text-sm text-t-base-blue placeholder:text-t-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-t-secondary hover:text-t-base-blue transition-colors"
                  >
                    <Icon name={showPassword ? 'eye-off' : 'eye'} size="md" />
                  </button>
                </div>

                {/* Password Requirements */}
                {password && (
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                        passwordRequirements.minLength ? 'bg-sea-600' : 'bg-gray-200'
                      }`}>
                        {passwordRequirements.minLength && <Icon name="check" size="xs" className="text-white" />}
                      </div>
                      <span className={passwordRequirements.minLength ? 'text-t-base-blue' : 'text-t-secondary'}>
                        8 characters minimum
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                        passwordRequirements.uppercase ? 'bg-sea-600' : 'bg-gray-200'
                      }`}>
                        {passwordRequirements.uppercase && <Icon name="check" size="xs" className="text-white" />}
                      </div>
                      <span className={passwordRequirements.uppercase ? 'text-t-base-blue' : 'text-t-secondary'}>
                        uppercase letters (A-Z)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                        passwordRequirements.lowercase ? 'bg-sea-600' : 'bg-gray-200'
                      }`}>
                        {passwordRequirements.lowercase && <Icon name="check" size="xs" className="text-white" />}
                      </div>
                      <span className={passwordRequirements.lowercase ? 'text-t-base-blue' : 'text-t-secondary'}>
                        lowercase letters (a-z)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                        passwordRequirements.numbers ? 'bg-sea-600' : 'bg-gray-200'
                      }`}>
                        {passwordRequirements.numbers && <Icon name="check" size="xs" className="text-white" />}
                      </div>
                      <span className={passwordRequirements.numbers ? 'text-t-base-blue' : 'text-t-secondary'}>
                        numbers (0-9)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center ${
                        passwordRequirements.special ? 'bg-sea-600' : 'bg-gray-200'
                      }`}>
                        {passwordRequirements.special && <Icon name="check" size="xs" className="text-white" />}
                      </div>
                      <span className={passwordRequirements.special ? 'text-t-base-blue' : 'text-t-secondary'}>
                        special characters (!@#$%^&*)
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Continue Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                className="!rounded-xl !py-3 !font-medium shadow-sm"
              >
                Continue
              </Button>
            </form>

            {/* Terms and Privacy */}
            <p className="mt-6 text-xs text-center text-t-secondary">
              By continuing, you agree to our{' '}
              <Link href="/terms" className="text-primary-600 hover:text-primary-700 transition-colors">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-primary-600 hover:text-primary-700 transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
