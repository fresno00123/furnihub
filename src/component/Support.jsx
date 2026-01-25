import { Mail, Phone, MessageCircle } from "lucide-react";

const Support = () => {
  return (
    <>
    <section className="w-full py-8 sm:py-10 md:py-14 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl px-4 sm:px-6 md:px-8">

        {/* TITLE */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#272343]">
            Customer Support
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-[#636270]">
            We’re here to help you with any questions or issues
          </p>
        </div>

        {/* SUPPORT OPTIONS */}
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-4
          sm:gap-6
          md:gap-8
        ">

          {/* EMAIL */}
          <div className="bg-white rounded-md sm:rounded-lg p-4 sm:p-5 md:p-6 shadow-sm text-center">
            <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#007580] text-white">
              <Mail size={18} className="sm:hidden" />
              <Mail size={22} className="hidden sm:block" />
            </div>

            <h4 className="text-sm sm:text-base md:text-lg font-medium text-[#272343] mb-1">
              Email Support
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-[#636270]">
              support@furniture.com
            </p>
          </div>

          {/* PHONE */}
          <div className="bg-white rounded-md sm:rounded-lg p-4 sm:p-5 md:p-6 shadow-sm text-center">
            <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#007580] text-white">
              <Phone size={18} className="sm:hidden" />
              <Phone size={22} className="hidden sm:block" />
            </div>

            <h4 className="text-sm sm:text-base md:text-lg font-medium text-[#272343] mb-1">
              Phone Support
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-[#636270]">
              +234 814 130 1153
            </p>
          </div>

          {/* LIVE CHAT */}
          <div className="bg-white rounded-md sm:rounded-lg p-4 sm:p-5 md:p-6 shadow-sm text-center">
            <div className="mx-auto mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#007580] text-white">
              <MessageCircle size={18} className="sm:hidden" />
              <MessageCircle size={22} className="hidden sm:block" />
            </div>

            <h4 className="text-sm sm:text-base md:text-lg font-medium text-[#272343] mb-1">
              Live Chat
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-[#636270]">
              Chat with us 9am – 6pm
            </p>
          </div>

        </div>
      </div>
    </section>
    <section className="w-full py-10 md:py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#272343] mb-6">
          Terms & Conditions
        </h1>

        <p className="text-sm md:text-base text-[#636270] mb-8">
          Welcome to our website. By accessing or using our services, you agree
          to be bound by the following terms and conditions.
        </p>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            1. Use of Our Website
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            You agree to use our website only for lawful purposes and in a way
            that does not infringe the rights of others or restrict their use
            of the website.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            2. Product Information
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            We make every effort to display product descriptions and prices
            accurately. However, errors may occur, and we reserve the right to
            correct them at any time without prior notice.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            3. Orders & Payments
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            All orders are subject to availability and acceptance. Prices are
            subject to change without notice. Payment must be completed before
            orders are processed.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            4. Returns & Refunds
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            Returns and refunds are processed according to our return policy.
            Items must be returned in their original condition within the
            specified return period.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            5. User Accounts
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            6. Limitation of Liability
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            We shall not be liable for any indirect, incidental, or consequential
            damages resulting from the use or inability to use our services.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            7. Changes to Terms
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            We reserve the right to update or modify these terms at any time.
            Continued use of the website after changes means you accept the
            updated terms.
          </p>
        </div>

        {/* Section */}
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            8. Contact Us
          </h2>
          <p className="text-sm md:text-base text-[#636270]">
            If you have any questions about these Terms & Conditions, please
            contact our support team.
          </p>
        </div>

      </div>
    </section>
    <section className="w-full py-10 md:py-14 lg:py-20">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#272343] mb-6">
          Privacy Policy
        </h1>

        <p className="text-sm md:text-base text-[#636270] mb-8">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          website and services.
        </p>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            1. Information We Collect
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            We may collect personal information such as your name, email
            address, phone number, delivery address, and payment details when
            you create an account, place an order, or contact us.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            We use your information to process orders, provide customer support,
            improve our services, communicate updates, and ensure secure
            transactions.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            3. Sharing of Information
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            We do not sell or rent your personal data. Your information may only
            be shared with trusted third-party service providers necessary to
            operate our business (such as payment processors and delivery
            services).
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            4. Cookies & Tracking
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            We use cookies and similar technologies to enhance your browsing
            experience, analyze site traffic, and personalize content. You can
            disable cookies in your browser settings if you prefer.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            5. Data Security
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or disclosure.
            However, no system is completely secure.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            6. Your Rights
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            You have the right to access, update, or delete your personal
            information. You may also opt out of marketing communications at
            any time.
          </p>
        </div>

        {/* Section */}
        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            7. Changes to This Policy
          </h2>
          <p className="text-sm md:text-base text-[#636270] leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and continued use of our services
            indicates acceptance of the updated policy.
          </p>
        </div>

        {/* Section */}
        <div className="mt-8">
          <h2 className="text-lg md:text-xl font-medium text-[#272343] mb-2">
            8. Contact Us
          </h2>
          <p className="text-sm md:text-base text-[#636270]">
            If you have any questions about this Privacy Policy, please contact
            our support team.
          </p>
        </div>

      </div>
    </section>
    </>
  );
};

export default Support;