export const Welcome = (): JSX.Element => {
  return (
    <div className="mb-6 flex items-center gap-4">
      <img
        src="/images/wizard-avatar.png"
        alt="Wizard avatar"
        width={120}
        height={120}
        className="size-[120px] object-contain"
      />
      <h2 className="font-primary-black text-4xl text-font-danger">Welcome</h2>
    </div>
  );
};
