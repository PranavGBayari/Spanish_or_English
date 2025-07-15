
import { ReactNode } from 'react';

interface TenseCategoryProps {
  title: string;
  description: string;
  icon: string;
  children: ReactNode;
}

const TenseCategory = ({ title, description, icon, children }: TenseCategoryProps) => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">{icon}</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
};

export default TenseCategory;
