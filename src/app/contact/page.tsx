import ContactForm from '@/components/contact/ContactForm';

export default async function ContactRoute() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-6 py-6 sm:p-6">
      <ContactForm />
    </main>
  );
}
