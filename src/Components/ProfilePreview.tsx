type ProfilePreviewProps = {
  name: string;
};

function ProfilePreview({ name }: ProfilePreviewProps) {
  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Profile Preview</h2>

      <p className="mt-4 text-slate-300">{name || "No name provided"}</p>
    </section>
  );
}

export default ProfilePreview;
