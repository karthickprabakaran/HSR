

import { Shield } from 'lucide-react';

const CancellationPolicy = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
        <Shield className="w-6 h-6 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Cancellation Policy</h2>
      </div>

      {/* Policy Points */}
      <div className="space-y-4">
        <div className="flex items-start">
          <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
            1
          </span>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Cancellation Before 48 Hours
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Guests may cancel their reservation up to 48 hours (2 days) before the check-in date and receive a
              <span className="font-medium text-green-600"> 100% full refund</span> of the amount paid.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
            2
          </span>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Cancellation Within 48 Hours
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Any cancellation made within 48 hours of the scheduled check-in date will result in
              <span className="font-medium text-red-600"> 100% charge</span> of the total booking amount. No refund will be processed.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
            3
          </span>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              No Show Policy
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Failure to arrive at the property without prior cancellation notification will result in
              <span className="font-medium text-red-600"> 100% charge</span> of the total booking amount.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
            4
          </span>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Refund Processing
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All eligible refunds will be processed within 7-10 business days to the original payment method used during booking.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
            5
          </span>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Cancellation Procedure
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All cancellations must be made through official channels by contacting
              <a href="mailto:hfpoolresorto@gmail.com" className="text-blue-600 hover:underline font-medium"> hfpoolresorto@gmail.com</a> or
              <a href="tel:9384842525" className="text-blue-600 hover:underline font-medium"> 9384842525</a>.
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <span className="inline-block w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
            6
          </span>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Time Zone Reference
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              All cancellation timings are calculated based on Indian Standard Time (IST) and the property's local check-in time.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          By confirming your reservation, you acknowledge and agree to the terms outlined in this cancellation policy.
          HF Pool Resorto reserves the right to modify this policy with prior notice.
        </p>
      </div>
    </div>
  );
};

export default CancellationPolicy; 
