type ButtonProps = {
  title: string;
  className?: string;
};

export const PrimaryButton = (buttonProps: ButtonProps) => {
  return (
    <div className={buttonProps.className}>
      <button className="bg-primary hover:bg-black hover:text-white rounded-full px-6 py-2">
        {buttonProps.title}
      </button>
    </div>
  );
};
