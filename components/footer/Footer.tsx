export const Footer = () => {
  return (
    <footer className="h-12 border-t bg-gray-800 text-gray-400 fixed bottom-0 w-screen flex justify-center items-center">
      <div className="flex justify-center items-center space-x-4">
        <h1 className="font-bold text-xl">Karolis Katauskas </h1>
        <span className="font-bold">
          Github:
          <a
            href="https://github.com/silorakk"
            className="text-red-300 underline ml-2"
          >
            Silorakk
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
