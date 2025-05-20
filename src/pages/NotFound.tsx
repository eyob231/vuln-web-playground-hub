
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AlertOctagon } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <AlertOctagon className="h-16 w-16 text-hacker-red mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4 text-hacker-red glitch">404</h1>
        <p className="text-xl text-gray-400 mb-6">Access denied or page not found</p>
        <div className="bg-black/50 p-4 rounded-md mb-6 max-w-md mx-auto">
          <pre className="text-left text-xs terminal-text">
            <span className="text-hacker-red">root@hackme:~#</span> locate {location.pathname}
            <br />
            locate: no results found
            <br />
            <span className="text-hacker-red">root@hackme:~#</span> _
          </pre>
        </div>
        <Link to="/" className="text-hacker-red hover:text-hacker-red/80 underline">
          Return to Command Center
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
