const bottomLinks = [
  { name: 'Accessibility', href: '#' },
  { name: 'Privacy', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
];

const socialMediaIcons: {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/Cavanagh-Woodcrafts-100057282949202',
    icon: props => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ height: '30px', width: '30px' }}
        {...props}
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/cavanagh.woodcrafts/',
    icon: props => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ height: '30px', width: '30px' }}
        {...props}
      >
        {' '}
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@jules.cavanagh',
    icon: props => (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ height: '28px', width: '28px' }}
        {...props}
      >
        {' '}
        <path d="M22.465,9.866c-2.139,0-4.122-0.684-5.74-1.846v8.385c0,4.188-3.407,7.594-7.594,7.594c-1.618,0-3.119-0.51-4.352-1.376  c-1.958-1.375-3.242-3.649-3.242-6.218c0-4.188,3.407-7.595,7.595-7.595c0.348,0,0.688,0.029,1.023,0.074v0.977v3.235  c-0.324-0.101-0.666-0.16-1.023-0.16c-1.912,0-3.468,1.556-3.468,3.469c0,1.332,0.756,2.489,1.86,3.07  c0.481,0.253,1.028,0.398,1.609,0.398c1.868,0,3.392-1.486,3.462-3.338L12.598,0h4.126c0,0.358,0.035,0.707,0.097,1.047  c0.291,1.572,1.224,2.921,2.517,3.764c0.9,0.587,1.974,0.93,3.126,0.93V9.866z" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="px-6 py-6 sm:p-6">
      <div className="md:flex md:items-center md:justify-between">
        {/* Copywrite */}
        <div className="md:order-0 mt-8 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Crafts by Jules. All rights
            reserved.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="md:order-0 flex justify-center space-x-6">
          {socialMediaIcons.map(item => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>

        {/* Accessibility - Privacy - Terms */}
        <div className="flex space-x-8 pl-6">
          {bottomLinks.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-gray-500 hover:text-gray-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
