type UnauthorizedMessageProps = {
  handleRedirect: () => void;
};

/**
 * The UnauthorizedMessage component is used to display an unauthorized access
 * message to users who do not have permission to access the system.
 *
 * @param {UnauthorizedMessageProps} props - The component props.
 * @returns {JSX.Element} The JSX element representing the UnauthorizedMessage component.
 */
const UnauthorizedMessage = ({ handleRedirect }: UnauthorizedMessageProps) => (
  <div className="flex flex-col justify-center items-center h-screen text-red-600 text-center">
    <h1 className="text-5xl mb-5">Unauthorized Access</h1>
    <p className="mb-5">You do not have permission to access this system.</p>
    <button
      onClick={handleRedirect}
      className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500 focus:outline-none"
    >
      Back
    </button>
  </div>
);

export default UnauthorizedMessage;
