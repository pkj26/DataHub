import React, { useState } from 'react';
import {
  X,
  ShoppingCart,
  CheckCircle2,
  Lock,
  Download,
  PhoneCall,
  CreditCard,
  QrCode,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onClearCart,
}) => {
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'whatsapp'>('upi');
  const [orderComplete, setOrderComplete] = useState(false);
  const [downloadLink, setDownloadLink] = useState('');

  if (!isOpen) return null;

  const totalAmount = cart.reduce((acc, curr) => acc + curr.packageItem.price * curr.quantity, 0);

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerPhone) return;

    // Simulate link generation
    const sampleCategory = cart.length > 0 ? cart[0].packageItem.category : 'All';
    setDownloadLink(`/api/mobile-database/download-sample?category=${encodeURIComponent(sampleCategory)}`);
    setOrderComplete(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in zoom-in-95 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!orderComplete ? (
          <>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-amber-500/30">
                <Lock className="w-3 h-3" /> 256-Bit SSL Encrypted Checkout
              </div>
              <h3 className="text-2xl font-black text-white">Complete Your Data Order</h3>
              <p className="text-xs text-slate-400">
                Instant automatic dataset link will be emailed and displayed on screen upon payment.
              </p>
            </div>

            {/* Cart Items Summary */}
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2 max-h-40 overflow-y-auto">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Selected Datasets ({cart.length}):
              </p>
              {cart.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-900 last:border-0">
                  <span className="text-white font-semibold truncate max-w-[220px]">
                    {item.packageItem.title}
                  </span>
                  <span className="text-amber-400 font-mono font-bold">
                    ₹{item.packageItem.price.toLocaleString()}
                  </span>
                </div>
              ))}
              <div className="pt-2 flex items-center justify-between text-sm font-black text-white border-t border-slate-800">
                <span>Total Payable:</span>
                <span className="text-emerald-400 font-mono text-lg">₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>

            {/* Buyer Contact Form */}
            <form onSubmit={handleProcessPayment} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Your Full Name / Company</label>
                <input
                  type="text"
                  required
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">WhatsApp Mobile Number</label>
                  <input
                    type="tel"
                    required
                    value={buyerPhone}
                    onChange={(e) => setBuyerPhone(e.target.value)}
                    placeholder="+91 98210XXXXX"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-300">Email Address</label>
                  <input
                    type="email"
                    required
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Payment Option Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300">Choose Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      paymentMethod === 'upi' ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <QrCode className="w-4 h-4" />
                    <span>Instant UPI</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      paymentMethod === 'card' ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Debit/Credit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('whatsapp')}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer flex flex-col items-center gap-1 ${
                      paymentMethod === 'whatsapp' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-black py-3.5 rounded-2xl shadow-xl shadow-amber-500/20 transition-all cursor-pointer text-sm"
              >
                Pay ₹{totalAmount.toLocaleString()} & Download Dataset
              </button>
            </form>
          </>
        ) : (
          /* Order Complete View */
          <div className="text-center space-y-6 py-4 animate-in fade-in">
            <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Payment Confirmed!</h3>
              <p className="text-xs text-slate-300">
                Thank you <strong className="text-white">{buyerName}</strong>. Your mobile database package is ready for instant download.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3">
              <p className="text-xs text-emerald-400 font-mono font-bold">
                ✓ Order ID: SARV-DB-{Math.floor(100000 + Math.random() * 900000)}
              </p>
              <a
                href={downloadLink}
                download
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 text-xs shadow-lg shadow-emerald-500/20 inline-flex"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download Your Dataset Files (Excel / CSV)</span>
              </a>
            </div>

            <button
              onClick={() => {
                onClearCart();
                onClose();
                setOrderComplete(false);
              }}
              className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
            >
              Close & Return to Catalog
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
