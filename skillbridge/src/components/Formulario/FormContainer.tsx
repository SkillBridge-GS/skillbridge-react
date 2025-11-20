import type { IBaseProps } from "../../types/util";

export default function FormContainer({ children }: IBaseProps) {
  return (
<main className="min-h-[calc(100vh-10rem)] pt-20 pb-12 flex items-center justify-center transition-colors">
      
      <div className="w-full max-w-md p-8 space-y-6  bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
        {children}
      </div>
    </main>
  );
}