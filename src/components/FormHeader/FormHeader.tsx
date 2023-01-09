const FormHeader: React.FC<{ title: string; data: string }> = ({ title, data }) => {
  return (
    <header>
      <h1 className="text-title">{title}</h1>
      <p className="text-gray">{data}</p>
    </header>
  );
};

export default FormHeader;
