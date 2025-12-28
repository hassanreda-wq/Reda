import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكراً لتواصلك معنا! سيتم الرد عليك في أقرب وقت.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-stone-800 mb-4">تواصل معنا</h1>
        <p className="text-stone-500 max-w-2xl mx-auto">
          لديكم استفسار أو اقتراح؟ نسعد دائماً بسماع آرائكم وخدمتكم.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-stone-900 text-stone-300 p-8 rounded-2xl shadow-lg h-full">
            <h3 className="text-2xl font-bold text-white mb-6">معلومات الاتصال</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-600 p-3 rounded-lg text-white shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">العنوان</h4>
                  <p className="text-stone-400 mt-1">المنصورة - بلقاس</p>
                  <p className="text-stone-400">بجوار المحكمة</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-600 p-3 rounded-lg text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">الهاتف</h4>
                  <p className="text-stone-400 mt-1" dir="ltr">+20 106 431 5604</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-600 p-3 rounded-lg text-white shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">البريد الإلكتروني</h4>
                  <p className="text-stone-400 mt-1 break-all">reda2hassan55@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-amber-600 p-3 rounded-lg text-white shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">مواعيد العمل</h4>
                  <p className="text-stone-400 mt-1">يومياً من 9 صباحاً حتى 12 منتصف الليل</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-stone-100 h-full">
            <h3 className="text-2xl font-bold text-stone-800 mb-6">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">الاسم بالكامل</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:border-amber-500 focus:ring-0 transition outline-none"
                    placeholder="اسمك الكريم"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:border-amber-500 focus:ring-0 transition outline-none"
                    placeholder="example@mail.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">الرسالة</label>
                <textarea 
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:bg-white focus:border-amber-500 focus:ring-0 transition outline-none resize-none"
                  placeholder="كيف يمكننا مساعدتك؟"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
              >
                <Send size={20} />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;