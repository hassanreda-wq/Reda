import React from 'react';
import { Award, Coffee, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-stone-900 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-500 mb-4">من نحن</h1>
          <p className="text-xl text-stone-300 max-w-2xl mx-auto">
            حكاية شغف بالقهوة بدأت من قلب الدقهلية لتقدم لكم المذاق الأصيل.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-stone-800">تاريخ عريق ومذاق لا ينسى</h2>
            <div className="h-1 w-20 bg-amber-600 rounded"></div>
            <p className="text-stone-600 leading-loose text-lg text-justify">
              تأسس "بن العمدة" ليكون علامة فارقة في عالم القهوة في المنصورة وبلقاس. نحن لا نقدم مجرد فنجان قهوة، بل نقدم تجربة متكاملة تبدأ من اختيار أجود حبوب البن من مزارع البرازيل وكولومبيا واليمن، مروراً بعملية التحميص الدقيقة التي نحرص فيها على إبراز النكهات الكامنة في كل حبة، وصولاً إلى طحنها وتغليفها بعناية فائقة.
            </p>
            <p className="text-stone-600 leading-loose text-lg text-justify">
              سر تميزنا يكمن في "التوليفة" الخاصة بنا، التي تجمع بين الأصالة العربية والحداثة في أساليب التحضير، لنرضي ذائقة عشاق القهوة الحقيقيين.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-amber-100 rounded-2xl transform rotate-3 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" 
              alt="تحميص القهوة" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-stone-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-800">قيمنا ومبادئنا</h2>
            <p className="text-stone-500 mt-2">لماذا يختار العملاء بن العمدة؟</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center group">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition">
                <Coffee size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">جودة فاخرة</h3>
              <p className="text-stone-500 text-sm">نستخدم حبوب بن أرابيكا وروبوستا من الدرجة الأولى فقط.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center group">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">خبرة التحميص</h3>
              <p className="text-stone-500 text-sm">سنوات من الخبرة في ضبط درجات التحميص للحصول على الطعم المثالي.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center group">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">شغف وإتقان</h3>
              <p className="text-stone-500 text-sm">نصنع كل عبوة بحب واهتمام بأدق التفاصيل لرضاكم.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-center group">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">مجتمع القهوة</h3>
              <p className="text-stone-500 text-sm">نعتز بعملائنا في المنصورة وبلقاس ونعتبرهم جزءاً من عائلتنا.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;