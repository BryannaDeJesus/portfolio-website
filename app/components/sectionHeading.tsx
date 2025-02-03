type SectionHeadingProps = {
  heading: string;
};

const SectionHeading = ({ heading }: SectionHeadingProps) => {
  return (
    <h2 className='text-2xl font-medium capitalize mt-8 mb-8'>{heading}</h2>
  );
};

export default SectionHeading;
