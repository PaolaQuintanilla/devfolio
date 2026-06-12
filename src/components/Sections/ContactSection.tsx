import { useRef, useState, type FormEvent } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/useTheme";
import { containerVariants, itemVariants } from "../../utils/helper";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";

type Status = "idle" | "submitting" | "success" | "error";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
  | string
  | undefined;

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  // Returns an error message for a single field, or "" if it's valid.
  const validateField = (name: string, value: string): string => {
    const v = value.trim();
    if (name === "name") {
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Name must be at least 2 characters.";
    }
    if (name === "email") {
      if (!v) return "Please enter your email.";
      // Standard, pragmatic email shape: something@something.tld
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
        return "Please enter a valid email address.";
    }
    if (name === "message") {
      if (!v) return "Please enter a message.";
      if (v.length < 10) return "Message must be at least 10 characters.";
    }
    return "";
  };

  const validateAll = (): boolean => {
    const next = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };
    setErrors(next);
    return !next.name && !next.email && !next.message;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Once a field is showing an error, re-check it live so it clears as the user fixes it.
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  // Validate a field when the user leaves it.
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Block submission if any field is invalid; errors render inline.
    if (!validateAll()) {
      return;
    }

    if (!ACCESS_KEY) {
      setStatus("error");
      setFeedback(
        "Form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your .env."
      );
      return;
    }

    // Honeypot check — a real user never checks this hidden box; a bot might.
    const botcheck = e.currentTarget.elements.namedItem(
      "botcheck"
    ) as HTMLInputElement | null;
    if (botcheck?.checked) {
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New portfolio message from ${form.name}`,
          from_name: "Portfolio Contact Form",
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFeedback("Thanks! Your message has been sent. I'll reply soon.");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please try again later.");
    }
  };

  const fieldClasses = (field: keyof typeof errors) => {
    const base = isDarkMode
      ? "bg-gray-900/50 text-white placeholder-gray-500"
      : "bg-white/80 text-gray-900 placeholder-gray-400";
    const border = errors[field]
      ? "border-red-500 focus:border-red-500"
      : isDarkMode
      ? "border-gray-700 focus:border-blue-500"
      : "border-gray-300 focus:border-blue-500";
    return `w-full px-4 py-3 rounded-xl border outline-none transition-colors ${base} ${border}`;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background elements */}
      <div>
        <div
          className={`absolute top-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-20 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants as Variants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Get in Touch
          </motion.div>
          <motion.h2
            variants={itemVariants as Variants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Let's
            <span className="text-blue-500 font-medium"> Connect</span>
          </motion.h2>
          <motion.p
            variants={itemVariants as Variants}
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light`}
          >
            Have a project in mind or just want to say hello? Drop me a message
            and I'll get back to you as soon as I can.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants as Variants}>
              <h3 className="text-2xl font-medium mb-4">Let's talk</h3>
              <p
                className={`leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </motion.div>

            <motion.a
              variants={itemVariants as Variants}
              href={`mailto:${CONTACT_INFO.email}`}
              whileHover={{ x: 4 }}
              className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                isDarkMode
                  ? "bg-gray-900/50 hover:bg-gray-900"
                  : "bg-white/80 hover:bg-white"
              }`}
            >
              <div
                className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <Mail size={22} className="text-blue-500" />
              </div>
              <div>
                <div className="text-sm font-medium">Email</div>
                <div
                  className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                >
                  {CONTACT_INFO.email}
                </div>
              </div>
            </motion.a>

            <motion.div
              variants={itemVariants as Variants}
              className={`flex items-center gap-4 p-4 rounded-xl ${
                isDarkMode ? "bg-gray-900/50" : "bg-white/80"
              }`}
            >
              <div
                className={`p-3 rounded-lg ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <MapPin size={22} className="text-blue-500" />
              </div>
              <div>
                <div className="text-sm font-medium">Location</div>
                <div className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  {CONTACT_INFO.location}
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants as Variants}
              className="flex gap-4 pt-2"
            >
              {[
                { icon: FiGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
                {
                  icon: FiLinkedin,
                  href: SOCIAL_LINKS.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: `mailto:${CONTACT_INFO.email}`,
                  label: "Email",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-800"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            onSubmit={handleSubmit}
            noValidate
            className={`p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                : "bg-white/80 border-gray-200 backdrop-blur-sm"
            }`}
          >
            {/* Honeypot field — hidden from users, catches bots */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <motion.div variants={itemVariants as Variants} className="mb-5">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={fieldClasses("name")}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-500">
                  {errors.name}
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants as Variants} className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={fieldClasses("email")}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants as Variants} className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell me about your project..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${fieldClasses("message")} resize-none`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </motion.div>

            <motion.button
              variants={itemVariants as Variants}
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ y: status === "submitting" ? 0 : -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-colors"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Feedback message */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-sm text-green-500"
              >
                <CheckCircle size={16} />
                {feedback}
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-sm text-red-500"
              >
                <AlertCircle size={16} />
                {feedback}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
