import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    script.async = true;
    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div>Content of the component</div>;
}

export default MyComponent;
