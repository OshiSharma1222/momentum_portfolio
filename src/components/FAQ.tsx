import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Which courses does Momentum Academy offer?",
      answer:
        "We specialize in comprehensive classroom coaching for JEE (Main & Advanced) and NEET (UG) for Class 11, 12, and dropper students. We also have a Foundation Wing for Class 8, 9, and 10 to build strong concepts early on for future competitive success.",
    },
    {
      question: "How are doubts and missed classes handled?",
      answer:
        "We follow a rigorous support system. If a student misses a class, recorded video lectures are available. For doubts, we have dedicated doubt-clearing sessions where students can interact one-on-one with faculty to resolve specific conceptual problems.",
    },
    {
      question: "What is the frequency of tests and assessments?",
      answer:
        "We believe in consistent evaluation. Students undergo Weekly Test Series (typically on Thursdays and Sundays) to track progress. We also provide Daily Practice Problems (DPPs) to ensure students are applying concepts immediately after learning them.",
    },
    {
      question: "How can I participate in your programs?",
      answer:
        "You can register for our programs through the registration form on our website. Keep an eye on our events calendar for upcoming opportunities and workshops.",
    },
    {
      question: "Do you provide mentorship?",
      answer:
        "Yes! We connect students with experienced mentors from various industries who provide guidance, insights, and support throughout your entrepreneurial journey.",
    },
    {
      question: "Are there any membership fees?",
      answer:
        "Basic membership is free for all students. Some specialized programs and workshops may have nominal fees to cover costs, but we strive to keep everything accessible.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about Momentum Academy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
