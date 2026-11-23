import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
}

export function CustomSelect({ options, value, onChange, placeholder, label }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      {label && (
        <label className="block text-white/70 mb-2 text-sm">{label}</label>
      )}
      
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-xl glass text-left flex items-center justify-between group hover:bg-white/5 transition-all border border-white/5 hover:border-teal-400/30 focus:outline-none focus:ring-2 focus:ring-teal-400"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <span className={selectedOption ? "text-white" : "text-white/50"}>
          {selectedOption ? selectedOption.label : placeholder || "Select an option"}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} className="text-white/60 group-hover:text-teal-400 transition-colors" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute left-0 right-0 mt-2 gradient-border rounded-2xl overflow-hidden z-50 shadow-2xl max-h-[300px] overflow-y-auto custom-scrollbar"
          >
            <div className="bg-[#0a0a0a]/95 backdrop-blur-2xl">
              {options.map((option, index) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className={`w-full px-5 py-4 text-left flex items-center justify-between transition-all relative group ${
                    value === option.value 
                      ? "bg-gradient-to-r from-teal-400/20 to-transparent" 
                      : "hover:bg-white/5"
                  }`}
                >
                  {/* Active indicator */}
                  {value === option.value && (
                    <motion.div
                      layoutId="activeOption"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-white rounded-r-full"
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    />
                  )}

                  <span className="text-white group-hover:text-teal-400 transition-colors">
                    {option.label}
                  </span>

                  {/* Check mark */}
                  {value === option.value && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="icon-frosted rounded-lg w-6 h-6 flex items-center justify-center"
                    >
                      <Check size={12} className="text-teal-400" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Bottom decoration */}
            <div className="bg-gradient-to-r from-teal-400/10 via-white/5 to-teal-400/10 px-5 py-2.5 border-t border-white/5">
              <div className="flex items-center justify-center gap-2">
                <div className="w-1 h-1 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-white/40 text-xs">{options.length} options</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
