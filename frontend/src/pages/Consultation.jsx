import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';

export const Consultation = () => {
  const { userProfile, consultationBookings, addBooking } = useApp();

  const [selectedPlan, setSelectedPlan] = useState('Personalized');
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Ananya Sharma - Clinical Dietitian');
  const [selectedDate, setSelectedDate] = useState('2026-09-24');
  const [selectedTime, setSelectedTime] = useState('11:30 AM');
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const plans = [
    {
      id: 'Basic',
      price: 299,
      duration: '15 mins',
      desc: 'A quick check-in for general guidance and staple grain swap.',
      features: [
        '15-minute video call',
        'General grain advice',
        'Digital recipe card PDF'
      ],
      highlight: false
    },
    {
      id: 'Personalized',
      price: 599,
      duration: '45 mins',
      desc: 'Tailored millet plan for your specific metabolic & lifestyle goals.',
      features: [
        '45-minute 1-on-1 consultation',
        'Custom 7-day millet diet plan',
        'Macro & Micronutrient breakdown',
        '1-week follow up via chat'
      ],
      highlight: true
    },
    {
      id: 'Complete',
      price: 999,
      duration: '60 mins',
      desc: 'Comprehensive sustainable health and dietary overhaul.',
      features: [
        '60-minute deep dive session',
        'Full 30-day nutrition strategy',
        'Biomarker alignment guide',
        '1-month direct dietitian support'
      ],
      highlight: false
    }
  ];

  const timeSlots = ['09:30 AM', '10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '06:00 PM'];

  const currentPlanObj = plans.find(p => p.id === selectedPlan) || plans[1];
  const gst = Math.round(currentPlanObj.price * 0.05); // 5% health GST
  const totalAmount = currentPlanObj.price + gst;

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    const newBooking = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      plan: selectedPlan,
      price: totalAmount,
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      paymentMethod,
      status: 'Confirmed',
      bookedAt: 'Just now'
    };

    addBooking(newBooking);
    setConfirmedBooking(newBooking);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-12 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <section className="text-center space-y-3 pt-2 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full inline-block">
          Certified Clinical Nutritionists
        </span>
        <h1 className="font-montserrat font-bold text-3xl sm:text-4xl text-on-surface">
          Book a Personalized Consultation
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          Get scientific, non-judgmental guidance tailored to your health biomarkers, culinary schedule, and regional traditions.
        </p>
      </section>

      {/* Plan Selection Cards */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="font-montserrat font-bold text-xl text-on-surface">Choose Your Consultation Plan</h2>
          <p className="text-xs text-outline mt-0.5">Transparent pricing with no hidden follow-up charges</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`rounded-[28px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-primary-container text-on-primary-container shadow-2xl scale-[1.02] border-2 border-primary-fixed ring-4 ring-primary/20'
                    : 'bg-surface-container-lowest text-on-surface border border-outline-variant/30 shadow-sage hover:-translate-y-1'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary-container text-on-secondary-container text-[11px] font-bold px-3.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-montserrat font-bold text-xl">{plan.id}</h3>
                    <span className="text-xs font-semibold opacity-80">{plan.duration}</span>
                  </div>
                  <p className="text-xs opacity-80 mb-5 leading-relaxed">{plan.desc}</p>
                  
                  <div className="font-montserrat font-bold text-3xl mb-6">
                    ₹{plan.price}
                    <span className="text-xs font-normal opacity-70 ml-1">/ session</span>
                  </div>

                  <ul className="space-y-2.5 text-xs mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className={`material-symbols-outlined text-base ${isSelected ? 'text-on-primary-container' : 'text-primary'}`}>
                          check_circle
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 rounded-full text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-surface-container-lowest text-primary shadow-md hover:bg-surface'
                      : 'border-2 border-primary text-primary hover:bg-primary/5'
                  }`}
                >
                  {isSelected ? "Selected ✓" : `Select ${plan.id}`}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Appointment Details & Payment Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form Details (7 cols) */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 shadow-sage border border-outline-variant/30 space-y-6">
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="material-symbols-outlined text-2xl">event_available</span>
            <h2 className="font-montserrat text-lg sm:text-xl">Appointment Details</h2>
          </div>

          <form onSubmit={handleConfirmBooking} className="space-y-5">
            {/* Nutritionist Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                Select Nutritionist Specialist
              </label>
              <div className="relative">
                <select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3.5 text-sm text-on-surface focus:outline-none focus:border-primary appearance-none cursor-pointer"
                >
                  <option value="Dr. Ananya Sharma - Clinical Dietitian">Dr. Ananya Sharma - Clinical Millet Dietitian (9 yrs exp)</option>
                  <option value="Dr. Rohan Patel - Holistic Nutrition">Dr. Rohan Patel - Holistic Metabolism & Gut Health (12 yrs exp)</option>
                  <option value="Dr. Meera Reddy - Maternal & Pediatric">Dr. Meera Reddy - Pediatric & Maternal Ancient Nutrition (7 yrs exp)</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                min="2026-09-15"
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3.5 text-sm text-on-surface focus:outline-none focus:border-primary cursor-pointer"
              />
            </div>

            {/* Time Slot Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                Select Preferred Time (IST)
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-semibold border transition-all ${
                      selectedTime === time
                        ? 'bg-primary-container text-on-primary-container border-primary shadow-sm font-bold'
                        : 'bg-surface-container-low border-outline-variant/30 text-on-surface-variant hover:border-primary'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Patient Details Prefill */}
            <div className="pt-2 border-t border-outline-variant/20 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-outline">Booking for:</span>
                <span className="font-bold text-on-surface">{userProfile.name} ({userProfile.age}y, {userProfile.gender})</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-outline">Health Goals:</span>
                <span className="font-bold text-primary">{userProfile.healthGoals.join(', ')}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-primary hover:bg-surface-tint text-on-primary font-bold text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2 mt-4"
            >
              <span>Confirm & Proceed to Payment (₹{totalAmount})</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </form>
        </div>

        {/* Right Column: Order Summary & Payment Method (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-surface-container-lowest rounded-[28px] p-6 sm:p-8 shadow-sage border border-outline-variant/30 space-y-5">
            <h3 className="font-montserrat font-bold text-lg text-on-surface">Payment Summary</h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between text-on-surface-variant">
                <span>{selectedPlan} Consultation</span>
                <span className="font-semibold text-on-surface">₹{currentPlanObj.price}.00</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Health Service GST (5%)</span>
                <span className="font-semibold text-on-surface">₹{gst}.00</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>Diet Chart & Recipe Guide</span>
                <span className="text-primary font-semibold">FREE (₹499 waived)</span>
              </div>

              <hr className="border-outline-variant/30 my-2" />

              <div className="flex justify-between text-base font-bold text-on-surface">
                <span>Total Payable</span>
                <span className="text-primary text-xl">₹{totalAmount}.00</span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="pt-2 space-y-3">
              <label className="text-xs font-bold text-outline uppercase tracking-wider block">
                Payment Method
              </label>
              <div className="space-y-2">
                {[
                  { id: 'UPI', label: 'UPI (GPay / PhonePe / Paytm)', icon: 'account_balance_wallet' },
                  { id: 'Card', label: 'Credit / Debit Card', icon: 'credit_card' },
                  { id: 'NetBanking', label: 'Net Banking (All Indian Banks)', icon: 'account_balance' }
                ].map((pm) => (
                  <div
                    key={pm.id}
                    onClick={() => setPaymentMethod(pm.id)}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      paymentMethod === pm.id
                        ? 'bg-primary/10 border-primary text-primary'
                        : 'bg-surface-container-low border-outline-variant/30 text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 text-xs font-semibold">
                      <span className="material-symbols-outlined text-base">{pm.icon}</span>
                      <span>{pm.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-sm">
                      {paymentMethod === pm.id ? 'radio_button_checked' : 'radio_button_unchecked'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-primary/5 rounded-xl border border-primary/15 flex items-center gap-2 text-[11px] text-on-surface-variant">
              <span className="material-symbols-outlined text-primary text-base">lock</span>
              <span>256-bit encrypted checkout with 100% money-back satisfaction guarantee.</span>
            </div>
          </div>

          {/* Past / Active Appointments */}
          {consultationBookings.length > 0 && (
            <div className="bg-surface-container-lowest rounded-[28px] p-6 shadow-sage border border-outline-variant/30 space-y-4">
              <h3 className="font-montserrat font-bold text-base text-on-surface">Your Booked Sessions</h3>
              <div className="space-y-3">
                {consultationBookings.map((b) => (
                  <div key={b.id} className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 text-xs space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary">{b.plan} Consultation</span>
                      <span className="text-[10px] bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded-full">{b.status}</span>
                    </div>
                    <p className="text-on-surface font-medium">{b.doctor}</p>
                    <p className="text-outline">{b.date} at {b.time} • ₹{b.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Confirmation Modal */}
      {confirmedBooking && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-container-lowest rounded-[32px] w-full max-w-lg shadow-2xl border border-outline-variant/30 p-6 sm:p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Booking Confirmed</span>
              <h2 className="font-montserrat font-bold text-2xl text-on-surface">
                Session Scheduled! 🌱
              </h2>
              <p className="text-xs text-on-surface-variant">
                A calendar invitation and Google Meet video consultation link have been sent to your email.
              </p>
            </div>

            <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-outline">Appointment ID:</span>
                <strong className="text-on-surface">{confirmedBooking.id}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">Dietitian:</span>
                <strong className="text-on-surface">{confirmedBooking.doctor}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">Date & Time:</span>
                <strong className="text-primary">{confirmedBooking.date} at {confirmedBooking.time}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">Amount Paid:</span>
                <strong className="text-secondary">₹{confirmedBooking.price}.00 via {confirmedBooking.paymentMethod}</strong>
              </div>
            </div>

            <button
              onClick={() => setConfirmedBooking(null)}
              className="w-full py-3.5 rounded-full bg-primary text-on-primary font-bold text-xs hover:bg-surface-tint transition-all"
            >
              Done & Return to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
