export default function About() {
  return (
    <div className="border-4 border-black bg-white px-4 py-2 rounded-md w-full space-y-2">
      <h2 className="font-medium text-center underline-offset-4 underline">
        Welcome to nTask v.1.0.0
      </h2>
      <p className="">
        This project is a simple project to understand the basics in react
        framework
      </p>
      <p className="italic font-medium">Library used :</p>
      <ul className="list-inside list-disc ">
        <li>
          <a
            className="text-blue-600 font-medium"
            href="https://www.npmjs.com/package/axios"
          >
            axios v.0.24.0
          </a>
        </li>
        <li>
          <a
            className="text-blue-600 font-medium"
            href="https://www.npmjs.com/package/json-server"
          >
            json-server v.0.17.0
          </a>
        </li>
        <li>
          <a
            className="text-blue-600 font-medium"
            href="https://www.npmjs.com/package/react-icons"
          >
            react-icons v.4.3.1
          </a>
        </li>
        <li>
          <a
            className="text-blue-600 font-medium"
            href="https://www.npmjs.com/package/react-toast-notifications"
          >
            react-toast-notifications v.2.5.1",
          </a>
        </li>
        <li>
          <a
            className="text-blue-600 font-medium"
            href="https://tailwindcss.com/docs/installation"
          >
            tailwind v.3.0.8
          </a>
        </li>
      </ul>
      <p>If you want to see the code you can visit the link below</p>
      <a className="font-semibold" href="#">
        https://tailwindcss.com/docs/installation
      </a>
    </div>
  );
}
