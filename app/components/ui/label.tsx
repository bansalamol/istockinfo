const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => {
    return (
      <label htmlFor={htmlFor} className="block text-gray-700">
        {children}
      </label>
    );
  };
  
  export default Label;
  