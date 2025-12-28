import React, { useState } from 'react';
import { Mail, Phone, User, CheckCircle } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 bg-stone-100">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-amber-700 to-amber-600 p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold text-white mb-2">إنشاء حساب</h2>
            <p className="text-amber-100 text-sm">انضم لعائلة بن العمدة وتمتع بأفضل العروض</p>
          </div>
        </div>
        
        {/* Form Section */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-2">تم التسجيل بنجاح!</h3>
              <p className="text-stone-500">شكراً لانضمامك إلينا.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-4">
                {/* First Name */}
                <div className="relative group">
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-600 transition-colors">
                    <User size={20} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="الاسم الأول (مثال: محمد)"
                    className="w-full pr-10 pl-4 py-3.5 bg-stone-50 border-2 border-stone-100 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-0 outline-none transition-all font-medium text-stone-700 placeholder-stone-400"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="relative group">
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-600 transition-colors">
                    <User size={20} />
                  </div>
                  <input 
                    type="text" 
                    placeholder="اسم العائلة (مثال: العمدة)"
                    className="w-full pr-10 pl-4 py-3.5 bg-stone-50 border-2 border-stone-100 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-0 outline-none transition-all font-medium text-stone-700 placeholder-stone-400"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    required
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="البريد الإلكتروني"
                    dir="ltr"
                    className="w-full pr-10 pl-4 py-3.5 bg-stone-50 border-2 border-stone-100 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-0 outline-none transition-all font-medium text-stone-700 placeholder-stone-400 text-right"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="relative group">
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-amber-600 transition-colors">
                    <Phone size={20} />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="رقم الهاتف (010xxxxxxxxx)"
                    dir="ltr"
                    className="w-full pr-10 pl-4 py-3.5 bg-stone-50 border-2 border-stone-100 rounded-xl focus:bg-white focus:border-amber-500 focus:ring-0 outline-none transition-all font-medium text-stone-700 placeholder-stone-400 text-right"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-stone-800 hover:bg-stone-900 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 mt-2"
              >
                سجل الآن
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;